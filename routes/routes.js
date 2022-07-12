const controller = require("./../controllers/controller");
module.exports = function (router) {
  router.get(
    "/",
    controller.getDefault
    //   (req, res) => {
    //     res.send("Hello from Skillsoft");
    //   }
  );

  router.post("/addemployee", controller.addEmployee);

  router.get("/aboutus", controller.aboutUs);

  router.get("/getEmployee", controller.getEmployee);

  router.get("/addemployee", controller.addEmployee);
};
