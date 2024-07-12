import {protectedRoute} from "../middleware/authMiddleware";
import {Router} from "express";
import {
    deleteBooking,
    getBooking,
    getBookingByStaffId,
    getBookingByTime,
    getBookings,
    insertBooking,
    updateBooking,
} from "../controllers/bookingController";

const express = require("express");

const router: Router = express.Router();

router.get("/", getBookings);

router.get("/:bookingId", getBooking);

router.get("/getBooking/:staffId", getBookingByStaffId)

router.post("/getByRoom", getBookingByTime);

router.post("/", protectedRoute, insertBooking);

router.delete("/:bookingId", protectedRoute, deleteBooking);

router.patch("/:bookingId", protectedRoute, updateBooking);
export default router;
