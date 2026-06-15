const express = require("express");

const router = express.Router();

const Contact = require("../models/Contact");

/* GET CONTACTS */
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* CREATE CONTACT */
router.post("/", async (req, res) => {

  try {

    const newContact = new Contact(req.body);

    await newContact.save();

    res.status(201).json(newContact);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});

module.exports = router;