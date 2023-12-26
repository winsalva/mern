const user = require("../controllers/userController");

const router = require("express").Router();

router.get("/", user.getAllUsers);
router.get("/:id", user.getUserById);
router.post("/", user.createUser);
router.put("/:id", user.updateUser);
router.delete("/:id", user.deleteUser);
router.delete("/", user.deleteAllUsers);

module.exports = router;
