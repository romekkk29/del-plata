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
    height:700px;

`

function Organizacional(){

    return(
        <>
        <StyledContainer>
            <Header></Header>
            <div className='text'>
          
                <h2>Red de organizaciones</h2>
                <p>Trabajamos codo a codo con hospitales, clínicas y empresas en la provisión de insumos médicos y de protección e higiene. Además, asesoramos a las organizaciones para cuidar el bienestar de sus colaboradores.
                </p>
            </div>
            <Categorias></Categorias>
            

        </StyledContainer>
             <Footer></Footer>
            <FooterMobile></FooterMobile>
        </>
    )
}

export default Organizacional;