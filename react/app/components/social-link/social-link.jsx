import styles from './social-link.module.css';

export default function SocialLink({ title, link }) {
    return (
        <a href={link} target="_blank" rel="noreferrer noopener" className={styles.linkContainer}>
            {title}
            <object
                className={styles.arrowIcon}
                data="/assets/diagonal-arrow.svg"
                type="image/svg+xml"
                aria-label="link arrow"
            ></object>
        </a>
    );
}
