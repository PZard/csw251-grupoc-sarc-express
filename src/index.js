import serverless from 'serverless-http';
import express from 'express';
import router from './routes/index.js';

const app = express();

app.use(express.json());
app.use('/api', router);

app.use((_, res) => {
  return res.status(404).json({
    error: 'Not Found',
  });
});


const handler = serverless(app);
export default handler;