import { about, links, profile, skills, ticker } from "@/content/site";
import { Cowsay } from "./cowsay";
import { ThemeToggle } from "./theme-toggle";

const WALKER = String.raw` ^__^
 (oo)\_______
 (__)\       )\/\
     ||----w |
     ||     ||`;

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">
        跳到主要内容
      </a>

      <header className="site-header">
        <div className="shell header-bar">
          <a href="#top" className="brand" aria-label={`${profile.handle} 首页`}>
            <span className="brand-mark" aria-hidden="true">
              <span className="angle">&lt;</span>牛<span className="angle">/&gt;</span>
            </span>
            <span className="brand-zh">{profile.handle}</span>
          </a>
          <div className="header-actions">
            <nav className="site-nav" aria-label="页内导航">
              <a href="#about">whoami</a>
              <a href="#skills">ls skills</a>
              <a href="#links">cat links</a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="ticker-item">
              {t}
            </span>
          ))}
        </div>
      </div>

      <main id="main">
        <section id="top" className="hero" aria-labelledby="hero-name">
          <span className="hero-ghost" aria-hidden="true">
            牛
          </span>
          <div className="shell hero-grid">
            <div className="hero-copy">
              <p className="kicker enter enter-1">
                <span className="tag-chip">No.0001</span>
                iOS · Web · AI Agent
              </p>
              <h1 id="hero-name" className="hero-title enter enter-2">
                不做牛马
                <br />
                做<em>牛</em>码
              </h1>
              <p className="hero-sub enter enter-3">
                我是 <strong>{profile.handle}</strong>（{profile.nameEn}），{profile.tagline}。重复的活交给 Agent，我只写够牛的代码。
              </p>
              <div className="hero-cta enter enter-4">
                <a href="#links" className="btn btn-solid">
                  找我聊聊 →
                </a>
                <a href="#skills" className="btn btn-ghost">
                  看看牛栏
                </a>
              </div>
            </div>
            <div className="enter enter-5">
              <Cowsay />
            </div>
          </div>
        </section>

        <section id="about" className="section" aria-labelledby="about-heading">
          <div className="shell about-layout">
            <h2 id="about-heading" className="section-head">
              <span className="cmd">
                <span className="prompt">$</span> whoami
              </span>
              <span className="section-zh">关于</span>
            </h2>
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
            <h2 id="skills-heading" className="section-head">
              <span className="cmd">
                <span className="prompt">$</span> ls ./skills
              </span>
              <span className="section-zh">技能 / 方向</span>
            </h2>
            <ul className="tags">
              {skills.map((skill, index) => (
                <li key={skill.title} className="ear-tag">
                  <span className="tag-no">{String(index + 1).padStart(3, "0")}</span>
                  <h3>{skill.title}</h3>
                  <p>{skill.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="links" className="section" aria-labelledby="links-heading">
          <div className="shell">
            <h2 id="links-heading" className="section-head">
              <span className="cmd">
                <span className="prompt">$</span> cat links.txt
              </span>
              <span className="section-zh">外链</span>
            </h2>
            <ul className="link-list">
              {links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="link-row" target="_blank" rel="noopener noreferrer">
                    <span className="link-cmd" aria-hidden="true">
                      open
                    </span>
                    <span className="link-label">{link.label}</span>
                    <span className="link-meta">
                      <span className="link-hint">新标签打开</span>
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
        <div className="pasture" aria-hidden="true">
          <pre className="walker">{WALKER}</pre>
          <div className="grass" />
        </div>
        <div className="shell footer-bar">
          <p>© 2026 {profile.handle} · 牛码出品</p>
          <p className="footer-en">built by a 牛 with Next.js</p>
        </div>
      </footer>
    </>
  );
}
