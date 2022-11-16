import React, { useEffect, useState } from 'react';

export function FooterComponent() {
    
  const footerComponents = [
    {
        Name: "Users and partners",
        foSubCom: [{
            Name: "All about subscriptions",
            Link: "",
            Data: "",
        }, {
            Name: "Bonuses and gifts",
            Link: "",
            Data: "",
        }, {
            Name: "Activate promocode",
            Link: "",
            Data: "",
        }, {
            Name: "Agreement",
            Link: "",
            Data: "",
        }, {
            Name: "About us",
            Link: "",
            Data: "",
        }, {
            Name: "Media contacts",
            Link: "",
            Data: "",
        }, {
            Name: "Add a podcast",
            Link: "",
            Data: "",
        }, {
            Name: "Collaboration",
            Link: "",
            Data: "",
        },]
    },

    {
        Name: "On devices",
        foSubCom: [{
            Name: "TVs and media players",
            Link: "",
            Data: "",
        }, {
            Name: "Mobile devices",    
            Link: "",
            Data: "",
        }, {
            Name: "A computer",    
            Link: "",
            Data: "",
        }, {
            Name: "Connect TV",    
            Link: "",
            Data: "",
        }]
    },

    {
        Name: "Support",
        foSubCom: [{
            Name: "Phone number",
            Link: "",
            Data: "8 800 555 35 35",
        }, {
            Name: "Mail",    
            Link: "",
            Data: "Jopka@gmail.com",
        }, {
            Name: "Q/A",    
            Link: "",
            Data: "We will answer ur Q during 3 days",
        }]
    },
  ]
  
  const [components, setComponents] = useState(footerComponents)

  const fetchData = () => {
    return fetch("").then((response) => response.json()).then((data) => setComponents(data));
  }

  useEffect(() => {
    fetchData();
  },[])


  function sub(object) {
    return (
        <div>
            {object.length > 0 && object.map((obj, ind) => (
                <div className='footerCompSubName' key={ind}><a href={obj.Link} target="_blank" rel="noreferrer">{obj.Name}</a></div>   
            ))}
        </div>
    )
  }



  return (
    <table>

        {components.length > 0 && components.map((o, i) => (
            <td key={o.i}>
                <h2 className='footerCompName'>{o.Name}</h2>
                {sub(o.foSubCom)}
            </td>
        ))}

    </table>

  );
}