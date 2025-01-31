"use client";

import styles from "@/styles/components/countdown/TimeBox.module.scss";

const TimeBox: React.FC<{ value: number; label: string }> = ({
  value,
  label,
}) => {
  const formatNumber = (value: number) => (value < 10 ? `0${value}` : value);
  return (
    <div className={styles.box}>
      <p className={styles.value}>{formatNumber(value)}</p>
      <span className={styles.label}>{label}</span>
    </div>
  );
};

export default TimeBox;
