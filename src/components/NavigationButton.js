import { Link } from "react-router-dom";

//asks for text and url props to determine the text and url of the button
const NavigationButton = ({ text, url }) => {
  return (
    <div className="w-36">
      {/* Button for navigation */}
      <button className="text-[##222222] text-[17px]">
        <Link to={url}>{text}</Link>
        <hr className="border-[#222222] border-[1px] mt-1"></hr>
      </button>
    </div>
  );
};

export default NavigationButton;
