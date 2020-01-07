import { NotFoundError } from '@qest/error-utils';
import { NextFunction, Request, Response } from 'express';
import { NOT_FOUND, OK } from 'http-codes';

export const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
    if (res.statusCode === OK || res.statusCode === 404) {
        // We are out of routes, this is probably a 404 if express says 200
        res.status(NOT_FOUND);
        next(new NotFoundError());
    }
};
