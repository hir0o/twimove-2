import * as functions from "firebase-functions";

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

exports.echo = functions.https.onRequest((request, response) => {
  const task = request.body;
  console.log(JSON.stringify(task));
  response.send(JSON.stringify(task));
});
