import styled from 'styled-components';
import Header from './Header';
import Input from './Input';
import Button from './Button';

const NoteTemplate = ({inputText,handleSubmitPost,handleChangeText}) => {
  return(
    <Template>
      {/* Header */}
      <Header title='Note App'/>
      {/* INPUT */}
      <Input inputText={inputText} handleChangeText={handleChangeText}/>
      {/* BUTTON */}
      <Button handleSubmitPost={handleSubmitPost}/>
    </Template>
  )
}
const Template = styled.div`
    background:lightgray;
    display:flex;
    flex-direction:column;
    width:35rem;
    height:40rem;
    margin-left:auto;
    margin-right:auto;
    margin-top:5rem;
    border:2px solid burlywood;
    border-radius:3rem;
    font-family: 'ParkYongJun';
    padding: 3rem;
  `
export default NoteTemplate;