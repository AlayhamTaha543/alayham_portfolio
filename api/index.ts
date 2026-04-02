import express, { Request, Response } from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);
  
  // Vercel output usually goes to 'dist' or 'client/dist'
  const staticPath = path.resolve(__dirname, "..", "client", "dist");

  app.use(express.static(staticPath));

  app.get("*", (req: Request, res: Response) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

startServer().catch(console.error);
export default startServer; // Necessary for some Vercel build patterns
