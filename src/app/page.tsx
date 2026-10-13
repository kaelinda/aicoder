import { about, links, profile, skills } from "@/content/site";
import { ThemeToggle } from "./theme-toggle";

const plateItems = ["Swift / SwiftUI", "Web 前端", "AI Agents"] as const;

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">
        跳到主要内容
      </a>

      <header className="site-header">
        <div className="shell header-bar">
          <a href="#top" className="brand">
            <span className="seal" aria-hidden="true">
              码
            </span>
            <span>{profile.handle}</span>
          </a>
          <div className="header-actions">
            <nav className="site-nav" aria-label="页内导航">
              <a href="#about">关于</a>
              <a href="#skills">技能</a>
              <a href="#links">外链</a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main id="main">
        <section id="top" className="hero" aria-labelledby="hero-name">
          <span className="hero-mark" aria-hidden="true">
            码
          </span>
          <div className="shell hero-grid">
            <div className="hero-copy">
              <p className="kicker enter">
                <span className="kicker-index">01</span>
                <span className="kicker-line" aria-hidden="true" />
                <span>iOS · Web · AI Agent</span>
              </p>
              <h1 id="hero-name" className="hero-title enter enter-2">
                {profile.name}
              </h1>
              <p className="hero-en enter enter-3">{profile.nameEn}</p>
              <p className="hero-tagline enter enter-4">{profile.tagline}</p>
            </div>
            <aside className="hero-plate enter enter-4" aria-hidden="true">
              <span className="seal seal-lg">码</span>
              <ul className="plate-list">
                {plateItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="plate-year">2026</p>
            </aside>
          </div>
        </section>

        <section id="about" className="section" aria-labelledby="about-heading">
          <div className="shell">
            <div className="section-head">
              <span className="section-index">02</span>
              <h2 id="about-heading">关于</h2>
            </div>
            <div className="about-grid">
              {about.map((paragraph, index) => (
                <p key={paragraph} className={index === 0 ? "about-lead" : "about-copy"}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section" aria-labelledby="skills-heading">
          <div className="shell">
            <div className="section-head">
              <span className="section-index">03</span>
              <h2 id="skills-heading">技能 / 方向</h2>
            </div>
            <ul className="bento">
              {skills.map((skill, index) => (
                <li
                  key={skill.title}
                  className={
                    index === 0 ? "bento-feature" : index === skills.length - 1 ? "bento-wide" : undefined
                  }
                >
                  <article className="card">
                    <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
                    <div className="card-body">
                      <h3>{skill.title}</h3>
                      <p>{skill.detail}</p>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="links" className="section" aria-labelledby="links-heading">
          <div className="shell">
            <div className="section-head">
              <span className="section-index">04</span>
              <h2 id="links-heading">外链</h2>
            </div>
            <p className="section-note">以下为占位链接，尚未指向真实主页。</p>
            <ul className="link-grid">
              {links.map((link, index) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="link-card"
                    aria-label={`${link.label}（占位链接，待填写）`}
                  >
                    <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
                    <span className="link-label">{link.label}</span>
                    <span className="link-meta">
                      <span className="badge">待填写</span>
                      <span className="arrow" aria-hidden="true">
                        →
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-bar">
          <p>© 2026 {profile.handle}</p>
          <p className="footer-en">{profile.nameEn}</p>
        </div>
      </footer>
    </>
  );
}
