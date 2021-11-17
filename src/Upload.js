import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Parse from "parse";
// import { useNavigate } from "react-router";

export function Upload() {
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [imageFile, setImageFIle] = useState();

  async function handleUpload(e) {
    e.preventDefault();

    const Image = Parse.Object.extend("Image");
    const newImage = new Image();

    const file = new Parse.File(imageFile.name, imageFile);
    newImage.set("file", file);

    const Translation = Parse.Object.extend("Translation");
    const newTranslation = new Translation();
    newTranslation.set("from", from);
    newTranslation.set("to", to);
    newTranslation.set("user", Parse.User.current());

    newTranslation.set("image", newImage);

    try {
      await newTranslation.save();
    } catch (error) {
      alert(error);
    }
  }

  function handleFileUpload(e) {
    console.log(e.target);
    console.dir(e.target);
    console.log(e.target.files[0]);
    console.log(e.target.result);

    setImageFIle(e.target.files[0]);
  }

  return (
    <>
      <Form>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Select an image from your computer</Form.Label>
          <Form.Control onChange={handleFileUpload} type="file" />
        </Form.Group>

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
