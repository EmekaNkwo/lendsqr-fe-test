import { InputHTMLAttributes } from "react"
import "./inputField.scss"

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    type?: "text" | "password" | "email" | "date"
    className?: string
    withBorder?: boolean
    label?: string
    isSmall?: boolean
}

type Options = {
    value: string
    label: string
}

interface ISelectProps extends InputHTMLAttributes<HTMLSelectElement> {
    label?: string
    options?: Options[]
    className?: string
}

export const TextField = ({ className, label, isSmall, withBorder, type = "text", ...props }: IProps) => {
    return (
        <div className="input_container">
            {
                label && <label>{label}</label>
            }
            <input type={type} style={
                {
                    border: withBorder ? "1px solid #545f7d26" : "none",
                    borderRadius: withBorder ? "5px" : "none",
                    height: isSmall ? "40px" : "45px"
                }
            } className={`inputField ${className}`} {...props} />
        </div>
    )
}

export const SelectField = ({ label, options, className, ...props }: ISelectProps) => {
    return (
        <div className="select_container">
            {
                label && <label>{label}</label>
            }
            <select {...props} className={`selectField ${className}`}>
                {
                    options?.map((option) => <option value={option.value}>{option.label}</option>)
                }
            </select>
        </div>
    )
}