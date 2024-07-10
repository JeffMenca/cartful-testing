import mainLogo from "../media/pretty-much-a-barista-desktop.svg"
import NavigationButton from "../components/NavigationButton";

const BaristaTransition = () => {
  return (
    <div className="bg-[#9CAF96] h-[79%]">
      <div className="flex flex-col justify-center items-center h-[85%]">
        <img src={mainLogo} alt="coffee" />
        <h1 className="text-[16px] md:text-[28px] text-center w-[150px] md:w-fit">We’ll find coffee that’s on your level.</h1>
      </div>
      <div className="flex flex-col justify-center items-end h-[15%] w-[90%]">
        <NavigationButton text="Next >" url="/q2" />
      </div>
    </div>
  );
};
export default BaristaTransition;
