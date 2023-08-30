import styles from './page.module.css';

const socials = [
    { title: 'Email me', link: 'mailto:contact@csclub.org.au' },
    { title: 'Linkedin', link: 'https://linkedin.com/company/compsci-adl' },
    { title: 'GitHub', link: 'https://github.com/compsci-adl' },
];

const projects = [
    {
        title: 'Constitution',
        description:
            'Constitution for the Computer Science Club of the University of Adelaide, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
        link: 'https://github.com/compsci-adl/Constitution',
    },
    {
        title: 'Duck CTF',
        description:
            'Challenge repository for DuckCTF 2022 and 2023, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
        link: 'https://github.com/compsci-adl/DuckCTF',
    },
    {
        title: 'Website',
        description:
            "The Computer Science Club's website repository, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        link: 'https://github.com/compsci-adl/website',
    },
    {
        title: 'Registration App',
        description:
            'An app to collect CS Club user registrations, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
        link: 'https://github.com/compsci-adl/CsClub-Registration-App',
    },
    {
        title: 'TicTacToe',
        description:
            'Game of Tic Tac Toe for club recruiting events, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
        link: 'https://github.com/compsci-adl/CsClub-TicTacToe',
    },
    {
        title: 'Utils',
        description:
            'Miscellaneous utilities used by the CS Club, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
        link: 'https://github.com/compsci-adl/utils',
    },
];

export default function Home() {
    /* TODO show how this approach using map is cleaner than vanilla */
    const contactButtons = socials.map(({ title, link }) => (
        <a
            key={title}
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className={styles.linkContainer}
        >
            {title}
            <object
                className={styles.arrowIcon}
                data="/assets/diagonal-arrow.svg"
                type="image/svg+xml"
                aria-label="link arrow"
            />
        </a>
    ));

    const projectCards = projects.map(({ title, description, link }) => (
        <a
            key={title}
            href={link}
            className={styles.project}
            target="_blank"
            rel="noreferrer noopener"
        >
            <h2>{title}</h2>
            <p>{description}</p>
            <object
                data="/assets/diagonal-arrow.svg"
                type="image/svg+xml"
                aria-label="link arrow"
            />
        </a>
    ));

    return (
        <main>
            <section id="greeting" className={styles.greeting}>
                <h1 className={styles.greetingTitle}>{`Hey, I'm John Doe 👋`}</h1>
                <p>
                    {`I'm a computer science student at Adelaide University and a freelance
                    software engineer. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.`}
                </p>
                <div className={styles.contactButtons}>{contactButtons}</div>
            </section>
            <section id="projects" className={styles.projects}>
                <p>
                    {`I get busy in my spare time working on personal projects. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. You can see some of my favourites below.`}
                </p>
                <div className={styles.projectCards}>{projectCards}</div>
            </section>
        </main>
    );
}
