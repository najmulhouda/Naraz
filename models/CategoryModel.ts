import mongoose, { Document, model, Model, Schema } from 'mongoose';

let date = new Date();
let date_at = Date.now();

export interface CategoryModel extends Document {
  title: string;
  slug: string;
  logo: string;
  parent_id: string;
  parent_title: string;
  parent_slug: string;
  date_at: string;
}

const categorySchema: Schema = new Schema({
  title: {
    type: String,
  },
  logo: {
    type: String,
  },
  slug: {
    type: String,
  },
  parent_id: {
    type: String,
  },
  parent_title: {
    type: String,
  },
  parent_slug: {
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

export const Category: Model<CategoryModel> = mongoose.models.Category || model('Category', categorySchema);
