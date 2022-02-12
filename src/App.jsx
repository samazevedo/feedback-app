import React, { Fragment, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Header } from './components/Header.component'
import { FeedbackList } from './components/FeedbackList.component'
import FeedbackData from './data/feedback-data'
import { FeedbackStats } from './components/FeedbackStats.component'
import { FeedbackForm } from './components/FeedbackForm.component'

export default function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const addFeedbackItem = (newFeedbackItem) => {
        newFeedbackItem.id = +uuidv4()
        setFeedback([newFeedbackItem, ...feedback])
    }
    const deleteFeedbackItem = (id) => {
        if (
            window.confirm(
                'Are you sure you want to delete this feedback item?'
            )
        ) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }
    return (
        <Fragment>
            <Header />
            <div className='container'>
                <FeedbackForm handleAdd={addFeedbackItem} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                    feedback={feedback}
                    handleDelete={deleteFeedbackItem}
                />
            </div>
        </Fragment>
    )
}
