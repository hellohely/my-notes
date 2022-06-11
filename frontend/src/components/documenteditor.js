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
  }, [userId]);

  const editorRef = useRef(null);

  const save = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <>
      {loggedIn && (
        <>
          {" "}
          <Editor
            apiKey="9kynm4z26f02t3tjxi2j4u2bmc5aphhddldyg9qp8t2krq6t"
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue=""
            init={{
              height: 500,
              menubar: "file edit view",
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
              ],
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />
          <button onClick={save}>Save document</button>
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
