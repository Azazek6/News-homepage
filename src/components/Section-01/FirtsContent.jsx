import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const FirtsContent = () => {
  return (
    <section className="w-[95%] sm:w-[85%] flex flex-col sm:flex-row gap-4">
      <LeftContent />
      <RightContent />
    </section>
  );
};

export default FirtsContent;
