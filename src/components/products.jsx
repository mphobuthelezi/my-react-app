import React from "react";
import { Link } from "react-router-dom";

export default function products() {
  return (
    <div>
      <div>Products list </div>
      <ul>
        <li>
          <Link to="produts/01">product 1</Link>
        </li>
        <li>
        <Link to="produts/02">product 2</Link>
        </li>
        <li>
        <Link to="produts/03">product 3</Link>
        </li>
      </ul>
    </div>
  );
}
