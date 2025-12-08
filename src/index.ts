import express from 'express';
import type { Express, Request, Response } from 'express';
import { setupUserRoutes } from './routes.js'; 

const app: Express = express();
const PORT: number = 3000;


app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send({ message: 'Welcome to the Express TypeScript App!' });
});

setupUserRoutes(app); 

// Start the server
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});