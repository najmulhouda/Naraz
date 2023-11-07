import mongoose, { Document, model, Model, Schema } from 'mongoose';

let date = new Date();
let date_at = Date.now();

export interface OrderProductsModel extends Document {
  product_id: string;
  product_title: string;
  product_price: string;
  product_image: string;
  date_at: string;
}

const orderProductsSchema: Schema = new Schema({
  product_id: {
    type: String,
  },
  product_title: {
    type: String,
  },
  product_price: {
    type: String,
  },
  product_image: {
    type: String,
  },
  date_at: {
    type: String,
    default: date_at,
  },
  update: {
    type: String,
  },
});

export const OrderProducts: Model<OrderProductsModel> = mongoose.models.OrderProducts || model('OrderProducts', orderProductsSchema);

