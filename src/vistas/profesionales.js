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

function Profesionales(){

    return(
        <>
        <StyledContainer>
            <Header></Header>
            <div className='text'>
          
                <h2>Red de profesionales</h2>
                <p>La opción que eligen los profesionales de la salud para adquirir insumos y conocer las últimas novedades del mercado a través de la atención personalizada y el asesoramiento de visitadores. Médicos, enfermeros, odontólogos pueden hacer su pedido de insumos y recibirlo en su consultorio en 24 horas con opciones de financiación adaptadas a cada profesional.
                </p>
                <p>
                Además, quienes forman parte de la red de Profesionales de Del Plata Salud, pueden acceder a talleres, formaciones, conferencias, congresos y formaciones de forma constante. </p>
            </div>
            <Categorias></Categorias>
            

        </StyledContainer>
             <Footer></Footer>
            <FooterMobile></FooterMobile>
        </>
    )
}

export default Profesionales;