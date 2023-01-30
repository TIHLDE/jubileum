import styles from './Gallery.module.css';
import React, { useEffect, useState, ReactNode } from 'react';

export const Gallery = () => {

    return(
        <div className={styles.wrapper}>
            <h1 className={styles.header}>TIHLDE MERCH</h1>
            <div className={styles.gallery}>
                <div className={styles.gallery_column}>
                    <a className={styles.gallery__link}>
                        <figure className={styles.gallery__thumb}>
                            <img src="https://raw.githubusercontent.com/TIHLDE/Kvark/dev/public/browser-icons/cover-image.jpg" alt="Genser" className={styles.gallery__image}></img>
                            <figcaption className={styles.gallery__caption}>Genser</figcaption>
                        </figure>
                    </a>

                    <a className={styles.gallery__link}>
                        <figure className={styles.gallery__thumb}>
                            <img src="https://raw.githubusercontent.com/TIHLDE/Kvark/dev/public/browser-icons/cover-image.jpg" alt="Genser" className={styles.gallery__image}></img>
                            <figcaption className={styles.gallery__caption}>Genser</figcaption>
                        </figure>
                    </a>

                    <a className={styles.gallery__link}>
                        <figure className={styles.gallery__thumb}>
                            <img src="https://raw.githubusercontent.com/TIHLDE/Kvark/dev/public/browser-icons/cover-image.jpg" alt="Genser" className={styles.gallery__image}></img>
                            <figcaption className={styles.gallery__caption}>Genser</figcaption>
                        </figure>
                    </a>
                </div>

                <div className={styles.gallery_column}>
                    <a className={styles.gallery__link}>
                        <figure className={styles.gallery__thumb}>
                            <img src="https://raw.githubusercontent.com/TIHLDE/Kvark/dev/public/browser-icons/cover-image.jpg" alt="Genser" className={styles.gallery__image}></img>
                            <figcaption className={styles.gallery__caption}>Genser</figcaption>
                        </figure>
                    </a>

                    <a className={styles.gallery__link}>
                        <figure className={styles.gallery__thumb}>
                            <img src="https://raw.githubusercontent.com/TIHLDE/Kvark/dev/public/browser-icons/cover-image.jpg" alt="Genser" className={styles.gallery__image}></img>
                            <figcaption className={styles.gallery__caption}>Genser</figcaption>
                        </figure>
                    </a>

                    <a className={styles.gallery__link}>
                        <figure className={styles.gallery__thumb}>
                            <img src="https://raw.githubusercontent.com/TIHLDE/Kvark/dev/public/browser-icons/cover-image.jpg" alt="Genser" className={styles.gallery__image}></img>
                            <figcaption className={styles.gallery__caption}>Genser</figcaption>
                        </figure>
                    </a>
                </div>

                <div className={styles.gallery_column}>
                    <a className={styles.gallery__link}>
                        <figure className={styles.gallery__thumb}>
                            <img src="https://raw.githubusercontent.com/TIHLDE/Kvark/dev/public/browser-icons/cover-image.jpg" alt="Genser" className={styles.gallery__image}></img>
                            <figcaption className={styles.gallery__caption}>Genser</figcaption>
                        </figure>
                    </a>

                    <a className={styles.gallery__link}>
                        <figure className={styles.gallery__thumb}>
                            <img src="https://raw.githubusercontent.com/TIHLDE/Kvark/dev/public/browser-icons/cover-image.jpg" alt="Genser" className={styles.gallery__image}></img>
                            <figcaption className={styles.gallery__caption}>Genser</figcaption>
                        </figure>
                    </a>

                    <a className={styles.gallery__link}>
                        <figure className={styles.gallery__thumb}>
                            <img src="https://raw.githubusercontent.com/TIHLDE/Kvark/dev/public/browser-icons/cover-image.jpg" alt="Genser" className={styles.gallery__image}></img>
                            <figcaption className={styles.gallery__caption}>Genser</figcaption>
                        </figure>
                    </a>
                </div>

                <div className={styles.gallery_column}>
                    <a className={styles.gallery__link}>
                        <figure className={styles.gallery__thumb}>
                            <img src="https://raw.githubusercontent.com/TIHLDE/Kvark/dev/public/browser-icons/cover-image.jpg" alt="Genser" className={styles.gallery__image}></img>
                            <figcaption className={styles.gallery__caption}>Genser</figcaption>
                        </figure>
                    </a>

                    <a className={styles.gallery__link}>
                        <figure className={styles.gallery__thumb}>
                            <img src="https://raw.githubusercontent.com/TIHLDE/Kvark/dev/public/browser-icons/cover-image.jpg" alt="Genser" className={styles.gallery__image}></img>
                            <figcaption className={styles.gallery__caption}>Genser</figcaption>
                        </figure>
                    </a>

                    <a className={styles.gallery__link}>
                        <figure className={styles.gallery__thumb}>
                            <img src="https://raw.githubusercontent.com/TIHLDE/Kvark/dev/public/browser-icons/cover-image.jpg" alt="Genser" className={styles.gallery__image}></img>
                            <figcaption className={styles.gallery__caption}>Genser</figcaption>
                        </figure>
                    </a>
                </div>
            </div>
        </div>
    )
}
