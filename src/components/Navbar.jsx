import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { navbar, large, xlarge, xxlarge } from '../responsive'

const Container = styled.div`
    background-color: #B2BEB5;
    height: 140px;
    ${ navbar( { height: '80px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' } ) }
`
const Wrapper = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
`
const ResponsiveNavbar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    ${ navbar( { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' } ) }
`
const LeftCol = styled.div`
    height: 55px;
    padding: .5em;
    flex: 1;
    margin-top: 15px;
    ${ navbar( { width: '50%', display: 'flex', alignItems: 'center', justifyContent: "start", marginTop: '0px' } ) }
`
const H1 = styled.h1`
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1.6em;
    color: black;
    ${ navbar( { fontSize: '2em' } ) }

    &:hover{
        color: #5D3FD3;
    }
`
const RightCol = styled.div`
    background-color: #B2BEB5;
    padding: 1.5em .5em;
    flex: 1;
    display: flex;
    align-items: start;
    ${ navbar( { width: '50%', justifyContent: "end", padding: '1em' } ) }
`
const Nav = styled.nav`
    margin-top: 3px;
    font-size: 1em;
    font-weight: 500;
    ${ navbar( { fontSize: '1.1em' } ) }
    ${ large( { fontSize: '1.1em' } ) }
    ${ xlarge( { fontSize: '1.2em' } ) }
    ${ xxlarge( { fontSize: '1.3em' } ) }
`
const Span = styled.span`
    padding: 0;
`
const navLinks = {
    textDecoration: 'none',
    marginRight: '25px',
    color: 'black',
    cursor: 'pointer'

};

const Navbar = () =>
{
    return (
        <>
            <Container>
                <Wrapper>
                    <ResponsiveNavbar >
                        <LeftCol>
                            <Link style={{ textDecoration: 'none' }} to='/'>
                                <H1>3d renders.</H1>
                            </Link>
                        </LeftCol>
                        <RightCol>
                            <Nav>
                                <Span>
                                    <Link style={navLinks} to='/'>Our Portfolio</Link>
                                    <Link style={navLinks} to='/about'>About Us</Link>
                                    <Link id='last-child' style={navLinks} to='/contact'>Contact</Link>
                                </Span>
                            </Nav>
                        </RightCol>
                    </ResponsiveNavbar>
                </Wrapper>
            </Container>
        </>
    )
}

export default Navbar