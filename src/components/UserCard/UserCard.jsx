import React from "react";
import { Stats, UserLinks } from "../index";
import NameAndJoin from "./NameAndJoin/NameAndJoin";
import "./UserCard.css";
import { useSelector } from "react-redux";

function UserCard() {
  const { user } = useSelector((state) => state.user);
  console.log(user);
  return (
    <div className="user">
      <img src={user?.avatar_url} alt="huseynovelmir" className="userImg" />
      <div className="textarea">
        <NameAndJoin user={user} />
        <h3 className="username">@{user?.login || <span>Not Aviable</span>}</h3>
        <p className="userBio">
          {user?.bio || <span> User bio is not Aviable</span>}
        </p>
        <Stats user={user} />
        <UserLinks user={user} />
      </div>
    </div>
  );
}

export default UserCard;
