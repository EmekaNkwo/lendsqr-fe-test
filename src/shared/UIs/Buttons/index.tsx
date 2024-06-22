import { ButtonHTMLAttributes } from "react";
import "./button.scss"

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title?: string;
    className?: string;
    variant?: "blacklist" | "accept"
}
export const FilledButton = ({ title, className, ...props }: IProps) => {
    return (
        <button className={`${className} filledButton`} {...props}>{title}</button>
    )
}

export const OutlinedButton = ({ title,
    variant, className, ...props }: IProps) => {
    return (
        <button style={{
            border: variant === "blacklist" ? "1px solid #E4033B" : variant === "accept" ? "1px solid #39CDCC" : "1px solid #545F7D",
            color: variant === "blacklist" ? "#E4033B" : variant === "accept" ? "#39CDCC" : "#545F7D"
        }} className={`${className} outlinedButton`} {...props}>{title}</button>
    )
}