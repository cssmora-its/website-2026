import 'dotenv/config';
import express from 'express';

const app = express();
const PORT = process.env.APP_PORT || 3000;

app.get('/api/health', (req, res) => {
  res.send('Health check successful!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});