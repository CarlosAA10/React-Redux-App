import React from 'react'; 

import HomieCards from './BreakingCards'; 
import styled from 'styled-components'

const FlexCards = styled.div`
    display:flex; 
    flex-wrap: wrap; 
    justify-content: space-around; 
`; 

const BackGround = styled.div`
    background-image: url("https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1528525655/180508-stero-cudi-kanye-tease_w0vnn4")
`; 

const MappedCards = (props) => {
    
    return(
        <BackGround>
            <h2>Mapped Cards</h2>
            <FlexCards>
                {console.log(props.homies, 'the homies')}
                {props.homies.map(homie => {
                    return <HomieCards key={homie.char_id} homie={homie} />
                })}
            </FlexCards>
        </BackGround>
    )
}

export default MappedCards; 