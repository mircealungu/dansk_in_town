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
  margin-bottom: 1em;
`;

const WordsHolder = styled.div`
  display: flex;
  justify-content: center;
  font-size: large;
  margin-top: 0.2em;
`;

const ButtonsHolder = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2em;
`;

const VerticalButtonsColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2em;
`;

export {
  ImageHolder,
  Image,
  WordsHolder,
  ButtonsHolder,
  VerticalButtonsColumn,
};
