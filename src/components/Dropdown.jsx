import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Dropdown = ({ title, categories, setIsMenuOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button
        className="w-full text-left p-2 rounded hover:bg-gray-200 transition flex justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span>
          <FontAwesomeIcon icon={faPlus} />
        </span>
      </button>
      {isOpen && (
        <ul className="flex flex-col p-4 transition">
          {categories.map((category, index) => (
            <NavLink
              key={index}
              to={category.path}
              className="p-2 rounded hover:bg-gray-200 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {category.name}
            </NavLink>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;

// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faXmark } from "@fortawesome/free-solid-svg-icons";
// import { NavLink } from "react-router-dom";

// const DropdownMenu = ({ title, links }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="relative">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="w-full text-left p-2 rounded hover:bg-gray-200 transition"
//       >
//         {title}
//       </button>
//       {isOpen && (
//         <ul className="flex flex-col gap-3 p-4 bg-gray-100 rounded shadow-md transition">
//           {links.map((link, index) => (
//             <NavLink
//               key={index}
//               to={link.path}
//               className="p-2 rounded hover:bg-gray-200 transition"
//             >
//               {link.label}
//             </NavLink>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default DropdownMenu;
