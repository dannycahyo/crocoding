import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Profile({ userId }) {
  const [comment, setComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  useEffect(() => {
    setComment("");
  }, [userId]);

  return (
    <div>
      <h2>Profile of user {userId}</h2>
      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Write a comment"
      />
    </div>
  );
}
