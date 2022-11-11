import React, { useEffect, useState } from 'react';
import { Developers } from '../subComponents/developers';



export function AboutUs() {

  return (
    <div className="content AboutUs">

      <h2 id='AboutUsTitle'>About us</h2>

      <div className="AboutUsContent">
        <ul>
          <li>AziLex cinema was created by Alexander Kim and Azimber Abdipataev</li>
          <li>Description: there are many different types of movies and animes</li>
          <li> Partners:

      
            <table>
              <Developers/>
            </table>

            {/* <ol className='internalUL'>
              <li>Alexander Kim: Junior WEB developer, 3rd year student of KBTU university</li>
              <li>Azimbek Apdipattaev: Medium WEB developer, 3rd year student of KBTU university</li>
              <li>Alikhan Kaliev: LOSHARA, 3rd year student of KBTU university</li>
            </ol> */}
          </li>
          <li>Supported by: Yerlan Karabaliyev - React js lecturer, Java developer and etc.</li>
        </ul>

      </div>

    </div>
  );
}
