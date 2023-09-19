import React from "react";
import { useParams } from "react-router-dom";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import FormikDoc from "./EmailInput";
import RoomHeader from "../../components/RoomHeader/RoomHeader";
import { AppData } from "../../DataSource/Data";
import styles from "./RoomPage.module.css";
import Button from "react-bootstrap/Button";

import BookingSlot from "../../components/BookingSlot/BookingSlot";

import HeaderItem from "../../features/Header/Header";

const RoomPage = () => {
  const { roomIndex } = useParams<{ roomIndex: string }>();
  const [value, setValue] = React.useState<Dayjs | null>(dayjs("2022-04-17"));
  const [value2, setValue2] = React.useState<Dayjs | null>(dayjs("2022-04-17"));

  const room = AppData[Number(roomIndex)];

  if (!room) {
    return (
      <div>
        <p>Room not found.</p>
      </div>
    );
  }

  // const BookingSlotDisplay = [];
  // for (let i = 0; i < DummyBookings.length; i += 2) {
  //   BookingSlotDisplay.push(
  //     <div className={styles.bookingSlotRow} key={i}>
  //       <BookingSlot
  //         key={DummyBookings[i].index}
  //         BookingDate={DummyBookings[i].bookingDate}
  //         organizer={DummyBookings[i].organizer}
  //         orgEmail={DummyBookings[i].orgEmail}
  //         timeslot={DummyBookings[i].timeslot}
          
  //       />
  //       {DummyBookings[i + 1] && (
  //         <BookingSlot
  //           key={DummyBookings[i + 1].index}
  //           BookingDate={DummyBookings[i + 1].bookingDate}
  //           organizer={DummyBookings[i + 1].organizer}
  //           orgEmail={DummyBookings[i + 1].orgEmail}
  //           timeslot={DummyBookings[i + 1].timeslot}
            
  //         />
  //       )}
  //     </div>
  //   );
  // }
  // function showtime(){
  //   if (value && value2) {
  //     console.log("time1", value.format("HH:mm")); // Display time in HH:mm format
  //     console.log("time2", value2.format("HH:mm")); // Display time in HH:mm format
  //   } else {
  //     console.log("One or both time values are null");
  //   }
  // }
  const SelectedDate = value?.format("DD/MM/YYYY");
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <HeaderItem />
      <div>
        <RoomHeader backgroundImage={room.divImg} bannerText={room.RoomName} />
        <div className={styles.allOtherComp}>
          <div className={styles.feature}>Capacity: {room.capacity}</div>
          <div className={styles.feature}>Video Conference: {room.vidConf}</div>
          <div className={styles.feature}>TV: {room.tv}</div>
          <div className={styles.feature}>Monitor: {room.monitor}</div>
          {/* Date Picker */}

          <div className={styles.dateAndTimeContainer}>
            <DemoContainer components={["DatePicker", "DatePicker"]}>
              <DatePicker
                label="Meeting Date"
                value={value}
                onChange={(newValue) => setValue(newValue)}
              />
            </DemoContainer>
            <div className={styles.timepickers}>
              <DemoContainer components={["TimePicker", "TimePicker"]}>
                <TimePicker
                  label="From"
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
                />
                <TimePicker
                  label="To"
                  value={value2}
                  onChange={(newValue) => setValue2(newValue)}
                />
              </DemoContainer>
            </div>
          </div>

          {/* Date and time pickers end */}
          <div style={{margin: "1rem 0"}}>
<FormikDoc />
          </div>
          <div className={styles.bookingBtn}>
            <Button variant="primary">Book Now</Button>
          </div>
          <h3 style={{ marginTop: "1rem", marginBottom:"1rem" }}>Slots Booked on {SelectedDate}:</h3>
          {/* Booking Slot Div */}
          
            <BookingSlot />
          
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default RoomPage;
