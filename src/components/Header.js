import styled from 'styled-components';

const Header = ({title}) => {
  const time = new Date();
  const currentTime = time.toDateString();
  return(
    <HeaderWrapper>
      <h1>{title}</h1>
      <h3>{currentTime}</h3>
    </HeaderWrapper>
  )
}
const HeaderWrapper = styled.div`
    h3{
      margin-top:1rem;
    }
`

export default Header;

