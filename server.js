const express = require('express');
const app = express();
const cors = require('cors')
const corsOptions = require("./config/corsOptions")
const PORT = process.env.PORT || 3500;

app.use('/employees', require('./routes/api/employees'));

app.use(cors(corsOptions))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));