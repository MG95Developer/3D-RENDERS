import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import styled from 'styled-components'
import { navbar, large, xlarge, xxlarge } from '../responsive'

const ContainerFluid = styled.div`
    width: 100%;
`
const Wrapper = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding-top: 15px;
`

const Message = styled.div``

const FormContainer = styled.div`
    display: flex;
    flex-basis: 100%;
    flex-direction: column;
    align-items: start;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    padding: 1em 0;
`
const Input = styled.input`
    margin: 1em 0;
    padding: 1em 0 1em 5px;
    width: 100%;
    border-width: 1px;
    border-style: solid;
    border-color: lightgray;

    ${ navbar( { maxWidth: '350px' } ) }
    ${ large( { maxWidth: '400px' } ) }
    ${ xlarge( { maxWidth: '100%' } ) }
    ${ xxlarge( { maxWidth: '100%' } ) }
`

const Textarea = styled.textarea`
    margin: 1em 0;
    padding: 1em 0 1em 5px;
    border-width: 1px;
    border-style: solid;
    border-color: lightgray;
   
    ${ navbar( { maxWidth: '350px' } ) }
    ${ large( { maxWidth: '400px' } ) }
    ${ xlarge( { maxWidth: '100%' } ) }
    ${ xxlarge( { maxWidth: '100%' } ) }
`

const SubmitButton = styled.button`
    margin: 20px 0;
    background-color: #5D3FD3;
    color: white;
    padding: 1em 1.5em;
    border-radius: 10px;
    font-weight: bold;
    border: none;

    &:hover{
      opacity: .8;
    }
    ${ navbar( { maxWidth: '350px' } ) }
    ${ large( { maxWidth: '400px' } ) }
    ${ xlarge( { maxWidth: '100%' } ) }
    ${ xxlarge( { maxWidth: '100%' } ) }
`

const ContactUs = () =>
{
    const form = useRef()

    {/* EmailJs: check SERVICE_ID to identify this project */ }
    const sendEmail = ( e ) =>
    {
        e.preventDefault();
        let userFeedback = document.getElementById( 'message-feedback' )

        emailjs.sendForm( 'service_yruob7t', 'template_2opar8i', form.current, '7_DwSaWefEe6AOtpr' )

            .then( ( result ) =>
            {
                console.log( result.text + ": Message Sent!" );
                userFeedback.innerText = 'Your Message was sent to us! Thank you!'
                // clear the form after submitting
                e.target.reset()
            }, ( error ) =>
            {
                console.log( error.text + ": Message NOT Sent!" );
                userFeedback.innerText = 'Sorry! Something went wrong! We could not send your message!'
            } );
    };

    return (
        <>
            <ContainerFluid>
                <Wrapper>
                    <Message id="message-feedback">
                        {/* automatically display feedback message to user here */}
                    </Message>

                    <FormContainer>
                        <Form ref={form} onSubmit={sendEmail} >
                            <Input type='text' placeholder='Type your Name' name='user_name' required />
                            <Input type='email' placeholder='Type your Email' name='user_email' required />
                            <Input type='text' placeholder='Type the Subject' name='subject' required />
                            <Textarea name='message' placeholder='Type your Message here...'></Textarea>
                            <SubmitButton type='submit' style={{ textTransform: 'uppercase' }}>Send Message</SubmitButton>
                        </Form>
                    </FormContainer>

                </Wrapper>
            </ContainerFluid>
        </>
    )
}

export default ContactUs