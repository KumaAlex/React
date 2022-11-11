import React, { useEffect, useState } from 'react';

export function Developers() {
    
  let moderators = [
    {
      Name: "Alex",
      Surname: "Kim",
      Age: 19,
      Gender: "male",
      Img: "https://pngimg.com/uploads/panda/panda_PNG37.png",
      Status: "subJunior WEB developer, 3rd year student of KBTU university",
    }, 
    {
      Name: "Azimbek",
      Surname: "Abdipattaev",
      Age: 19,
      Gender: "male",
      Img: "https://www.freepnglogos.com/uploads/lion-logo-png/lion-logo-7.png",
      Status: "Junior WEB developer, 3rd year student of KBTU university",
    },
    {
      Name: "Alikhan",
      Surname: "Kaliev",
      Age: 20,
      Gender: "male",
      Img: "https://images.squarespace-cdn.com/content/v1/58a619e6d2b85757625ede31/1613488931589-HNRVE7NYGSB64O7CM6E9/Untitled+design+-+2021-02-16T152025.674.png",
      Status: "Junior WEB developer, 3rd year student of KBTU university",
    }
  ]
  
  const [developers, setDevelopers] = useState()
  useEffect(() => {
    let demoDevelopers = [];

    for (let i of moderators) {
      demoDevelopers.push( (
        <tr>
            <th> 
              <img className='UserImg' src={i.Img}></img>
            </th>
            <th>
              <ul>
                <li>
                  {i.Name} {i.Surname}
                </li>
                <li>
                  {i.Age}                 
                </li>
                <li>
                  {i.Gender}
                </li>
                <li>
                  {i.Status}
                </li>
              </ul>
            </th>
        </tr>
      )
      )
    }
    setDevelopers(demoDevelopers);
  }, [])


  return (developers);
}