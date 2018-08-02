const functions = require("firebase-functions");
const next = require("next");
const routes = require("./routes");

var dev = process.env.NODE_ENV !== "production";
var app = next({ dev, conf: { distDir: "nextApp" } });
const handler = routes.getRequestHandler(app);

exports.nextApp = functions.https.onRequest((req, res) => {
  console.log(`🎉 File: ${req.originalUrl}`);
  return app.prepare().then(() => handler(req, res));
});
