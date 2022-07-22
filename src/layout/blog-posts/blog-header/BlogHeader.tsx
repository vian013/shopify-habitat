import React, { ChangeEvent, useState } from "react";
import "../blog-header/BlogHeader.css";
function BlogHeader({handleSetting}:{handleSetting:React.EventHandler<any>}) {
  const getCurrentDate = () => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    return `${month} ${date}, ${year}`;
  };
  const options: string[] = [
    "All",
    "Chair",
    "Cushion",
    "Furniture",
    "Green",
    "Home",
    "Living room",
    "Pieces",
    "Spotlight",
  ];

  const [tag, setTag] = useState("All");

//   const handleChange = (e: ChangeEvent<any>) => {
//     const val = e.target.value;
//     setTag(val);
//   };

  return (
    <div className="blog-header">
      <div className="blog-header-inner">
        <h1>Blog posts</h1>
        <span className="blog-header-date">{getCurrentDate()}</span>
      </div>
      <div className="blog-header-tag">
        <select defaultValue={tag} onChange={handleSetting}>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default BlogHeader;
