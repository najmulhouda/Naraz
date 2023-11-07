import mongoose, { Document, model, Model, Schema } from 'mongoose';

let date = new Date();
let date_at = Date.now();

export interface OrderModel extends Document {
  order_date: string;
  Total: number;
  status: string;
  date_at: string;
}

const orderSchema: Schema = new Schema({
  order_date: {
    type: String,
  },
  Total: {
    type: String,
  },
  status: {
    type: String,
  },
  update: {
    type: String,
  },
});

export const Order: Model<OrderModel> = mongoose.models.Order || model('Order', orderSchema);
