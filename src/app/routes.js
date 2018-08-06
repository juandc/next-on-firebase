const routes = module.exports = require('next-routes')()

const routesArray = [
  { name: "home", pattern: "/", page: "index" },
  { name: "about", pattern: "/about", page: "about" }
];

for (let i in routesArray) {
  routes.add(routesArray[i]);
}

// routes
// .add(HOME)
// .add(ABOUT)

exports.routes = routesArray;
