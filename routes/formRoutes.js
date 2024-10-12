const express = require('express');
const Form = require('../models/Form');
const router = express.Router();

// POST request to submit form data
router.post('/submit', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newForm = new Form({ name, email, message });
    await newForm.save();
    res.status(201).json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
