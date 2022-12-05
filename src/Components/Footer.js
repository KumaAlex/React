import React from "react";

export function Footer() {
  // const [components, setComponents] = useState([]);

  let date = new Date();
  let year = date.getFullYear();
  //
  // const fetchFakeData = () => {
  //   return fetch("./fake_data.json")
  //     .then((response) => response.json())
  //     .then((data) => setComponents(data.footerComponents));
  // };
  //
  // useEffect(() => {
  //   fetchFakeData().then();
  // }, []);

  // function sub(object) {
  //   return (
  //     <div>
  //       {object.length > 0 &&
  //         object.map((obj, ind) => (
  //           <div className="footerCompSubName" key={ind}>
  //             <a href={obj.Link} target="_blank" rel="noreferrer">
  //               {obj.Name}
  //             </a>
  //           </div>
  //         ))}
  //     </div>
  //   );
  // }

  return (
    <div className="footer">
      {/* <table>
        <tbody>
          {components.length > 0 &&
            components.map((o, i) => (
              <td key={i}>
                <h2 className="footerCompName">{o.Name}</h2>
                {sub(o.foSubCom)}
              </td>
            ))}
        </tbody>
      </table> */}
      <div className="footer-content">
        {/*{components.length > 0 &&*/}
        {/*  components.map((o, i) => (*/}
        {/*    <div key={i} className="sub-content">*/}
        {/*      <h2 className="footerCompName">{o.Name}</h2>*/}
        {/*      {sub(o.foSubCom)}*/}
        {/*    </div>*/}
        {/*  ))}*/}
        <p className="">Copyright &copy; {year}</p>{" "}
        <p className="">AZILEX CINEMA.</p>
        <p className="">All rights reserved</p>
      </div>
    </div>
  );
}
