import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Code2,
  Server,
  Database,
  Boxes,
  Terminal,
  ExternalLink,
} from "lucide-react";

const NAV = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "stack", label: "Stack" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const EXPERIENCE = [
  {
    period: "Aug 2024 — Present",
    role: "Software Developer",
    org: "Mytek",
    location: "Tunis, Tunisia",
    bullets: [
      "Built a new Magento 2 search solution using OpenSearch, boosting search speed and relevance.",
      "Developed and integrated a custom Quote Request module enabling personalized customer quotes.",
      "Customized Magento modules and integrated third-party APIs to extend store functionality.",
      "Developed cross-platform mobile apps with Flutter for iOS & Android.",
    ],
  },
  {
    period: "Jan 2022 — Dec 2023",
    role: "Full Stack JavaScript Instructor",
    org: "GoMyCode",
    location: "Ariana, Tunisia",
    bullets: [
      "Taught HTML5, CSS3, JavaScript, React, Node.js, Express, MongoDB, SQL and Git/GitHub.",
      "Mentored students weekly, validated checkpoints and reviewed final projects.",
      "Organized workshops covering REST APIs, servers and deployment.",
    ],
  },
  {
    period: "Mar 2021 — Aug 2021",
    role: "Fullstack JavaScript Developer (Training)",
    org: "GoMyCode",
    location: "Tunis, Tunisia",
    bullets: [
      "Intensive MERN stack bootcamp — MongoDB, Express, React, Node.js.",
    ],
  },
];

const STACK = [
  {
    icon: Code2,
    title: "Frontend",
    items: [
      "React.js",
      "TypeScript",
      "HTML / CSS",
      "Bootstrap",
      "Flutter (mobile)",
    ],
  },
  {
    icon: Server,
    title: "Backend",
    items: ["Node.js", "Express", "REST APIs", "PHP (Magento 2)", "OpenSearch"],
  },
  {
    icon: Database,
    title: "Databases",
    items: ["MongoDB", "MySQL", "MS SQL Server", "NoSQL"],
  },
  {
    icon: Boxes,
    title: "Tools & DevOps",
    items: ["Git / GitHub", "GitLab", "Docker", "MERN Stack"],
  },
];

const PROJECTS = [
  {
    title: "Magento 2 OpenSearch",
    tag: "E-commerce · Search",
    description:
      "Custom search engine for Magento 2 e-commerce platforms powered by OpenSearch — drastically improving relevance, speed and scalability.",
    tech: ["Magento 2", "OpenSearch", "PHP", "MySQL"],
    role: "Lead developer @ Mytek",
  },
  {
    title: "Quote Request Module",
    tag: "Magento 2 · Module",
    description:
      "Custom Magento 2 module that lets customers request personalized quotes directly from the storefront, with full admin workflow.",
    tech: ["Magento 2", "PHP", "MySQL", "JavaScript"],
    role: "Developer @ Mytek",
  },
  {
    title: "Cross-platform Mobile Apps",
    tag: "Mobile · Flutter",
    description:
      "User-friendly mobile applications built with Flutter, delivering a seamless experience across iOS and Android.",
    tech: ["Flutter", "Dart", "REST APIs"],
    role: "Developer @ Mytek",
  },
  {
    title: "GPT-3 Landing Redesign",
    tag: "Frontend · React",
    description:
      "A modern, beautiful redesign of the GPT-3 marketing site — focused on layout, typography and responsive polish.",
    tech: ["React.js", "CSS", "Responsive"],
    role: "Personal project",
    link: "https://hamza-hasnni.github.io/portfolio/",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Work />
        <Stack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-primary font-bold text-primary-foreground">
            H
          </span>
          <span className="text-muted-foreground">hamza</span>
          <span className="text-primary">.dev</span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item, i) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="group flex items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="font-mono text-xs text-primary/60">
                0{i + 1}.
              </span>
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground md:inline-flex"
        >
          Get in touch
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pb-24 pt-32 md:pb-32 md:pt-44"
    >
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-hero-glow" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-border bg-card/50 px-4 py-2 backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <span className="font-mono text-xs text-muted-foreground">
            Available for freelance & contracts
          </span>
        </div>

        <p className="font-mono text-sm text-primary">{`> hello_world.init()`}</p>

        <h1 className="font-display mt-4 text-5xl font-bold leading-[0.95] text-balance md:text-7xl lg:text-8xl">
          Hamza Hasni.
          <br />
          <span className="text-muted-foreground">Software developer</span>
          <span className="cursor-blink text-primary"></span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          I build modern, fast and scalable web & mobile applications. Currently
          engineering a next-gen{" "}
          <span className="text-foreground">Magento 2 search experience</span>{" "}
          powered by <span className="text-foreground">OpenSearch</span> at
          Mytek.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:glow-primary"
          >
            View my work
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card/50 px-6 py-3 font-medium backdrop-blur transition-colors hover:bg-card"
          >
            <Mail className="h-4 w-4" />
            Contact me
          </a>
        </div>

        <dl className="mt-20 grid grid-cols-2 gap-8 border-t border-border pt-10 md:grid-cols-4">
          {[
            { k: "03+", v: "Years of experience" },
            { k: "2", v: "Years teaching JS" },
            { k: "MERN", v: "Stack specialist" },
            { k: "Tunis", v: "Based in Tunisia" },
          ].map((stat) => (
            <div key={stat.v}>
              <dt className="font-display text-3xl font-bold text-primary md:text-4xl">
                {stat.k}
              </dt>
              <dd className="mt-1 text-sm text-muted-foreground">{stat.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "React",
    "Node.js",
    "TypeScript",
    "Magento 2",
    "OpenSearch",
    "MongoDB",
    "Express",
    "Flutter",
    "Docker",
    "MySQL",
    "REST APIs",
    "Git",
  ];

  return (
    <section className="overflow-hidden border-y border-border bg-card/30 py-6">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="mx-8 font-display text-2xl font-semibold text-muted-foreground md:text-3xl"
          >
            {item}
            <span className="ml-8 text-primary">/</span>
          </span>
        ))}
      </div>
    </section>
  );
}

