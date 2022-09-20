import styled from 'styled-components'


const StyledContain=styled.section`
     height:auto;
     padding:60px 20px;
     width:100%;
     background-color:#FAFAFA;
     display:flex;
     flex-wrap:wrap;
     align-items:center;
     justify-content:center;
     .div{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        gap:10px;
        margin-top:20px;
     }
     .a{
        color:#666666;
     }
`;
    

function Categorias(){
        return(
            <>
            <StyledContain>

                <div className='div'>
                    <a target='_blank' href='https://www.farmaciasdelplata.com/shop/accesorios-de-belleza-PC15163' className='a'>Accesorios de belleza</a>
                    <a target='_blank' href='https://www.farmaciasdelplata.com/shop/alimentos-y-hogar-PC13426' className='a'>Alimentos y hogar</a>
                    <a target='_blank' href='https://www.farmaciasdelplata.com/shop/combos-PC17832' className='a'>Combos</a>
                </div>
                <div className='div'>
                    <a target='_blank' href='https://www.farmaciasdelplata.com/shop/bebe-maternidad-PC13391' className='a'>Bebé y maternidad</a>
                    <a target='_blank' href='https://www.farmaciasdelplata.com/shop/cuidado-de-adulto-PC13416' className='a'>Cuidado de adulto</a>
                    <a target='_blank' href='https://www.farmaciasdelplata.com/shop/cuidado-de-la-salud-PC13385' className='a'>Cuidado de salud</a>
                </div>
                <div className='div'>
                    <a target='_blank' href='https://www.farmaciasdelplata.com/shop/cuidado-personal-PC13375' className='a'>Cuidado personal</a>
                    <a target='_blank' href='https://www.farmaciasdelplata.com/shop/dermocosmetica-PC13398' className='a'>Dermocosmético</a>
                    <a target='_blank' href='https://www.farmaciasdelplata.com/shop/maquillaje-PC13395' className='a'>Maquillaje</a>
                </div>
                <div className='div'>
                    <a target='_blank' href='https://www.farmaciasdelplata.com/shop/nutricion-PC15079' className='a'>Nutrición</a>
                    <a target='_blank' href='https://www.farmaciasdelplata.com/shop/perfumes-fragancias-PC13404' className='a'>Perfumes y fragancias</a>
                    <a target='_blank' href='https://www.farmaciasdelplata.com/shop/vida-saludable-PC13373' className='a'>Vida saludable</a>
                </div>
               
            </StyledContain>
           
         


            </>
        )
}

export default Categorias;