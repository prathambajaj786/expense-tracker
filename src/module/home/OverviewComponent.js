import { useState } from "react";
import styled from "styled-components";


const Container = styled.div`
display:flex;
flex-direction: column;
align-items:center;
margin:10px;
font-family:Montsrreat;
width:100%;


`;

const BalancedBox=styled.div`
fon-size:18px;
width:100%;
font-weight:bold;
display:flex;
flex-direction: row;
justify-content:space-between;
align-items:center;


`;

const AddTransaction=styled.div`
background:black;
color:white;
padding:5px 10px
width:100%
border-radius:4px;
text-align:center;
cursor:pointer;
font-weight:bold;  
font-size:15px; 
`;

const AddTransactionCointer=styled.div`
display:flex;
flex-direction:column;
border:1px solid #6e8e9;
gap:10px;

padding:15px 20px;
margin:10px 20px;

& input {
    outline:none;
    padding:10px 12px;
    border-radius:4px;
    border:1px solid #6e8e9;
}
`;

const RadioBox =styled.div`
display:flex;
flex-direction:row;
width:100%;
align-item:center;
`
;
const AddTransactionView = ( ) =>{
    return(
        <AddTransactionCointer>
            <input placeholder="Amount"/>
            <input placeholder="description" />
            <RadioBox> 
                
            <input type="radio" id="expense" name="type" value="EXPENSE " />
                <label htmlFor="expense">Expense</label>
            <input type="radio" id="income" name="type" value="INCOME " />
                <label htmlFor="income">Income</label>
            </RadioBox>
            <AddTransaction>ADD Transaction</AddTransaction>
        </AddTransactionCointer>
    )

};




const OverviewComponent = (props) => {
    const[isAddTxnvisible,toggleAddTxn] = useState(true);
    return <Container>
        <BalancedBox>
            Balance:$10000
            <AddTransaction>{isAddTxnvisible ? "cancle": "ADD"}</AddTransaction>
            
    
        </BalancedBox>
        {isAddTxnvisible && <AddTransactionView/>}
        
        
    </Container>;

    

};
export default OverviewComponent;