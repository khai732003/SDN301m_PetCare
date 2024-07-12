import { protectedRoute } from "../middleware/authMiddleware";
import { Router } from "express";
import {
  checkExistingBookingDetail,
  insertBookingDetail,
  updateBookingDetail,
  updateStaff, updateStatus,
} from "../controllers/bookingDetailController";

const express = require("express");

const router: Router = express.Router();

router.post("/", protectedRoute, insertBookingDetail);
router.patch("/:id", protectedRoute, updateBookingDetail);
router.post("/check-existing", checkExistingBookingDetail);
router.put("/:id", updateStaff);
router.put("/status/:id", updateStatus)

export default router;
