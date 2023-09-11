import React, { useState, useEffect } from "react";
import styles from "./DateTimeDisp.module.css"

const DateTimeDisplay = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [currentDay, setCurrentDay] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      const day = now.getDate();
      const monthIndex = now.getMonth();
      const year = now.getFullYear();
      const time2 = now.toLocaleTimeString().replace(/(.*)\D\d+/, "$1");
      const formattedDate = `${day} ${monthNames[monthIndex]} ${year}`;

      setCurrentDate(formattedDate);
      setCurrentTime(time2);
      setCurrentDay(now.toLocaleDateString("en-US", { weekday: "short" }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.dateTimeDisplay}>
      <div className={`${styles.box} ${styles.DayBox}`} >
        <p>{currentDay}</p>
      </div>
      <div className={styles.floatRight}>
        <div className={`${styles.box} ${styles.DateBox}`}>
          <p>{currentDate}</p>
        </div>
        <div className={`${styles.box} ${styles.TimeBox}`}>
            <p>{currentTime}</p>
          </div>
      </div>
    </div>
  );
};

export default DateTimeDisplay;
