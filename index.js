const express = require('express');

const pacientesRouter = require('./routers/pacientesRouter');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/pacientes', pacientesRouter);

app.listen(3000, () =>
  console.log("¡Aplicación de ejemplo escuchando en el puerto 3000!")
);