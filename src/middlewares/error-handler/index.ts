import { BaseError, IHttpError, InternalServerError, NotFoundError, UnprocessableEntityError } from '@qest/error-utils';
import { NextFunction, Response } from 'express';
import { INTERNAL_SERVER_ERROR } from 'http-codes';
import * as _ from 'lodash';
import { IBasicAppRequest, IBasicUser, ILogger } from '../../interfaces';

const NETWORK_CONNECT_TIMEOUT = 599;

export const errorHandler = (logger: ILogger) => (error: any, req: IBasicAppRequest<IBasicUser>, res: Response, next: NextFunction) => {
    let err = error;
    try {
        if (err.isJoi) {
            const payload = { details: _.get(err, 'details', []) };
            err = new UnprocessableEntityError({ err, payload, message: err.message });
        }

        err = createHandlerError(err, req);

        if (!err.isHttp) {
            logger.fatal(err);
            err = new InternalServerError({ err });
        } else {
            if (INTERNAL_SERVER_ERROR <= err.code && err.code <= NETWORK_CONNECT_TIMEOUT) {
                logger.error(err);
            } else if (err instanceof NotFoundError) {
                logger.debug(err);
            } else {
                logger.info(err);
            }
        }

        sendErrorResponse(err, res, next);
    } catch (newError) {
        logger.fatal(err);
        logger.fatal(newError);
        res.send({
            code: INTERNAL_SERVER_ERROR,
            message: newError.toString(),
            type: 'error_processing_failure',
        });
        next();
    }
};

export const sendErrorResponse = (error: IHttpError, res: Response, next: NextFunction) => {
    const payload = error.payload || {};
    payload.type = error.type;
    payload.message = error.message;

    res.status(error.code || INTERNAL_SERVER_ERROR).json(payload);
    next();
};

const createHandlerError = (err: BaseError<any>, req: IBasicAppRequest<IBasicUser>) => {
    const e = <any>err;
    const { headers, query, user, body, path, cookies, ip, url, secure } = req;
    e.user = user;
    e.req = {
        headers,
        query,
        body,
        cookies,
        ip,
        url,
        path,
        secure,
    };
    return e;
};
