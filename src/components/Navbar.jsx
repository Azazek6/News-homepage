import { useState } from "react";
import Link from "./Link";
import SideBar from "./SideBar";

const Navbar = () => {
  const [navigation, setNavigation] = useState(false);
  return (
    <nav className="w-[100%] sm:w-[90%] flex item-center justify-between py-5 px-4 sm:px-8">
      <div className="sm:w-[30%] flex justify-start">
        <img
          src="/News-homepage/logo.svg"
          width={1000}
          height={1000}
          alt="logo"
          className="w-[60%] sm:w-[22%]"
        />
      </div>

      <div className="w-[70%] hidden sm:flex justify-end items-center gap-5">
        <Link to="#" name="Home" />
        <Link to="#" name="New" />
        <Link to="#" name="Popular" />
        <Link to="#" name="Treding" />
        <Link to="#" name="Categories" />
      </div>
      <div className="sm:w-[70%] flex sm:hidden justify-end ">
        {navigation ? (
          <img
            src="/News-homepage/icon-menu-close.svg"
            width={1000}
            height={1000}
            className="w-[100%]"
            alt=""
          />
        ) : (
          <img
            src="/News-homepage/icon-menu.svg"
            width={1000}
            height={1000}
            className="w-[100%]"
            alt=""
            onClick={setNavigation}
          />
        )}
      </div>
      <SideBar isOpen={navigation} onClose={setNavigation} />
    </nav>
  );
};

export default Navbar;
