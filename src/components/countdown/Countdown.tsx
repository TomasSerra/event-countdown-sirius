"use client";

import React, { useEffect, useState } from "react";
import ReactCountdown, { CountdownRenderProps } from "react-countdown";
import styles from "@/styles/components/countdown/Countdown.module.scss";
import TimeBox from "./TimeBox";

interface CountdownProps {
  limitDate: number;
  width?: string | number;
  onFinish: () => void;
}

const Countdown: React.FC<CountdownProps> = ({
  limitDate,
  width = "100%",
  onFinish = () => {},
}) => {
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
      onFinish();
      return (
        <div className={styles.container} style={{ width }}>
          <TimeBox value={0} label="Días" />
          <TimeBox value={0} label="Horas" />
          <TimeBox value={0} label="Minutos" />
          <TimeBox value={0} label="Segundos" />
        </div>
      );
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
