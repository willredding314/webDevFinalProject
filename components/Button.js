import Link from "next/link";

const Button = ({ link, children, onClick }) => {
    return (
        <button onClick={onClick} className="bg-charcoal font-semibold py-2 px-4 rounded shadow-md hover:bg-cadet transition duration-200 ease-in-out">
            <Link href={link}>
                <span className="font-normal text-cultured">{children}</span>
            </Link>
        </button>
    );
};

export default Button;