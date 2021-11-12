import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Parse from "parse";
import { useNavigate } from "react-router";

export default function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  function handleLoginAttempt(e) {
    e.preventDefault();
    console.log("prevented default");

    console.log(username);
    console.log(password);

    const user = new Parse.User();
    user.setPassword(password);
    user.setUsername(username);
    user.logIn().then((loggedInUser) => {
      console.log(loggedInUser);
      navigate("/exercises");
    });
  }

  return (
    <>
      <br />
      <br />
      <Form>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username address</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>
        <Button onClick={handleLoginAttempt} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
