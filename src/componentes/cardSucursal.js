import styled from 'styled-components'
import img24 from '../img/24.svg'

const StyledContainHeader=styled.div`
     height:391px;
     width:320px;
     background-color:#FAFAFA;
     display:flex;
     overflow:hidden;
     justify-items:center;
     flex-direction:column;
     padding-left:15px;
     position:relative;
  

    .nombre{
        font-size: 20px;
        color:#222222;
        margin:0px;
        margin-top:30px;
        margin-bottom:15px;
        overflow:hidden;
        font-weight:500;

    }
    .direccion{
        font-size: 16px;
        color:#666666;
        margin:0px;
        overflow:hidden;

    }
    .localidad{
        font-size: 16px;
        color:#666666;
        margin:0px;
        overflow:hidden;

    }
    iframe{
        border:none;
        margin:0px;
        margin-top:20px;
        overflow:hidden;


    }
    .strong{
        font-weight:600;
    }
    img{
        position:absolute;
        top:150px;
        width:85px;
        height:85px;
        right:40px;
    }
`;
    

function CardSucursal({sucursal}){
        return(
            <>
            <StyledContainHeader>

                <p className='nombre'>{sucursal.nombre}</p>
                <p className='direccion'>{sucursal.direccion+","}</p>
                <p className='localidad strong'>{sucursal.localidad}</p>
                <p className='localidad'>{sucursal.nombre=='Farmacia Del Plata 5'?'Lunes a Sábado: '+sucursal.horario+' hs':sucursal.nombre=='Farmacia Del Plata 8'?'Lunes a Sábado: '+sucursal.horario+' hs':'Lunes a Viernes: '+sucursal.horario+' hs'}</p>
                <p className='localidad'>{sucursal.domingo=='24 '? 'Sábado y Domingo: '+sucursal.sabado+' hs':sucursal.nombre=='Farmacia Del Plata 3'?
                'Sábado y Domingo: '+sucursal.sabado+' hs':sucursal.nombre=='Farmacia Del Plata 5'?'Domingo: '+sucursal.domingo+' hs':sucursal.nombre=='Farmacia Del Plata 8'?'Domingo: '+sucursal.domingo+' hs':'Sábado: '+sucursal.sabado+' hs'}</p>
                {sucursal.domingo=='24 '?<img src={img24}/>:""}
                <iframe src={sucursal.map}  width="280" height="190"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                
               
            </StyledContainHeader>
           
         


            </>
        )
}

export default CardSucursal;