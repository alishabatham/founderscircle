import { ArrowRight, CheckCircle2, ShieldAlert, BarChart, Users, Compass, Layers } from "lucide-react";
import { Link } from "wouter";

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-white text-foreground">

      {/* Hero */}
      <section className="py-32 md:py-44 border-b border-border bg-white px-6 md:px-12">
        <div className="container max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-8">Programs</p>
          <h1
            className="font-black leading-[0.9] tracking-tight mb-10"
            style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)", fontFamily: "'Outfit', sans-serif" }}
          >
            Founder{" "}
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 600 }} className="text-primary">
              Circle
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl font-light mb-12">
            A structured program designed to help founders execute, grow, and scale with clarity and accountability.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 bg-foreground text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity"
            >
              Apply Now <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 border border-foreground/30 text-foreground text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-foreground/5 transition-colors"
            >
              How It Works <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-28 border-b border-border bg-card px-6 md:px-12">
        <div className="container max-w-7xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground block mb-8">01 / Overview</span>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2
                className="font-black leading-[0.95] tracking-tight mb-8"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontFamily: "'Outfit', sans-serif" }}
              >
                Program Overview
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8">
                Founder Circle is a structured execution program built for serious founders focused on building real startups.
              </p>
            </div>
            <div className="border border-primary/20 bg-primary/5 p-8">
              <div className="text-sm font-bold tracking-widest uppercase text-primary text-center leading-loose">
                Not a community.<br />Not networking.<br />A system for execution.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-28 border-b border-border bg-white px-6 md:px-12">
        <div className="container max-w-7xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground block mb-8">02 / What You Get</span>
          <h2
            className="font-black leading-[0.95] tracking-tight mb-16"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontFamily: "'Outfit', sans-serif" }}
          >
            What You{" "}
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 600 }} className="text-primary">
              Get
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {[
              { icon: <Layers className="h-8 w-8" />, title: "Structured Execution System", desc: "Clear frameworks to build without distraction." },
              { icon: <BarChart className="h-8 w-8" />, title: "Phase-Based Growth", desc: "Idea → MVP → Revenue → Growth." },
              { icon: <CheckCircle2 className="h-8 w-8" />, title: "Accountability & Tracking", desc: "Consistent measurement of your progress." },
              { icon: <Users className="h-8 w-8" />, title: "Founder Collaboration Network", desc: "Connect with high-caliber peers." },
              { icon: <Compass className="h-8 w-8" />, title: "Expert Guidance", desc: "Support in Product, Marketing, and Strategy." },
              { icon: <ShieldAlert className="h-8 w-8" />, title: "Curated Entry", desc: "A filtered environment of builders only." }
            ].map((item, i) => (
              <div key={i} className="bg-card p-10 md:p-12">
                <div className="text-primary mb-8">{item.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-28 border-b border-border bg-card px-6 md:px-12">
        <div className="container max-w-7xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground block mb-8">03 / Process</span>
          <h2
            className="font-black leading-[0.95] tracking-tight mb-16"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontFamily: "'Outfit', sans-serif" }}
          >
            How It Works
          </h2>
          <div className="space-y-0 divide-y divide-border border-t border-border">
            {[
              "You enter after selection",
              "Placed into a specific stage based on your progress",
              "Follow structured execution paths with clear milestones",
              "Tracked and reviewed regularly by the FCC team"
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-6 py-6 bg-white px-6">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-black shrink-0">{i+1}</div>
                <span className="text-lg font-semibold text-foreground">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-28 border-b border-border bg-white px-6 md:px-12">
        <div className="container max-w-7xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground block mb-8">04 / Outcomes</span>
          <h2
            className="font-black leading-[0.95] tracking-tight mb-16"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontFamily: "'Outfit', sans-serif" }}
          >
            What Changes
          </h2>
          <div className="flex flex-wrap gap-3">
            {["Faster execution", "Clear direction", "Better decision-making", "Access to serious founders", "Real progress, not just learning"].map((benefit, i) => (
              <div key={i} className="px-6 py-3 bg-card border border-border font-semibold text-foreground rounded-full">
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-28 border-b border-border bg-card px-6 md:px-12">
        <div className="container max-w-7xl mx-auto grid md:grid-cols-2 gap-px bg-border">
          <div className="bg-white p-12">
            <h3 className="text-xs font-bold tracking-widest uppercase text-primary mb-8">Who It's For</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-foreground font-medium">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" /> Builders ready to execute immediately
              </li>
              <li className="flex items-start gap-3 text-foreground font-medium">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" /> Founders who need structure and accountability
              </li>
            </ul>
          </div>
          <div className="bg-white p-12">
            <h3 className="text-xs font-bold tracking-widest uppercase text-destructive mb-8">Who It's Not For</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-muted-foreground line-through">
                <CheckCircle2 className="h-5 w-5 text-destructive/50 shrink-0 mt-0.5" /> Those looking for casual networking
              </li>
              <li className="flex items-start gap-3 text-muted-foreground line-through">
                <CheckCircle2 className="h-5 w-5 text-destructive/50 shrink-0 mt-0.5" /> People wanting to passively consume content
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-28 border-b border-border bg-foreground px-6 md:px-12">
        <div className="container max-w-7xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40 block mb-8">05 / Why It Matters</span>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-xl font-bold text-red-400 mb-6">The Struggle</h3>
              <ul className="space-y-3 text-white/60 text-lg font-light">
                <li>• Work alone with no accountability</li>
                <li>• Lack structure, drift without direction</li>
                <li>• Don't track progress or milestones</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-400 mb-6">The FCC Solution</h3>
              <ul className="space-y-3 text-white/60 text-lg font-light">
                <li>• Proven execution systems built for founders</li>
                <li>• Strict accountability at every stage</li>
                <li>• Real collaboration with builders like you</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-28 bg-white text-center px-6 md:px-12">
        <div className="container max-w-4xl mx-auto">
          <h2
            className="font-black leading-[0.9] tracking-tight mb-10"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", fontFamily: "'Outfit', sans-serif" }}
          >
            Apply to Founder Circle and{" "}
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 600 }} className="text-primary">
              start executing.
            </span>
          </h2>
          <Link
            href="/apply"
            className="inline-flex items-center gap-2 bg-foreground text-white text-base font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
          >
            Apply Now <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
