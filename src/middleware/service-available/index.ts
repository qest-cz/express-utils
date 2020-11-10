import { ServiceUnavailableError } from '@qest/error-utils';
import { Handler } from 'express';

export const serviceUnavailable = (unavailable = false): Handler => (req, res, next) => {
    try {
        if (unavailable) {
            const unavailableError = new ServiceUnavailableError();
            res.status(unavailableError.code).json({
                message: unavailableError.message,
            });
        } else {
            next();
        }
    } catch (e) {
        next(e);
    }
};
