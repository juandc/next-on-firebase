const routes = (module.exports = require("next-routes")());

routes.add("home", "/", "index").add("library", "/:libraryName", "library");
