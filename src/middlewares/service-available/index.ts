import { ServiceUnavailableError } from '@qest/error-utils';

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
