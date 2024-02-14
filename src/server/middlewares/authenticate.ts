import { Request, Response, NextFunction } from 'express';

export function authenticate(req: Request, res: Response, next: NextFunction) {
    const isAuth = true;

    if (isAuth) {
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
}
