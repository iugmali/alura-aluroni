import styles from './Button.module.scss';
import {ReactNode} from "react";

interface Props {
    children: ReactNode
}

export default function Button({children} : Props) {
    return (
        <button className={styles.button}>
            {children}
        </button>
    );
}