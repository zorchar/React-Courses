import editButton from '../../assets/icons/edit.png'

const EditButton = ({ onClickHandler }) => {
    return (
        <div className="no-style courses-link" onClick={onClickHandler}>
            <img src={editButton} alt='' className="icon-container" />
            Edit
        </div>
    )
}

export default EditButton