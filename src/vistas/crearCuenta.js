import styled from 'styled-components'
import Header from '../componentes/header';
import crearf from '../img/crear.jpg'
import Footer from '../componentes/footer';
import FooterMobile from '../componentes/footerMobile';
import { useRef } from 'react';
import { useEffect } from 'react';
import swal from 'sweetalert';
import Categorias from '../componentes/categorias';

const StyledContain=styled.div`
    height:1150px;
    position:relative;
    width:100%;
    @media all and (max-width:750px){
        height:1250px;

    }
    img{
        position:absolute;
        right:50px;
        top:50px;
        @media all and (max-width:1450px){
            width:500px;
        }
        @media all and (max-width:1150px){
            display:none
        }
    }
    footer{
        position:absolute;
        bottom:0px;
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
    section{
        position:absolute;
        left:0px;
        bottom:50px;
    }
`

const StyledForm=styled.form`

    width:500px;
    height:auto;
    background-color:#FAFAFA;
    padding:60px;
    position:absolute;
    left:100px;
    top:150px;
    border-radius:6px;
    @media all and (max-width:750px){
        left:50px;
    }
    @media all and (max-width:550px){
        left:20px;
        width:330px;

    }
    label{
        width:100%;
        color:#222222;
    }
    input{
        width:100%;
        border:none;
        background-color:#FAFAFA;
        border-bottom:1px solid #D8D8D8;
        margin-bottom:20px;
        height:25px;
        display:flex;
        align-items:end;
        outline:none;
    }
    .direccion{
        display:flex;
        input{
            width:31%;
        }
    }
    .prom{
        width:10%;
        margin:0px;
    }
    .labelProm{
        width:90%;
        margin:0px;
        color:#666666;
        @media all and (max-width:550px){
            margin:10px;

        }

    }
    .promo{
        margin-top:30px;
        display:flex;
        align-items:center;
    }
    button{
        border:none;
        border-radius: 20px;
        background-color:#8F2A85;
        color:white;
        font-size:16px;
        padding:20px;
        cursor:pointer;
        margin-top:20px;
        margin-bottom:20px;
        &:hover{
            opacity:0.8;
            background:green;
        }
    }
`

function CrearCuenta(){
    
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
        <Header header="crear"></Header>
        <StyledContain>
                <img loading='lazy' src={crearf} alt='farmacia del plata'/>
                <p className='p1'>¡Hola! Tenemos todo listo</p>
                <p className='p2'>Crear cuenta</p>
                <StyledForm ref={formu}>
                    <label htmlFor='nombre'>Nombre</label>
                    <input type='text' id='nombre'></input>
                    <label htmlFor='apellido'>Apellido</label>
                    <input type='text' id='apellido'></input>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email'></input>
                    <label htmlFor='direccion'>Dirección(Calle)</label>
                    <input type='text' id='direccion'></input>
                    <div className='direccion'>
                          <label htmlFor='numero'>Número</label>
                          <label htmlFor='piso'>Piso</label>
                          <label htmlFor='depto'>Depto</label>
                    </div>
                    <div className='direccion'>
                         <input id='numero' type='text'></input>
                         <input id='piso' type='text'></input>
                         <input id='depto' type='text'></input>
                    </div>
                    <label htmlFor='codigo'>Código postal</label>
                    <input id='codigo' type='text'></input>
                    <label htmlFor='tele' >Teléfono</label>
                    <input id='tel' type='text'></input>
                    <label htmlFor='contra'>Contraseña</label>
                    <input id='contra' type='password'></input>
                    <div className='promo'>       
                        <input className='prom' id='promocione' type='checkbox'/>
                        <label className='labelProm' htmlFor='promocione'>Recibir promociones y novedades</label>
                    </div>
                    <button type='submit'>Crear cuenta</button>
                </StyledForm>
                <Categorias></Categorias>
                <Footer></Footer>
                <FooterMobile></FooterMobile>
        </StyledContain>
        </>
    )
}

export default CrearCuenta;