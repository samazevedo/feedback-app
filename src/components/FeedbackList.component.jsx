import React from 'react'
import { FeedbackItem } from '../components/FeedbackItem.component'

export const FeedbackList = ({ feedback }) => {
    if (!feedback || feedback.length === 0) {
        return (
            <div className='feedback-list'>
                <p>No feedback yet.</p>
            </div>
        )
    }
    return (
        <div className='feedback-list'>
            {feedback.map((item, index) => {
                ;<FeedbackItem key={index} item={item} />
            })}
        </div>
    )
}
