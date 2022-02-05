export const FeedbackItem = ({ item }) => {
    return (
        <div className='card'>
            <div className='num-display'>{item.rating}</div>
            <div className='text-display'>
                <p>{item}</p>
            </div>
        </div>
    )
}
