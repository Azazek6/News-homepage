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
    </>
  );
};

export default App;
