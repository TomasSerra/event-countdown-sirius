import Countdown from "@/components/countdown/Countdown";
import styles from "@/styles/pages/home/Home.module.scss";
import Icon from "@/assets/images/image.png";
import Image from "next/image";
import Background from "@/components/background/Background";

export default function Home() {
  return (
    <div className={styles.page}>
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
            limitDate={new Date("2025-02-03").getTime()}
            width="85vh"
          />
        </div>
      </Background>
    </div>
  );
}
