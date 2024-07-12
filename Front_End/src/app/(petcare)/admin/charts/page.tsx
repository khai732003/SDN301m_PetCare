
import BookingApi from "@/actions/booking";
import ChartPage from "@/page/dashboard/chartManagement";
import ParentComponent from "@/page/dashboard/chartManagement/pIndex";
import { TBookingResponse } from "@/schemaValidations/booking.schema";
import { cookies } from "next/headers";
import React, { useEffect, useState } from "react";

export default async function Chart(props: any) {
  const params = {
    page: props.searchParams.page ? +props.searchParams.page : 1,
    limit: props.searchParams.limit ? +props.searchParams.limit : 10,
  };
  const response = await BookingApi.getBookings(params);

    return (
    <div>
      <ParentComponent data={response.payload.items}/>
    </div>
    )
}

