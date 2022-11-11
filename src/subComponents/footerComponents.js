import React, { useEffect, useState } from 'react';

export function FooterComponents() {
    
  let footerComponents = [
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
  
  const [components, setComponents] = useState()
  useEffect(() => {
    let demoFooterComponents = [];

    for (let i of footerComponents) {
        demoFooterComponents.push( (
        <tr>
            <th>
                <h2>{i.Name}</h2>
            </th>
            <th>
                <ul>
                    for (let j of {i.foSubCom}) {
                        <li>
                            <h3><a href={j.Link}>{j.Name}</a></h3>
                        </li>
                    }
                </ul>
            </th>
        </tr>
      )
      )
    }
    setComponents(demoFooterComponents);
  }, [])


  return (footerComponents);
}