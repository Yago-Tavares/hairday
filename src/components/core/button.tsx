interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'primary' | 'secondary'
    disabled: boolean
    children: React.ReactNode
}

export default function Button({ variant, disabled, children, ...props }: ButtonProps) {
    return (
        <button disabled={disabled} className={variant === 'primary' ? 'bg-yellow-light text-gray-900' : 'bg-gray-900 text-yellow-light'} {...props}>{children}</button>
    )
}