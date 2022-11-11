import React, { useEffect, useState } from 'react';

export function Jopa() {
    
  let moderators = [
    {
      Name: "Alex",
      Surname: "Kim",
      Age: 19,
      Gender: "male",
      Img: "https://www.pngkey.com/png/full/83-834045_download-panda-png.png",
      Status: "subJunior WEB developer, 3rd year student of KBTU university",
    }, 
    {
      Name: "Azimbek",
      Surname: "Abdipattaev",
      Age: 19,
      Gender: "male",
      Img: "https://sun1-86.userapi.com/s/v1/ig2/QUyMnwyMSRsuy0kb2QjiOddttrlOMVSezLi9zLupG7tUywN7PL5I2-p_4UFg02XolwuyrYhHIyWXBEP9dXSSZrLV.jpg?size=400x400&quality=95&crop=0,111,469,469&ava=1",
      Status: "Junior WEB developer, 3rd year student of KBTU university",
    },
    {
      Name: "Alikhan",
      Surname: "Kaliev",
      Age: 20,
      Gender: "male",
      Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7nUw0zFMXd7_X0f72F9rP1z3E6mNkVSWyDQ&usqp=CAU",
      Status: "Junior WEB developer, 3rd year student of KBTU university",
    }
  ]
  
  const [jopa, setJopa] = useState()
  useEffect(() => {
    let demoJopa = [];

    for (let i of moderators) {
      demoJopa.push( (
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
    setJopa(demoJopa);
  }, [])


  return (jopa);
}