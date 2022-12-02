import React from 'react'
import styled from 'styled-components'
import IMG from '../images/contact-page.jpeg'
import { navbar, large, xlarge, xxlarge } from '../responsive'
import ContactForm from '../components/ContactForm'


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

const Columns = styled.div`
   width: 100%;
   ${ navbar( { display: 'flex', flexDirection: 'row' } ) }
`
const LeftColumn = styled.div`
    ${ navbar( { flex: 2 } ) }
    ${ large( { flex: 2 } ) }
    ${ xlarge( { flex: 2 } ) }
    ${ xxlarge( { flex: 2 } ) }
`
const RightColumn = styled.div`
 
    ${ navbar( { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'left', paddingLeft: '20px' } ) }
    ${ large( { flex: 2, margin: '0 0 0 1em' } ) }
    ${ xlarge( { flex: 1, margin: '0 0 0 1em' } ) }
    ${ xxlarge( { flex: 1, margin: '0 0 0 1em' } ) }
`

const P = styled.p`
    margin: 1em 0;
    font-size: 1.1em;
`

const H2 = styled.h2`
    text-align: left;
    font-size: 1.25em;
    margin-top: 1.5em;
    ${ navbar( { fontSize: '1.5em' } ) }
`

const Contacts = () =>
{
    return (
        <>
            <ContainerFluid>
                <Wrapper>
                    <HeroSection>
                        <HeroImage src={IMG} alt='about 3d renders' />
                    </HeroSection>

                    <H2>Drop us a Message!</H2>

                    <Columns>

                        <LeftColumn>
                            <ContactForm /> {/* Contact Form Component */}
                        </LeftColumn>

                        <RightColumn>
                            <P>We have offices in Europe, Asia and Africa.</P>
                            <P style={{ fontWeight: '600' }}>We work remotely for clients all over the world.</P>
                        </RightColumn>

                    </Columns>
                </Wrapper>
            </ContainerFluid>
        </>
    )
}

export default Contacts