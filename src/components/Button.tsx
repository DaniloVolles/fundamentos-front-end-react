import React, {FC} from "react";

type ButtonProps = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode;
}

export const Button: FC<ButtonProps> = ({onClick, children}) => (
    <button
        className="
            border
            border-blue-500
            px-6
            py-1
            rounded
            cursor-pointer
            bg-blue-500
            hover:bg-blue-900
            text-[#fff]"
        onClick={onClick}
    >
        {children}
    </button>
)