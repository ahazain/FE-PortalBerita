import { faMagnifyingGlass, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);

      if (position > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  return (
    <div className="header">
      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={toggleSearch}
          ></div>
          <div className="relative w-full max-w-2xl px-4">
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="text-gray-400 mr-3"
                />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full text-lg py-2 focus:outline-none"
                  autoFocus
                />
                <button
                  onClick={toggleSearch}
                  className="ml-3 text-gray-400 hover:text-gray-600"
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fixed top navbar */}
      <div className="fixed top-0 left-0 right-0 bg-white z-50 transition-all duration-300 ease-in-out">
        <div className="container mx-auto">
          <div className="navbox flex justify-between items-center py-5">
            <div className="flex text-2xl font-medium opacity-85 gap-x-10">
              <Link to="/about">About</Link>
              <Link to="/careers">Careers</Link>
              <Link to="/authors">Authors</Link>
              <Link to="/advertise">Advertise</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="inline-flex button text-2xl items-center gap-x-6 px-8 bg-slate-950 text-white p-4 rounded-full">
              <button onClick={toggleSearch}>
                <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-2" />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Logo with smooth opacity transition */}
      <div className="container mx-auto">
        <div
          className="logo text-[270px] font-extrabold text-slate-950 text-center font-satoshi transition-all duration-500 ease-in-out"
          style={{
            opacity: Math.max(0, 1 - scrollPosition / 100),
            transform: `translateY(${Math.min(0, -scrollPosition / 2)}px)`,
            visibility: scrollPosition > 200 ? "hidden" : "visible",
          }}
        >
          cahyawarta
        </div>
      </div>

      {/* Fixed bottom navbar with smooth transition */}
      <div
        className="fixed left-0 right-0 bg-red-600 z-50 transition-all duration-300 ease-in-out"
        style={{
          top: isScrolled ? "90px" : "auto",
          transform: `translateY(${isScrolled ? 0 : scrollPosition}px)`,
        }}
      >
        <div className="container mx-auto">
          <div className="category gap-x-7 flex justify-center text-2xl text-blue-100 font-medium opacity-85 py-4">
            <a href="#">Latest</a>
            <a href="#">National</a>
            <a href="#">Politics</a>
            <a href="#">Economy</a>
            <a href="#">Business</a>
            <a href="#">Technology</a>
            <a href="#">Science </a>
            <a href="#">Sports</a>
            <a href="#">Lifestyle</a>
            <a href="#">Entertainment</a>
            <a href="#">international</a>
            <a href="#">Health</a>
            <a href="#">Religion </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;