import React, { useState, useEffect, } from 'react';
import styled from 'styled-components'
import { navbar } from '../responsive'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { ExternalLink } from 'react-external-link';
import { FaAngleDoubleUp } from "react-icons/fa";

const Container = styled.div`
  background-color: #B2BEB5;
  padding: 1em 0;
  width: 100%;
  ${ navbar( { padding: '2em 0' } ) }
`
const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`
const FooterContent = styled.footer`
  width: 100%; 
  ${ navbar( { display: 'flex', flexDirection: 'row' } ) }
`
const LeftCol = styled.div`
  padding: 1em;
  ${ navbar( { flex: 3 } ) }
`
const CentralCol = styled.div`
  padding: 1em;
  ${ navbar( { flex: 3 } ) }
`
const RightCol = styled.div`
  padding: 1em;
  ${ navbar( { flex: 3 } ) }
`
const FullWidthCol = styled.div`
    ${ navbar( { display: 'flex', justifyContent: 'center', padding: '1em' } ) }
`
const Credits = styled.p`
  text-align: left;
  margin-top: 1em;
  color: black;
  font-size: 16px;
  opacity: .5;
  ${ navbar( { textAlign: 'center', marginTop: '5.6em' } ) }
`

const Div = styled.div``

const Text = styled.p`
  font-size: 1.1em;
  padding: .35em 0;
  font-weight: 500;

  &:hover{
    color: #5D3FD3;
  }
`
const Info = styled.p`
  font-size: .95em;
  padding: .35em 0;
  font-weight: 500;
`

const ScrollToTop = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  font-size: 30px;
  color: #5D3FD3;
  cursor: pointer;
  border: none;

  &:hover{
    color: black;
  }
`

const Footer = () =>
{
    // The back-to-top button is hidden at the beginning
    const [showButton, setShowButton] = useState( false );

    useEffect( () =>
    {
        window.addEventListener( "scroll", () =>
        {
            if ( window.pageYOffset > 300 )
            {
                setShowButton( true );
            } else
            {
                setShowButton( false );
            }
        } );
    }, [] );

    // This function will scroll the window to the top 
    const scrollToTop = () =>
    {
        window.scrollTo( {
            top: 0,
            behavior: 'smooth' // for smoothly scrolling
        } );
    };

    const [isHover, setIsHover] = useState( false );

    const handleMouseEnter = () =>
    {
        setIsHover( true );
    };

    const handleMouseLeave = () =>
    {
        setIsHover( false );
    };

    const socialMediaIcon = {
        marginRight: '30px',
        fontSize: '24px',
        cursor: 'pointer',
        color: isHover ? '#5D3FD3' : 'black',
    };

    return (
        <>
            <Container>
                <Wrapper>
                    <FooterContent>
                        <LeftCol>
                            <FullWidthCol>
                                {/* THERE IS A PROBLEM WITH THE HOVER ON SOCILA MEDIA ICONS */}
                                <ExternalLink href="https://www.facebook.com/" style={socialMediaIcon}>
                                    <FaFacebookF onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
                                </ExternalLink>
                                <ExternalLink href="https://twitter.com/" style={socialMediaIcon}>
                                    <FaTwitter onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
                                </ExternalLink>
                                <ExternalLink href="https://instagram.com/" style={socialMediaIcon}>
                                    <FaInstagram onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
                                </ExternalLink>
                            </FullWidthCol>
                        </LeftCol>
                        <CentralCol>
                            <FullWidthCol>
                                <Div>
                                    <Text>Privacy & Legal</Text>
                                    <Text>Contact</Text>
                                    <Text>Careers</Text>
                                    <Text>Awards</Text>
                                    <Text>Office</Text>
                                </Div>
                            </FullWidthCol>
                        </CentralCol>
                        <RightCol>
                            <FullWidthCol>
                                <Div>
                                    <Info>Architectural visualization & 3D rendering service</Info>
                                    <Info>No Copyright © 2022</Info>
                                    <Info>No Rights Reserved</Info>
                                </Div>
                            </FullWidthCol>
                        </RightCol>
                    </FooterContent>

                    {/* SCROLL TO THE TOP BUTTON  */}
                    {showButton && (
                        <ScrollToTop onClick={scrollToTop} style={{ background: 'none' }}>
                            <FaAngleDoubleUp />
                        </ScrollToTop>
                    )}
                </Wrapper>
            </Container>
        </>
    )
}

export default Footer