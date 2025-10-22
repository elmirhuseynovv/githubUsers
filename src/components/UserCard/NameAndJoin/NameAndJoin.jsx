import React from "react";
function NameAndJoin({ user }) {
  const date = new Date(user?.created_at).toDateString();
  return (
    <div className="nameAndJoin">
      <h1 className="name">{user?.name}</h1>
      <p>
        Joined <span className="join">{date}</span>
      </p>
    </div>
  );
}

export default NameAndJoin;
