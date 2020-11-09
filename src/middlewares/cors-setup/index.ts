import { Handler } from 'express';

export const corsSetup = (originHeader: string): Handler => (
    req,
    res,
    next,
) => {
    res.set('Access-Control-Allow-Origin', originHeader);
    res.set('Access-Control-Allow-Credentials', 'true');
    res.set('Access-Control-Allow-Headers', 'Content-Type');

    if ('OPTIONS' === req.method) {
        res.send(200);
    } else {
        next();
    }
};
