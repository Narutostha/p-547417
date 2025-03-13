import React from "react";
import SearchBar from "../ui/SearchBar";
import IconButton from "../ui/IconButton";

const Header: React.FC = () => {
  const userIcon = `<svg id="0:46" layer-name="Icon/user" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="user-icon"> <g clip-path="url(#clip0_0_46)"> <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#1D2939" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26003 15 3.41003 18.13 3.41003 22" stroke="#1D2939" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g> <defs> <clipPath id="clip0_0_46"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </svg>`;

  const cartIcon = `<svg id="0:48" layer-name="Icon/cart" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="cart-icon"> <g clip-path="url(#clip0_0_48)"> <path d="M7.5 7.67V6.7C7.5 4.45 9.31 2.24 11.56 2.03C14.24 1.77 16.5 3.88 16.5 6.51V7.89" stroke="#1D2939" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8.99995 22H14.9999C19.0199 22 19.7399 20.39 19.9499 18.43L20.6999 12.43C20.9699 9.99 20.2699 8 15.9999 8H7.99995C3.72995 8 3.02995 9.99 3.29995 12.43L4.04995 18.43C4.25995 20.39 4.97995 22 8.99995 22Z" stroke="#1D2939" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M15.4955 12H15.5045" stroke="#1D2939" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8.49451 12H8.50349" stroke="#1D2939" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> <defs> <clipPath id="clip0_0_48"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </svg>`;

  const navItems = ["HOME", "ABOUT US", "PRODUCTS", "SALE", "BLOG"];

  return (
    <header className="flex items-center border h-[90px] relative bg-[#D9D9D9] px-5 py-0 border-solid border-[#969191] max-md:flex-col max-md:h-auto max-md:p-5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b8dbc7631fab6eea50048ea1ed482dfa6a7f6ae"
        alt="Organic Fiber Logo"
        className="w-[358px] h-auto absolute top-[-104px] left-0.5 max-md:static max-md:w-[200px] max-md:mb-5"
      />
      <nav className="flex justify-center grow max-md:mx-0 max-md:my-5">
        <ul className="flex gap-12 max-md:flex-wrap max-md:justify-center max-sm:gap-5">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className="text-[#1D2939] text-base font-medium max-sm:text-sm"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-4 max-md:w-full max-md:justify-center max-sm:flex-wrap">
        <SearchBar />
        <IconButton icon={userIcon} ariaLabel="User account" />
        <IconButton icon={cartIcon} ariaLabel="Shopping cart" />
      </div>
    </header>
  );
};

export default Header;
