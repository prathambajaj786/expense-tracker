import styled from "styled-components";
import HomeComponent from "./module/home";

const Container = styled.div`
display:flex;
flex-direction: column;
align-items:center;
font-family:Montsrreat;
margin:30px 0px 10px;
`;


const Header=styled.span`
color:black;
font-size:25px;
font-weight:bold;
`;

function App() {
  return <Container>    
    <Header>Expense tracker</Header>
    <HomeComponent></HomeComponent>

  </Container>
  
}

export default App;
 