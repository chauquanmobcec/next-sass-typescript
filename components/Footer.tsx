import React from 'react'
import styles from '../styles/Footer.module.scss';

type Props = {}

const Footer = (props: Props) => {
    return (
        <div>
            <footer className={styles.text_muted}>
                <div className="container">
                    <p className={styles.float_right}>
                        <a href="#">Back to top</a>
                    </p>
                    <p>Album example is © Bootstrap, but please download and customize it for yourself!</p>
                    <p>New to Bootstrap? <a href="../../">Visit the homepage</a> or read our <a href="../../getting-started/">getting started guide</a>.</p>
                </div>
                <div className="clearfix"></div>
            </footer>
        </div>
    )
}

export default Footer