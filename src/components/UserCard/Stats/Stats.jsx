import React from "react";
import "./Stats.css";

function Stats({user}) {
  return (
    <ul className="stats">
      <li>
        <h4>Public Repos</h4>
        <h2 className="repo">{user?.public_repos}</h2>
      </li>
      <li>
        <h4>Followers</h4>
        <h2 className="followers">{user?.followers}</h2>
      </li>
      <li>
        <h4>Following</h4>
        <h2 className="following">{user?.following}</h2>
      </li>
    </ul>
  );
}

export default Stats;
