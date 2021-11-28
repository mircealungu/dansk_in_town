import { useEffect, useState } from "react";

import { getTranslations } from "../db/db";

import { Button } from "react-bootstrap";
import * as s from "./Excercises.sc";

export function Exercises() {
  const [translation, setTranslation] = useState();
  const [showingSolution, setShowingSolution] = useState(false);

  useEffect(() => {
    getTranslations().then((translations) => {
      const randomWord =
        translations[Math.floor(Math.random() * translations.length)];
      setTranslation(randomWord);
    });
  }, []);

  if (!translation) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <s.ImageHolder>
        <s.Image alt="" src={translation.get("image").get("file").url()} />
      </s.ImageHolder>

      <s.WordsHolder>
        <b>{translation.get("from")}&nbsp; </b> ={" "}
        {showingSolution ? translation.get("to") : "?"}
      </s.WordsHolder>

      <s.ButtonsHolder>
        {showingSolution ? (
          <>
            <Button onClick={() => window.location.reload(false)}>Next</Button>
          </>
        ) : (
          <div style={{ align: "center" }}>
            <Button
              onClick={() => window.location.reload(false)}
              variant="secondary"
            >
              Too Easy
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button
              style={{ marginRight: "0" }}
              onClick={() => setShowingSolution(true)}
            >
              Show Solution
            </Button>
          </div>
        )}
      </s.ButtonsHolder>
    </>
  );
}
