import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/Avatar.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Software Engineering</h3>
              <br />
              <p>
                As an aspiring software engineer , I am dedicated to mastering
                programming languages and software development techniques to
                create innovative and efficient solutions. I am passionate about
                solving complex problems, building scalable systems, and
                continuously learning to stay up-to-date with the latest
                industry trends and technologies.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Full Stack Development</h3>
              <br />
              <p>
                I really enjoy building responsive and user-friendly web
                applications to help continuously improve my frontend
                development skills. When using systems, tools and langages, i
                look forward to new experiences in building efficient back-end
                systems and APIs that contribute to robust and powerful
                applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Cybersecurity</h3>
              <br />
              <p>
                I am committed to expanding my knowledge in cybersecurity, with
                a focus on AI, safeguarding systems, networks, and data
                protection, I am eager to gain practical experience in a very
                critical field.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
