import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 md:p-9 p-3">
      <Image src="images/nav-logo.svg" width={70} height={70} alt="logo" />
    </nav>
  );
};

export default Navbar;
