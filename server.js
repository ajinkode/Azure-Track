const express = require('express');
const { connectToDatabase, queryTask2, queryTask3 } = require('./db');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));


// Connect to the database when the server starts
connectToDatabase();

// API endpoint to fetch information
app.get('/api/task2', async (req, res) => {
  try {
    const data = await queryTask2(); // Query the database for customer data
    res.json(data);
  } catch (err) {
    res.status(500).send('Error querying the database');
  }
});

app.get('/api/task3', async (req, res) => {
  try {
    const data = await queryTask3(); // Query the database for customer data
    res.json(data);
  } catch (err) {
    res.status(500).send('Error querying the database');
  }
});


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
