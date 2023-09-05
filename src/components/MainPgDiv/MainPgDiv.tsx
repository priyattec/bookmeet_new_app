import React from "react";
import { Link } from "react-router-dom";
import styles from "./MainPgDiv.module.css"; // Import your CSS Module
import Button from 'react-bootstrap/Button'

function MainPgDiv(props:any) {
  const containerStyle = {
    backgroundColor: `${props.bgColor}`,
    marginBottom: props.style ? props.style.marginBottom : "0", // Apply marginBottom from style prop if provided
  };

  return (
    <div className={`${styles.container}`} style={containerStyle}>
      <img src={props.img} alt="monument" className={styles.image} />
      <div className={styles.textPart}>
        <p className={styles.title}>{props.title}</p>
        <p className={styles.description}>{props.description}</p>
        <div className={styles.feature}>Capacity: {props.capacity}</div>
        <div className={styles.feature}>Video Conference: {props.videoConf}</div>
        <div className={styles.feature}>TV: {props.tv}</div>
        <div className={styles.feature}>Monitor: {props.monitor}</div>
        <Link to={`/room/${props.index}`}>
        <Button className={styles.Availability}>Check Availability</Button>
        </Link>
      </div>
    </div>
  );
}

export default MainPgDiv;
