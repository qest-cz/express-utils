import { IHttpError } from '@qest/error-utils';
import { NextFunction, Response } from 'express';
import { IBasicAppRequest, IBasicUser, ILogger } from '../../interfaces';
export declare const errorHandler: (logger: ILogger) => (error: any, req: IBasicAppRequest<IBasicUser>, res: Response, next: NextFunction) => void;
export declare const sendErrorResponse: (error: IHttpError, res: Response, next: NextFunction) => void;
