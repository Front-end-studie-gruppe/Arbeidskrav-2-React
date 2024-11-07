import Programheader from "../../components/programHeader/Programheader";
import programStyles from "./Program.module.css";
import ProgramCards from "../../components/cards/Cards";

const Program = () => {
  return (
    <>
      <header>
        <Programheader />
      </header>
      <section className={programStyles.siteContainer}>
        <h1>Our program</h1>
        <div className={programStyles.cardContainer}>
          <ProgramCards />
        </div>
      </section>
    </>
  );
};

export default Program;
