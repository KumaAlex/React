import React, { useEffect, useState } from "react";



export function Developer() {
    
  const moderators = [
    {
      ID: 1,
      Name: "Alex",
      Surname: "Kim",
      Age: 19,
      Gender: "male",
      Img: "https://pngimg.com/uploads/panda/panda_PNG37.png",
      Status: "subJunior WEB developer, 3rd year student of KBTU university",
    }, 
    {
      ID: 2,
      Name: "Azimbek",
      Surname: "Abdipattaev",
      Age: 19,
      Gender: "male",
      Img: "https://www.freepnglogos.com/uploads/lion-logo-png/lion-logo-7.png",
      Status: "Junior WEB developer, 3rd year student of KBTU university",
    },
    {
      ID: 3,
      Name: "Alikhan",
      Surname: "Kaliev",
      Age: 20,
      Gender: "male",
      Img: "https://images.squarespace-cdn.com/content/v1/58a619e6d2b85757625ede31/1613488931589-HNRVE7NYGSB64O7CM6E9/Untitled+design+-+2021-02-16T152025.674.png",
      Status: "Junior WEB developer, 3rd year student of KBTU university",
    }
  ]
  
  const [developers, setDevelopers] = useState(moderators)

  const fetchData = () => {
    return fetch("").then((response) => response.json()).then((data) => setDevelopers(data));
  }

  useEffect(() => {
    fetchData();
  },[])


  return(
    <table>
        {developers.length > 0 && developers.map((o, i) => (
            <tr key={o.i}>
                <th> 
                    <img className='UserImg' src={o.Img}></img>
                </th>
                <th>
                    <ul>
                        <li>
                            {o.Name} {o.Surname}
                        </li>
                        <li>
                            {o.Age}                 
                        </li>
                        <li>
                            {o.Gender}
                        </li>
                        <li>
                            {o.Status}
                        </li>
                    </ul>
                </th>
            </tr>
        ))}
    </table>
  )
}