import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({currentUser, updateUser}) {


  const handleLogOut = (e) => {
    e.preventDefault();
      fetch(`/logout`, {
        method:"DELETE"
      })
      .then(res =>{
        if(res.ok){
          updateUser(false)
        }
      })
    }

  return (
    <nav>
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/browse">Browse</NavLink>
      {currentUser? <NavLink to="/">Login/SignUp</NavLink>:
        <NavLink to="/" onClick={handleLogOut}>Log Out</NavLink>}
    </nav>
  );
}

export default NavBar;