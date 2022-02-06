import React from 'react'
import { Card } from './Card.component'
import PropTypes from 'prop-types'

export const FeedbackItem = ({ item }) => {
    return (
        <Card>
            <div className='num-display'>{item.rating}</div>
            <div className='text-display'>
                <p>{item.text}</p>
            </div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}
