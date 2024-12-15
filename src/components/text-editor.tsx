import React, { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../firebase-config";

const TextEditor = () => {
  const quillRef = useRef<any>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const isLocalChange = useRef(false);

  const documentRef = doc(db, "documents", "sample-doc");

  const saveContent = () => {
    if (quillRef.current) {
      const content = quillRef.current.getEditor().getContents();
      console.log("saving content to DB: ", content);

      setDoc(documentRef, { content: content.ops }, { merge: true })
        .then(() => console.log("content saved"))
        .catch(console.error);

      isLocalChange.current = false;
    }
  };

  useEffect(() => {
    if (quillRef.current) {
      const editor = quillRef.current.getEditor();
      editor.on =
        ("text-change",
        (delta: any, oldDelta: any, source: any) => {
          isLocalChange.current = true;
          if ((source = "user")) {
            setIsEditing(true);
            saveContent();

            setTimeout(() => setIsEditing(false), 5000);
          }
        });
    }
  });
  return (
    <div className="google-docs-editor">
      <ReactQuill ref={quillRef} />
    </div>
  );
};

export default TextEditor;
