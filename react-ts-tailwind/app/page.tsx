import { PROJECTS } from '@/content/projects';
import { SOCIALS } from '@/content/socials';

type ContactProps = {
    title: string;
    link: string;
};
type ProjectProps = {
    title: string;
    description: string;
};

export default function Home() {
    const contactButtons = SOCIALS.map(({ title, link }: ContactProps) => (
        <a
            key={title}
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className="group flex justify-between rounded-md bg-neutral-800 px-8 py-3 text-neutral-200 outline outline-1 outline-neutral-700"
        >
            {title}
            <object
                className="h-3 w-5 translate-y-[0.05rem] pl-2 transition-transform duration-100 ease-linear group-hover:translate-x-[0.1rem] group-hover:translate-y-[-0.1rem]"
                data="/assets/diagonal-arrow.svg"
                type="image/svg+xml"
                aria-label="link arrow"
            ></object>
        </a>
    ));

    const projectCards = PROJECTS.map(({ title, description }: ProjectProps) => (
        <button
            key={title}
            className="group relative flex cursor-pointer flex-col gap-3 rounded-md border border-solid border-neutral-700 bg-neutral-800 px-8 py-6 text-left"
        >
            <h2 className="text-xl text-neutral-200">{title}</h2>
            <p>{description}</p>
            <object
                className="absolute right-6 top-6 w-4 transition-transform duration-100 ease-linear group-hover:translate-x-[0.15rem] group-hover:translate-y-[-0.15rem]"
                data="/assets/diagonal-arrow.svg"
                type="image/svg+xml"
                aria-label="link arrow"
            ></object>
        </button>
    ));

    return (
        <main>
            <section id="greeting" className="flex flex-col gap-8 pb-8">
                <h1 className="text-3xl text-neutral-200 md:text-4xl">Hey, I&apos;m John Doe 👋</h1>
                <p>
                    I&apos;m a computer science student at Adelaide University and a freelance
                    software engineer. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                </p>
                <div className="flex flex-col gap-6 sm:flex-row">{contactButtons}</div>
            </section>
            <section id="projects" className="flex flex-col gap-8">
                <p>
                    I get busy in my spare time working on personal projects. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. You can see some of my faviourites below.
                </p>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                    {projectCards}
                </div>
            </section>
        </main>
    );
}
