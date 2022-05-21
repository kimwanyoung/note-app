import styled from "styled-components";

const Input = ({ inputText, handleChangeText }) => {
  return (
    <InputBox>
      <InputTitle>
        <input
          name="title"
          value={inputText.title}
          type="text"
          placeholder="글 제목"
          onChange={handleChangeText}
        />
      </InputTitle>
      <InputContent>
        <input
          name="content"
          value={inputText.content}
          type="text"
          placeholder="본문"
          onChange={handleChangeText}
        />
      </InputContent>
    </InputBox>
  );
};
const InputBox = styled.div`
  width: 100%;
  margin-top: 3rem;
`;
const InputTitle = styled.div`
  input {
    width: 100%;
    line-height: 2rem;
    font-family: "ParkYongJun";
    font-size: 1rem;
    outline: none;
    border: none;
    border-radius: 10px;
  }
`;
const InputContent = styled.div`
  margin-top: 1rem;
  input {
    width: 100%;
    font-family: "ParkYongJun";
    font-size: 1rem;
    height: 20rem;
    outline: none;
    border: none;
    border-radius: 10px;
  }
`;

export default Input;
