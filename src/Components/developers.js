import React, { useEffect, useState } from "react";

export function Developer() {
  const [developers, setDevelopers] = useState([]);

  const fetchData = () => {
    return fetch("./fake_data.json")
      .then((response) => response.json())
      .then((data) => setDevelopers(data.moderators));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <table>
      <tbody>
        {developers.length > 0 &&
          developers.map((o, i) => (
            <tr key={i}>
              <th>
                <img className="UserImg" src={o.Img} alt="avatar"></img>
              </th>
              <th>
                <ul>
                  <li>
                    {o.Name} {o.Surname}
                  </li>
                  <li>{o.Age}</li>
                  <li>{o.Gender}</li>
                  <li>{o.Status}</li>
                </ul>
              </th>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
