import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";

import "./styles.css";
import models from "../../modelData/models";

function TopBar() {
  const { userId } = useParams();   
  const  location = useLocation();     
  const [user, setUser] = useState(null);

  useEffect(() => {
    
  }, [userId]);


  const getContextText = () => {

    if (!user) return "Welcome";

    if (location.pathname.includes("photos")) {
      return `Photos of ${user.first_name} ${user.last_name}`;
    }
    return `Information of ${user.first_name} ${user.last_name}`;
  };

  return (
    <AppBar className="topbar-appBar" position="absolute">
      <Toolbar>
        {/* Bên trái */}
        <Typography variant="h6" color="inherit" sx={{ flexGrow: 1 }}>
          Hoàng Văn Nam
        </Typography>

        {/* Bên phải */}
        <Typography variant="h6" color="inherit">
          {getContextText()}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
