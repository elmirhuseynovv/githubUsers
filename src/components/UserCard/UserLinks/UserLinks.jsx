import React from "react";
import Location from "./Location/Location";
import Twitter from "./Twitter/Twitter";
import Website from "./Website/Website";
import Org from "./Org/Org";
function UserLinks({ user }) {
  return (
    <div className="userLinks">
      <Location user={user} />
      <Twitter user={user} />
      <Website user={user} />
      <Org user={user} />
    </div>
  );
}

export default UserLinks;
