import styled from "styled-components";

const Form=styled.div`
    padding: 1rem;
    background-color:palevioletred;
    margin: 2rem auto;
    width: 100rem;
    max-width: 95%;
    border-radius: 12px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);

}

& input{
    font: inherit;
    padding: 0.5rem;
    border-radius: 6px;
    border: 0.5px solid #ccc;
    width: 20rem;
    max-width: 100%;
}

& label{
  margin-bottom: 0.01rem;
  display: block;

}


& button{
    display:flex;
    align-items: center;
    padding: 0.2rem;
    background-color:${props=>(props.isValid?'white':'red')};
}`;

export default Form;