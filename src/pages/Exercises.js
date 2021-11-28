import { useEffect, useState } from "react";

import { getTranslations } from "../db/db";

import { Button } from "react-bootstrap";

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
      <h1>
        <img
          alt=""
          style={{ maxWidth: "100%", maxHeight: "320px" }}
          src={translation.get("image").get("file").url()}
        />
        <br />
        <b>{translation.get("from")}</b> ={" "}
        {showingSolution ? translation.get("to") : "?"}
      </h1>

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
          &nbsp;
          <Button onClick={() => setShowingSolution(true)}>
            Show Solution
          </Button>
        </div>
      )}
    </>
  );
}
