import * as express from 'express';
import * as httpCodes from 'http-codes';

export const noContent = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        res.status(httpCodes.NO_CONTENT).send();
    } catch (e) {
        next(e);
    }
};
