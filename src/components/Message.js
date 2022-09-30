import { useState, useEffect } from "react";
import { getDoc, doc, setDoc } from "firebase/firestore";
import db from "../firebase-config";

import Button from "./Button";

export const Message = (props) => {
  const [message, setMessage] = useState();
  const [color, setColor] = useState();
  const [fontSize, setFontSize] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const messageSnapshot = await getDoc(doc(db, "otherData", "colonel"));
      const fetchedData = messageSnapshot.data();
      setMessage(fetchedData.message);
      setColor(fetchedData.color);
      setFontSize(fetchedData.size);
      setIsLoading(false);
    };
    fetchData();
  }, [setIsLoading, setMessage, setColor, setFontSize]);

  const onHandleSubmit = async() => {
    await setDoc(doc(db, 'otherData', 'colonel'), {
      color,
      message,
      size: fontSize
    });
    props.onSubmit(0);
  }

  return isLoading ? (
    "IS LOADING"
  ) : (
    <div className="messageView">
      <textarea
        cols={30}
        rows={3}
        type="text"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <div style={{marginBottom: "25px"}}>
        <label htmlFor="color">Χρώμα Γραμματοσειράς</label>
        <input
          type="color"
          style={{marginLeft: "15px"}}
          id="color"
          name="color"
          value={color}
          onChange={(event) => setColor(event.target.value)}
        />
      </div>
      <label htmlFor="fontSize">Μέγεθος Γραμματοσειράς</label>
      <input
        type="range"
        id="fontSize"
        name="fontSize"
        min="1"
        max="5"
        onChange={(event) => setFontSize(event.target.value)}
      />
      <label htmlFor="fontSize">x {fontSize}</label>

      <Button click={onHandleSubmit} tittle="ΕΝΤΑΞΕΙ"></Button>
    </div>
  );
};
