import submitIcon from '../../icons/submit.png'

const SubmitButton = () => {
    return (
        <button className="no-style">
            <div className='courses-link'>
                <img src={submitIcon} alt="none" className="icon-container" />
                Submit
            </div>
        </button>
    )
}

export default SubmitButton