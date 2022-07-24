import submitIcon from '../../assets/icons/submit.png'

const SubmitButton = () => {
    return (
        <button className="no-style width70 flex-center">
            <div className='courses-link'>
                <img src={submitIcon} alt="none" className="icon-container" />
                Submit
            </div>
        </button>
    )
}

export default SubmitButton