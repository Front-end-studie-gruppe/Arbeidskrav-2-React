import homeStyles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <section className={homeStyles.siteContainer}>
        <h1>Welcome to JavaZone</h1>
        <div className={homeStyles.cardContainer}>
          {/* HERE ADD CARD COMPONENT */}
          <div className={homeStyles.card}>
            <h2>Card Title 1</h2>
            <p>This is a description for card 1.</p>
            <button>Learn More</button>
          </div>
          <div className={homeStyles.card}>
            <h2>Card Title 2</h2>
            <p>This is a description for card 2.</p>
            <button>Learn More</button>
          </div>
          <div className={homeStyles.card}>
            <h2>Card Title 3</h2>
            <p>This is a description for card 3.</p>
            <button>Learn More</button>
          </div>
          <div className={homeStyles.card}>
            <h2>Card Title 4</h2>
            <p>This is a description for card 4.</p>
            <button>Learn More</button>
          </div>
          <div className={homeStyles.card}>
            <h2>Card Title 5</h2>
            <p>This is a description for card 5.</p>
            <button>Learn More</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
