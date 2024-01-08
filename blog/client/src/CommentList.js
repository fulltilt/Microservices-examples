import React from "react";

const CommentList = ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    if (comment.status === "approved") {
      comment = comment.content;
    } else if (comment.status === "pending") {
      comment = "This comment is awaiting moderation";
    } else if (comment.status === "rejected") {
      comment = "This comment has been rejected";
    }
    return <li key={comment.id}>{comment}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
