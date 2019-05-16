const express = require("express");
const router = express.Router();

//Item Model
const Item = require("../../models/Item");

//@route    GET api/items
//@desc     Get all items
//@access   Public
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.status(200).json(items))
    .catch(err =>
      res.status(500).json({
        error: err
      })
    );
});

//@route    POST api/items
//@desc     Create an item
//@access   Public
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });
  newItem.save().then(item => res.json(item));
});

//@route    DELETE api/items
//@desc     Delete an item
//@access   Public
router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(res.json({ message: "Item deleted!" })))
    .catch(err =>
      res
        .status(500)
        .json({ message: "No item exists with that id", errorDetails: err })
    );
});

//@route    GET api/items
//@desc     Get an item by id
//@access   Public
router.get("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then(item => res.status(200).json(item))
    .catch(err =>
      res
        .status(500)
        .json({ message: "No item exists with that id", errorDetails: err })
    );
});

module.exports = router;
