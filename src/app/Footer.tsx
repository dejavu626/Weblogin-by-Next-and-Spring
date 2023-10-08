import styles from "./components/Bottom.module.css"

import ColoredSVG from './ColoredSVG'
import Link from 'next/link'
function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.word}>
                This is the homework for Web Technology<br />
                Source code is avilable in
                <div className={styles.github}>
                    <Link href="https://github.com/dejavu626?tab=repositories">
                        <ColoredSVG color="white" />
                    </Link>
                </div>
            </div>

        </div>
    );
}

export default Footer