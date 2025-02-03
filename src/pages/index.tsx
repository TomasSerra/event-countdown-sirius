import Countdown from "@/components/countdown/Countdown";
import styles from "@/styles/pages/home/Home.module.scss";
import Icon from "@/assets/images/image.png";
import Image from "next/image";
import Background from "@/components/background/Background";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import { useState } from "react";

export default function Home() {
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);
  return (
    <div className={styles.page}>
      {showConfetti && (
        <Confetti width={height} height={width} style={{ zIndex: 1000 }} />
      )}
      <Background>
        <div className={styles["items-container"]}>
          <div className={styles["image-container"]}>
            <Image
              src={Icon}
              className={styles.image}
              alt="Image"
              fill={true}
            />
          </div>
          <p className={styles.text}>
            Capacitación transversal <br />
            con Lerni
          </p>
          <Countdown
            limitDate={new Date("2025-02-02T10:00:00-03:00").getTime()}
            width="85vh"
            onFinish={() => {
              setShowConfetti(true);
            }}
          />
        </div>
      </Background>
    </div>
  );
}
