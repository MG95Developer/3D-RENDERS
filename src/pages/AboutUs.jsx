import React from 'react'
import styled from 'styled-components'
import IMG from '../images/about-page.jpeg'
import { navbar } from '../responsive'
import { Link } from 'react-router-dom'

const ContainerFluid = styled.div`
    width: 100%;
`
const Wrapper = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 2.75em 13px 2.75em 13px;
`
const HeroSection = styled.section``

const HeroImage = styled.img`
    width: 100%;
    margin-top: 8px;
`

const H1 = styled.h1`
    text-align: left;
    font-size: 1.25em;
    margin: 1.5em 0;
    ${ navbar( { fontSize: '1.5em' } ) }
`

const Paragraph = styled.p`
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 1.5em;
`

const CustomLink = {
    textDecoration: 'none',
    color: '#5D3FD3',
    fontWeight: 'bold',
};

const AboutUs = () =>
{
    return (
        <>
            {/* PROBLEM: NAVBAR LOGO JUMPS WHEN CHANGING PAGES */}

            <ContainerFluid>
                <Wrapper>
                    <HeroSection>
                        <HeroImage src={IMG} alt='about 3d renders' />
                        <H1>About 3D Renders</H1>
                        <Paragraph>
                            3D Renders is an innovative, high quality architectural and 3D image rendering service that is dedicated to creating unique and personal projects. At 3D Renders we intend to fabricate projects of all different sizes and locations, with complete support and guidance from start to finish.
                        </Paragraph>
                        <Paragraph>
                            With experience in Portugal and the United Kingdom, we adapt ourselves to our clients needs and preferences making each project unique. If you have any further questions, don't be shy and drop us a message on our <Link style={CustomLink} to='/contact'>contact page</Link>.
                        </Paragraph>
                    </HeroSection>
                </Wrapper>
            </ContainerFluid>
        </>
    )
}

export default AboutUs