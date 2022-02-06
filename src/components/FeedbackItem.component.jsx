import React from 'react'
import { Card } from './Card.component'
import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'
export const FeedbackItem = ({ item, handleDelete }) => {
    return (
        <Card>
            <div className='num-display'>{item.rating}</div>
            <button className='close' onClick={() => handleDelete(item.id)}>
                <FaTimes color='purple' />
            </button>
            <div className='text-display'>
                <p>{item.text}</p>
            </div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}
