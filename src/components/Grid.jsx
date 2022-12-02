import React, { useState } from 'react'
import styled from 'styled-components'
import { navbar, small, large, xlarge, xxlarge } from '../responsive'
import data from '../records'
import { FaTimesCircle } from "react-icons/fa";


const CustomGrid = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-scrollbar: 
    ${ navbar( {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
} ) }

    ${ large( {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
} ) }

    ${ xlarge( {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
} ) }

    ${ xxlarge( {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
} ) }
`

const Div = styled.div``

const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .5rem; 
  ${ navbar( { minHeight: '180px' } ) }
`;

const Item = styled.div``

const Image = styled.img`
    width: 100%;
`

const SpanContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const TopSpan = styled.span``

const BottomSpan = styled.span`
    font-weight: bold;
    text-transform: uppercase;
    font-size: .85em;
    color: #B2BEB5;
`

// LIGHTBOX
const LightboxContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const LightboxFullImage = styled.div`
    height: auto;
    width: 95%;
    margin-top: 90px;
    ${ navbar( { marginTop: '0px' } ) }
`

const LightboxImg = styled.img``

const ThumbNavigation = styled.div`
    margin-top: 10px;
`

const ThumbContainer = styled.div`
    display: flex;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    ${ small( { display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '10px 0', height: '500px' } ) }
`

const ThumbImage = styled.div`
  ${ small( { padding: '5px', maxHeight: '40px' } ) }
  ${ large( { padding: '8px', maxHeight: '60px' } ) }
  ${ xlarge( { padding: '10px', maxHeight: '70px' } ) }
  ${ xxlarge( { padding: '8px', maxHeight: '80px' } ) }
`

const ImageNavigation = styled.img`
    width: 10%;
    height: auto;
    cursor: pointer;
    ${ small( { width: '10px' } ) }
`

const FaTimesCircleIcon = {
    color: 'white',
    position: 'fixed',
    top: '15px',
    right: '15px',
    width: '2rem',
    height: '2rem',
    padding: '5px',
    cursor: 'pointer'
};

const Grid = () =>
{
    const [modal, setModal] = useState( false )
    const [tempimgSrc, setTempImgSrc] = useState( '' )

    const getImg = ( imgSrc ) =>
    {
        setTempImgSrc( imgSrc );
        setModal( true )
    }

    return (
        <>
            {/* LIGHBOX */}
            <LightboxContainer className={modal ? "modal lightbox" : "modal"}>
                <LightboxFullImage>
                    <LightboxImg src={tempimgSrc} alt='3d renders project' />
                    <FaTimesCircle style={FaTimesCircleIcon} onClick={() => setModal( false )} />
                </LightboxFullImage>

                <ThumbNavigation>
                    <ThumbContainer>
                        {data.map( ( item, index ) =>
                        {
                            return (
                                <ThumbImage key={index} onClick={() => getImg( item.imgSrc )}>
                                    <ImageNavigation src={item.imgSrc} alt='3d renders project' />
                                </ThumbImage>
                            )
                        } )}
                    </ThumbContainer>
                </ThumbNavigation>
            </LightboxContainer>

            {/* GRID */}
            <CustomGrid id="no-scroll-bar">
                {data.map( ( item, index ) =>
                {
                    return <Div key={index} onClick={() => getImg( item.imgSrc )}>
                        <ItemContainer>
                            <Item>
                                <Image src={item.imgSrc} />
                                <SpanContainer>
                                    <TopSpan>{`Project ${ item.id } of ${ data.length }`}</TopSpan>
                                    <BottomSpan>{`${ item.project_type }`}</BottomSpan>
                                </SpanContainer>
                            </Item>
                        </ItemContainer>
                    </Div>
                } )}
            </CustomGrid>
        </>
    )
}

export default Grid