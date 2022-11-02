import React, { useEffect, useState } from 'react';

export function Jopa() {
    
  let moderators = [
    {
      Name: "Alex",
      Surname: "Kim",
      Age: 19,
      Gender: "male",
      Status: "Junior WEB developer, 3rd year student of KBTU university",
    }, 
    {
      Name: "Azimbek",
      Surname: "Abdipattaev",
      Age: 19,
      Gender: "male",
      Status: "Medium WEB developer, 3rd year student of KBTU university",
    },
    {
      Name: "Alikhan",
      Surname: "Kaliev",
      Age: 20,
      Gender: "male",
      Status: "LOH, Junior WEB developer, 3rd year student of KBTU university",
    }
  ]
  
  const [jopa, setJopa] = useState()
  useEffect(() => {
    let demoJopa = [];

    for (let i of moderators) {
      demoJopa.push( (
        <tr>
              <th>
                <img className='UserImg' src='https://pngimg.com/uploads/panda/panda_PNG8.png'></img>
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
    setJopa(demoJopa);
  }, [])


  return (jopa);
}