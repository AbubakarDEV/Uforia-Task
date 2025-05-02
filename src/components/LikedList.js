import React from "react";

export default function LikedList({ liked }) {
  return (
    <div>
      <h2>Liked Submissions</h2>
      <ul>
        {liked.map((item) => (
          <li key={item.id}>
            {item.data.firstName} {item.data.lastName} - {item.data.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
