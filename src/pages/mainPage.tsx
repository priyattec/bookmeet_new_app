import React from "react";
import MainPgDiv from "../components/MainPgDiv/MainPgDiv";
import { AppData } from "../DataSource/Data";
import HeaderItem from "../features/Header/Header";

const MainPage = (props:any) => {
  const displayDiv = AppData.map((room) => (
    <MainPgDiv
      key={room.index} // Make sure to add a unique key for each element when using map
      bgColor={room.bgColor}
      title={room.RoomName}
      description={room.description}
      img={room.divImg}
      capacity={room.capacity}
      videoConf={room.vidConf}
      tv={room.tv}
      monitor={room.monitor}
    />
  ));

  return (
    <div>
        <HeaderItem />
        <div className="HeaderSec">
            <h1>Hi {props.name}, Ready to book your room?</h1>
            <div className="dateTimeSec">input the boxes with date and time here</div>
        </div>

      <div>{displayDiv}</div>
    </div>
  );
};
export default MainPage;
