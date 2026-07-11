import Image from "next/image";
import {
  Activity,
  BadgeCheck,
  BookOpenCheck,
  ChartNoAxesCombined,
  Crosshair,
  Radio,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Daily Market Outlook",
    text: "Focused XAUUSD bias, key levels, and likely scenarios.",
  },
  {
    icon: Radio,
    title: "Live Trade Updates",
    text: "Clear updates during active sessions without unnecessary noise.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Technical Breakdowns",
    text: "Simple chart analysis built around structure and confirmation.",
  },
  {
    icon: Crosshair,
    title: "Precision Entries",
    text: "Entry zones, invalidation points, and realistic target planning.",
  },
  {
    icon: ShieldCheck,
    title: "Risk First Approach",
    text: "Position sizing and capital protection before profit chasing.",
  },
  {
    icon: BookOpenCheck,
    title: "Trader Education",
    text: "Short practical lessons for stronger long-term execution.",
  },
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="grid-overlay" />

      <section className="hero" aria-labelledby="hero-title">
        <div className="brand-row">
          <div className="brand-badge">
            <Sparkles size={14} />
            Professional Gold Trading Community
          </div>

          <div className="logo-wrap">
            <Image
              src="/pro-trading-insights-logo.jpeg"
              alt="Pro Trading Insights logo"
              fill
              priority
              sizes="84px"
            />
          </div>
        </div>

        <div className="heading-block">
          <p className="eyebrow">Strategy • Execution • Growth</p>
          <h1 id="hero-title">Pro Trading Insights</h1>
          <p className="subtitle">
            Smart XAUUSD analysis, disciplined setups, and practical trading education.
          </p>
        </div>

        <div className="feature-grid">
          {features.map(({ icon: Icon, title, text }) => (
            <article className="feature-card" key={title}>
              <div className="icon-box" aria-hidden="true">
                <Icon size={23} strokeWidth={2} />
              </div>
              <div>
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="stats-panel" aria-label="Channel highlights">
          <div className="stat-item">
            <strong>50+</strong>
            <span>Weekly Insights</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <strong>24/5</strong>
            <span>Market Coverage</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <strong>XAUUSD</strong>
            <span>Core Specialization</span>
          </div>
        </div>

        <div className="live-status">
          <span className="live-dot" />
          Market community is active
        </div>

        <a className="cta" href="#join" id="join" aria-label="Join Pro Trading Insights">
          <TrendingUp size={22} />
          <span>Join Pro Trading Insights</span>
          <BadgeCheck size={21} />
        </a>

        <p className="trust-line">Free access • No card required • Learn before you trade</p>
        <p className="disclaimer">
          Trading involves risk. Past performance does not guarantee future results.
        </p>
      </section>
    </main>
  );
}
