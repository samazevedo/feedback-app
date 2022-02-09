import React from 'react'
import PropTypes from 'prop-types'

export const Button = ({ children, version, type, isDisable }) => {
    return (
        <div>
            <button
                type={type}
                disabled={isDisable}
                className={`btn btn-${version}`}
            >
                {children}
            </button>
        </div>
    )
}

Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisable: false,
}
Button.typeTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisable: PropTypes.bool,
}
