import { Outlet } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Layout = () => {
  return (
    <div className="h-screen">
      {/* Navbar and their pages */}
      <nav className="flex items-center justify-between bg-[#222222] h-[21%] px-4">
        <div className="hidden md:flex flex-1"></div>
        <h1 className="text-white font-bold text-[24px] md:text-[32px] ml-6 md:ml-0">The Coffee Shop</h1>
        <div className="flex-1 flex justify-end">
          <RxHamburgerMenu className="text-white h-[40px] md:h-[50px] w-[40px] md:w-[50px] mr-6" />
        </div>
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;
