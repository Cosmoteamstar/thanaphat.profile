import {
  ArrowUpRight,
  ArrowRight,
  Bot,
  Boxes,
  BriefcaseBusiness,
  Building2,
  ChartNoAxesCombined,
  Code2,
  Database,
  Globe,
  Github,
  GraduationCap,
  HandCoins,
  Handshake,
  House,
  LayoutPanelTop,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Network,
  Phone,
  ReceiptText,
  ServerCog,
  ShoppingCart,
  Sparkles,
  UsersRound,
  Warehouse,
  Workflow,
} from 'lucide-react';

import mennImage from '../assets/images/menn.png';
import checkImage from '../assets/images/check.png';
import laravelIcon from '../assets/images/skills/laravel.png';
import javascriptIcon from '../assets/images/skills/javascript.png';
import pythonIcon from '../assets/images/skills/python.webp';
import apiIcon from '../assets/images/skills/api.jpg';
import odooIcon from '../assets/images/skills/odoo.png';
import linuxIcon from '../assets/images/skills/linux.png';
import Postgresql from '../assets/images/skills/Postgresql.svg.png';
import Qweb from '../assets/images/skills/qweb.png';
import loanManagementBg from '../assets/images/skills/loan_management.jpg';
import realEstateBg from '../assets/images/skills/real_estate.jpg';
import OdooBackground from '../assets/images/skills/odoo_background.jpg';
import OdooImplement from '../assets/images/skills/odoo_implementer.jpg';

const contact = {
  email: 'Thanaphat709@gmail.com',
  phone: 'Hiden for privacy',
  // phoneHref: 'tel:+66621974921',
  github: 'https://github.com/Cosmoteamstar',
  linkedin: 'https://www.linkedin.com/in/menxfire',
};

const skills = [
  { name: 'Odoo v17 / v18 / v19', icon: odooIcon, detail: 'Enterprise and Community implementation' },
  { name: 'Python ORM & Wizards', icon: pythonIcon, detail: 'Models, actions, computed fields, and business logic' },
  { name: 'JavaScript OWL', icon: javascriptIcon, detail: 'Odoo web UI customization and interactive flows' },
  { name: 'PostgreSQL & Migration', icon: Postgresql, detail: 'Data migration, remapping, and database-aware fixes' },
  { name: 'XML / QWeb / Portal', icon: Qweb, detail: 'Views, reports, menus, and customer-facing portal pages' },
  { name: 'REST / JSON-RPC / XML-RPC', icon: apiIcon, detail: 'Integrations, webhooks, and third-party connectors' },
  { name: 'Docker / Linux / Nginx', icon: linuxIcon, detail: 'Deployment support and production environment work' },
  { name: 'PHP / Laravel Background', icon: laravelIcon, detail: 'Backend foundation for web systems and APIs' },
];

const businessApps = [
  { name: 'Sales', icon: ShoppingCart, detail: 'quotations, orders, customer flows' },
  { name: 'Purchase', icon: Handshake, detail: 'vendor process and approval flow' },
  { name: 'Accounting', icon: ReceiptText, detail: 'journals, invoices, financial entries' },
  { name: 'CRM', icon: UsersRound, detail: 'lead, opportunity, customer pipeline' },
  { name: 'Inventory', icon: Boxes, detail: 'stock movement and warehouse logic' },
  { name: 'Website', icon: Globe, detail: 'portal, public pages, external UI' },
  { name: 'HR', icon: UsersRound, detail: 'employee records, attendance, time off' },
  { name: 'Helpdesk', icon: MessageCircle, detail: 'ticketing, SLAs, support workflows' },
];

