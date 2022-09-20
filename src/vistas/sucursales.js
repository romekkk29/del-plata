import styled from 'styled-components'
import Categorias from '../componentes/categorias';
import Footer from '../componentes/footer';
import FooterMobile from '../componentes/footerMobile';
import Header from '../componentes/header';
import CardSucursal from '../componentes/cardSucursal';
import { useState, useRef } from 'react';


const StyledContainer=styled.section`
    .background{
        height:100px;
    }
    .red{
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
        padding:50px 50px 50px 40px;
        @media all and (max-width:1300px){
            padding:50px 50px 50px 40px;
        }
        @media all and (max-width:900px){
            padding:50px 40px 50px 40px;
        }
    }
    .mapSucu{
        display:flex;
        flex-wrap:wrap;
        gap:10px;
        margin-top:50px;
        margin-bottom:50px;
    }

    .buscarNombre{
        font-size: 16px;
        color:rgba(0, 0, 0, 0.7);
        width:290px;
        border:none;
        border-bottom:solid 1px #D8D8D8;
        height:34px;
        padding:20px;
        margin:20px;
        @media all and (max-width:500px){
            width:220px;

        }
        outline:none;
    }
    .buscarLocalidad{
        font-size: 16px;
        color:rgba(0, 0, 0, 0.7);
        width:290px;
        border:none;
        border-bottom:solid 1px #D8D8D8;
        height:41px;
        margin:20px;
        outline:none;
        cursor: pointer;
        padding-left:5px;
        @media all and (max-width:500px){
            width:220px;

        }
    }
    .buscarHorario{
        font-size: 16px;
        color:rgba(0, 0, 0, 0.7);
        width:290px;
        border:none;
        border-bottom:solid 1px #D8D8D8;
        height:41px;
        margin:20px;
        outline:none;
        cursor: pointer;
        padding-left:5px;
        @media all and (max-width:500px){
            width:220px;

        }
        
    }
`

