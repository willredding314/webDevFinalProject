const Input = ({ type = "text", name = "", id = "", placeholder = ""}) => {

    return (
        <input type={type} name={name} id={id} placeholder={placeholder} className="px-5 py-2 font-normal transition duration-200 ease-in-out rounded bg-cultured text-eerie-dark" />
    )
}

export default Input;