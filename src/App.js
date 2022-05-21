import { useState,useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import NoteTemplate from "./components/NoteTemplate";
import PostList from "./components/PostList";

function App() {
  const [inputText, setInputText] = useState({
    title: "",
    content: "",
  });
  const [postList, setPostList] = useState([]);
  const time = new Date();
  const handleChangeText = (e) => {
    const { value, name } = e.target;
    setInputText((inputText) => ({
      ...inputText,
      [name]: value,
    }));
  };
  const handleSubmitPost = (e) => {
    e.preventDefault();
    setPostList((postList) => [
      ...postList,
      {
        title: inputText.title,
        content: inputText.content,
        time: time.toLocaleDateString(),
      },
    ]);

    setInputText({
      title: "",
      content: "",
    });
  };
  localStorage.setItem("posting", JSON.stringify(postList));
  return (
    <Routes>
      <Route
        path="/"
        element={
          <NoteTemplate
            inputText={inputText}
            handleChangeText={handleChangeText}
            handleSubmitPost={handleSubmitPost}
          />
        }
      />
      <Route path="/postlist" element={<PostList postList={postList} />} />
    </Routes>
  );
}

export default App;
