import { useState } from "react";
import Bars from "../assets/icons/bars";
import Cross from "../assets/icons/cross";
import Link from "next/Link";

export default function Nav() {
  const [showNav, setShowNav] = useState(false);
  function toggleNav() {
    setShowNav((prev) => !prev);
  }

  function closeNav() {
    setShowNav(false);
  }

  return (
    <header
      className=" sticky top-0 left-0 px-9 py-3 w-full  flex justify-between align-middle z-10
 
      
    bg-primary "
    >
      <Link  href="/">
        <p className="text-white text-lg">REstate</p>
      </Link>
      <button className=" md:hidden" onClick={toggleNav}>
        {showNav ? <Cross /> : <Bars />}
      </button>

      <nav
        className=" hidden md:flex md:gap-3
     "
      >
        <ul className="flex justify-center gap-5">
          <li>
            <Link className="link" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" href="/search">
              search
            </Link>
          </li>
          <li>
            <Link className="link" href="/agencies">
              agencies
            </Link>
          </li>
          <li>
            <Link className="link" href="/search?purpose=for-sale">
              Buy property
            </Link>
          </li>
          <li>
            <Link className="link" href="/search?purpose=for-rent">
              rent property
            </Link>
          </li>
        </ul>
      </nav>

      {showNav && (
        <nav
          className=" absolute top-10 left-0 bg-primary h-nav  w-full
        flex justify-center
        "
        >
          <ul className="flex flex-col justify-center items-center gap-5">
            <li>
              <Link className="link" href="/" onClick={closeNav}>
                Home
              </Link>
            </li>
            <li>
              <Link className="link" href="/search" onClick={closeNav}>
                search
              </Link>
            </li>
            <li>
              <Link className="link" href="/agencies" onClick={closeNav}>
                agencies
              </Link>
            </li>
            <li>
              <Link
                className="link"
                href="/search?purpose=for-sale"
                onClick={closeNav}
              >
                Buy property
              </Link>
            </li>
            <li>
              <Link
                className="link"
                href="/search?purpose=for-rent"
                onClick={closeNav}
              >
                rent property
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
