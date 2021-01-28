import express, {Request, Response} from 'express';
import crypto from 'crypto';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 4000;
const API_KEY = process.env.API_KEY;
const API_SECRET = process.env.API_SECRET;

app.use(express.json(), cors());

app.post('/web-signature', (req: Request, res: Response) => {
  const {role, meetingNumber} = req.body;
  const timestamp = new Date().getTime() - 30000;
  const msg = Buffer.from(API_KEY + meetingNumber + timestamp + role).toString('base64');
  const hash = crypto.createHmac('sha256', API_SECRET).update(msg).digest('base64');
  const signature = Buffer.from(`${API_KEY}.${meetingNumber}.${timestamp}.${role}.${hash}`).toString('base64');

  res.json({
    signature: signature
  });
});

app.listen(port, () => console.log(`Zoom Web SDK Signature on port ${port}!`));

process.on('uncaughtException', (err) => {
  console.error(`uncaught exception : ${err}`);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error(`Unhandled Rejection at ${JSON.stringify(promise)} and reason: ${reason}`);
});
