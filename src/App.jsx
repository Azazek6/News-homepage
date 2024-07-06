import Navbar from "./components/Navbar";
import FirtsContent from "./components/Section-01/FirtsContent";
import SecondContent from "./components/Section-02/SecondContent";

const App = () => {
  return (
    <>
      <div className="w-full flex items-center justify-center">
        <Navbar />
      </div>

      <main className="w-[100%] pt-3 pb-10 flex flex-col items-center gap-8 md:gap-12">
        <FirtsContent />
        <SecondContent />
      </main>

      <div className="flex justify-center mb-4">
        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://www.frontendmentor.io/profile/Azazek6"
            target="_blank"
          >
            @Azazek6
          </a>
          .
        </div>
      </div>
    </>
  );
};

export default App;
