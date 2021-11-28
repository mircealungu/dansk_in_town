import simpsonsImage from "../img/simpsons.png";

export default function AboutPage() {
  return (
    <>
      <h2>
        <br /> <br />
        Don't be like Homer Simpson ;)
      </h2>

      <img alt="simpsons" src={simpsonsImage} width="100%" />
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
