import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a User"></input>
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/1374509/pexels-photo-1374509.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
        <div className="userChatInfo">
          <span>Jack</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
