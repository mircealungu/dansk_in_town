import { useState, useEffect } from "react";
import { getTranslations } from "../db/db.js";
import { Link } from "react-router-dom";
import { Button, Row, Col } from "react-bootstrap";

import ImageCard from "../components/ImageCard";

export function MyImages() {
  const [imagesAndTranslations, setImagesAndTranslations] = useState();
  const [imageId2Url, setImageId2Url] = useState();

  useEffect(() => {
    const _imagesAndTranslations = {};
    const _imageId2Url = {};

    getTranslations().then((translations) => {
      translations.forEach((t) => {
        const imageId = t.get("image").id;
        const imageURL = t.get("image").get("file").url();

        if (!_imagesAndTranslations[imageId]) {
          _imagesAndTranslations[imageId] = [];
          _imageId2Url[imageId] = imageURL;
        }

        _imagesAndTranslations[imageId].push(t);
      });

      setImagesAndTranslations(_imagesAndTranslations);
      setImageId2Url(_imageId2Url);
    });
  }, []);

  if (!imagesAndTranslations || !imageId2Url) {
    return "Loading...";
  }

  const imageIds = Object.keys(imagesAndTranslations);
  imageIds.reverse();

  return (
    <>
      <div style={{ display: "flex" }}>
        <Link to="/upload">
          <Button style={{ marginLeft: "auto" }}>Upload New Image</Button>
        </Link>
      </div>

      <Row xs={1} md={2}>
        {imageIds.map((imageId) => (
          <Col key={imageId}>
            <ImageCard
              imageId={imageId}
              url={imageId2Url[imageId]}
              words={imagesAndTranslations[imageId]}
            />
          </Col>
        ))}
      </Row>
    </>
  );
}
