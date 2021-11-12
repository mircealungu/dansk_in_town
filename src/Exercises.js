import { useEffect, useState } from "react";
import Parse from "parse";

export function Exercises() {
  const [word, setWord] = useState();

  useEffect(() => {
    const Word = Parse.Object.extend("Word");
    const query = new Parse.Query(Word);

    query.find().then((words) => {
      console.log(words);
      const randomWord = words[Math.floor(Math.random() * words.length)];
      console.log(randomWord.get("word"));
      console.log(randomWord.get("translation"));
      setWord(randomWord);
    });
  }, []);

  return (
    <>
      Let's practice some Danish!
      <h1>
        Do youp know the meaning of <b>{word.get("word")}</b>?{" "}
      </h1>
    </>
  );
}
