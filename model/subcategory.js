const mongoose = require('mongoose');

const SubcategoryModelSchema = mongoose.Schema(
  {
    SubCategoryName: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
    },
  },
  { timestamps: true },
);
const SubCategoryModel = mongoose.model('subcategory', SubcategoryModelSchema);
module.exports = SubCategoryModel;
