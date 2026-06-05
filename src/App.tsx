import {
  ArrowDown,
  ArrowUpRight,
  BadgeCheck,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  CalendarClock,
  CircuitBoard,
  ContactRound,
  GraduationCap,
  Globe2,
  Languages,
  LineChart,
  Mail,
  MapPin,
  MessageCircle,
  PackageSearch,
  Phone,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Target,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import {
  profiles,
  uiCopy,
  type Language,
  type Profile,
  type SkillGroup,
  type TimelineItem,
  type UiCopy,
} from "./data/profile";

type SectionProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  id?: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const skillIcons: LucideIcon[] = [
  BrainCircuit,
  ShoppingBag,
  CircuitBoard,
  PackageSearch,
  LineChart,
  Languages,
];

const roleBulletIcons: LucideIcon[] = [BriefcaseBusiness, Bot, ShoppingBag, PackageSearch, CircuitBoard];
const publicUrl = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
const projectUrl = (link?: string) => publicUrl(link ?? "");

type PageProps = {
  profile: Profile;
  copy: UiCopy;
};

function Section({ eyebrow, title, intro, children, id }: SectionProps) {
  return (
    <section className="section" id={id}>
      <motion.div
        className="section-heading"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        variants={fadeUp}
      >
        {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
        <h2>{title}</h2>
        {intro ? <p>{intro}</p> : null}
      </motion.div>
      {children}
    </section>
  );
}

function Hero({
  profile,
  copy,
  language,
  onLanguageChange,
}: PageProps & {
  language: Language;
  onLanguageChange: (language: Language) => void;
}) {
  const [activeSignalIndex, setActiveSignalIndex] = useState(0);
  const activeSignal = profile.hero.signals[activeSignalIndex] ?? profile.hero.signals[0];
  const navItems = [
    { href: "#timeline", label: copy.nav.timeline },
    { href: "#live-projects", label: copy.nav.projects },
    { href: "#current-role", label: copy.nav.role },
    { href: "#ulty", label: copy.nav.ulty },
    { href: "#ai-tools", label: copy.nav.ai },
    { href: "#skills", label: copy.nav.skills },
    { href: "#education", label: copy.nav.education },
    { href: "#contact", label: copy.nav.contact },
  ];

  return (
    <header className="hero" id="top">
      <nav className="nav" aria-label={copy.aria.primaryNavigation}>
        <a className="brand text-brand" href="#top" aria-label={copy.aria.backToTop}>
          <span>{profile.identity.name}</span>
        </a>
        <div className="nav-cluster">
          <div className="nav-links">
            {navItems.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <div className="language-toggle" aria-label={copy.aria.languageSwitcher}>
            {(["ru", "en"] as const).map((item) => (
              <button
                className={language === item ? "active" : ""}
                key={item}
                type="button"
                onClick={() => onLanguageChange(item)}
                aria-pressed={language === item}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1>{profile.hero.headline}</h1>
          <p className="hero-subtitle">{profile.hero.subheadline}</p>

          {activeSignal ? (
            <motion.div
              className="hero-signal-board"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18, ease: "easeOut" }}
            >
              <div className="signal-preview">
                <span>{language === "ru" ? "Активный фокус" : "Active focus"}</span>
                <strong>{activeSignal.title}</strong>
                <p>{activeSignal.text}</p>
              </div>
              <div className="signal-chip-grid">
                {profile.hero.signals.map((signal, index) => (
                  <motion.button
                    className={index === activeSignalIndex ? "signal-chip active" : "signal-chip"}
                    key={signal.title}
                    type="button"
                    onClick={() => setActiveSignalIndex(index)}
                    onMouseEnter={() => setActiveSignalIndex(index)}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Sparkles size={14} aria-hidden="true" />
                    {signal.title}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : null}

          <div className="hero-actions">
            <a className="button primary" href="#timeline">
              {copy.hero.timelineCta}
              <ArrowDown size={18} aria-hidden="true" />
            </a>
            <a className="button secondary" href="#contact">
              {copy.hero.contactCta}
              <ContactRound size={18} aria-hidden="true" />
            </a>
          </div>

        </motion.div>

        <motion.div
          className="hero-visual portrait-visual profile-orbit-card"
          initial={{ opacity: 0, scale: 0.96, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
        >
          <div className="profile-card-top">
            <span>{copy.hero.visualEyebrow}</span>
            <strong>{profile.identity.title}</strong>
          </div>

          <figure className="profile-photo-frame" aria-label={copy.hero.portraitLabel}>
            <img src={publicUrl("profile-photo.jpg")} alt={profile.identity.name} />
          </figure>

          <div className="portrait-facts" aria-label={copy.aria.proofPoints}>
            {profile.hero.proofPoints.map((point) => (
              <div className="portrait-fact" key={point.label}>
                <strong>{point.stat}</strong>
                <span>{point.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="proof-grid hero-proof-rail" aria-label={copy.aria.proofPoints}>
        {profile.hero.proofPoints.map((point) => (
          <div className="proof-item" key={point.label}>
            <div className="proof-icon">
              <BadgeCheck size={18} aria-hidden="true" />
            </div>
            <strong className="proof-stat">{point.stat}</strong>
            <span>{point.label}</span>
            <p>{point.detail}</p>
          </div>
        ))}
      </div>

      <div className="hero-meta">
        <span>
          <MapPin size={16} aria-hidden="true" />
          {profile.identity.location}
        </span>
        <span>
          <BriefcaseBusiness size={16} aria-hidden="true" />
          {profile.identity.availability}
        </span>
      </div>
    </header>
  );
}

function TimelineCard({ item, index }: { item: TimelineItem; index: number }) {
  return (
    <motion.a
      className="timeline-card timeline-link"
      href={`#${item.targetId}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.65, delay: index * 0.04, ease: "easeOut" }}
    >
      <div className="timeline-dot" aria-hidden="true" />
      <div className="timeline-card-top">
        <span>{item.period}</span>
        <small>{item.label}</small>
      </div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <div className="metric-row">
        {item.metrics.map((metric) => (
          <span key={metric}>{metric}</span>
        ))}
      </div>
      <span className="timeline-cta">
        {item.cta}
        <ArrowUpRight size={15} aria-hidden="true" />
      </span>
    </motion.a>
  );
}

function Timeline({ profile, copy }: PageProps) {
  return (
    <Section
      id="timeline"
      eyebrow={copy.sections.timeline.eyebrow}
      title={copy.sections.timeline.title}
      intro={copy.sections.timeline.intro}
    >
      <div className="timeline">
        <div className="timeline-line" aria-hidden="true" />
        {profile.timeline.map((item, index) => (
          <TimelineCard item={item} index={index} key={item.title} />
        ))}
      </div>
    </Section>
  );
}

function LiveProjects({ profile, copy }: PageProps) {
  const liveProjects = [
    {
      project: profile.projects[0],
      url: publicUrl(profile.projects[0]?.link ?? "ultymylife/index.html"),
      note: copy.sections.liveProjects.preview,
      previewImage: publicUrl("previews/ultymylife-preview.png"),
    },
    {
      project: profile.projects[1],
      url: publicUrl(profile.projects[1]?.link ?? "dr-mix/index.html"),
      note: copy.sections.liveProjects.preview,
      previewImage: publicUrl("previews/drmix-preview.png"),
    },
  ].filter(({ project }) => Boolean(project));

  return (
    <Section
      id="live-projects"
      eyebrow={copy.sections.liveProjects.eyebrow}
      title={copy.sections.liveProjects.title}
      intro={copy.sections.liveProjects.intro}
    >
      <div className="live-projects-grid">
        {liveProjects.map(({ project, url, note, previewImage }, index) => (
          <motion.article
            className="live-project-card"
            key={project.name}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.65, delay: index * 0.08, ease: "easeOut" }}
          >
            <div className="live-project-copy">
              <span>{project.type}</span>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a className="button secondary compact-button" href={url} target="_blank" rel="noreferrer">
                {copy.sections.liveProjects.open}
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
            <div className="browser-preview" aria-label={`${note}: ${project.name}`}>
              <div className="browser-preview-bar" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <a className="browser-preview-link" href={url} target="_blank" rel="noreferrer">
                <img src={previewImage} alt={`${note}: ${project.name}`} loading="lazy" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function CurrentRole({ profile, copy }: PageProps) {
  const role = profile.roles[0];

  return (
    <Section
      id="current-role"
      eyebrow={copy.sections.role.eyebrow}
      title={copy.sections.role.title}
      intro={role.summary}
    >
      <div className="role-layout">
        <motion.div
          className="role-summary"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65 }}
          variants={fadeUp}
        >
          <div className="role-summary-main">
            <span className="eyebrow">{copy.sections.role.current}</span>
            <h3>{role.title}</h3>
          </div>
          <div className="role-summary-meta">
            <span className="role-period">{role.period}</span>
            <p>{role.organization}</p>
          </div>
        </motion.div>

        <div className="role-bullets">
          {role.bullets.map((bullet, index) => {
            const BulletIcon = roleBulletIcons[index % roleBulletIcons.length];

            return (
              <motion.div
                className="bullet-row"
                key={bullet.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
              >
                <div className="bullet-icon">
                  <BulletIcon size={18} aria-hidden="true" />
                </div>
                <div className="bullet-copy">
                  <strong>{bullet.title}</strong>
                  <span>{bullet.text}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

function UltyCase({ profile, copy }: PageProps) {
  const ulty = profile.projects[0];
  const ultyUrl = projectUrl(ulty.link);

  return (
    <Section
      id="ulty"
      eyebrow={copy.sections.ulty.eyebrow}
      title={copy.sections.ulty.title}
      intro={copy.sections.ulty.intro}
    >
      <motion.div
        className="case-band"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <div className="case-content">
          <div className="case-icon">
            <Rocket size={26} aria-hidden="true" />
          </div>
          <span className="eyebrow">{ulty.type}</span>
          <h3>{ulty.name}</h3>
          <p>{ulty.description}</p>
          <a className="text-link" href={ultyUrl}>
            {copy.sections.ulty.link}
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>

        <div className="case-study-grid" aria-label={copy.aria.ultyModules}>
          {(ulty.caseStudy ?? []).map((item, index) => (
            <motion.div
              className="case-study-card"
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item.title}</strong>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="impact-list">
          {ulty.impact.slice(0, 2).map((impact) => (
            <div className="impact-item" key={impact}>
              <ShieldCheck size={18} aria-hidden="true" />
              <span>{impact}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

function SkillCard({ skill, index }: { skill: SkillGroup; index: number }) {
  const Icon = skillIcons[index % skillIcons.length];

  return (
    <motion.article
      className="skill-card"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.04 }}
      variants={fadeUp}
    >
      <div className="skill-card-top">
        <Icon size={23} aria-hidden="true" />
        <span>{skill.level}%</span>
      </div>
      <h3>{skill.title}</h3>
      <div className="skill-meter" aria-hidden="true">
        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />
      </div>
      <div className="tag-cloud">
        {skill.items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </motion.article>
  );
}

function Skills({ profile, copy }: PageProps) {
  return (
    <Section
      id="skills"
      eyebrow={copy.sections.skills.eyebrow}
      title={copy.sections.skills.title}
      intro={copy.sections.skills.intro}
    >
      <div className="skills-grid">
        {profile.skills.map((skill, index) => (
          <SkillCard skill={skill} index={index} key={skill.title} />
        ))}
      </div>
    </Section>
  );
}

function Toolchain({ profile, copy }: PageProps) {
  return (
    <Section
      id="ai-tools"
      eyebrow={copy.sections.tools.eyebrow}
      title={copy.sections.tools.title}
      intro={copy.sections.tools.intro}
    >
      <motion.div
        className="tool-marquee"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65 }}
      >
        {profile.tools.map((tool) => (
          <div className="tool-chip" key={tool.name}>
            <Zap size={16} aria-hidden="true" />
            <strong>{tool.name}</strong>
            <span>{tool.category}</span>
          </div>
        ))}
      </motion.div>
    </Section>
  );
}

function Achievements({ profile, copy }: PageProps) {
  return (
    <Section
      eyebrow={copy.sections.achievements.eyebrow}
      title={copy.sections.achievements.title}
      intro={copy.sections.achievements.intro}
    >
      <div className="achievement-grid">
        {profile.achievements.map((achievement, index) => (
          <motion.div
            className="achievement"
            key={achievement.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: index * 0.04 }}
          >
            <Target size={19} aria-hidden="true" />
            <strong>{achievement.title}</strong>
            <span>{achievement.text}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Education({ profile, copy }: PageProps) {
  return (
    <Section
      id="education"
      eyebrow={copy.sections.education.eyebrow}
      title={copy.sections.education.title}
      intro={copy.sections.education.intro}
    >
      <div className="education-grid">
        {profile.education.map((item, index) => (
          <motion.article
            className="education-card"
            key={item.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.28 }}
            transition={{ duration: 0.55, delay: index * 0.04 }}
            variants={fadeUp}
          >
            <div className="education-card-top">
              <GraduationCap size={21} aria-hidden="true" />
              <span>{item.period}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="education-tags">
              {item.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function WorkStyle({ profile, copy }: PageProps) {
  return (
    <Section
      eyebrow={copy.sections.workStyle.eyebrow}
      title={copy.sections.workStyle.title}
      intro={copy.sections.workStyle.intro}
    >
      <div className="work-style-grid">
        {profile.workStyle.map((item, index) => (
          <motion.article
            className="work-style-card"
            key={item.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.32 }}
            transition={{ duration: 0.55, delay: index * 0.05 }}
            variants={fadeUp}
          >
            <Sparkles size={20} aria-hidden="true" />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function Contact({ profile, copy }: PageProps) {
  const iconForContact: Record<Profile["contacts"][number]["kind"], LucideIcon> = {
    phone: Phone,
    email: Mail,
    telegram: MessageCircle,
    whatsapp: MessageCircle,
    linkedin: Globe2,
  };

  return (
    <section className="contact-section" id="contact">
      <motion.div
        className="contact-card"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div>
          <span className="eyebrow">{copy.sections.contact.eyebrow}</span>
          <h2>{copy.sections.contact.title}</h2>
          <p>{copy.sections.contact.intro}</p>
        </div>

        <div className="contact-grid">
          {profile.contacts.map((contact) => {
            const Icon = iconForContact[contact.kind] ?? ContactRound;
            return (
              <a className="contact-link" href={contact.href} key={contact.label}>
                <Icon size={19} aria-hidden="true" />
                <span>{contact.label}</span>
                <strong>{contact.value}</strong>
              </a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

function App() {
  const [language, setLanguage] = useState<Language>("ru");
  const profile = profiles[language];
  const copy = uiCopy[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = `${profile.identity.name} | ${profile.identity.title}`;
  }, [language, profile.identity.name, profile.identity.title]);

  useEffect(() => {
    const scrollToHash = (behavior: ScrollBehavior = "smooth") => {
      const hash = window.location.hash.slice(1);

      if (!hash) {
        return;
      }

      const target = document.getElementById(decodeURIComponent(hash));

      if (!target) {
        return;
      }

      window.requestAnimationFrame(() => {
        target.scrollIntoView({ behavior, block: "start" });
      });
    };

    const initialScroll = window.setTimeout(() => scrollToHash("auto"), 120);
    const handleHashChange = () => scrollToHash("smooth");

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.clearTimeout(initialScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [language]);

  return (
    <main>
      <div className="page-noise" aria-hidden="true" />
      <Hero
        profile={profile}
        copy={copy}
        language={language}
        onLanguageChange={setLanguage}
      />
      <LiveProjects profile={profile} copy={copy} />
      <Timeline profile={profile} copy={copy} />
      <CurrentRole profile={profile} copy={copy} />
      <UltyCase profile={profile} copy={copy} />
      <Toolchain profile={profile} copy={copy} />
      <Skills profile={profile} copy={copy} />
      <Achievements profile={profile} copy={copy} />
      <Education profile={profile} copy={copy} />
      <WorkStyle profile={profile} copy={copy} />
      <Contact profile={profile} copy={copy} />
      <footer className="footer">
        <span>{profile.identity.name}</span>
        <span>
          <CalendarClock size={15} aria-hidden="true" />
          {copy.footer}
        </span>
      </footer>
    </main>
  );
}

export default App;
