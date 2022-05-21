import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Button = ({handleSubmitPost}) => {
  const navigate = useNavigate();
  const moveToList = () => {
    navigate('/postlist');
  }
  return (
    <ButtonWrapper>
      <button onClick={moveToList}>글 목록</button>
      <button onClick={handleSubmitPost}>게시하기</button>
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.div`
  width:100%;
  display:flex;
  justify-content:space-between;
  margin-top:1.5rem;
  button{
    width:6rem;
    height:3rem;
    outline:none;
    border:none;
    font-size:1rem;
    font-family: 'ParkYongJun';
    border-radius:3px;
    &:hover{
      background-color:burlywood;
    }
  }
`

export default Button;