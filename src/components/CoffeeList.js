import CoffeeCard from "./CoffeeCard";
import { useState } from "react";

const CoffeeList = ({ coffees, setCanContinue, setCantContinue }) => {
  const [selectedCoffee, setSelectedCoffee] = useState(null);
  const isCoffessOddMobile = coffees.length % 2 !== 0;

  const handleCoffeeSelection = (coffee) => {
    if (selectedCoffee === coffee.title) {
      setSelectedCoffee(null);
      setCantContinue();
    } else {
      setSelectedCoffee(coffee.title);
      setCanContinue();
    }
  };

  return (
    <div>
      <div className="hidden lg:flex flex-row space-x-6">
        {coffees.map((coffee, index) => (
          <CoffeeCard
            key={index}
            title={coffee.title}
            icon={coffee.icon}
            color={coffee.color}
            rotation={coffee.rotation}
            translation={coffee.translation}
            isOtherPressed={selectedCoffee && selectedCoffee !== coffee.title}
            isSelected={selectedCoffee === coffee.title}
            onClick={() => {
              handleCoffeeSelection(coffee);
            }}
          />
        ))}
      </div>
      <div className="md:hidden grid grid-cols-2 gap-4">
        {coffees.map((coffee, index) => (
          <div
            key={index}
            className={
              isCoffessOddMobile && index === coffees.length - 1
                ? "col-span-2 flex justify-center"
                : ""
            }
          >
            <CoffeeCard
              title={coffee.title}
              icon={coffee.icon}
              color={coffee.color}
              rotation={0}
              translation={0}
              isOtherPressed={selectedCoffee && selectedCoffee !== coffee.title}
              isSelected={selectedCoffee === coffee.title}
              onClick={() => {
                handleCoffeeSelection(coffee);
              }}
            />
          </div>
        ))}
      </div>

      <div className="hidden md:grid grid-cols-4 gap-4 lg:hidden">
        {coffees.map((coffee, index) => (
          <div
            key={index}
            className={
              !isCoffessOddMobile && index === coffees.length - 1
                ? "col-span-2 flex justify-center"
                : ""
            }
          >
            <CoffeeCard
              title={coffee.title}
              icon={coffee.icon}
              color={coffee.color}
              rotation={0}
              translation={0}
              isOtherPressed={selectedCoffee && selectedCoffee !== coffee.title}
              isSelected={selectedCoffee === coffee.title}
              onClick={() => {
                handleCoffeeSelection(coffee);
              }}
            />
          </div>
        ))}
      </div>

      
    </div>
  );
};
export default CoffeeList;
