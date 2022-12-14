import Link from 'next/link';
import * as React from 'react';
import styles from '../styles/404.module.scss';

export interface IFileNotFoundProps {
}

export default function FileNotFound(props: IFileNotFoundProps) {
    return (
        <>
            <section className={styles.page_404}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 ">
                            <div className="col-sm-12 col-sm-offset-1  text-center">
                                <div className={styles.four_zero_four_bg}>
                                    <h1 className="text-center ">404</h1>
                                </div>

                                <div className={styles.contant_box_404}>
                                    <h3 className="h2">
                                        Look like you&apos;re lost
                                    </h3>

                                    <p>the page you are looking for not avaible!</p>

                                    <Link href="/"><a className={styles.link_404}>Go to Home</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
