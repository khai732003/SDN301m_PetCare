import mongoose from "mongoose";
import { IUser } from "../types/user";
import UserSchema from "./User";
import { IFeedBack } from "../types/feedback";
import FeedBackSchema from "./FeedBack";
import { IService } from "../types/service";
import ServiceSchema from "./Service";
import { IRoom } from "../types/room";
import RoomSchema from "./Room";
import { IBooking } from "../types/booking";
import BookingSchema from "./Booking";
import { IBookingDetail } from "../types/bookingDetail";
import PackageSchema from "./Package";
import { IPackage } from "../types/package";

const User = mongoose.model<IUser>("User", UserSchema, "User");
const Feedback = mongoose.model<IFeedBack>(
  "FeedBack",
  FeedBackSchema,
  "FeedBack"
);
const Service = mongoose.model<IService>("Service", ServiceSchema, "Service");
const Package = mongoose.model<IPackage>("Package", PackageSchema, "Package");
const Room = mongoose.model<IRoom>("Room", RoomSchema, "Room");
const Booking = mongoose.model<IBooking>("Booking", BookingSchema, "Booking");
const BookingDetail = mongoose.model<IBookingDetail>(
  "BookingDetail",
  BookingSchema,
  "BookingDetail"
);

export { User, Feedback, Service, Room, Booking, BookingDetail };
