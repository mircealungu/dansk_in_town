import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Parse from "parse";
import { useNavigate } from "react-router";

export function Upload() {
  const [word, setWord] = useState();
  const [translation, setTranslation] = useState();

  async function handleUpload(e) {
    e.preventDefault();
    console.log("prevented default");

    console.log(word);
    console.log(translation);

    const Word = Parse.Object.extend("Word");
    const newWord = new Word();
    newWord.set("word", word);
    newWord.set("translation", translation);
    newWord.set("user", Parse.User.current());
    try {
      const newWordReference = await newWord.save();
      alert("succes");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Word</Form.Label>
          <Form.Control type="text" onChange={(e) => setWord(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicTranslation">
          <Form.Label>Translation</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setTranslation(e.target.value)}
          />
        </Form.Group>
        <Button onClick={handleUpload} variant="primary" type="submit">
          Upload
        </Button>
      </Form>
    </>
  );
}
