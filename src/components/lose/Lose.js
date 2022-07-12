import './lose.css'

export default (props) => {
    return(
        <div className='lose_wrapper'>
            <div className="lose">
                <div className='lose_word'>
                    <h1>Word:</h1>
                    {props.winner}
                </div>
                <div>Resume...</div>
                <div className='lose_restart'>Play Again</div>
            </div>
        </div>
    )
}