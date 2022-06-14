import { useParams } from "react-router-dom";
import Cookies from "universal-cookie";
import { useState, useEffect } from "react";

export function Document() {
  const cookies = new Cookies();
  let documents = cookies.get("documents");

  //const [document, setDocument] = useState({});

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

  //console.log(documentId);
  //console.log(documents);
  //console.log(document);

  return (
    <>
      <h1>{document?.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: document?.content }} />
    </>
  );
}
