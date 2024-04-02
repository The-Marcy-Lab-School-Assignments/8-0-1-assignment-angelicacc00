const express = require('express');
const path = require('path')
const app = express();

const pathToDistFolder = path.join(__dirname, '..', 'app', 'dist')

const logRoutes = (req, res, next) => { 
  const time = new Date().toLocaleString();
  console.log(`${req.method}: ${req.originalUrl} - ${time}`);
  next()
}

const serverStatic = express.static(pathToDistFolder);

app.use(logRoutes)
app.use(serverStatic)

const port = 8080;
app.listen(port, () => {
  console.log(`Server is now running on http://localhost:${port}`);
});