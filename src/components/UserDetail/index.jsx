import React from "react";
import {Paper, Typography} from "@mui/material";

import "./styles.css";
import {Link, useParams} from "react-router-dom";
import models from "../../modelData/models";

/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail() {
  const { userId } = useParams();
  const user = models.userModel(userId); // get in info of user

    return (
        <>
        <div className="profile-container">
        <Paper elevation={3} className="profile-box">
          <Typography variant="h6">Information of User:</Typography>
          <Typography variant="body1">Full Name: {user.first_name} {user.last_name}</Typography>
          <Typography variant="body1">job: {user.occupation}</Typography>
          <Typography variant="body1">Address: {user.location}</Typography>
          <Typography variant="body1">Description: {user.description}</Typography>
        </Paper>
          </div>

          <div className="photoOfUser">
            <Paper className="photoBox">
                <Link className="photoLink" to = {`/photos/${userId}`}>photoOfUser</Link>
            </Paper>
          </div>
        </>
    );
}

export default UserDetail;
