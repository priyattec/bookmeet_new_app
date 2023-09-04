import React from "react";
import './MainPgDiv.css';
import Button  from "react-bootstrap/Button";
function MainPgDiv(props:any) {
    return(
        <div className="container" style={{backgroundColor: `${props.bgColor}`}}>
            <p className="title">{props.title}</p>
            <p className="description">{props.description}</p>
            <img src={props.img} alt="monument" className="image"/>
            <div className="capacity">Capacity: {props.capacity}</div>
            <div className="VideoConf">Video Conference: {props.videoConf}</div>
            <div className="TV"> TV: {props.tv}</div>
            <div className="monitor"> Monitor: {props.monitor}</div>
            <Button className="Availibility">Check Availibility</Button>
        </div>
    )
}
export default MainPgDiv; 