function SectionLabel({ n, title }: { n: string; title: string }) {
  return (
    <div className="mb-12 flex items-baseline gap-4">
      <span className="font-mono text-sm text-primary">{n}.</span>
      <h2 className="font-display text-3xl font-bold md:text-5xl">{title}</h2>
      <div className="hairline flex-1" />
    </div>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <SectionLabel n="01" title="About me" />
      <div className="grid gap-12 md:grid-cols-5">
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground md:col-span-3">
          <p>
            I'm an experienced web developer with{" "}
            <span className="text-foreground">3 years</span> in software
            development, specializing in modern web and mobile applications.
          </p>
          <p>
            I focus on writing{" "}
            <span className="text-foreground">
              clean, efficient and maintainable
            </span>{" "}
            code backed by strong performance and thoughtful user experience.
            From analysis & design to integration, optimization and deployment,
            I'm comfortable across the full development cycle.
          </p>
          <p>
            Currently shipping an innovative{" "}
            <span className="text-foreground">
              search solution for Magento 2
            </span>{" "}
            using OpenSearch, improving relevance, scalability and speed for
            e-commerce platforms.
          </p>
        </div>

        <div className="space-y-3 md:col-span-2">
          {[
            {
              icon: MapPin,
              label: "Location",
              value: "Ain Zaghouan, Tunis, Tunisia",
            },
            { icon: Mail, label: "Email", value: "hamza.hasnni@gmail.com" },
            { icon: Phone, label: "Phone", value: "(+216) 22 449 271" },
            {
              icon: Terminal,
              label: "Languages",
              value: "Arabic · English · French",
            },
          ].map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex items-start gap-4 rounded-lg border border-border bg-card/40 p-4 transition-colors hover:border-primary/40"
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {label}
                </div>
                <div className="mt-0.5 text-sm">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <SectionLabel n="02" title="Experience" />
      <ol className="relative space-y-12 md:border-l md:border-border md:pl-8">
        {EXPERIENCE.map((item) => (
          <li key={item.role + item.org} className="relative">
            <span className="absolute -left-[2.15rem] top-2 hidden h-3 w-3 rounded-full bg-primary ring-4 ring-background md:block" />
            <div className="grid gap-6 md:grid-cols-4">
              <div className="md:col-span-1">
                <div className="font-mono text-xs uppercase tracking-wider text-primary">
                  {item.period}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  {item.location}
                </div>
              </div>
              <div className="md:col-span-3">
                <h3 className="font-display text-2xl font-semibold">
                  {item.role}{" "}
                  <span className="text-muted-foreground">@ {item.org}</span>
                </h3>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Stack() {
  return (
    <section
      id="stack"
      className="border-y border-border bg-card/20 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel n="03" title="Tech stack" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {STACK.map(({ icon: Icon, title, items }) => (
            <div
              key={title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:glow-primary"
            >
              <div className="mb-5 grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl font-semibold">{title}</h3>
              <ul className="mt-4 space-y-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 font-mono text-sm text-muted-foreground"
                  >
                    <span className="text-primary">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <SectionLabel n="04" title="Selected projects" />
      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((project) => (
          <article
            key={project.title}
            className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-xs uppercase tracking-wider text-primary">
                  {project.tag}
                </span>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground transition-colors hover:text-primary"
                    aria-label="Open project"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ) : null}
              </div>
              <h3 className="font-display mt-3 text-2xl font-semibold">
                {project.title}
              </h3>
              <p className="mt-3 text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-5 font-mono text-xs text-muted-foreground">
                {project.role}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border bg-background/60 px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border py-24 md:py-32"
    >
      <div className="absolute inset-0 bg-hero-glow opacity-60" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="font-mono text-sm text-primary">{`> let's_build_something();`}</p>
        <h2 className="font-display mt-4 text-4xl font-bold text-balance md:text-6xl">
          Have a project in mind?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          I'm currently open to freelance work and full-time opportunities. Drop
          me a line. I usually reply within 24 hours.
        </p>

        <a
          href="mailto:hamza.hasnni@gmail.com"
          className="group mt-10 inline-flex items-center gap-3 rounded-lg bg-primary px-8 py-4 font-medium text-primary-foreground transition-all hover:glow-primary"
        >
          <Mail className="h-5 w-5" />
          hamza.hasnni@gmail.com
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {[
            {
              icon: Linkedin,
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/hamza-hasni/",
            },
            {
              icon: Github,
              label: "GitHub",
              href: "https://github.com/hamza-hasnni",
            },
            {
              icon: Phone,
              label: "WhatsApp",
              href: "https://wa.me/21622449271",
            },
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card/60 px-5 py-2.5 text-sm backdrop-blur transition-all hover:border-primary/50 hover:text-primary"
            >
              <Icon className="h-4 w-4" />
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row md:items-center">
        <div className="font-mono">
          © {new Date().getFullYear()} Hamza Hasni — Designed & built with care.
        </div>
        <div className="font-mono text-xs">{`<crafted with React + Tailwind />`}</div>
      </div>
    </footer>
  );
}
