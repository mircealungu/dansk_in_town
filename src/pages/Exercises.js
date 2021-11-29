import { useEffect, useState } from "react";

import { getTranslationsForExercises, tooEasy } from "../db/db";

import { Button } from "react-bootstrap";
import * as s from "./Excercises.sc";

export function Exercises() {
  const [translation, setTranslation] = useState();
  const [showingSolution, setShowingSolution] = useState(false);

  useEffect(() => {
    getRandomTranslation();
  }, []);

  function getRandomTranslation() {
    setTranslation();
    getTranslationsForExercises().then((translations) => {
      const randomWord =
        translations[Math.floor(Math.random() * translations.length)];
      setTranslation(randomWord);
    });
  }

  function handleTooEasy() {
    tooEasy(translation).then(() => {
      console.log("saved");

      getRandomTranslation();
      // window.location.reload(false);
    });
  }

  function handleNext() {
    setShowingSolution(false);
    getRandomTranslation();
  }

  if (!translation) {
    return <p></p>;
  }

  return (
    <>
      <s.ImageHolder>
        <s.Image alt="" src={translation.get("image").get("file").url()} />
      </s.ImageHolder>

      <s.WordsHolder>
        <b>{translation.get("from")} </b>
      </s.WordsHolder>
      <s.WordsHolder>
        {showingSolution ? translation.get("to") : "?"}
      </s.WordsHolder>

      <s.ButtonsHolder>
        {showingSolution ? (
          <>
            <Button onClick={handleNext}>Next</Button>
          </>
        ) : (
          <div style={{ align: "center" }}>
            <Button onClick={handleTooEasy} variant="secondary">
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
