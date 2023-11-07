import mongoose, { Document, model, Model, Schema } from 'mongoose';

let date = new Date();
let date_at = Date.now();

export interface ProductModel extends Document {
  user_id: string,
  title: string,
  slug: string,
  images: object,
  category: string,
  description: string,
  price: string,
  date_at: string,
};

const productSchema: Schema = new Schema({
  user_id: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  slug: {
    type: String,
    default: "",
  },
  images: {
    type: Object,
    default: [],
  },
  category: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  price: {
    type: Number,
    default: "",
  },
  date_at: { type: String, default: date_at, },
  update: { type: String },
});

export const Product: Model<ProductModel> = mongoose.models.Product || model('Product', productSchema);