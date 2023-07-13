import './Button.css'

const STYLES = [
    'btn-primary',
    'btn-outline',
]

interface ButtonProps {
    children?: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    buttonStyle: 'btn-primary'| 'btn-outline';
  }

export const Button = ({ children, type, onClick, buttonStyle }: ButtonProps) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    
    return (
        <button className={`btn ${checkButtonStyle}`} type={type} onClick={onClick}>
            {children}
        </button>
    )
}