import React, { Fragment } from 'react'
import { Header } from './components/Header.component'
import { FeedbackItem } from './FeedbackItem.component'

export default function App() {
    return (
        <Fragment>
            <Header />
            <div className='container'>
                <FeedbackItem />
            </div>
        </Fragment>
    )
}
