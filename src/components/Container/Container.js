import React from 'react'
import { Container } from './styledContainer'

const ContainerComponent = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    )
}


export default ContainerComponent