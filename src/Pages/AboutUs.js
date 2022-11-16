import React from 'react';
import { Developer } from '../subComponents/developers';



export function AboutUs() {

  return (
    <div className="content AboutUs">

      <h2 id='AboutUsTitle'>About us</h2>

      <div className="AboutUsContent">

        <ul>

          <li>AziLex cinema was created by Alexander Kim and Azimber Abdipataev</li>
          <li>Description: there are many different types of movies and animes</li>
          <li> Partners: <Developer/> </li>
          <li>Supported by: Yerlan Karabaliyev - React js lecturer, Java developer and etc.</li>

        </ul>

      </div>

    </div>
  );
}
