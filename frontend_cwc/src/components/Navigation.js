import React from "react";

import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <NavLink to="/"> Home </NavLink>
      <NavLink to="/dcpu"> DCPU </NavLink>
      <NavLink to="/cci"> CCI </NavLink>
      <NavLink to="/po"> PO </NavLink>
      <NavLink to="/childrendetails"> ChildrenDetails </NavLink>
      <NavLink to="/notification"> Notification Portal </NavLink>
    </div>
  );
};

export default Navigation;
