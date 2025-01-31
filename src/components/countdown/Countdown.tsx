"use client";

import React, { useEffect, useState } from "react";
import ReactCountdown, { CountdownRenderProps } from "react-countdown";
import styles from "@/styles/components/countdown/Countdown.module.scss";
import TimeBox from "./TimeBox";

interface CountdownProps {
  limitDate: number;
  width?: string | number;
}

const Countdown: React.FC<CountdownProps> = ({ limitDate, width = "100%" }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const render = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: CountdownRenderProps) => {
    if (completed) {
      return <span>¡Time finished!</span>;
    } else {
      return (
        <div className={styles.container} style={{ width }}>
          <TimeBox value={days} label="Días" />
          <TimeBox value={hours} label="Horas" />
          <TimeBox value={minutes} label="Minutos" />
          <TimeBox value={seconds} label="Segundos" />
        </div>
      );
    }
  };

  return (
    <>{isClient && <ReactCountdown date={limitDate} renderer={render} />}</>
  );
};

export default Countdown;
