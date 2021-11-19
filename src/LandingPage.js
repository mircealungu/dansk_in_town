import Parse from "parse";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  if (Parse.User.current()) {
    navigate("/exercises");
  }

  return (
    <>
      <h2>
        <br /> <br />
        Don't be like Homer Simpson!
      </h2>

      <img src="simpsons.png" width="100%" />
      <br />
      <br />
      <p>Understand the danish on the signs you see around you in town!</p>
      <p>
        Upload pictures, get translations, and practice till you learn new
        words!
      </p>

      <br />
      <br />
    </>
  );
}
