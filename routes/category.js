const express = require("express");
const router = express.Router();
const categoryController = require("../controller/categoryController");


router.post('/addMainCategory', categoryController.addMainCategory);
router.post('/addSubCategory', categoryController.addSubCategory);
router.get('/getAllCategory', categoryController.getAllCategory);
router.get('/getSingleCategory/:id', categoryController.getSingleCategory);
router.patch('/editCategory/:id', categoryController.editCategory);
router.delete('/deleteCategory/:id', categoryController.deleteCategory);

module.exports = router;
