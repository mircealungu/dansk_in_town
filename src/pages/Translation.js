import { useEffect, useState } from "react";

import { Button } from "react-bootstrap";
import * as s from "./Excercises.sc";

import { useParams } from "react-router";
import { getTranslation } from "../db/db";

import { Link } from "react-router-dom";

export function Translation() {
  let params = useParams();
  let translationId = params.translationId;

  const [translation, setTranslation] = useState();
  const [showingSolution, setShowingSolution] = useState(false);

  useEffect(() => {
    getTranslation(translationId).then((trans) => {
      setTranslation(trans);
    });
  }, []);

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
        {!showingSolution ? (
          <div style={{ align: "center" }}>
            <Button
              style={{ marginRight: "0" }}
              onClick={() => setShowingSolution(true)}
            >
              Show Translation
            </Button>
          </div>
        ) : (
          <Link to="/myimages">
            <Button>Back to My Images</Button>
          </Link>
        )}
      </s.ButtonsHolder>
    </>
  );
}
