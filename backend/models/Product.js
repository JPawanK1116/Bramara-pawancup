const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    originalPrice: { type: Number },
    description: { type: String },
    category: { type: String },
    stock: { type: Number, default: 0 },
    images: [{ type: String }],
    isTrending: { type: Boolean, default: false },
    features: {
        fabric: String,
        zari: String,
        occasion: String,
        washCare: String
    }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
