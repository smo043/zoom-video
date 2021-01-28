import express, {Request, Response} from 'express';
import crypto from 'crypto';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json(), cors());
app.options('*', cors());

app.post('/', (req: Request, res: Response) => {
  const timestamp = new Date().getTime() - 30000;
  const msg = Buffer.from(process.env.API_KEY + req.body.meetingNumber + timestamp + req.body.role).toString('base64');
  const hash = crypto.createHmac('sha256', process.env.API_SECRET).update(msg).digest('base64');
  const signature = Buffer.from(
    `${process.env.API_KEY}.${req.body.meetingNumber}.${timestamp}.${req.body.role}.${hash}`
  ).toString('base64');

  res.json({
    signature: signature
  });
});

app.listen(port, () => console.log(`Zoom Web SDK Signature Node.js on port ${port}!`));
