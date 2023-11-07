import mongoose from "mongoose";
import { MONGO_URI } from "@/config/appConfig"
export const connectbd = () => mongoose.connect(MONGO_URI);
