import React, { Fragment } from 'react'
import { Header } from './components/Header.component'
import { FeedbackList } from './components/FeedbackList.component'
import FeedbackData from './data/feedback-data'

export default function App() {
    const [feedback, setFeedback] = useState(FeedbackData)
    return (
        <Fragment>
            <Header />
            <div className='container'>
                <FeedbackList feedback={feedback} />
            </div>
        </Fragment>
    )
}
