import './box.css';

export default (props) => {
    return (
        <div className={`
        box 
        ${props.lastLetter && 'last_letter'} 
        ${props.letter && 'letter_fill'} 
        box-${props.status}
        ${props.check ? 'check' : ''}
        ` }
        style={{animationDelay:props.delay}}
        >
            {props.letter && <div className={`letter`}>{props.letter}</div>}
        </div>
    )
}