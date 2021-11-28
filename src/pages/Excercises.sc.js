import styled from "styled-components";

const ImageHolder = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2em;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 320px;
  border: 1px solid gray;
`;

const WordsHolder = styled.div`
  display: flex;
  justify-content: center;
  font-size: xx-large;
  margin-top: 1em;
`;

const ButtonsHolder = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2em;
`;

export { ImageHolder, Image, WordsHolder, ButtonsHolder };
