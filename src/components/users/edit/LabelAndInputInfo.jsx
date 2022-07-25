import { useEffect } from "react";
import { useRef, useState } from "react";

const LabelAndInputInfo = ({ data }) => {
    const { isInputDisabledAttribute, queriedUser, paramString, type } = data
    const paramStringNoSpaces = paramString.replace(/\s/g, '')
    const paramStringKeyName = paramStringNoSpaces.charAt(0).toLowerCase() + paramStringNoSpaces.slice(1);
    const [valueLength, setValueLength] = useState(null)
    const textInput = useRef(null);

    const onChangeControlInputWidth = (e) => {
        setValueLength(e.target.value.length)
    }

    useEffect(() => {
        setValueLength(textInput.current.value.length)
    }, [textInput])

    return (
        <div className="course-info">
            <label htmlFor={paramStringNoSpaces}>{paramString}: </label><br></br>
            <input type={type} ref={textInput} onChange={onChangeControlInputWidth} size={valueLength !== 0 ? valueLength : 7} disabled={isInputDisabledAttribute} id={paramStringNoSpaces} name={paramStringKeyName} placeholder={paramString} defaultValue={queriedUser[paramStringKeyName]} />
        </div>

    )
}

export default LabelAndInputInfo