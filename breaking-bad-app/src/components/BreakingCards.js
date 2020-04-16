import React from 'react'; 

import styled from 'styled-components'; 

const TheDiv = styled.div`
    color: red; 
    background-color: black;  
    width: 30%; 
    margin: 6% 0; 
`; 

const TheImg = styled.img`
    width: 50%;    
`; 

const HomieCards = (props) => {

    return(
        <TheDiv>
            <h2>This My Homie: {props.homie.name}</h2>
            <TheImg src={props.homie.img} alt='this is a homies glo-day' />
            <h3>Homie Be Trappin out the Band'o being a {props.homie.occupation.map(job => {return <p>{job}</p>})}</h3>
        </TheDiv>
    )
}; 

export default HomieCards; 