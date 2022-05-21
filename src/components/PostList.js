import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";

const PostList = () => {
  const navigate = useNavigate();
  const moveToMain = () => {
    navigate("/");
  };
  const postList = JSON.parse(localStorage.getItem("posting"));
  return (
    <Template>
      <Header title="Posting List" />
      {postList.map((post, index) => (
        <PostWrapper key={index}>
          <h3>
            {post.title} : {post.content}
          </h3>
          <p>{post.time}</p>
        </PostWrapper>
      ))}
      <Button>
        <button onClick={moveToMain}>글쓰기</button>
      </Button>
    </Template>
  );
};

const Template = styled.div`
  background: lightgray;
  display: flex;
  flex-direction: column;
  width: 35rem;
  height: 40rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5rem;
  border: 2px solid burlywood;
  border-radius: 3rem;
  font-family: "ParkYongJun";
  padding: 3rem;
  overflow: auto;
`;
const PostWrapper = styled.div`
  margin-top: 1rem;
  width: 100%;
  height: 6rem;
  min-height: 5rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 2rem;
  border-radius: 3px;
  overflow:auto;
  h3 {
    font-size: 1.3rem;
  }
  p {
    font-size: 1rem;
  }
`;
const Button = styled.div`
  position:relative;
  height:100%;
  button {
    position:absolute;
    bottom: 0;
    width: 6rem;
    height: 3rem;
    outline: none;
    border: none;
    font-size: 1rem;
    font-family: "ParkYongJun";
    border-radius: 3px;
    &:hover {
      background-color: burlywood;
    }
  }
`;
export default PostList;
