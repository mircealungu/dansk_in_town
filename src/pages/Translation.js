import { useEffect, useState } from "react";

import { Button } from "react-bootstrap";
import * as s from "./Excercises.sc";

import { useParams, useNavigate } from "react-router";
import { getTranslation, getRandomTranslationBut } from "../db/db";

import { Link } from "react-router-dom";

import { User } from "parse";

export function Translation() {
  let params = useParams();
  const navigate = useNavigate();
  let translationId = params.translationId;

  const [translation, setTranslation] = useState();
  const [showingSolution, setShowingSolution] = useState(false);

  useEffect(() => {
    getTranslation(translationId).then((trans) => {
      setTranslation(trans);
    });

  }, [translationId]);

  function handleAnotherWord() {
    getRandomTranslationBut(translationId).then((trans) => {
      console.log(trans);
      setShowingSolution(false);
      setTranslation(trans);
      navigate(`/translation/${trans.id}`);
    });
  }

  if (!translation) {
    return <p></p>;
  }

  console.log("rendering " + translation.id);

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

      <s.VerticalButtonsColumn>
        {!showingSolution ? (
          <div style={{ align: "center" }}>
            <Button
              style={{ marginRight: "0" }}
              onClick={() => setShowingSolution(true)}
            >
              Show Translation
            </Button>
          </div>
        ) : User.current() ? (
          <Link to="/myimages">
            <Button>Back to My Images</Button>
          </Link>
        ) : (
          <>
            <div>
              <Button onClick={handleAnotherWord}>Show me another word</Button>
            </div>
            <br />
            <div>
              <Link to="/about">Learn More</Link> about Dansk in Town.
            </div>
          </>
        )}
      </s.VerticalButtonsColumn>
    </>
  );
}
