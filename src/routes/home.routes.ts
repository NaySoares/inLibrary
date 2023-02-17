import { Request, Response, Router } from 'express';

const homeRoutes = Router();

homeRoutes.get('/', (request: Request, response: Response) => {
  return response.json({ ok: true });
});

export { homeRoutes };
