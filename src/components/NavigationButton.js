import { Link } from "react-router-dom";

const NavigationButton = ({ text,url }) => {
  return (
    <button className="text-[##222222] text-[17px]">
      <Link to={url}>{text}</Link>
      <hr className="border-[#222222] border-[1px] mt-1"></hr>
    </button>
  );
};

export default NavigationButton;
