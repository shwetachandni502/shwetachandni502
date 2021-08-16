
const Category = require("../model/category");

exports.addMainCategory = async (req, res) => {
  try {
    const {
      body: { categoryName },
    } = req;
    console.log("categoryname", categoryName)
     await Category.create({ categoryName });
    const allCategory = await Category.find({ type: 'main' }).exec();
    res.status(200).send({ allCategory });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.addSubCategory = async (req, res) => {
  try {
    const {
      body: { _id, categoryName },
    } = req;
 console.log("cretae cate", req.body)
    const { _id: catId } = await Category.create({ categoryName, type: 'sub' });
    await Category.updateOne({ _id }, { $push: { subs: catId } });
    const allCategory = await Category.find({ type: 'main' }).exec();
    res.status(200).send({ catId, allCategory });
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.getAllCategory = async (req, res) => {
  try {
    const allCategory = await Category.find({ type: 'main' }).exec();
    res.status(200).send({ allCategory });
  } catch (error) {
    console.log("error", error)
    res.status(500).send(error);
  }
};

exports.getSingleCategory = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const currentCategory = await Category.findOne({ _id: id }).exec();
    res.status(200).send({ currentCategory });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.editCategory = async (req, res) => {
  try {
    const {
      params: { id },
      body: { categoryName },
    } = req;
    console.log("edit category", categoryName, id)
    await Category.updateOne({ _id: id }, { categoryName });
    const allCategory = await Category.find({ type: 'main' }).exec();
    res.status(200).send({ msg: 'Edited successfully', allCategory  });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const findCurrent = await Category.findById(id);
    if (!findCurrent) {
      res.status(404).send({ msg: 'Data not found' });
      return;
    }
    const { subs, _id } = findCurrent;
    const ids = subs.map((el) => el._id);
    ids.push(_id);
    await Category.deleteMany({ _id: { $in: ids } });
    res.status(200).send({ msg: 'Deleted successfully' });
  } catch (error) {
    res.status(500).send(error);
  }
};
