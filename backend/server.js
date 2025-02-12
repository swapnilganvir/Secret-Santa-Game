import express from 'express';
import { assignSecretSanta } from './src/assigner.js';

const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', async (req, res) => {
  try {
    const result = await assignSecretSanta(
      './data/employees.csv',
      './data/last_year.csv',
      './data/output.csv'
    );
    res.json({ message: 'Secret Santa Assigned!', result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
