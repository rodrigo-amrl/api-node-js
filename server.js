const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const PORT = process.env.PORT || 3500;
const verifyJWT = require('./middleware/verifyJWT')
const credentials = require('./middleware/credentials')
const cookieParser = require('cookie-parser')


app.use(credentials)
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser())

// routes
app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));
app.use('/refresh', require('./routes/refresh'));
app.use('/logout', require('./routes/logout'));
app.use(verifyJWT)
app.use('/employees', require('./routes/api/employees'));

app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ "error": "404 Not Found" });
    } else {
        res.type('txt').send("404 Not Found");
    }
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));