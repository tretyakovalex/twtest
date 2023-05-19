const express = require('express');
const app = express();
const cors = require('cors')
const path = require('path');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 4000;

app.use(express.json());

// Middleware setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// === Routes: ===
// ===============

app.use(require('./routes/mysql-routes'));

// === Frontend: ===
// =================

app.use(express.static(path.join(__dirname, 'public')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// === Server: ===
// ===============

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
});
