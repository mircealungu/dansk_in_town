import simpsonsImage from "../img/simpsons.small.png";

export default function AboutPage() {
  return (
    <>
      <img alt="simpsons" src={simpsonsImage} width="100%" />
      <br />
      <br />
      <p>
        Do you live in Denmark? Wouldn't it be nice if you would understand at
        least the danish on the signs you see around town?
      </p>

      <p>
        Practice Danish vocabulary based on photos taken around town. Either use
        the public photo set that we created by walking everywhere around town,
        or upload and practice with your own photos. Tip: When uploading your
        own you get automatic translations too!
      </p>

      <br />

      <a href="#/signup">
        <h4>Become a Beta-tester</h4>
      </a>
    </>
  );
}
