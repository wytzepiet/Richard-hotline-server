import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';

//For env File 
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 9000;

app.get('/', (req: Request, res: Response) => {
  res.send('You reached the Richard Hotline API');
});

app.post('/add', (req: Request, res: Response) => {
  res.send('Add message');
});

app.put('/confirm', (req: Request, res: Response) => {
  res.send('Confirm receipt');
});

app.get('/printer-status', (req: Request, res: Response) => {
  res.send('Update printer status');
});

app.put('/printer-status', (req: Request, res: Response) => {
  res.send('Update printer status');
});

app.post('/upload-image', (req: Request, res: Response) => {
  res.send('Update printer status');
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
