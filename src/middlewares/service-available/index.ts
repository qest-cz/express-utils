import { ServiceUnavailableError } from '../../../errors/http-errors';

export const serviceUnavailable = (unavailable = false) => (req, res, next) => {
    try {
        if (unavailable) {
            const unavailableError = new ServiceUnavailableError();
            res.status(unavailableError.code).json({
                message: unavailableError.message,
            });
        }

        next();
    } catch (e) {
        next(e);
    }
};
