
import "./inputStyles.scss";
interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    placeholder?:string
    type?:string
    error?:string,
    name?:string,
    width?:string,
}

export default function Input({
    placeholder,
    type,
    error,
    width,
    ...props
}:IInputProps):React.ReactNode{
    return(
        <div className="content-input">
            <input
                placeholder={placeholder}
                type={type}
                {...props}   
                style={{width: width}} 
            />
            {error && <p className="input-error">{error}</p>}
        </div>

    )
}