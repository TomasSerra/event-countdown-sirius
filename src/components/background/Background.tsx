import { useEffect, useState } from "react";
import styles from "@/styles/components/background/Background.module.scss";
import Heart from "@/assets/svgs/background/heart.svg";
import BottomGradient from "@/assets/svgs/background/bottom-gradient.svg";
import Arrow from "@/assets/svgs/background/arrow.svg";
import Star from "@/assets/svgs/background/star.svg";
import Highlight1 from "@/assets/svgs/background/highlight-1.svg";
import Highlight2 from "@/assets/svgs/background/highlight-2.svg";

const Background = ({ children }: React.PropsWithChildren) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <div className={styles["background-container"]}>
          <Arrow className={styles.arrow} />
          <Heart className={styles.heart} />
          <Star className={styles.star} />
          <Highlight1 className={styles.highlight1} />
          <Highlight2 className={styles.highlight2} />
          <BottomGradient className={styles.gradient} />
          <div className={styles.children}>{children}</div>
        </div>
      )}
    </>
  );
};

export default Background;
