import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, Im Faye-peace</h1>
        <p className={styles.description}>
          I currently study Software Engineering. Reach out if you'd like to
          learn more!
        </p>
        <a href="mailto:rfayepeace@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/Avatar_circle.png")}
        alt="cartoon image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
