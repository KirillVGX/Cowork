import styles from './button.module.css';

type ButtonProps = {
    text: string;
    color?: 'null' | 'blue' | 'red';
    size?: 'small' | 'large';
    style?: object;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
};

export default function Button({
    text,
    color = 'null',
    size = 'small',
    style,
    type = 'button',
    onClick,
}: ButtonProps) {
    return (
        <button
            className={`${styles.button} ${styles[color]} ${styles[size]}`}
            style={style}
            onClick={onClick}
            type={type}
        >
            {text}
        </button>
    );
}
