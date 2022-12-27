import styled from "@emotion/styled"


const ContenedorResultado = styled.div`
    color: #fff;
    font-family: 'Lato', sans-serif;

    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`;

const Imagen = styled.img`
    display: block;
    width: 120px;
`;

const Texto = styled.p`
    font-size: 18px;

    span{
        font-weight: 700;
    }
`;
const Precio = styled.p`
    font-size: 24px;

    span{
        font-weight: 700;
    }
`;

const Resultado = ({ resultado }) => {

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado
    return (
        <ContenedorResultado>
            <Imagen 
                src={`https://cryptocompare.com/${IMAGEURL}`} 
                alt='img cripto' 
            />
            <div>
                <Precio>El precio es de: <span>{PRICE}</span></Precio>
                <Texto>Pecio mas alto del dia: <span>{HIGHDAY}</span></Texto>
                <Texto>Pecio mas bajo del dia: <span>{LOWDAY}</span></Texto>
                <Texto>Variacion ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
                <Texto>Ultima Actualizacion: <span>{LASTUPDATE}</span></Texto>
            </div>
        </ContenedorResultado>
    )
}

export default Resultado