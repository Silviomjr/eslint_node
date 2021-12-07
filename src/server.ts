/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
import express from 'express';

const app = express();
app.get("/", (request, response) => {
  return response.json({message: "hello world!"})
});

app.listen(3333, () => console.log('Server is running!'));
