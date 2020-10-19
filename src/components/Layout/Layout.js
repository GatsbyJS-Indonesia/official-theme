import React from 'react'
import PropTypes from 'prop-types'
import Header from '../Header'
import Footer from '../Footer'
import { InnerWrapper, OuterWrapper } from './styledLayout'

const Layout = ({children}) => {
    return (
        <OuterWrapper>
            <InnerWrapper>
                <Header />
                <div className="__wrapper">
                    {children}
                </div>
            </InnerWrapper>
            <Footer />
        </OuterWrapper>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout