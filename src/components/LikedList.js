import React from "react";

export default function LikedList({ liked }) {
  return (
    <div>
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
