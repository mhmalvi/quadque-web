import React, {useState} from 'react'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const genericHamburgerLine = `h-1 w-7 my-1 rounded-full bg-white transition ease transform duration-500 lg:hidden m-4`;

  return (
    <nav className="flex justify-between bg-black text-white fixed">
        <div className="z-50 p-5 lg:w-auto w-full">
            <Link to="/">
              <img src={Logo} width={83} alt="QIT" className="cursor-pointer"/>
            </Link>
          </div>
          <div onClick={() => setOpen(!open)}>
            {/* Hamburger Animation */}
            <div
              className={`${genericHamburgerLine} ${
                open
                  ? "rotate-45 translate-y-2 group-hover:opacity-100"
                  : "opacity-100 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                open ? "translate-x-10 opacity-0" : "group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                open
                  ? "-rotate-45 -translate-y-2  group-hover:opacity-100"
                  : "opacity-100 group-hover:opacity-100"
              }`}
            />
          </div>
          {/* Hamburger Animation end*/}
          <ul className="hidden lg:visible lg:flex items-center gap-8">
            <NavLinks />
          </ul>
          {/* Mobile View */}
          <ul
            className={`lg:hidden absolute w-full h-full top-20 duration-500 ${
              open
                ? "top-0 scale-100 opacity-100"
                : "-top-[100%] opacity-0 scale-0"
            }`}
          >
            <li>
              {/* <NavLinks /> */}
              Work
            </li>
            <li>
              About
            </li>
            <li>
              Service
            </li>
            <li>
              Blog
            </li>
            <li>
              Contact
            </li>
          </ul>
    </nav>
  )
}

export default Navbar