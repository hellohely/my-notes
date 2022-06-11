import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import {Link} from 'react-router-dom';

export function Documents() {
    const cookies = new Cookies();
    let userId = cookies.get("userId");
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        if (userId === "12345") {
          setLoggedIn(true);
        }
      }, [userId]);

  const [documents, setDocuments] = useState([]);



  useEffect(() => {
    async function getUserData() {
      try {
        const response = await fetch("http://localhost:3000/getDocuments", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });
        const json = await response.json();

        //console.log(json);
        setDocuments(json);
        
      } catch (error) {
        console.log(error);
      }
    }
    getUserData();
  }, []);

//Create html <li> elements of the documents
let lis = documents.map((document, i) => {
    return (
        <li key={i}>
            <p>{document.title}</p>
            <p>{document.created}</p>
        </li>
    );
});
 

  return (
    <>
    {loggedIn && (
        <>
      <h1>Here are your documents</h1>
      <ul>
        {lis}
      </ul>
      <Link to="/editor">Create new document</Link>

      </>
      )}
        {!loggedIn && (
        <>
          {" "}
          <h1>Inte inloggad</h1>{" "}
        </>
      )}
    </>
  );
}
