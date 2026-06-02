import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Github,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  MonitorSmartphone,
  Sparkles,
} from 'lucide-react';

import mennImage from '../assets/images/menn.png';
import suitedImage from '../assets/images/suited.jpg';
import hathaiImage from '../assets/images/hathai.jpg';
import kmutnbImage from '../assets/images/kmutnb.png';
import checkImage from '../assets/images/check.png';
import phpIcon from '../assets/images/skills/php.svg';
import laravelIcon from '../assets/images/skills/laravel.png';
import javascriptIcon from '../assets/images/skills/javascript.png';
import figmaIcon from '../assets/images/skills/figma.png';
import photoshopIcon from '../assets/images/skills/photoshop.png';
import flutterIcon from '../assets/images/skills/flutter.png';
import pythonIcon from '../assets/images/skills/python.webp';
import cppIcon from '../assets/images/skills/cpp.png';

const skills = [
  { name: 'PHP & SQL', icon: phpIcon, detail: 'Backend systems and database work' },
  { name: 'Laravel', icon: laravelIcon, detail: 'Clean web application structure' },
  { name: 'JavaScript', icon: javascriptIcon, detail: 'Interactive interfaces and jQuery' },
  { name: 'Figma', icon: figmaIcon, detail: 'Interface planning and prototyping' },
  { name: 'Photoshop', icon: photoshopIcon, detail: 'Visual editing and graphic assets' },
  { name: 'Flutter', icon: flutterIcon, detail: 'Mobile UI and app prototypes' },
  { name: 'Python', icon: pythonIcon, detail: 'Automation and practical scripts' },
  { name: 'C++ / Arduino', icon: cppIcon, detail: 'Hardware logic and prototypes' },
];

const projects = [
  {
    title: 'Student Portfolio System',
    type: 'Web application',
    image: suitedImage,
    description: 'A focused web experience for presenting profile, skills, and education with a polished visual layer.',
    stack: ['PHP', 'JavaScript', 'Bootstrap'],
  },
  {
    title: 'Hathai Visual Work',
    type: 'Design direction',
    image: hathaiImage,
    description: 'Brand-facing visual work with clean composition, image treatment, and readable information hierarchy.',
    stack: ['Photoshop', 'Figma', 'Canva'],
  },
  {
    title: 'KMUTNB Learning Path',
    type: 'Education',
    image: kmutnbImage,
    description: 'Information Technology for Industry experience across web, software, and practical engineering projects.',
    stack: ['Laravel', 'Python', 'Flutter'],
  },
];

