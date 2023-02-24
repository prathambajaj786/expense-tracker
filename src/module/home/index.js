import styled from "styled-components";
import OverviewComponent from "./OverviewComponent";
import TransactionComponent from "./TransactionComponent";


const Container = styled.div`
display:flex;
flex-direction: column; 
align-items:center;
font-family:Montsrreat;
width:360px;
`;



const HomeComponent = (props) => {
    return <Container>
        <OverviewComponent/>
        <TransactionComponent/>
        
        
    </Container>;

    

};
export default HomeComponent;