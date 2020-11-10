import * as express from 'express';

export const disallowRobots = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        res.type('text/plain');
        res.send('User-agent: *\nDisallow: /');
    } catch (e) {
        next(e);
    }
};
