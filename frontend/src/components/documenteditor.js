import { Editor } from "@tinymce/tinymce-react";
import React, { useState, useEffect, useRef } from "react";
import Cookies from "universal-cookie";

export default function DocumentEditor() {
  const cookies = new Cookies();
  let userId = cookies.get("userId");
  const [loggedIn, setLoggedIn] = useState(false);
  console.log(loggedIn);

  useEffect(() => {
    if (userId === "12345") {
      setLoggedIn(true);
    }
  }, []);

  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <>
      {loggedIn && (
        <>
          {" "}
          <h1>Inloggad tjoho</h1>
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
