import React, { ChangeEvent, useState } from "react";
import "../item-post/ItemPost.css";
function ItemPost({
  title,
  link,
  content,
  position
}: {
  title: string;
  link: string;
  content: string;
  position: number
}) {
  return (
    <div className="item-post-wrapper">
      <div className={`image-wrapper-${position%3+1}`}>
        <img src={link} />
      </div>
      <h3>{title}</h3>
      <h6>{content}</h6>
    </div>
  );
}

export default ItemPost;
