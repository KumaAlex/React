import React from 'react';
import { Developer } from '../subComponents/developers';



export function AboutUs() {

  return (
    <div className="content AboutUs">

      <h2 id='AboutUsTitle'>About us</h2>

      <div className="AboutUsContent">

        <ul>

          <li>AziLex cinema was created by Alexander Kim and Azimbek Abdipattaev</li>
          <li>Description: On our AziLex website, you can 
            keep track of news and trends in the film industry and animated cartoons.
            There are reviews of all films of all genres for all ages, from children to 18+</li>
          <li>The main goal of our project is to show our clients the descriptions and ratings of films</li>
          <li>Supported by: Yerlan Karabaliyev - React js lecturer, Java developer and etc.</li>
          <li> Partners: <Developer/> </li>
          

        </ul>

      </div>

    </div>
  );
}
