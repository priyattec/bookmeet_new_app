import React from "react";
// import { Link } from "react-router-dom";

import MainPgDiv from "../../components/MainPgDiv/MainPgDiv";
import { AppData } from "../../DataSource/Data";
import HeaderItem from "../../features/Header/Header";
import DateTimeDisplay from "../../features/DateTimeDisp/DateTimeDisp";
import styles from './MainPage.module.css'

const MainPage = (props:any) => {
  const displayDiv = AppData.map((room) => (
    <MainPgDiv
      key={room.index} // Make sure to add a unique key for each element when using map
      index = {room.index}
      bgColor={room.bgColor}
      title={room.RoomName}
      description={room.description}
      img={room.divImg}
      capacity={room.capacity}
      videoConf={room.vidConf}
      tv={room.tv}
      monitor={room.monitor}
      style={{marginBottom: '1rem'}}
    />
  ));

  return (
    <div>
    <HeaderItem />
    <div className={styles.HeaderSec}>
    <h1>Hi {props.name}, Ready to book your room?</h1>
      <div className={styles.dateTimeSec}>
        <DateTimeDisplay />
      </div>
     
    </div>
    <div>{displayDiv}</div>
  </div>
  );
};
export default MainPage;
