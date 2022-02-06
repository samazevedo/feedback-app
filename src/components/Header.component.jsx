import React from 'react'
import PropTypes from 'prop-types'

export const Header = ({ title, bgColor, textColor }) => {
    const headerStyle = {
        backgroundColor: bgColor,
        color: textColor,
    }
    return (
        <header style={headerStyle}>
            <div className='container'>{title.toUpperCase()}</div>
        </header>
    )
}
Header.defaultProps = {
    title: 'Feedback App',
    bgColor: '#DEDBF8',
    textColor: '#6e6a6a',
}
Header.propTypes = {
    title: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}
