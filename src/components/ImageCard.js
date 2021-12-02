import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function ImageCard({ imageId, url, words }) {
  return (
    <>
      <br />

      <Card style={{ maxWidth: "320px" }}>
        <Card.Img variant="top" src={url} />

        <ListGroup className="list-group-flush">
          {words.map((e) => (
            <ListGroupItem key={e.id}>
              <Link to={"/translation/" + e.id}>
                <b>{e.get("from")}</b>
              </Link>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Card>
    </>
  );
}
