const express = require('express');
const app = express();

app.use(express.json());

app.get('/status', (req, res) => {
  res.json({
    status: 'ok',
    version: process.env.NORA_VERSION || 'unknown',
    role: process.env.NORA_ROLE || 'unknown'
  });
});

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`NORA version template running on port ${PORT}`);
});
