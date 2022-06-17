import { useParams, useNavigate } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";
import Cookies from "universal-cookie";
import { useState, useEffect, useRef } from "react";

export function EditDocument() {
    const cookies = new Cookies();
    let documents = cookies.get("documents");

    const navigate = useNavigate();

    const editorRef = useRef(null);
  
    const [documentId, setDocumentId] = useState(0);
    const [document, setDocument] = useState({});
    let params = useParams();
  
    function findDocument() {
      let found = documents.find((element) => element.documentId == documentId);
  
      setDocument(found);
    }
  
    useEffect(() => {
      if (params.id) {
        setDocumentId(parseInt(params.id));
        findDocument();
      }
    }, [documentId]);

    const save = () => {
        if (editorRef.current) {
          //console.log(editorRef.current.getContent());
          let content = editorRef.current.getContent();
          let id = params.id;
          let data = { id: id, content: content };
    
          try {
            fetch("http://localhost:3000/updateDocument", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              credentials: "include",
              body: JSON.stringify(data),
            });
          } catch (error) {
            console.log(error);
          }
          navigate("/documents");
        }
      };

    return(
        <>
        <h1>Edit document: {document?.title} </h1>
        <>
          {" "}
          <Editor
            apiKey="9kynm4z26f02t3tjxi2j4u2bmc5aphhddldyg9qp8t2krq6t"
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue={document?.content}
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
        </></>
    )
}