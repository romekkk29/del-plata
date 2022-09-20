import styled from 'styled-components'
import tel from '../img/tel.svg'
import far from '../img/Shape.svg'

const StyledContainHeader=styled.div`
     overflow:hidden;
     height:50px;
     width:100%;
     align-items:center;
     position:fixed;
     bottom:0px;
     display:none;
     justify-content:center;
     z-index:213123123;
     @media all and (max-width:900px){
        display:flex;
     }
     p{
        font-size: 18px;
        color:#FFFFFF;
        margin:0px;

     }
     img{
        margin:0px;
        margin-right:10px;

     }
     a{
        height:100%;
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        text-decoration:none;
     }
    .tel{
        background-color:#7ACC00;
    }
    .far{
        background-color:#8F2A85;
    }
`;
    

function FooterMobile(){

       
        return(
            <>
            <StyledContainHeader>

                <a href="tel:08002664220" target='_blank' className='tel'>
                    <img src={tel}></img>
                    <p>0800</p>
                </a>
                
                <a href='https://www.farmaciasdelplata.com/shop' target='_blank' className='far'>
                    <img src={far}></img>
                    <p>Farmacia</p>
                </a>
               
            </StyledContainHeader>
           
         


            </>
        )
}

export default FooterMobile;