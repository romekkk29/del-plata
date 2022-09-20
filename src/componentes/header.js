import styled from 'styled-components'
import Logo from './../img/Logo.svg'
import {BsInstagram} from 'react-icons/bs'
import { Link} from 'react-router-dom';


const StyledContainHeader=styled.header`
        height:100px;
        width:100%;
        border-bottom: solid 1px #F1F1F1;
        nav ul {
            list-style: none;
            width:calc(100% - 450px) ;
            display:flex;
            justify-content:space-between;
            align-items:center;
            margin:0px;
            @media all and (max-width:950px){
                width:calc(100% - 350px) ;
            }
            @media all and (max-width:720px){
                width:100% ;
                 }
        }
        .nav{
            margin:0px;
            display:flex;
            @media all and (max-width:950px){
                width:45%;
                padding-top:20px;
                padding-right:10px;
             
          }
        }
        nav ul li {
            margin:0px;

        }
        nav ul li a{
            text-decoration:none;
            font-family: 'Montserrat';
            font-weight: 600;
            font-size: 16px;
            color: #8F2A85;
            margin-right:30px;
        }
        .logo{
            padding-top:27px;
            padding-left:40px;
            @media all and (max-width:950px){
                width:180px;
                height:67px;
                padding-left:10px;
          }
        }
        .background{
            background-color:#8F2A85;
            width:450px;
            height:1205px;
            position:absolute;
            right:0;
            top:0;
            z-index:0;
           @media all and (max-width:950px){
                 width:350px;
           }
           @media all and (max-width:800px){
            width:300px;
             }
            @media all and (max-width:720px){
                display:none;
                 }
            .containerVenta{
                height:100px;
                border-bottom:solid 1px #4F1B88;
                display:flex;
                justify-content:space-between;
                align-items:center;
                padding:0px 40px;
            }
            .ventas{
                margin:0px;
            }
            .ventas p{
                font-weight: 300;
                font-size: 14px;
                color: #FFFFFF;
                margin:0px;
            }
            .ventas .telefono{
                font-weight: 400;
                font-size: 20px;
                color: #FFFFFF;
                margin:0px;
            }
            svg{
                margin:0px;
                width:30px;
                height:30px;
                color: rgba(255, 255, 255, 0.8);
            }
            a{
                margin:0px;
            }
        }

`;
    

function Header({header}){
        return(
            <>
            <StyledContainHeader>

               
                <nav>
                    <ul>
                            <li> <Link to="/"><img loading='lazy' className='logo' src={Logo} alt='farmacia del plata'/></Link></li>
                            <div className='nav'>
                                {header!=="crear"?<li><Link to="/crear-cuenta">Crear cuenta</Link></li>:""}
                                {header!=="iniciar"?<li><Link to="/iniciar-sesion">Ingresar</Link></li>:""}
                            </div>
                    </ul>
                </nav>
               

                <div className='background'>
                    <div className='containerVenta'>
                            <div className='ventas'>
                                    <p>Ventas</p>
                                    <p className='telefono'>0800 266 4220</p>

                            </div>
                            <a  href="https://www.instagram.com/farmacias_del_plata/?hl=es" target="_blank">
                                <BsInstagram></BsInstagram>
                            </a>
                            
                            
                        </div>
                </div>
            </StyledContainHeader>
           
         


            </>
        )
}

export default Header;