import { useParams } from "react-router-dom";
import Cookies from "universal-cookie";
import { useState, useEffect } from "react";

export function Document() {
    const cookies = new Cookies();
    let documents = cookies.get("documents");

    //const [document, setDocument] = useState({});

    const [documentId, setDocumentId] = useState(0);
    let params = useParams();

    useEffect(() => {
        if (params.id) {
            setDocumentId(parseInt(params.id));
        }
    }, [documentId]);


   

    console.log(documentId);
    console.log(documents);


   
   

    // useEffect(() => {
    //     setDocument(thisDocument);
    //     console.log(thisDocument); //renders as undefined
    //   }, [documentId]);

 
    

 

    return(<><h1>Document heeere: {params.id}</h1></>)
}