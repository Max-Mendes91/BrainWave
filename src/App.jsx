import Button from "./Components/Button";
import Header from "./Components/Header";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Hero from "./Components/Hero";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden"></div>
      <Header />
      <Hero />
      <ButtonGradient />
    </>
  );
};

export default App;