const projects = [
  {
    title: 'Loan Management System',
    type: 'Odoo v17 Enterprise | 10 months',
    icon: HandCoins,
    backgroundImage: loanManagementBg,
    company: 'Sourecode Co., Ltd',
    description:
      'Built a custom loan module with React as the customer-facing frontend and Odoo as the backend for loan application, repayment schedules, interest calculation, accounting entries, and LINE OA support.',
    stack: ['Python ORM', 'Accounting', 'REST API', 'LINE OA'],
    apps: ['Accounting', 'Website', 'Portal', 'CRM'],
    flow: [
      { label: 'React Frontend', note: 'application portal', icon: LayoutPanelTop },
      { label: 'REST API', note: 'auth + form + status', icon: Network },
      { label: 'Odoo Backend', note: 'loan module + ORM', icon: ServerCog },
      { label: 'Accounting', note: 'journals + repayment', icon: ReceiptText },
      { label: 'LINE OA', note: 'support + status', icon: MessageCircle },
    ],
  },
  {
    title: 'Real Estate & Auction Platform',
    type: 'Odoo v17 Enterprise | 4 months',
    icon: Building2,
    backgroundImage: realEstateBg,
    company: 'Sourecode Co., Ltd',
    description:
      'Built property and auction workflows with a React customer-facing frontend, Odoo backend, live bidding behavior, CRM and Accounting integration, API-connected portal views, and LINE OA support.',
    stack: ['CRM', 'Portal', 'Accounting', 'API'],
    apps: ['CRM', 'Accounting', 'Website', 'Portal'],
    flow: [
      { label: 'React Website', note: 'listing + bidding UI', icon: Globe },
      { label: 'API Layer', note: 'bid + customer sync', icon: Network },
      { label: 'Odoo Auction', note: 'property + contract', icon: House },
      { label: 'CRM / Accounting', note: 'lead + billing', icon: ChartNoAxesCombined },
      { label: 'LINE OA', note: 'support + register', icon: MessageCircle },
    ],
  },
  {
    title: 'Core ERP Development & POC',
    type: 'Odoo v17 / v18 / v19 Enterprise | 19 months',
    icon: ServerCog,
    backgroundImage: OdooBackground,
    company: 'Sourecode Co., Ltd',
    description:
      'Translated internal business processes into Odoo workflows across Sales, Purchase, Inventory, Accounting, and CRM while maintaining UI/UX customizations and POCs.',
    stack: ['Sales', 'Purchase', 'Inventory', 'POC'],
    apps: ['Sales', 'Purchase', 'Inventory', 'Accounting', 'CRM', 'Website'],
    flow: [
      { label: 'Business Process', note: 'process mapping', icon: Workflow },
      { label: 'Odoo Apps', note: 'core modules', icon: Warehouse },
      { label: 'Custom Module', note: 'ORM + XML + Wizards', icon: Database },
      { label: 'OWL / UI', note: 'custom screens + POC', icon: Code2 },
      { label: 'Support', note: 'training + maintenance', icon: Bot },
    ],
  },
  {
    title: 'Odoo Upgrade Implementation (v8 → v18)',
    type: 'Odoo v8 → v18 Community | 2 months',
    icon: ServerCog,
    backgroundImage: OdooImplement,
    company: 'Skytizens Co., Ltd',
    description:
      'Delivered an end-to-end upgrade from Odoo v8 to v18: planning, reviewing all plugins, improving active modules, migrating legacy data to the new system, and providing enhancements, support, testing, and user training.',
    stack: ['Upgrade Plan', 'Module Review', 'Data Migration', 'UAT'],
    apps: ['Sales', 'Purchase', 'Inventory', 'Accounting', 'CRM', 'Helpdesk', 'Website', 'Employees'],
    flow: [
      { label: 'Plan & Scope', note: 'upgrade roadmap', icon: Workflow },
      { label: 'Plugin Review', note: 'audit 3rd-party apps', icon: Code2 },
      { label: 'Module Upgrade', note: 'refactor active modules', icon: ServerCog },
      { label: 'Data Migration', note: 'reuse legacy data', icon: Database },
      { label: 'Testing & Training', note: 'UAT + user enablement', icon: Bot },
    ],
  },
];

const stats = [
  { value: 'v17/v18/v19', label: 'Odoo versions (Enterprise and Community)' },
  { value: 'Deployment options', label: 'Odoo.sh + self-hosted' },
  { value: '19 months', label: 'Core ERP work' },
];

