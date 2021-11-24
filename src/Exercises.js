import { useEffect, useState } from "react";

import { getTranslations } from "./db/db";

export function Exercises() {
  const [translation, setTranslation] = useState();

  useEffect(() => {
    getTranslations().then((translations) => {
      const randomWord =
        translations[Math.floor(Math.random() * translations.length)];
      setTranslation(randomWord);
    });
  }, []);

  if (!translation) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>
        <img
          alt=""
          style={{ maxWidth: "100%" }}
          src={translation.get("image").get("file").url()}
        />
        <b>{translation.get("from")}</b> = ?{" "}
      </h1>
    </>
  );
}
