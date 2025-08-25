const express = require("express");
const router = express.Router();
const {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");
const validateToken = require("../controllers/middleware/validateTokenHandler");

router.use(validateToken);
router.route("/").get(getContacts);
// router.route("/").get(getContacts).post(createContact);also do like this to avoid lines
router.route("/").post(createContact);

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
