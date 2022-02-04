import React, { useState } from 'react'

export const FeedbackItem = () => {
    const [rating, setRating] = useState(5)
    const [text, setText] = useState('Feedback text')

    const handleClick = () => {
        setRating((prev) => {
            return prev + 1
        })
    }
    return (
        <div className='card'>
            <div className='num-display'>{rating}</div>
            <div className='text-display'>
                <p>{text}</p>
            </div>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}
