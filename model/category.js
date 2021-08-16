
const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({
  categoryName: String,
  subs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
  type: {
    type: String,
    default: 'main',
  },
});

function autoPopulateSubs(next) {
  this.populate('subs');
  next();
}
categorySchema.pre('findOne', autoPopulateSubs).pre('find', autoPopulateSubs);

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;
