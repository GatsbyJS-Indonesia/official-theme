import React from 'react' 
import { Header, Wrapper, Inner, Branding, Navigation } from './styledHeader'

const HeaderComponent = () => {
    return (
        <Header>
            <Wrapper>
                <Inner>
                    <Branding>
                        Logo!
                    </Branding>
                    <Navigation>
                        Nav!
                    </Navigation>
                </Inner>
            </Wrapper>
        </Header>
    )
}

export default HeaderComponent