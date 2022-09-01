export const Input = ({
    type,
    placeholder,
    value,
    onChange,
    name,
    id,
    mouseDown,
    MouseUp,
    ...restProps
}) => {
    return (
        <input 
        type= {type}
        placeholder = {placeholder}
        value = {value}
        onChange = {onChange}
        name = {name}
        id = {id} />
    )
}