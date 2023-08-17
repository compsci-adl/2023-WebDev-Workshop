import styles from './project-card.module.css';

export default function ProjectCard({ title, description }) {
    return (
        <button className={styles.project}>
            <h2>{title}</h2>
            <p>{description}</p>
            <object
                data="/assets/diagonal-arrow.svg"
                type="image/svg+xml"
                aria-label="link arrow"
            ></object>
        </button>
    );
}
