import { Link } from "react-router-dom";

//Asks for isInResults PROP to determine if the pagination is in the results page and change style
const Pagination = ({ isInResults }) => {
  return (
    <div className="flex space-x-10 text-xs">
      {/* Pagination simulator  */}
      <button className="w-6 h-6 bg-black hover:bg-[#424242] rounded-full text-center border-2 border-black hover:border-[#424242] text-white font-bold">
        <Link to="/">1</Link>
      </button>
      <button
        className={`w-6 h-6 ${
          isInResults
            ? "bg-black border-black"
            : "bg-[#EEB426] border-[#EEB426]"
        } rounded-full text-center border- font-bold text-white`}
      >
        <Link to="/q2">2</Link>
      </button>
      <button
        className={`w-6 h-6 ${
          isInResults ? "bg-black text-white" : "bg-white text-black"
        } rounded-full text-center border-2 border-black font-bold`}
      >
        <Link to="/results">3</Link>
      </button>
      <button
        className={`w-6 h-6 ${
          isInResults ? "bg-black text-white" : "bg-white text-black"
        } rounded-full text-center border-2 border-black font-bold`}
      >
        <Link to="/results">4</Link>
      </button>
      <button
        className={`w-6 h-6 ${
          isInResults ? "bg-black text-white" : "bg-white text-black"
        } rounded-full text-center border-2 border-black font-bold`}
      >
        <Link to="/results">5</Link>
      </button>
      <button
        className={`w-6 h-6 ${
          isInResults ? "bg-black text-white" : "bg-white text-black"
        } rounded-full text-center border-2 border-black font-bold`}
      >
        <Link to="/results">6</Link>
      </button>
    </div>
  );
};

export default Pagination;
