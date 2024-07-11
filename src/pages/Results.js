import NavigationButton from "../components/NavigationButton";
import Pagination from "../components/Pagination";
import bestMatch from "../media/results/best-match.png";
import bestMatch2 from "../media/results/best-match2.png";
import BrewMethod from "../media/results/brew-method.png";
import RoastLevel from "../media/results/roast-level.png";
import SippingStyle from "../media/results/sipping-style.png";
import TastingNotes from "../media/results/tasting-notes.png";
import React, { useState } from "react";

const Results = () => {
  const [bestMatchSrc, setBestMatchSrc] = useState(bestMatch);

  return (
    <div className="bg-[#F4EEE5] pt-10">
      <div className="flex flex-col items-center  space-y-10">
        <Pagination isInResults={true} />
        <div className="flex flex-col items-center space-y-2">
          <h2 className="text-[26px] md:text-[48px] text-center w-fit uppercase font-semibold px-10 md:px-32 lg:px-0">
            Meet your new favorite coffee.
          </h2>
          <h3 className="mx-6">
            Here’s what we recommend for your busy days, quiet moments, and
            upcoming adventures.
          </h3>
          <div className="flex flex-row items-center justify-center space-x-8 pt-4">
            <NavigationButton text="Email my results" url="" />
            <NavigationButton text="Retake the quiz" url="/" />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center my-10">
        <div className="bg-[#EAE4DB] w-[1200px] h-[1350px] md:h-[944px] lg:h-[464px] flex flex-col lg:flex-row mx-6 lg:mx-0">
          {/* Best match section */}
          <div className="w-full lg:w-1/3 flex flex-col items-center justify-center border-b-2 border-r-0 lg:border-b-0 lg:border-r-2 border-dashed border-[#A5A19C] py-10 lg:py-0">
            <div className="text-center mb-4">
              <h2 className="text-[23px] text-[#7E836D]">BEST MATCH</h2>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={bestMatchSrc}
                alt="Coffee"
                className="h-[290px]"
                onMouseEnter={() => setBestMatchSrc(bestMatch2)}
                onMouseLeave={() => setBestMatchSrc(bestMatch)}
              />
            </div>
            <div className="text-center mt-4">
              <h3 className="text-xl">GUATEMALA COFFEE</h3>
              <p className="text-lg font-bold">$20.50</p>
            </div>
          </div>

          {/* Information section */}
          <div className="w-full lg:w-2/3 flex flex-col justify-between">
            {/* Information top */}
            <div className="text-start md:h-[40%] border-b-2 border-dashed border-[#A5A19C] py-6 md:py-9 lg:py-6 px-6">
              <h4 className="text-[12px] text-[#7E836D]">WHY YOU'LL LOVE IT</h4>
              <div className="flex justify-center items-center py-4 md:py-6 px-2 md:px-28">
                <p className="text-[16px] md:text-[20px] uppercase md:text-center">
                  If you’ve ever taken a bite from a ripe red apple, you’ll know
                  the way this coffee tastes.
                </p>
              </div>
            </div>

            {/* Information bottom */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:h-[60%]">
              <div className="flex flex-col border-b-2 md:border-b-0 md:border-r-2 border-dashed border-[#A5A19C] py-6 px-4">
                <p className="text-[12px] text-[#7E836D]">TASTING NOTES</p>
                <div className="flex flex-row md:flex-col items-center">
                  <img
                    src={TastingNotes}
                    alt="Tasting Notes"
                    className="w-[100px]"
                  />
                  <p className="mt-2 md:text-center">
                    Red Apple, Lemongrass, Malt Chocolate
                  </p>
                </div>
              </div>
              <div className="flex flex-col border-b-2 md:border-b-0 md:border-r-2 border-dashed border-[#A5A19C] py-6 px-4">
                <p className="text-[12px] text-[#7E836D]">ROAST LEVEL</p>
                <div className="flex flex-row md:flex-col items-center">
                  <img
                    src={RoastLevel}
                    alt="Roast Level"
                    className="w-[100px]"
                  />
                  <p className="mt-2 md:text-center">Medium</p>
                </div>
              </div>
              <div className="flex flex-col border-b-2 md:border-b-0 md:border-r-2 border-dashed border-[#A5A19C] py-6 px-4">
                <p className="text-[12px] text-[#7E836D]">SIPPING STYLE</p>
                <div className="flex flex-row md:flex-col items-center">
                  <img
                    src={SippingStyle}
                    alt="Sipping Style"
                    className="w-[100px]"
                  />
                  <p className="mt-2 md:text-center">Great with milk/cream</p>
                </div>
              </div>
              <div className="flex flex-col py-6 px-4">
                <p className="text-[12px] text-[#7E836D]">BREW METHOD</p>
                <div className="flex flex-row md:flex-col items-center">
                  <img
                    src={BrewMethod}
                    alt="Brew Method"
                    className="w-[100px]"
                  />
                  <p className="mt-2 md:text-center">
                    Brews a delicious cup with a pour over
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between items-end lg:h-[15%] w-full px-4 md:px-12 lg:px-36 pb-6 mt-10 lg:mt-0">
        <NavigationButton text="< Back" url="/q2" />
      </div>
    </div>
  );
};
export default Results;
