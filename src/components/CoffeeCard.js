const CoffeeCard = ({
  title,
  icon,
  color,
  rotation,
  translation,
  isOtherPressed,
  isSelected,
  onClick,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center lg:justify-end pb-4 space-y-4 cursor-pointer ${
        !isOtherPressed ? color : "bg-[#EFE9E0]"
      } w-[170px] lg:w-[150px] h-[170px] lg:h-[164px] ${
        !isSelected ? "hover:bg-white" : ""
      } `}
      style={{
        transform: `rotate(${rotation}deg) translateY(${translation}px)`,
      }}
      onClick={onClick}
    >
      <img
        src={icon}
        alt="coffee"
        className={`${isOtherPressed ? "opacity-50" : "opacity-100"}`}
      />
      <p
        className={`text-[11px] ${
          isOtherPressed ? "opacity-50" : "opacity-100"
        }`}
      >
        {title}
      </p>
    </div>
  );
};
export default CoffeeCard;