function FlowDiagram({ steps }) {
  return (
    <div className="mt-3 overflow-x-auto rounded-lg border border-black/10 bg-[#f7f8fa] p-3">
      <div className="flex flex-col gap-2 xl:w-max xl:flex-row xl:flex-nowrap xl:items-stretch">
        {steps.map((step, index) => (
          <div className="contents" key={step.label}>
            <div className="flex min-w-0 flex-1 items-start gap-3 rounded-md border border-black/10 bg-white p-3 xl:min-w-[120px]">
              <span className="grid size-9 shrink-0 place-items-center rounded-md bg-[#eef6ff] text-[#0071e3]">
                <step.icon className="size-5" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-[#111113]">{step.label}</p>
                <p className="mt-1 text-xs leading-5 text-[#6e6e73]">{step.note}</p>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className="grid h-6 shrink-0 place-items-center text-[#0071e3] xl:h-auto xl:w-6">
                <ArrowRight className="size-4 rotate-90 xl:rotate-0" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

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
            href={`mailto:${contact.email}`}
            title="Send email"
          >
            <Mail className="size-4" />
            <span className="hidden sm:inline">Contact</span>
          </a>
        </nav>
      </header>

      <main id="top" className="pt-14">
        <section className="mx-auto grid min-h-[calc(100svh-8rem)] w-full max-w-6xl grid-cols-1 items-center gap-10 px-5 py-14 md:grid-cols-[1.08fr_0.92fr] md:py-16">
          <div className="min-w-0 max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-black/10 bg-white px-3 py-2 text-sm text-[#5f5f64] shadow-sm">
              <Sparkles className="size-4 text-[#0071e3]" />
              Odoo Developer
            </div>
            <h1 className="max-w-full break-words text-5xl font-semibold leading-[1.02] tracking-normal text-[#111113] sm:text-6xl lg:text-7xl">
              <span className="block">Thanaphat</span>
              <span className="block">Komut</span>
            </h1>
            <p className="mt-6 max-w-full break-words text-lg leading-8 text-[#5f5f64] sm:max-w-2xl sm:text-xl">
              I design and customize Odoo ERP systems that turn complex business workflows into reliable modules,
              integrations, portals, and automation for daily operations.
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
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="size-4" />
                LinkedIn
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
                  <p className="text-sm font-semibold">Odoo Specialist</p>
                  <p className="mt-1 text-sm leading-6 text-[#6e6e73]">
                    ERP architecture, custom modules, APIs, and workflow automation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-black/10 bg-white">
          <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-black/10 px-5 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
            {stats.map((item) => (
              <div className="py-6 sm:px-6 md:py-8" key={item.label}>
                <p className="text-3xl font-semibold leading-tight text-[#111113]">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-[#6e6e73]">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#0071e3]">
                <BriefcaseBusiness className="size-4" />
                Odoo Work
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-normal text-[#111113] md:text-5xl">
                ERP modules built around real operations.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-[#6e6e73]">
              Full-cycle implementation, advanced module customization, data migration, system configuration, and
              integrations across Enterprise and Community editions.
            </p>
          </div>

          <div className="mt-10 rounded-lg border border-black/10 bg-white p-5 shadow-sm">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0071e3]">Odoo Business Apps</p>
                <h3 className="mt-2 text-2xl font-semibold text-[#111113]">Standard apps used in business workflows</h3>
              </div>
              <p className="max-w-xl text-sm leading-6 text-[#6e6e73]">
                These modules are the base layer I usually extend, integrate, or connect with custom business logic.
              </p>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {businessApps.map((app) => (
                <div className="flex min-w-0 items-start gap-3 rounded-md border border-black/10 bg-[#f7f8fa] p-3" key={app.name}>
                  <span className="grid size-10 shrink-0 place-items-center rounded-md bg-white text-[#714b67]">
                    <app.icon className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[#111113]">{app.name}</p>
                    <p className="mt-1 text-xs leading-5 text-[#6e6e73]">{app.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-5">
            {projects.map((project) => (
              <article
                className="grid overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm lg:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)]"
                key={project.title}
              >
                <div className="relative min-w-0 overflow-hidden bg-[#eef0f3] p-5">
                  {project.backgroundImage && (
                    <div
                      className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-25"
                      style={{ backgroundImage: `url(${project.backgroundImage})` }}
                    />
                  )}
                  <div className="relative z-10 flex h-full min-h-[260px] flex-col justify-between rounded-md border border-black/10 bg-white/72 p-5">
                  
                    <div className="flex items-center justify-between gap-3">
                      <span className="grid size-12 place-items-center rounded-md bg-[#eef6ff] text-[#0071e3]">
                        <project.icon className="size-7" />
                      </span>
                      <span className="rounded-md bg-white px-3 py-1 text-xs font-semibold text-[#714b67]">Odoo Case</span>
                    </div>
                    <div>
                      <p className="break-words text-xs font-semibold uppercase tracking-[0.14em] text-[#6e6e73]">{project.type}</p>
                      <p className="mt-3 break-words text-3xl font-semibold leading-tight text-[#111113]">{project.title}</p>
                    </div>
                  </div>
                </div>
                <div className="min-w-0 p-5">
                  {project.company && (
                    <div className="flex justify-end">
                      <span className="rounded-md bg-[#eef0f3] px-3 py-1 text-xs font-semibold text-[#424245]">
                        {project.company}
                      </span>
                    </div>
                  )}
                  <p className="mt-3 break-words text-sm leading-6 text-[#6e6e73]">{project.description}</p>
                  <div className="mt-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6e6e73]">Odoo apps touched</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.apps.map((item) => (
                        <span className="rounded-md bg-[#f0f1f4] px-3 py-1 text-xs font-semibold text-[#424245]" key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-[#6e6e73]">Integration flow</p>
                  <FlowDiagram steps={project.flow} />
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
            <div className="grid grid-cols-1 gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-start">
              <div>
                <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#86d1ff]">
                  <Code2 className="size-4" />
                  Skill Set
                </p>
                <h2 className="mt-4 text-4xl font-semibold tracking-normal md:text-5xl">Tools for building from idea to release.</h2>
                <p className="mt-5 text-base leading-7 text-white/64">
                  Focused on Odoo backend development, frontend customization, integration design, and stable
                  operations for ERP systems.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {skills.map((skill) => (
                  <div className="rounded-lg border border-white/10 bg-white/[0.06] p-4" key={skill.name}>
                    <div className="flex items-center gap-3">
                      <span className="grid size-11 place-items-center rounded-md bg-white">
                        {skill.icon ? (
                          <img className="max-h-7 max-w-7 object-contain" src={skill.icon} alt="" aria-hidden="true" />
                        ) : (
                          <span className="text-xs font-bold text-[#714b67]">{skill.badge}</span>
                        )}
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
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <div className="rounded-lg border border-black/10 bg-white p-6">
              <Workflow className="size-6 text-[#0071e3]" />
              <h3 className="mt-4 text-lg font-semibold">Workflow Translation</h3>
              <p className="mt-2 text-sm leading-6 text-[#6e6e73]">
                Work with System Analysts to convert business processes into customized Odoo flows.
              </p>
            </div>
            <div className="rounded-lg border border-black/10 bg-white p-6">
              <ServerCog className="size-6 text-[#34c759]" />
              <h3 className="mt-4 text-lg font-semibold">API & Architecture</h3>
              <p className="mt-2 text-sm leading-6 text-[#6e6e73]">
                Design endpoints, authentication, request schemas, and integration points for multi-system data flows.
              </p>
            </div>
            <div className="rounded-lg border border-black/10 bg-white p-6">
              <GraduationCap className="size-6 text-[#ff9f0a]" />
              <h3 className="mt-4 text-lg font-semibold">IT Foundation</h3>
              <p className="mt-2 text-sm leading-6 text-[#6e6e73]">
                Bachelor of Industrial Technology in Information Technology for Industry, KMUTNB.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-black/10 bg-white px-5 py-16">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0071e3]">Current Focus</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-normal text-[#111113] md:text-5xl">
                Custom Odoo systems for teams that need more than default ERP.
              </h2>
            </div>
            <div className="grid gap-3">
              {[
                'Sales, Purchase, Inventory, Accounting, CRM, and Web Portal workflows',
                'Technical training, support, UI/UX customization, and production maintenance',
                'POC development using Python ORM, Wizards, OWL, APIs, and automation logic',
              ].map((item) => (
                <div className="rounded-lg border border-black/10 bg-[#f5f5f7] p-4 text-sm leading-6 text-[#424245]" key={item}>
                  {item}
                </div>
              ))}
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
            <a className="mt-2 flex items-center gap-2 text-sm text-[#6e6e73] transition hover:text-[#1d1d1f]" href={contact.phoneHref}>
              <Phone className="size-4" />
              {contact.phone}
            </a>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#1d1d1f] px-4 text-sm font-semibold text-white transition hover:bg-black"
              href={`mailto:${contact.email}`}
            >
              <Mail className="size-4" />
              {contact.email}
            </a>
            <a
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-black/10 bg-white px-4 text-sm font-semibold text-[#1d1d1f] transition hover:border-black/20"
              href={contact.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github className="size-4" />
              GitHub
            </a>
            <a
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-black/10 bg-white px-4 text-sm font-semibold text-[#1d1d1f] transition hover:border-black/20"
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="size-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
