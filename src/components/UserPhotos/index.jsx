import React from "react";
import { Paper, Typography ,Divider} from "@mui/material";

import "./styles.css";
import {useParams, Link} from "react-router-dom";
import models from "../../modelData/models";

/**
 * Define UserPhotos, a React component of Project 4.
 */
function UserPhotos () {
    const {userId} = useParams();
    const photos = models.photoOfUserModel(userId)
    const user = models.userModel(userId)
    return (
      <div style={{ padding: "20px" }}>
      <Typography variant="h5" gutterBottom>
        Photos of {user.first_name} {user.last_name}
      </Typography>

      {photos.map((photo) => (
        <Paper className="infoPhoto" key={photo._id} elevation={3}>
          {/* Ảnh */}
        
        <div className="boxofimage">
            <img className="image"
                src={`/images/${photo.file_name}`}
                alt="user_photo"
              />
        </div>

          {/* Thời gian tạo ảnh */}
          <Typography variant="body2" className="date">
            Uploaded at: {new Date(photo.date_time).toLocaleString()}
          </Typography>

          {photo.comments && photo.comments.length > 0 ? (
          <>
            <Divider className="comment-divider" />
            <Typography className="comment-title" variant="subtitle1">Comments:</Typography>
            {photo.comments.map((comment) => (
              <div key={comment._id} className="comment-wrapper">
                <Typography className="comment-body" variant="body2">
                  <Link
                    to={`/users/${comment.user._id}`}
                    className="comment-link"
                  >
                    {comment.user.first_name} {comment.user.last_name}
                  </Link>{" "}
                  at {new Date(comment.date_time).toLocaleString()}
                </Typography>
                <Typography className="comment-body" variant="body1">{comment.comment}</Typography>
              </div>
            ))}
          </>
        ) : (
          <Typography className="no-comments" variant="body2">
            No comments.
          </Typography>
        )}
        </Paper>
      ))}
    </div>
    );
}

export default UserPhotos;
