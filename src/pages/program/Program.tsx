import Programheader from "../../components/programHeader/Programheader";
import programStyles from "./Program.module.css";

const Program = () => {
  return (
    <>
    <header>
      <Programheader />
    </header>
     <section className={programStyles.siteContainer}>
      <h1>Our program</h1>
      <div className={programStyles.cardContainer}>
        {/* HERE ADD CARD COMPONENT, UNDER IS DUMMY DATA*/}
        <div className={programStyles.card}>
          <h2>Card Title 1</h2>
          <p>This is a description for card 1.</p>
          <button>Learn More</button>
        </div>
        <div className={programStyles.card}>
          <h2>Card Title 2</h2>
          <p>This is a description for card 2.</p>
          <button>Learn More</button>
        </div>
        <div className={programStyles.card}>
          <h2>Card Title 3</h2>
          <p>This is a description for card 3.</p>
          <button>Learn More</button>
        </div>
        <div className={programStyles.card}>
          <h2>Card Title 4</h2>
          <p>This is a description for card 4.</p>
          <button>Learn More</button>
        </div>
        <div className={programStyles.card}>
          <h2>Card Title 5</h2>
          <p>This is a description for card 5.</p>
          <button>Learn More</button>
        </div>
      </div>
    </section>
    </>
  );
};

export default Program;
