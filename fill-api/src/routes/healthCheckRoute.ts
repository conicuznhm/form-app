import { Router, Request, Response } from "express";

const router = Router();

router.get('/', (_req: Request, res: Response) => {
    res.status(200).send('OK');
});

export default router;
