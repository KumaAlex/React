import React, { useEffect, useState } from "react";
import { Developer } from "../Components/Developers";

export function AboutUs() {
  const [developers, setDevelopers] = useState([]);

  const fetchData = () => {
    return fetch("./fake_data.json")
      .then((response) => response.json())
      .then((data) => setDevelopers(data.moderators));
  };

  useEffect(() => {
    fetchData().then();
  }, []);

  return (
    <div className="content AboutUs">
      <h2 id="AboutUsTitle">About us</h2>

      <div className="AboutUsContent">
        <ul>
          <li>
            AziLex cinema was created by Alexander Kim and Azimbek Abdipattaev
          </li>
          <li>
            Description: On our AziLex website, you can keep track of news and
            trends in the film industry and animated cartoons. There are reviews
            of all films of all genres for all ages, from children to 18+
          </li>
          <li>
            The main goal of our project is to show our clients the descriptions
            and ratings of films
          </li>
          <li>
            Supported by: Yerlan Karabaliyev - React js lecturer, Java developer
            and etc.
          </li>
          <li>
            {" "}
            Partners:{" "}
            <div>
              {developers.map((developer) => (
                <Developer developer={developer} key={developer.ID} />
              ))}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
