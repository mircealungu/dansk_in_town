import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Parse from "parse";
// import { useNavigate } from "react-router";

export function Upload() {
  const [from, setFrom] = useState();
  const [to, setTo] = useState();

  async function handleUpload(e) {
    e.preventDefault();

    const Translation = Parse.Object.extend("Translation");
    const newTranslation = new Translation();
    newTranslation.set("from", from);
    newTranslation.set("to", to);
    newTranslation.set("user", Parse.User.current());
    try {
      await newTranslation.save();
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Word</Form.Label>
          <Form.Control type="text" onChange={(e) => setFrom(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicTranslation">
          <Form.Label>Translation</Form.Label>
          <Form.Control type="text" onChange={(e) => setTo(e.target.value)} />
        </Form.Group>
        <Button onClick={handleUpload} variant="primary" type="submit">
          Upload
        </Button>
      </Form>
    </>
  );
}
