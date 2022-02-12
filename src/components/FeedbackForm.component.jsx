import React, { useState } from 'react'
import { Card } from './Card.component'
import { Button } from './Button.component'

export const FeedbackForm = () => {
    const [text, setText] = useState('')
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
    return (
        <Card>
            <form>
                <h2>How would you rate your service with us?</h2>
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