const stats = [
  { value: '8+', label: 'Skill areas' },
  { value: '3', label: 'Core disciplines' },
  { value: 'IT', label: 'Industry focus' },
];

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f5f5f7] text-[#1d1d1f]">
      <header className="fixed inset-x-0 top-0 z-30 border-b border-black/10 bg-white/72 backdrop-blur-xl">
        <nav className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-5">
          <a className="flex items-center gap-2 text-sm font-semibold tracking-normal" href="#top">
            <span className="grid size-7 place-items-center rounded-md bg-[#1d1d1f] text-xs text-white">TK</span>
            Thanaphat
          </a>
          <div className="hidden items-center gap-7 text-sm text-[#5f5f64] md:flex">
            <a className="transition hover:text-[#1d1d1f]" href="#work">
              Work
            </a>
            <a className="transition hover:text-[#1d1d1f]" href="#skills">
              Skills
            </a>
            <a className="transition hover:text-[#1d1d1f]" href="#contact">
              Contact
            </a>
          </div>
          <a
            className="hidden h-9 items-center gap-2 rounded-md bg-[#0071e3] px-3 text-sm font-medium text-white transition hover:bg-[#0077ed] sm:inline-flex"
            href="mailto:cosmoteamstar@hotmail.com"
            title="Send email"
          >
            <Mail className="size-4" />
            <span className="hidden sm:inline">Contact</span>
          </a>
        </nav>
      </header>

      <main id="top" className="pt-14">
        <section className="mx-auto grid min-h-[calc(100svh-8rem)] w-full max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-[1.08fr_0.92fr] md:py-16">
          <div className="min-w-0 max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-black/10 bg-white px-3 py-2 text-sm text-[#5f5f64] shadow-sm">
              <Sparkles className="size-4 text-[#0071e3]" />
              Web Developer / Designer
            </div>
            <h1 className="max-w-full break-words text-5xl font-semibold leading-[1.02] tracking-normal text-[#111113] sm:text-6xl lg:text-7xl">
              <span className="block">Thanaphat</span>
              <span className="block">Komut</span>
            </h1>
            <p className="mt-6 max-w-full text-lg leading-8 text-[#5f5f64] sm:max-w-2xl sm:text-xl">
              I build polished web experiences with practical backend thinking, clean interface design, and a love for
              details that make software feel effortless.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-[#1d1d1f] px-5 text-sm font-semibold text-white transition hover:bg-black sm:w-auto"
                href="#work"
              >
                View Work
                <ArrowUpRight className="size-4" />
              </a>
              <a
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md border border-black/10 bg-white px-5 text-sm font-semibold text-[#1d1d1f] transition hover:border-black/20 sm:w-auto"
                href="https://github.com/Cosmoteamstar"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="size-4" />
                GitHub
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full min-w-0 max-w-[420px]">
            <div className="aspect-[4/5] overflow-hidden rounded-lg border border-black/10 bg-[#dfe3e7] shadow-[0_30px_80px_rgba(0,0,0,0.13)]">
              <img
                className="h-full w-full object-cover object-top"
                src={mennImage}
                alt="Thanaphat Komut portrait"
                loading="eager"
                decoding="sync"
                fetchPriority="high"
              />
            </div>
            <div className="absolute -bottom-5 left-4 right-4 rounded-lg border border-black/10 bg-white/88 p-4 shadow-xl backdrop-blur-xl">
              <div className="flex items-start gap-3">
                <img className="mt-1 size-4" src={checkImage} alt="" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold">Information Technology for Industry</p>
                  <p className="mt-1 text-sm leading-6 text-[#6e6e73]">King Mongkut's University of Technology North Bangkok</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-black/10 bg-white">
          <div className="mx-auto grid max-w-6xl grid-cols-3 px-5">
            {stats.map((item) => (
              <div className="border-l border-black/10 py-6 first:border-l-0 md:py-8" key={item.label}>
                <p className="text-3xl font-semibold text-[#111113]">{item.value}</p>
                <p className="mt-1 text-sm text-[#6e6e73]">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#0071e3]">
                <BriefcaseBusiness className="size-4" />
                Selected Work
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-normal text-[#111113] md:text-5xl">Simple, sharp, useful.</h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-[#6e6e73]">
              A small collection shaped around web development, visual design, and practical software projects.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <article className="overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm" key={project.title}>
                <div className="aspect-[16/11] bg-[#e8e8ed]">
                  <img className="h-full w-full object-cover" src={project.image} alt={project.title} />
                </div>
                <div className="p-5">
                  <p className="text-sm font-medium text-[#0071e3]">{project.type}</p>
                  <h3 className="mt-2 text-xl font-semibold text-[#111113]">{project.title}</h3>
                  <p className="mt-3 min-h-[84px] text-sm leading-6 text-[#6e6e73]">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span className="rounded-md bg-[#f5f5f7] px-3 py-1 text-xs font-medium text-[#424245]" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="bg-[#111113] px-5 py-16 text-white md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-start">
              <div>
                <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#86d1ff]">
                  <Code2 className="size-4" />
                  Skill Set
                </p>
                <h2 className="mt-4 text-4xl font-semibold tracking-normal md:text-5xl">Tools for building from idea to release.</h2>
                <p className="mt-5 text-base leading-7 text-white/64">
                  Balanced across backend logic, frontend interactions, visual design, and hands-on prototypes.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {skills.map((skill) => (
                  <div className="rounded-lg border border-white/10 bg-white/[0.06] p-4" key={skill.name}>
                    <div className="flex items-center gap-3">
                      <span className="grid size-11 place-items-center rounded-md bg-white">
                        <img className="max-h-7 max-w-7 object-contain" src={skill.icon} alt="" aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="font-semibold">{skill.name}</h3>
                        <p className="mt-1 text-sm leading-5 text-white/58">{skill.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-lg border border-black/10 bg-white p-6">
              <Layers3 className="size-6 text-[#0071e3]" />
              <h3 className="mt-4 text-lg font-semibold">Interface Craft</h3>
              <p className="mt-2 text-sm leading-6 text-[#6e6e73]">Clean layouts, readable hierarchy, and responsive details.</p>
            </div>
            <div className="rounded-lg border border-black/10 bg-white p-6">
              <MonitorSmartphone className="size-6 text-[#34c759]" />
              <h3 className="mt-4 text-lg font-semibold">Web & Mobile</h3>
              <p className="mt-2 text-sm leading-6 text-[#6e6e73]">Practical app thinking across browser and mobile surfaces.</p>
            </div>
            <div className="rounded-lg border border-black/10 bg-white p-6">
              <GraduationCap className="size-6 text-[#ff9f0a]" />
              <h3 className="mt-4 text-lg font-semibold">IT Foundation</h3>
              <p className="mt-2 text-sm leading-6 text-[#6e6e73]">Grounded in Information Technology for Industry at KMUTNB.</p>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-black/10 bg-white px-5 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold">Thanaphat Komut</p>
            <p className="mt-2 flex items-center gap-2 text-sm text-[#6e6e73]">
              <MapPin className="size-4" />
              Bangkok, Thailand
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#1d1d1f] px-4 text-sm font-semibold text-white transition hover:bg-black"
              href="mailto:cosmoteamstar@hotmail.com"
            >
              <Mail className="size-4" />
              cosmoteamstar@hotmail.com
            </a>
            <a
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-black/10 bg-white px-4 text-sm font-semibold text-[#1d1d1f] transition hover:border-black/20"
              href="https://github.com/Cosmoteamstar"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="size-4" />
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
