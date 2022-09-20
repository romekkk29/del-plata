import styled from 'styled-components'
import Header from '../componentes/header';
import Footer from '../componentes/footer'
import Farmacia from '../img/farmacia.png'
import Sucursales from '../img/sucursales.png'
import iconFarmacia from '../img/farmacia.svg'
import iconSucursales from '../img/sucursales.svg'
import { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import arrow from '../img/Arrow.svg'
import Servicios from '../img/servicios.png'
import Categorias from '../componentes/categorias';
import Profesional from '../img/profesionales.png'
import Organizacional from '../img/organizaciones.png'
import iconProfesional from '../img/Case.svg'
import iconOrganizacional from '../img/iconorg.svg'
import iconServicios from '../img/iconservice.svg'
import FooterMobile from '../componentes/footerMobile';
const StyledContainer=styled.div`
   
    .texto{
        color:#888888;
        padding-left:40px;
        margin-top:60px;
        @media all and (max-width:1100px){
            padding-left:20px;
        }
    }
    .texto img {
        margin-top:120px;
        @media all and (max-width:1100px){
            margin-top:10px;
        }
        @media all and (max-width:395px){
            margin-top:0px;
        }
    }
    .texto1{
        font-weight: 500;
        font-size: 16px;
        margin-bottom:20px;
        @media all and (max-width:1100px){
            font-size: 14px;
        }
    }
    .texto2{
        font-weight: 500;
        font-size: 44px;
        @media all and (max-width:1100px){
            font-size: 28px;
        }
    }
    .containTexto2{
        width:600px;
        margin:0px;
        @media all and (max-width:1100px){
            width:50%;
        }
        @media all and (max-width:720px){
            width:100%;
        }
    }
    .farmacia{
        width: 565px;
        margin:0px;
        height: 425px;
        background-size:cover;
        position:absolute;
        right:40px;
        top:200px;
        cursor:pointer;
        display:flex;
        justify-content:center;
        align-items:center;
        @media all and (max-width:1100px){
            left:0px;
            width: 565px;
            top:430px;
            height: 320px;
        }
        @media all and (max-width:560px){
            width: 100%;

        }
        .oscureceFarmacia{
            width:100%;
            height:100%;
            background-image:url(${Farmacia});
            position:absolute;
            &:hover{
                filter: brightness(70%);
            }
            &:hover .pedro{
                display:none;
            }
        }
        img{
            z-index:12;
            width:80px;
            height:80px;
            display:none;
            @media all and (max-width:700px){
                display:block !important;
                left:10px;
                top:140px;
                position:absolute;
            }
            &:hover{
                    filter: brightness(70%);
            }
        }
      
    }
    .farmacia p {
        position:absolute;
        left:30px;
        bottom:30px;
        font-weight: 500;
        font-size: 40px;
        color: #FFFFFF;
    }
    .sucursales{
        width: 1073px;
        margin:0px;
        height: 464px;
        position:absolute;
        left:40px;
        top:320px;
        background-size:cover;
        position:relative;
        cursor:pointer;
        display:flex;
        justify-content:center;
        align-items:center;
        @media all and (max-width:1100px){
            left:0px;
            width: 100%;
            top:390px;
            height: 300px;
        }
        .oscureceSucursal{
            width:100%;
            height:100%;
            background-image:url(${Sucursales});
            position:absolute;
            &:hover{
                filter: brightness(70%);
            }
        }
        img{
            z-index:12;
            width:80px;
            height:80px;
            display:none;
            @media all and (max-width:700px){
                display:block !important;
                left:10px;
                top:140px;
                position:absolute;
            }
            &:hover{
                    filter: brightness(70%);
            }
        }
       
    }
    .sucursales p {
        position:absolute;
        left:30px;
        bottom:30px;
        font-weight: 500;
        font-size: 40px;
        color: #FFFFFF;
    }
    .imagenes{
        width:100%;
        height:900px;
        @media all and (max-width:1100px){
            height:700px;
        }
    }
    #galeria{
        display:flex;
        flex-wrap:wrap;
        margin-bottom:100px;
        margin-top:20px;
        gap:10px;
        @media all and (max-width:429px){
            a{
                width:100%;
            }
        }
      
        @media all and (max-width:429px){
            width: 100vw;
        }
        img{
            z-index:12;
            width:80px;
            height:80px;
            left:20px;
            bottom:80px;
            display:none;
            position:absolute;
            @media all and (max-width:700px){
                display:block !important;
            }
            &:hover{
                    filter: brightness(70%);
            }}
        p {
                position:absolute;
                left:30px;
                bottom:30px;
                font-weight: 500;
                font-size: 30px;
                color: #FFFFFF;
            }
        .Servicios{
            width: 429px;
            margin:0px;
            height: 440px;
            position:relative;
            @media all and (max-width:429px){
                      width:100%;
                
            }
            .oscureceServicios{
                width:100%;
                height:100%;
                background-image:url(${Servicios});
                background-repeat:no-repeat;
                position:absolute;
                @media all and (max-width:429px){
                    width: 100%;
                }
                &:hover{
                    filter: brightness(70%);
                }
            }
            .oscureceProfesionale{
                background-image:url(${Profesional});
            }
            .oscureceOrganiza{
                background-image:url(${Organizacional});
            }

            
         
        
    }
`;


function Home(){
    const navigate=useNavigate()
    const farmacia=useRef()
    const iconfarmacia=useRef()
    const sucursales=useRef();
    const iconsucursales=useRef()
    const servicios = useRef()
    const iconservicios=useRef()
    const profesionale=useRef()
    const iconProfesionale=useRef()
    const organizaci=useRef()
    const iconOrganizaci=useRef()
    useEffect(()=>{
        farmacia.current.addEventListener('mouseover', (event) => 
        {iconfarmacia.current.style.display='block'})
        farmacia.current.addEventListener('mouseleave', (event) => 
        {iconfarmacia.current.style.display='none'})
        sucursales.current.addEventListener('mouseover', (event) => 
        {iconsucursales.current.style.display='block'})
        sucursales.current.addEventListener('mouseleave', (event) => 
        {iconsucursales.current.style.display='none'})
        servicios.current.addEventListener('mouseover', (event) => 
        {iconservicios.current.style.display='block'})
        servicios.current.addEventListener('mouseleave', (event) => 
        {iconservicios.current.style.display='none'})
        profesionale.current.addEventListener('mouseover', (event) => 
        {iconProfesionale.current.style.display='block'})
        profesionale.current.addEventListener('mouseleave', (event) => 
        {iconProfesionale.current.style.display='none'})
        organizaci.current.addEventListener('mouseover', (event) => 
        {iconOrganizaci.current.style.display='block'})
        organizaci.current.addEventListener('mouseleave', (event) => 
        {iconOrganizaci.current.style.display='none'})
       
    })
    return(
        <StyledContainer>

            <Header header="home"></Header>
            <section className='texto'>
                <p className='texto1'>¿Cómo podemos ayudarte?</p>
                <div className='containTexto2'>
                     <p className='texto2'>Cuestionamos el rol de las farmacias en la sociedad
                     para crear un nuevo paradigma de salud.</p>
                </div>
                <a href='#galeria'><img src={arrow}/></a>
            </section>
            <section className='imagenes'>
                        <a href='https://www.farmaciasdelplata.com/shop' target='_blank' ref={farmacia} className='farmacia'>
                            <div className='oscureceFarmacia'></div>
                            <p>Farmacia online</p>
                            <img loading='lazy' ref={iconfarmacia} className='pedro' src={iconFarmacia} alt="farmacia"/>
                        </a>
                        <a href='/sucursales' ref={sucursales} className='sucursales'>
                            <div className='oscureceSucursal'></div>
                            <p>Sucursales</p>
                            <img loading='lazy' ref={iconsucursales} src={iconSucursales} alt="sucursales"/>
                        </a>
            </section>
            <section id='galeria'>
                    <Link to='/servicios'>
                        <div ref={servicios} className='Servicios'>
                             <div className='oscureceServicios'></div>
                              <p>Servicios</p>
                              <img loading='lazy' ref={iconservicios} src={iconServicios} alt="sucursales"/>

                        </div>
                        </Link>
                    <Link to='/profesionales'>
                        <div ref={profesionale} className='Servicios Profesionales'>
                             <div className='oscureceServicios oscureceProfesionale'></div>
                             <p>Profesionales</p>
                             <img loading='lazy' ref={iconProfesionale} src={iconProfesional} alt="sucursales"/>
                        </div>
                    </Link>
                    <Link to='/organizacional'>
                        <div ref={organizaci} className='Servicios Organizaciones'>
                            <div className='oscureceServicios oscureceOrganiza'></div>
                            <p>Organizaciones</p>
                            <img loading='lazy' ref={iconOrganizaci} src={iconOrganizacional} alt="sucursales"/>
                        </div>
                    </Link>

            </section>
        <Categorias></Categorias>
        <Footer></Footer> 
        <FooterMobile></FooterMobile>
        </StyledContainer>
    )
}

export default Home;