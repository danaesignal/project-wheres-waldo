import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).send('Okay');
})

app.listen(4500)

console.log('API running on port 4500.');