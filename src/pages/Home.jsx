import React from 'react'
import Grid from '../components/Grid';
import styled from 'styled-components'

const ContainerFluid = styled.div`
    width: 100%;
`
const Wrapper = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 2.75em 5px 2em 5px;
`

const Home = () =>
{
    return (
        <>
            <ContainerFluid>
                <Wrapper>
                    <Grid />
                </Wrapper>
            </ContainerFluid>
        </>
    )
}

export default Home