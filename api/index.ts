import express, { Request, Response } from "express";

const app = express();

app.get("/api/health", (_req: Request, res: Response) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Export the handler for Vercel Serverless
export default (req: Request, res: Response) => {
  app(req, res);
};
