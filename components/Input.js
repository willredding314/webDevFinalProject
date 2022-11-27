const Input = ({ type = "text", name = "", id = "", placeholder = ""}) => {

    return (
        <input type={type} name={name} id={id} placeholder={placeholder} className="bg-cultured font-normal py-2 px-4 rounded transition duration-200 ease-in-out" />
    )
}

export default Input;