import styled from 'styled-components'
import Categorias from '../componentes/categorias';
import Footer from '../componentes/footer';
import FooterMobile from '../componentes/footerMobile';
import Header from '../componentes/header';

const StyledContainer=styled.section`
    .background{
        height:100px;
    }
    p{
        color:#888888;
        font-size:24px;
        margin-bottom:20px;
    }
    h2{
        color:#666666;
        font-size:50px;
        margin-bottom:35px;

    }
    .text{
        padding:50px 500px 50px 40px;
        @media all and (max-width:1300px){
            padding:50px 200px 50px 40px;
        }
        @media all and (max-width:900px){
            padding:50px 40px 50px 40px;
        }
    }

`

function Servicios(){

    return(
        <>
        <StyledContainer>
            <Header></Header>
            <div className='text'>
                <p>Red de farmacias</p>
                <h2>Servicios</h2>
                <p>Somos mucho más que una red de farmacias. En Del Plata la atención personalizada y el seguimiento de farmacéuticos comienza en el mostrador y llega hasta casa. El asesoramiento personalizado está enfocado en el bienestar de nuestros clientes. Las 24 horas del día, los 365 días del año.  </p>
                <p>Vacunaciones, tomas de presión y glucosa, asesoramiento en bienestar dermatológico, atención diferenciada para adultos mayores, servicio de extracción de dinero en efectivo, todo en un solo lugar: Del Plata Salud.</p>
                <h2>Del Plata Express</h2>
                <p>Nos contactas, tomamos tu pedido y llegamos donde estés. 
                Sin contacto, a la hora que necesites. 
                Un delivery que puede acercar tu tratamiento a casa y acerca todos los medios de pago. </p>
            </div>
            <Categorias></Categorias>
            

        </StyledContainer>
             <Footer></Footer>
            <FooterMobile></FooterMobile>
        </>
    )
}

export default Servicios;