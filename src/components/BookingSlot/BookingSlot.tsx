import React from 'react';
import Button from 'react-bootstrap/Button';

import styles from './BookingSlot.module.css';

export default function BookingSlot(props:any) {
  return (
    <div className={styles.bookingSlot}>
      
      <p>Booking Date: {props.BookingDate}</p>
      <p>Slot Booked: {props.timeslot}</p>
      <p>Organizer: {props.organizer}</p>
      <p>Organizer email: {props.orgEmail}</p>
      <p>Message the Organizer:</p>
      <div className={styles.buttonContainer}>
        <Button variant="primary" className={styles.button}>
          Outlook
        </Button>
        <Button variant="primary" className={styles.button}>
          Teams
        </Button>
        <p>checkoing something</p>
      </div>
    </div>
  );
}
