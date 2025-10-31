import Button from "./Components/Button";
import Header from "./Components/Header";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Hero from "./Components/Hero";
import Benefits from "./Components/Benefits";
import Colaboration from "./Components/Colaboration";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Colaboration />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
