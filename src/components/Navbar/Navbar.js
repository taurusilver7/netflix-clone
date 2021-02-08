import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [show, setShow] = useState(false);

    const transitionNavbar = () => {
        if(window.scrollY > 100) {
            setShow(true);
        } else setShow(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return () => window.removeEventListener("scroll", transitionNavbar);
    }, []);

  return (
    <div className={`navbar ${show && "navbar__black"}`}>
      <div className="navbar__contents">
        <img
          className="navbar__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="logo"
        />

        <img
          className="navbar__avatar"
          src="https://st2.depositphotos.com/1006318/5909/v/950/depositphotos_59095529-stock-illustration-profile-icon-male-avatar.jpg"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Navbar;
