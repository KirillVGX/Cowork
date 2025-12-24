import styles from './button.module.css';

type ButtonProps = {
    text: string;
    color?: 'null' | 'blue' | 'red';
    size?: 'small' | 'large';
    style?: object;
    onClick?: () => void;
};

export default function Button({
    text,
    color = 'null',
    size = 'small',
    style,
    onClick,
}: ButtonProps) {
    return (
        <button
            className={`${styles.button} ${styles[color]} ${styles[size]}`}
            style={style}
            onClick={onClick}
        >
            {text}
        </button>
    );
}
