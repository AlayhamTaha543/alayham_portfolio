import express from "express";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files from the dist/public directory
app.use(express.static(path.join(__dirname, "..", "dist", "public")));

// Handle client-side routing - serve index.html for all routes
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "..", "dist", "public", "index.html"));
});

// Export for Vercel serverless
export default app;
