import { getDoc, doc, setDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import db from "../firebase-config";
import Button from "./Button";

export const Dromologia = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [dromologia, setDromologia] = useState();

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const dromologiaSnapshot = await getDoc(
        doc(db, "dromologiaKtel", "dromologia")
      );
      setDromologia(dromologiaSnapshot.data());
      setIsLoading(false);
    };
    fetchData();
  }, [setDromologia, setIsLoading]);

  const onHandleChange = (event, whereTo, index) => {


    setDromologia((prevDromologia) => {
      
      const newData = {...prevDromologia};
      const neoDromologio = prevDromologia[whereTo];
      neoDromologio[index] = event.target.value;
      newData[whereTo] = [...neoDromologio];
      return ({...newData});
    });
  };

  const onHandleSubmit = async() => {
    await setDoc(doc(db, "dromologiaKtel", "dromologia"), {
      ...dromologia
    })

    props.onSubmit(0);
  }

  return isLoading ? (
    "Is Loading"
  ) : (
    <div className="dromologiaView">
      <div className="column">
        <h2>Προς Ασπροβάλτα</h2>
        {dromologia["toAsprovalta"].map((dromologio, index) => {
          return (
            <input
              key={index}
              value={dromologio}
              onChange={(event) => onHandleChange(event, "toAsprovalta", index)}
            />
          );
        })}
      </div>
      <Button tittle="ΑΛΛΑΓΗ" click={onHandleSubmit}/>
      <div className="column">
        <h2>Προς Θεσσαλονίκη</h2>
        {dromologia["toThessaloniki"].map((dromologio, index) => {
          return (
            <input
              key={index}
              value={dromologio}
              onChange={(event) =>
                onHandleChange(event, "toThessaloniki", index)
              }
            />
          );
        })}
      </div>
    </div>
  );
};
