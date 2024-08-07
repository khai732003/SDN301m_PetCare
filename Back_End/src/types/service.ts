import { Document, ObjectId } from "mongoose";

export interface IService extends Document {
  description: string;
  name: string;
  price: number;
  image: string;
  time: number;
  createdAt: Date;
  updatedAt: Date;
}
