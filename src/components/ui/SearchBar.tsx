import React from "react";

interface SearchBarProps {
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search Product",
}) => {
  const searchIcon = `<svg id="0:43" layer-name="Icon/search" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="search-icon"> <g clip-path="url(#clip0_0_43)"> <path d="M9.58335 17.5C13.9556 17.5 17.5 13.9556 17.5 9.58333C17.5 5.21108 13.9556 1.66666 9.58335 1.66666C5.2111 1.66666 1.66669 5.21108 1.66669 9.58333C1.66669 13.9556 5.2111 17.5 9.58335 17.5Z" stroke="#1D2939" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M18.3333 18.3333L16.6666 16.6667" stroke="#1D2939" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g> <defs> <clipPath id="clip0_0_43"> <rect width="20" height="20" fill="white"></rect> </clipPath> </defs> </svg>`;

  return (
    <div className="flex items-center gap-3 px-4 py-2 rounded-[83px] border-[1.5px] border-solid border-[#090909] max-sm:w-full max-sm:mb-2.5">
      <div dangerouslySetInnerHTML={{ __html: searchIcon }} />
      <input
        type="text"
        placeholder={placeholder}
        className="text-[#667085] text-base bg-transparent border-none outline-none w-full"
      />
    </div>
  );
};

export default SearchBar;
