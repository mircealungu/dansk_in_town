import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router";

import Translation from "./Translation";
import { uploadImageAndWords } from "../../db/db";

function generateUID() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

export function Upload() {
  const [translations, setTranslations] = useState([
    { id: generateUID(), to: "", from: "" },
  ]);
  const [imageFile, setImageFile] = useState();
  const navigate = useNavigate();

  async function handleUpload(e) {
    e.preventDefault();

    await uploadImageAndWords(imageFile, translations);

    navigate("/myimages");
  }

  function handleFileUpload(e) {
    setImageFile(e.target.files[0]);
  }

  function addNewTranslation() {
    setTranslations([...translations, { id: generateUID(), to: "", from: "" }]);
  }

  function setFrom(translation, newValue) {
    const updatedList = translations.map((t) =>
      t.id !== translation.id
        ? t
        : { id: translation.id, from: newValue, to: translation.to }
    );

    setTranslations(updatedList);
  }

  function setTo(translation, newValue) {
    const updatedList = translations.map((t) =>
      t.id !== translation.id
        ? t
        : { id: translation.id, from: translation.from, to: newValue }
    );
    setTranslations(updatedList);
  }

  function deleteTranslation(translation) {
    setTranslations(translations.filter((t) => t.id !== translation.id));
  }

  return (
    <>
      {imageFile && (
        <img
          alt=""
          style={{ maxWidth: "400px" }}
          src={URL.createObjectURL(imageFile)}
        />
      )}

      <Form>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Select an image from your computer</Form.Label>
          <Form.Control onChange={handleFileUpload} type="file" />
        </Form.Group>

        {translations.map((translation) => (
          <Translation
            key={translation.id}
            translation={translation}
            setFrom={setFrom}
            setTo={setTo}
            deleteTranslation={deleteTranslation}
          />
        ))}

        <Button onClick={addNewTranslation} variant="light">
          Add new translation
        </Button>
        <br />
        <br />

        <Button
          onClick={handleUpload}
          disabled={!imageFile}
          variant="primary"
          type="submit"
        >
          Upload
        </Button>
      </Form>
    </>
  );
}