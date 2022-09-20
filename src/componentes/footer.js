import styled from 'styled-components'


const StyledContainHeader=styled.footer`
     height:60px;
     width:100%;
     background-color:#F1F1F1;
     display:flex;
     align-items:center;
    p{
        font-size: 16px;
        color:#666666;
        margin-left:40px;
    }
    @media all and (max-width:600px){
        margin-bottom:50px;
    }
`;
    

function Footer(){
        return(
            <>
            <StyledContainHeader>

                <p>Legales 2021</p>
               
            </StyledContainHeader>
           
         


            </>
        )
}

export default Footer;