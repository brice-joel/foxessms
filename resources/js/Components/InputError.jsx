export default function InputError({ message, className = "", ...props }) {
    return message ? (
        <p {...props} className={"text-sm text-red-500 " + className}>
            {message}
        </p>
    ) : null;
}
