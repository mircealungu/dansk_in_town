import { Form, Button } from "react-bootstrap";
import { NarrowSpace } from "./Upload.sc";
import Parse from "parse";

export default function Translation({
  translation,
  setFrom,
  setTo,
  deleteTranslation,
}) {
  async function automaticTranslation(e) {
    e.preventDefault();

    let result = await Parse.Cloud.run("google_translate", {
      word_to_translate: translation.from,
    });
    setTo(translation, result);
  }
  return (
    <>
      <div style={{ display: "flex" }}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Word</Form.Label>
          <Form.Control
            autoFocus
            value={translation.from}
            type="text"
            onChange={(e) => setFrom(translation, e.target.value)}
          />
        </Form.Group>

        <NarrowSpace />

        <Form.Group className="mb-3" controlId="formBasicTranslation">
          <Form.Label>Translation</Form.Label>
          <a href="/" onClick={automaticTranslation}>
            (auto)
          </a>
          <Form.Control
            type="text"
            value={translation.to}
            onChange={(e) => setTo(translation, e.target.value)}
          />
        </Form.Group>

        <Button
          tabIndex="-1"
          onClick={(e) => deleteTranslation(translation)}
          variant="link"
        >
          x
        </Button>
      </div>
    </>
  );
}
