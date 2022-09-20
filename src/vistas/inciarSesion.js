import styled from 'styled-components'
import Header from '../componentes/header';
import Footer from '../componentes/footer';
import FooterMobile from '../componentes/footerMobile';
import iniciar from '../img/entrar.jpg'
import { Link} from 'react-router-dom';
import swal from 'sweetalert';
import { useRef } from 'react';
import { useEffect } from 'react';
import Categorias from '../componentes/categorias';
const StyledContain=styled.div`
    height:550px;
    width:100%;
    img{
        position:absolute;
        right:50px;
        top:150px;
        @media all and (max-width:1450px){
            width:500px;
        }
        @media all and (max-width:1150px){
            display:none
        }
    }
    .background{
        height:500px;
    }
    
    
`
const StyledContainer=styled.div`
    width:100%;
    .background{
        height:647px;
    }
    .p1{
        color:#888888;
        font-style: Medium;
        font-size: 24px;
        padding-top:30px;
        padding-left:70px;
        font-weight: 500;
        @media all and (max-width:550px){
            padding-left:20px;
        }
    }
    .p2{
        color:#888888;
        font-weight: 500;
        font-size: 44px;
        margin-top:10px;
        padding-left:70px;
        @media all and (max-width:550px){
            padding-left:20px;
        }
    }


`
const StyledForm=styled.form`

    width:500px;
    height:auto;
    background-color:#FAFAFA;
    padding:60px;
    position:absolute;
    left:100px;
    top:250px;
    border-radius:6px;
    @media all and (max-width:550px){
       padding:20px;
    }
    @media all and (max-width:750px){
        left:50px;
    }
    @media all and (max-width:550px){
        left:20px;
        width:330px;

    }
    label{
        width:100%;
        color:#8F2A85;

    }
    input{
        width:100%;
        border:none;
        color:#222222;
        background-color:#FAFAFA;
        border-bottom:1px solid #D8D8D8;
        margin-bottom:20px;
        height:25px;
        display:flex;
        align-items:end;
        outline:none;
    }
    button{
        border:none;
        border-radius: 20px;
        background-color:#8F2A85;
        margin-right:20px;
        color:white;
        font-size:16px;
        padding:20px;
        cursor:pointer;
        margin-top:20px;
        margin-bottom:20px;
        @media all and (max-width:550px){
            width:100%;
        }
        &:hover{
            opacity:0.8;
            background:green;
        }
    }

    div{
        display:flex;
        align-items:center;
        margin-top:20px;

    }
    p{
        color:#666666;
    }
    a{
        color:#666666;
    }
    hr{
        margin-top:20px;
    }
    .restaurar{
        @media all and (max-width:550px){
            display:block;
            width:100%;
        }
    }
    `

function IniciarSesion(){
    
    const formu=useRef()
    const formulario=()=>{
            formu.current.addEventListener('submit',(e)=>{
                e.preventDefault()
                swal("La implementación esta en proceso, por favor vuelve intentar mas adelante");
            })
    }
    useEffect(()=>{
        formulario()
    })

    return(
        <>
        <StyledContainer>
            <Header header="iniciar"></Header>
            <p className='p1'>¡Que lindo verte de vuelta!</p>
            <p className='p2'>Ingresar</p>
             <StyledContain>
                    <img loading='lazy' src={iniciar} alt='farmacia'/>
            </StyledContain>
            <StyledForm ref={formu}>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email'></input>
                <label htmlFor='password'>Contraseña</label>
                <input type='password' id='password'></input>
                <button type='submit'>Entrar</button>
                <label className='restaurar'>Restaurar contraseña</label>
                <hr></hr>
                <div>                <p>¿No estás registrado?</p><Link to='/crear-cuenta'>Crear cuenta</Link>
            </div>
            </StyledForm>
            <Categorias></Categorias>
            <Footer></Footer>
            <FooterMobile></FooterMobile>
        </StyledContainer>
        </>
    )
}

export default IniciarSesion;