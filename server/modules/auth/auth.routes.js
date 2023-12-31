const router = require("express").Router();
const Controller = require("./auth.Controller");
router.get("/", () => {
  try {
    res.json({
      data: "",
      msg: "Auth router is working",
    });
  } catch (e) {
    next(e);
  }
});
router.post("/register", async (req, res, next) => {
  try {
    const result = await Controller.create(req.body);
    res.json({
      data: "result",
      msg: "success",
    });
  } catch (e) {
    next(e);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw new Error("Email or password is missing");
    const result = await Controller.create(req.body);
    res.json({
      data: "result",
      msg: "success",
    });
  } catch (e) {
    next(e);
  }
});
module.exports = router;
