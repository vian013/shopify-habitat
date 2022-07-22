import React, { ChangeEvent, useState } from "react";



function PageNumber({
  currentPage,
  pageSize,
}: {
  currentPage: number;
  pageSize: number;
}) {

  const list:number[] = (() => {
    let arr: number[] = [];
    for (let i = 0; i < pageSize; i++) {
      arr.push(i);
    }
    return arr
  })();
  if (currentPage == 1) {
    return (
        <ul>
            <li>prev</li>
            {
                list.map(()=>(<li></li>))
            })
        </ul>
    )
  } else if (currentPage == pageSize) {
    return (
        <ul></ul>
    )
  } else {
    return (
        <ul></ul>
    );
  }
}

export default PageNumber;
