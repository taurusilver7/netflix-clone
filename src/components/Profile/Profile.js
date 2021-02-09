import React from "react";
import "./Profile.css";

import Navbar from "../Navbar/Navbar";

import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";

const Profile = () => {
  const user = useSelector(selectUser);
  return (
    <div className="profile">
      <Navbar />
      <div className="profile__body">
        <h1>Edit Profile</h1>
        <div className="profile__info">
          <img
            src="https://st2.depositphotos.com/1006318/5909/v/950/depositphotos_59095529-stock-illustration-profile-icon-male-avatar.jpg"
            alt="profile"
          />
          <div className="profile__details">
            <h2>{user?.email}</h2>
            <div className="profile__plans">
              <h3>Plans (Current plans: Platinum)</h3>
              <p>Renewal date: </p>
              <div className="profile__plan">
                <p>
                  Netflix Standard <br />
                  <span>1080p</span>
                </p>
                <button>Subsrcibe</button>
              </div>
              <div className="profile__plan">
                <p>
                  Netflix Basics <br />
                  <span>480p</span>
                </p>
                <button>Subsrcibe</button>
              </div>
              <div className="profile__plan">
                <p>
                  Netflix Premium <br />
                  <span>4k+HDR</span>
                </p>
                <button>Subsrcibe</button>
              </div>
              <button
                onClick={() => auth.signOut()}
                className="profile__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
