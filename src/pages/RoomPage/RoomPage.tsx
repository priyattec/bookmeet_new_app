import React from "react";
import { useParams } from "react-router-dom";
import RoomHeader from "../../components/RoomHeader/RoomHeader"
import { AppData } from "../../DataSource/Data";

const RoomPage = () => {
  const { roomIndex } = useParams<{ roomIndex: string }>(); // Get the room index from route parameters

  // Check if roomIndex is defined and is a valid number
  // const index = roomIndex && !isNaN(Number(roomIndex)) ? Number(roomIndex) : -1;

  // Use optional chaining to safely access the property
  const room = AppData[Number(roomIndex)];

  if (!room) {
    // Handle the case where room is not found (e.g., show an error message)
    return (
      <div>
        <p>Room not found.</p>
      </div>
    );
  }

  return (
    <div>
      <RoomHeader backgroundImage={room.divImg} bannerText={room.RoomName} />
      {/* Add the rest of your room details */}
      <h2>{room.RoomName}</h2>
      <p>{room.description}</p>
      {/* Other room details */}
    </div>
  );
};

export default RoomPage;
