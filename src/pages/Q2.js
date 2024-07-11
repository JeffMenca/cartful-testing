import CoffeeList from "../components/CoffeeList";
import NavigationButton from "../components/NavigationButton";
import { FiCoffee } from "react-icons/fi";
import AeroPress from "../media/coffee-cards/aeropress-desktop.svg";
import CoffeeMaker from "../media/coffee-cards/coffee-maker-desktop.svg";
import FrenchPress from "../media/coffee-cards/french-press-desktop.svg";
import PourOver from "../media/coffee-cards/pour-over-desktop.svg";
import Espresso from "../media/coffee-cards/espresso-desktop.svg";
import Pods from "../media/coffee-cards/pods-desktop.svg";
import MokaPot from "../media/coffee-cards/moka-pot-desktop.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import Pagination from "../components/Pagination";
import { IoMdClose } from "react-icons/io";

const coffees = [
  {
    title: "Coffee Maker",
    icon: CoffeeMaker,
    color: "bg-[#EEB426]",
    rotation: -15,
    translation: 75,
  },
  {
    title: "French Press",
    icon: FrenchPress,
    color: "bg-[#9CAF96]",
    rotation: -10,
    translation: 35,
  },
  {
    title: "Pour Over",
    icon: PourOver,
    color: "bg-[#D4A1A6]",
    rotation: -5,
    translation: 10,
  },
  {
    title: "AeroPress",
    icon: AeroPress,
    color: "bg-[#DA8464]",
    rotation: 0,
    translation: 0,
  },
  {
    title: "Espresso",
    icon: Espresso,
    color: "bg-[#A9C9E1]",
    rotation: 5,
    translation: 10,
  },
  {
    title: "Pods",
    icon: Pods,
    color: "bg-[#C47D30]",
    rotation: 10,
    translation: 35,
  },
  {
    title: "Moka Pot",
    icon: MokaPot,
    color: "bg-[#D2C6C3]",
    rotation: 15,
    translation: 75,
  },
];

const Q2 = () => {
  const [canContinue, setCanContinue] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const HandleCanContinue = () => {
    setCanContinue(true);
  };

  const HandleCantContinue = () => {
    setCanContinue(false);
  };

  return (
    <div className="bg-[#F4EEE5] md:h-full lg:h-[79%] pt-10">
      <div className="flex flex-col items-center lg:h-[85%] space-y-10">
        <Pagination />
        <h2 className="text-[20px] md:text-[28px] text-center w-fit uppercase font-semibold">
          How do you brew at home?
        </h2>
        <CoffeeList
          coffees={coffees}
          setCanContinue={() => {
            HandleCanContinue();
          }}
          setCantContinue={() => {
            HandleCantContinue();
          }}
        />
      </div>
      <div className="flex flex-row justify-between items-end lg:h-[15%] w-full px-4 md:px-12 lg:px-36 pb-6 mt-10 lg:mt-0">
        <NavigationButton text="< Back" url="/" />

        {canContinue && (
          <button className="hidden md:block bg-black text-white text-[12px] font-semibold rounded-sm uppercase py-2 px-4">
            <Link to="/results">Continue</Link>
          </button>
        )}
        {canContinue && (
          <button className="md:hidden fixed bottom-4 right-0 left-0 z-50 bg-black text-white text-[12px] font-semibold uppercase py-4 px-4 w-full">
            <Link to="/results">Continue</Link>
          </button>
        )}

        <div className="w-36">
          <button
            className="text-[##222222] text-[17px]"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Why it matters +
            <hr className="border-[#222222] border-[1px] mt-1"></hr>
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed bottom-0 right-0 left-0 mx-auto z-50 bg-[#222222] text-white text-[14.5px] rounded-t-xl py-6 px-8 md:w-[690px] md:h-[170px]">
          <div className="w-full flex justify-end">
            <button
              onClick={() => {
                setShowModal(false);
              }}
            >
              <IoMdClose className="w-5 h-5" />
            </button>
          </div>
          <p className="py-6 px-7">
            Different brew methods bring out the flavor profiles of coffees in
            different ways. Let's find a coffee that best accompanies your brew
            method of choice.
          </p>
        </div>
      )}
    </div>
  );
};
export default Q2;
