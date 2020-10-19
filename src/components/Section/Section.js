import React from 'react'
import { Section } from './styledSection' 

const SectionComponent = (props) => {
    return (
        <Section>
            {props.children}
        </Section>
    )
}  

export default SectionComponent