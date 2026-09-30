import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const linkStyle =
    "px-3 py-2 rounded-lg transition-colors hover:text-white hover:bg-green-700";
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=" border-b border-gray-200 shadow-md bg-white">
      <div className="flex justify-between items-center px-4 py-4 md:px-8">
        <div className="text-xl font-bold text-green-700"> Engez</div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link to="/" className={linkStyle}>
            Dashboard
          </Link>
          <Link to="/tasks" className={linkStyle}>
            Tasks
          </Link>
          <Link to="/settings" className={linkStyle}>
            Settings
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-gray-700"
        >
          ☰
        </button>

        <div className="hidden md:flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 font-semibold text-green-700">
            D
          </div>

          <span className="text-sm font-semibold text-gray-700">Dina</span>
        </div>
      </div>
      {isOpen && (
        <div className="border-t border-gray-100 px-4 pb-4 md:hidden">
          <div className="flex flex-col gap-2 pt-3">
            <Link to="/" className={linkStyle} onClick={() => setIsOpen(false)}>
              Dashboard
            </Link>

            <Link
              to="/tasks"
              className={linkStyle}
              onClick={() => setIsOpen(false)}
            >
              Tasks
            </Link>

            <Link
              to="/settings"
              className={linkStyle}
              onClick={() => setIsOpen(false)}
            >
              Settings
            </Link>
          </div>
          <div className="mt-2 flex items-center gap-3 border-t border-gray-100 pt-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 font-semibold text-green-700">
              D
            </div>

            <span className="text-sm font-semibold text-gray-700">Dina</span>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
