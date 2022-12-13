import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

function NavLink({ to, children }) {
  return (
    <a href={to} className={`mx-4`}>
      {children}
    </a>
  );
}

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute top-0 left-0 right-0 h-screen w-screen bg-accent bg-opacity-80 transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex items-center filter drop-shadow-md bg-transparent h-20">
        {" "}
        {/*logo container*/}
        <a className="text-xl font-semibold" href="/">
          <span className={styles.logo}>
            <Image
              src="/assets/icons/azathlogo-sm.png"
              alt="Chains logo"
              width={42}
              height={42}
            />
          </span>
        </a>
      </div>
      <div className="flex flex-col ml-4">
        <a
          className="text-xl font-normal my-4"
          href="/"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Home
        </a>
        <a
          className="text-xl font-medium my-4"
          href="/about"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          About
        </a>
        <a
          className="text-xl font-normal my-4"
          href="/services"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Services
        </a>
        <a
          className="text-xl font-normal my-4"
          href="/team"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Team
        </a>
        <a
          className="text-xl font-normal my-4"
          href="/pricing"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Pricing
        </a>
        <a
          className="text-xl font-normal my-4"
          href="/blog"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Blogs
        </a>
        <a
          className="text-xl font-normal my-4"
          href="/contact"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex filter drop-shadow-md text-white  px-4 py-4 h-20 items-center bg-primary bg-opacity-40">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="w-full flex justify-end items-right">
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-accent rounded-lg transform transition duration-300 ease-in-out ${
              open ? "bg-white rotate-45 translate-y-3.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-accent rounded-lg transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-accent rounded-lg transform transition duration-300 ease-in-out ${
              open ? "bg-white -rotate-45 -translate-y-3.5" : ""
            }`}
          />
        </div>

        <div>
          <NavLink to="/" className="hover:bg-accent">
            Home
          </NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/team">Team</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/blog">Blogs</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>
      </div>
    </nav>
  );
}
