import { about, links, profile, skills } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">
        跳到主要内容
      </a>

      <header className="sticky top-0 z-10 border-b border-line bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-3xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-5 py-4 sm:px-8">
          <a href="#top" className="text-sm font-medium tracking-wide">
            {profile.handle}
          </a>
          <nav aria-label="页内导航" className="flex gap-5 text-sm text-muted">
            <a className="hover:text-foreground" href="#about">
              关于
            </a>
            <a className="hover:text-foreground" href="#skills">
              技能
            </a>
            <a className="hover:text-foreground" href="#links">
              外链
            </a>
          </nav>
        </div>
      </header>

      <main id="main" className="mx-auto w-full max-w-3xl px-5 sm:px-8">
        <section
          id="top"
          aria-labelledby="hero-name"
          className="border-b border-line pb-16 pt-16 sm:pb-24 sm:pt-24"
        >
          <p className="font-mono text-xs tracking-[0.18em] text-accent">
            iOS · AI AGENT
          </p>
          <h1
            id="hero-name"
            className="mt-5 text-5xl leading-none font-medium tracking-[0.06em] sm:text-7xl"
          >
            {profile.name}
          </h1>
          <p className="mt-6 flex items-center gap-3 text-2xl sm:text-3xl">
            <span className="seal" aria-hidden="true">
              码
            </span>
            {profile.handle}
          </p>
          <p className="mt-6 text-lg text-body sm:text-xl">{profile.tagline}</p>
        </section>

        <section id="about" aria-labelledby="about-heading" className="py-16 sm:py-20">
          <div className="mb-6 flex items-baseline justify-between gap-4">
            <h2 id="about-heading" className="text-2xl font-medium">
              关于
            </h2>
            <span className="font-mono text-xs text-muted">01</span>
          </div>
          <div className="space-y-4 text-base leading-8 text-body">
            {about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section id="skills" aria-labelledby="skills-heading" className="py-16 sm:py-20">
          <div className="mb-6 flex items-baseline justify-between gap-4">
            <h2 id="skills-heading" className="text-2xl font-medium">
              技能 / 方向
            </h2>
            <span className="font-mono text-xs text-muted">02</span>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {skills.map((skill) => (
              <li key={skill.title}>
                <article className="h-full rounded-2xl border border-line bg-surface p-5">
                  <h3 className="text-lg leading-snug font-medium">{skill.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-body">{skill.detail}</p>
                </article>
              </li>
            ))}
          </ul>
        </section>

        <section id="links" aria-labelledby="links-heading" className="py-16 sm:py-20">
          <div className="mb-6 flex items-baseline justify-between gap-4">
            <h2 id="links-heading" className="text-2xl font-medium">
              外链
            </h2>
            <span className="font-mono text-xs text-muted">03</span>
          </div>
          <p className="mb-5 text-sm leading-7 text-body">
            以下为占位链接，尚未指向真实主页。
          </p>
          <ul className="grid gap-3">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  aria-label={`${link.label}（占位链接，待填写）`}
                  className="flex min-h-14 items-center justify-between gap-4 rounded-2xl border border-line px-4 py-3 hover:border-accent/50 hover:bg-accent-soft"
                >
                  <span className="font-medium">{link.label}</span>
                  <span className="inline-flex shrink-0 items-center gap-3">
                    <span className="rounded-full border border-accent/50 px-2.5 py-1 font-mono text-xs text-accent">
                      待填写
                    </span>
                    <span aria-hidden="true" className="text-muted">
                      →
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto w-full max-w-3xl px-5 py-8 text-sm text-muted sm:px-8">
          <p>© 2026 AI码人士</p>
        </div>
      </footer>
    </>
  );
}
