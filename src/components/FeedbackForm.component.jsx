import React, { useState } from 'react'
import { Card } from './Card.component'
import { Button } from './Button.component'
import { SelectRating } from './SelectRating.component'

export const FeedbackForm = ({ handleAdd }) => {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(0)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const handleTextChange = (e) => {
        // check if text is empty
        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length <= 10) {
            setMessage('Text must be at least 10 characters long')
            setBtnDisabled(true)
        } else {
            setBtnDisabled(false)
            setMessage(null)
        }
        setText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10) {
            const newFeedbackItem = {
                text: text,
                rating: rating,
            }
            handleAdd(newFeedbackItem)
            setText('')
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <SelectRating select={(rating) => setRating(rating)} />
                <div className='input-group'>
                    <input
                        onChange={handleTextChange}
                        type='text'
                        placeholder='write a review'
                        value={text}
                    />
                    <Button
                        type='submit'
                        version='secondary'
                        isDisable={btnDisabled}
                    >
                        Send
                    </Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
}
