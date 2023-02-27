import { useState } from "react";
import styled from "styled-components";
import OverviewComponent from "./OverviewComponent";
import TransactionComponent from "./TransactionComponent";
//coommment

const Container = styled.div`
display:flex;
flex-direction: column; 
align-items:center;
font-family:Montsrreat;
width:360px;
`;



const HomeComponent = (props) => {
    const [transactions,updateTransaction]=useState([]);
    const addTransaction=(payload)=>{
const transactionArray=[...transactions];
transactionArray.push(payload);
updateTransaction(transactionArray);

    };
    return <Container>
        <OverviewComponent addTransaction={addTransaction}/>
        <TransactionComponent transactions={transactions}/>
        
        
    </Container>;

    

};
export default HomeComponent;