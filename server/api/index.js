import config from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import centerRoutes from './server/routes/CenterRoutes';
const cors = require('cors')

config.config();
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 8000;

// Routes
app.use('/api/v1/centers', centerRoutes);

// when a random route is inputed
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to this API.',
}));

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

export default app;