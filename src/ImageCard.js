import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function ImageCard({ imageId, url, words }) {
  return (
    <>
      <br />

      <Card style={{ maxWidth: "320px" }}>
        <Link to={"/edit/" + imageId}>
          <Card.Img variant="top" src={url} />
        </Link>
        <ListGroup className="list-group-flush">
          {words.map((e) => (
            <ListGroupItem key={e.id}>
              <b>{e.get("from")}</b> = {e.get("to")}
            </ListGroupItem>
          ))}
        </ListGroup>
      </Card>
    </>
  );
}
