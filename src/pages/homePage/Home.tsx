import React from "react";
import styles from "./Home.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles.containerOfAll}>
      <img
        src="https://macsimum.no/wp-content/uploads/230806Javazone20230051-1024x683.jpg"
        alt="JavaZone"
        className={styles.headerImage}
      />
      <div className={styles.homeContainer}>
        <h1 className={styles.welcomeText}>Welcome to JavaZone</h1>
        <p className={styles.description}>
          JavaZone 2024 is the ultimate conference for developers and tech
          enthusiasts. This year, we’re bringing together the brightest minds in
          the software development world to share knowledge, insights, and
          innovations. Whether you're a Java expert or just starting your
          programming journey, JavaZone is designed to inspire, challenge, and
          elevate your skills.
        </p>

        <p className={styles.description}>
          Expect to dive into a wide range of topics including cutting-edge Java
          technologies, cloud computing, microservices architecture, and
          AI-powered software development. From hands-on workshops to keynote
          speeches from industry leaders, there’s something for everyone. You'll
          get the chance to learn new techniques, discover best practices, and
          stay ahead of the curve in an ever- evolving field.
        </p>

        <p className={styles.description}>
          In addition to the technical content, JavaZone 2024 offers fantastic
          networking opportunities. Connect with fellow developers, meet
          potential collaborators, and exchange ideas with experts who are
          shaping the future of technology. Whether you’re attending for
          professional growth or personal passion, JavaZone is where you’ll find
          inspiration and practical knowledge to take your career and projects
          to the next level.
        </p>

        <p className={styles.description}>
          Don’t miss out on this exciting event—join us at JavaZone 2024 and be
          part of a global community of developers who are passionate about
          creating the technology of tomorrow.
        </p>
      </div>
    </div>
  );
};

export default Home;
