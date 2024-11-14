
import "./inputStyles.scss";
interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    placeholder?:string
    type?:string
    error?:string,
    name?:string,
}

export default function Input({
    placeholder,
    type,
    error,
    ...props
}:IInputProps):React.ReactNode{
    return(
        <div className="content-input">
            <input
                placeholder={placeholder}
                type={type}
                {...props}    
            />
            {error && <p className="input-error">{error}</p>}
        </div>

    )
}