function Sucursales(){

    const dataOriginal=[{
        nombre:'Econo Alameda',
        direccion:'Avenida San Martin 1816',
        localidad:'Ciudad de Mendoza ',
        map:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d790.6391819040234!2d-68.8376616276403!3d-32.88198507836704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e091fc9623e27%3A0xb6ee5fdfba8e8576!2sFarmacia%20Econofarma%20Alameda!5e0!3m2!1ses-419!2sar!4v1663378195179!5m2!1ses-419!2sar',
        horario:'10 a 19 ',
        sabado:'10 a 19 ',
        domingo:'cerrado'

    },{
        nombre:'Econo Hospital Central',
        direccion:'Alem 491',
        localidad:'Ciudad de Mendoza ',
        map:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1094.0380134924144!2d-68.83308758058344!3d-32.89294591858159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1b1ed7b7d48b8ab%3A0xbc52bd70b3cf2c59!2sFarmacia%20Econofarma%20Hospital!5e0!3m2!1ses-419!2sar!4v1663378321007!5m2!1ses-419!2sar',
        horario:'8 a 21 ',
        sabado:'9 a 19 ',
        domingo:'cerrado'

    },{
        nombre:'Econo Las Heras',
        direccion:'Avenida San Martín 2387 ',
        localidad:'Las Heras ',
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3352.112295773826!2d-68.83575588499608!3d-32.84227827394221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e08a1f42fd55f%3A0x7233f46ec25eac3!2sFarmacia%20Econofarma%20Las%20Heras!5e0!3m2!1ses-419!2sar!4v1663614160901!5m2!1ses-419!2sar",
        horario:'9 a 22 ',
        sabado:'9–13 ; 17–21',
        domingo:'cerrado'

      
    },{
        nombre:'Econo Maipú',
        direccion:'Pablo Pescara 265 ',
        localidad:'Maipu ',
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.771850866316!2d-68.78914968499153!3d-32.983420581080395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0cc09fea6949%3A0xdc5ad9d1e2547bcb!2sFarmacia%20Econofarma%20Maip%C3%BA!5e0!3m2!1ses-419!2sar!4v1663614870296!5m2!1ses-419!2sar",
        horario:'24 ',
        sabado:'24 ',
        domingo:'24 '

      
    },{
        nombre:'Econo Mas Villanueva',
        direccion:'Godoy Cruz 3755 ',
        localidad:'Villa Nueva ',
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1481.5902961078393!2d-68.7909981041617!3d-32.893940250633925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0ec08000659d%3A0x6bb3ad66af0cf829!2sFarmacia%20Econom%C3%A1s%20Villa%20Nueva!5e0!3m2!1ses-419!2sar!4v1663615825395!5m2!1ses-419!2sar" ,
        horario:'24 ',
        sabado:'24 ',
        domingo:'24 '

      
    },{
        nombre:'Econo San Martín ',
        direccion:'Las Heras 88',
        localidad:'San Martin ',
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1671.4582534142198!2d-68.47280734124726!3d-33.084981123753124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e431cba3cd83b%3A0x7dbf6efbe3ddbdc!2sFarmacia%20EconoFarma%20San%20Mart%C3%ADn!5e0!3m2!1ses-419!2sar!4v1663616474703!5m2!1ses-419!2sar",
        horario:'24 ',
        sabado:'24 ',
        domingo:'24 '
      
    },{
        nombre:'Farma UCO',
        direccion:'San Martín 1283 ',
        localidad:'Tunuyan ',
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1662.0526257535967!2d-69.01711877258367!3d-33.57661640488215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967c25e836e38cc1%3A0x30ff78d50242db0e!2sFarmaUco!5e0!3m2!1ses-419!2sar!4v1663616723122!5m2!1ses-419!2sar",
        horario:'24 ',
        sabado:'24 ',
        domingo:'24 '

      
    },{
        nombre:'Farmacia Del Plata 1',
        direccion:'Av. San Martín 3598 ',
        localidad:'Ciudad de Mendoza ',
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1675.6829391535557!2d-68.8336391801714!3d-32.862037641454755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e08c1bc2a6f4b%3A0xa459581230c14496!2sFarmacia%20Del%20Plata%201!5e0!3m2!1ses-419!2sar!4v1663616905739!5m2!1ses-419!2sar",
        horario:'24 ',
        sabado:'24 ',
        domingo:'24 '

      
    },{
        nombre:'Farmacia Del Plata 2',
        direccion:'Av. San Martín 2739 ',
        localidad:'Ciudad de Mendoza ',
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1675.5113968834098!2d-68.83510314866369!3d-32.87111633143464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e08dd65c137e5%3A0x999ad0b6867f2af8!2sFarmacia%20Del%20Plata%202!5e0!3m2!1ses-419!2sar!4v1663617069194!5m2!1ses-419!2sar",
        horario:'9 a 22 ',
        sabado:'10 a 20 ',
        domingo:'Cerrado '

    },{
        nombre:'Farmacia Del Plata 3',
        direccion:'Paso de los Andes 95 ',
        localidad:'Ciudad de Mendoza ',
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1674.9733155363724!2d-68.86054344376933!3d-32.899579276836846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e09a74262e5c3%3A0xa91f4b3a039bd8f7!2sFarmacia%20Del%20Plata%203!5e0!3m2!1ses-419!2sar!4v1663617265874!5m2!1ses-419!2sar" ,
        horario:'9 a 22 ',
        sabado:'9-14 ; 16-21 ',
        domingo:'9-14 ; 16-21'
    },{
        nombre:'Farmacia Del Plata 4',
        direccion:'Perito Moreno 98 ',
        localidad:'Godoy Cruz ',
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1674.4808235700766!2d-68.84442521426865!3d-32.925611531730354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0bd8639c63ad%3A0x207a7669812e18c9!2sFarmacia%20Del%20Plata%204!5e0!3m2!1ses-419!2sar!4v1663617346134!5m2!1ses-419!2sar"  ,
        horario:'24 ',
        sabado:'24 ',
        domingo:'24 '
    },{
        nombre:'Farmacia Del Plata 5',
        direccion:'Dr. Moreno 1800 ',
        localidad:'Las Heras ',
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1675.9183371697159!2d-68.8409420584514!3d-32.8495758289974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e08974fc6728d%3A0x1ac9a335dfb16cea!2sFarmacia%20Del%20Plata%205!5e0!3m2!1ses-419!2sar!4v1663617577735!5m2!1ses-419!2sar" ,
        horario:'9 a 22',
        sabado:'9 a 22 ',
        domingo:'10-14 ; 18-22 '
    },{
        nombre:'Farmacia Del Plata 6',
        direccion:'Av. España 995 ',
        localidad:'Ciudad de Mendoza ',
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1675.128939835685!2d-68.8428782412534!3d-32.891349449355424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e091a14b2e313%3A0x8a66ec0161c1a128!2sFarmacia%20Del%20Plata%206!5e0!3m2!1ses-419!2sar!4v1663617721482!5m2!1ses-419!2sar",
        horario:'9 a 22',
        sabado:'9 a 19 ',
        domingo:'Cerrado '
    },{
        nombre:'Farmacia Del Plata 7',
        direccion:'Lavalle 101 ',
        localidad:'Ciudad de Mendoza ',
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1675.1810265774507!2d-68.83750243450754!3d-32.88859455541591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0918f7b625d7%3A0xa0ae2ad5e2755993!2sFarmacia%20Del%20Plata%207!5e0!3m2!1ses-419!2sar!4v1663622466236!5m2!1ses-419!2sar",
        horario:'9 a 21',
        sabado:'9 a 19 ',
        domingo:'Cerrado '
    },{
        nombre:'Farmacia Del Plata 8',
        direccion:'Ozamis JA 712 ',
        localidad:'Maipu ',
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1673.5181843159316!2d-68.7894295688981!3d-32.976442276468454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0c94e7c92dbb%3A0xb118215865139167!2sFarmacia%20Del%20Plata%208!5e0!3m2!1ses-419!2sar!4v1663624010577!5m2!1ses-419!2sar",
        horario:'8 a 22',
        sabado:'8 a 22 ',
        domingo:'9:30–13:30 ; 18–22 '
    },{
        nombre:'Farmacia Del Plata 10',
        direccion:'Av. España 1116 ',
        localidad:'Ciudad de Mendoza',
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2252.2762499229575!2d-68.84355245208491!3d-32.88961160822177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e091a35ca0e85%3A0x3ce34a6f30de708a!2sFarmacia%20Del%20Plata%2010!5e0!3m2!1ses-419!2sar!4v1663624264392!5m2!1ses-419!2sar",
        horario:'9–14 ; 17–20',
        sabado:'9 a 14 ',
        domingo:'Cerrado '
    }


]
    const [data, setData]=useState(dataOriginal)
    const [buscarNombre, setBuscarNombre]=useState("")
    const [buscarLocalidad, setBuscarLocalidad]=useState("")
    const [buscarHora, setHora]=useState("")

    const change=(e)=>{
        setBuscarNombre(e.target.value)
        let dat=dataOriginal.filter((object)=>{
            let nombre=object.nombre.toLowerCase();
            let verifyNombre=e.target.value.toLowerCase()
            let buscarLocali=object.localidad.toLowerCase();
            let verifyLocalidad=buscarLocalidad.toLowerCase()
            let buscarHorario=object.horario.toLowerCase();
            let verifyHora=buscarHora.toLowerCase()
            return nombre.includes(verifyNombre)&&buscarLocali.includes(verifyLocalidad)&&buscarHorario.includes(verifyHora)})
        setData(dat)
    }
  
    const changeLocalidad=(e)=>{
        setBuscarLocalidad(e.target.value)
        let dat=dataOriginal.filter((object)=>{
            let nombre=object.nombre.toLowerCase();
            let verifyNombre=buscarNombre.toLowerCase()
            let buscarLocali=object.localidad.toLowerCase();
            let verifyLocalidad=e.target.value.toLowerCase()
            let buscarHorario=object.horario.toLowerCase();
            let verifyHora=buscarHora.toLowerCase()
            return nombre.includes(verifyNombre)&&buscarLocali.includes(verifyLocalidad)&&buscarHorario.includes(verifyHora)})
        setData(dat)
    }
    
    const changeHora=(e)=>{
        setHora(e.target.value)
        let dat=dataOriginal.filter((object)=>{
            let nombre=object.nombre.toLowerCase();
            let verifyNombre=buscarNombre.toLowerCase()
            let buscarLocali=object.localidad.toLowerCase();
            let verifyLocalidad=buscarLocalidad.toLowerCase()
            let buscarHorario=object.horario.toLowerCase();
            let verifyHora=e.target.value.toLowerCase()
            return nombre.includes(verifyNombre)&&buscarLocali.includes(verifyLocalidad)&&buscarHorario.includes(verifyHora)})
        setData(dat)
    }
    
    return(
        <>
        <StyledContainer>
            <Header></Header>
            <div className='text'>
                
                <p className='red'>Red de farmacias</p>
                <h2>20 Sucursales</h2>
                <input className='buscarNombre' placeholder='Buscar por nombre' value={buscarNombre} onChange={change}></input>
                
                <select className='buscarLocalidad' value={buscarLocalidad} onChange={changeLocalidad}>
                        <option hidden selected>Localidad</option>
                        <option value='Ciudad de Mendoza'>Ciudad de Mendoza</option>
                        <option value='Tunuyan'>Tunuyán</option>
                        <option value='Las Heras'>Las Heras</option>
                        <option value='Maipu '>Maipú</option>
                        <option value='Godoy Cruz'>Godoy Cruz</option>
                        <option value='Villa Nueva'>Villa Nueva</option>
                        <option value='San Martin'>San Martín</option>

                        <option value=' '>Todas las opciones</option>
                </select>
                <select className='buscarHorario'  value={buscarHora} onChange={changeHora}>
                        <option hidden selected>Horario</option>
                        <option value='24'>24hs</option>
                        <option value='8 a 21'>8 a 21 hs</option>
                        <option value='9 a 21'>9 a 21 hs</option>
                        <option value='9 a 22'>9 a 22 hs</option>
                        <option value='10 a 19'>10 a 19 hs</option>

                        <option value=' '>Todas las opciones</option>
                </select>
                <div className='mapSucu'>
                {data.map((element)=>(<CardSucursal key={element.nombre} sucursal={element}></CardSucursal>))}
                </div>
                
            </div>
            <Categorias></Categorias>
            

        </StyledContainer>
        <Footer></Footer>
        <FooterMobile></FooterMobile>
        </>
    )
}

export default Sucursales;