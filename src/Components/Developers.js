import React from "react";

export function Developer({ developer }) {
  return (
    <div className="dev-info-block">
      <div>
        <img className="UserImg" src={developer.Img} alt="avatar"></img>
      </div>
      <div className="dev-info">
        <ul>
          <li>
            {developer.Name} {developer.Surname}
          </li>
          <li>{developer.Age}</li>
          <li>{developer.Gender}</li>
          <li>{developer.Status}</li>
          <li>
            <a href={developer.Github} target="_blank" rel="noreferrer">
              Github Page
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
