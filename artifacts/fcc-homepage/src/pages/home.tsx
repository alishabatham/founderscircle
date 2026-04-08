import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, XCircle, Zap, Target, LayoutDashboard, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const slideInRightVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground selection:bg-primary/30 selection:text-primary overflow-x-hidden">
      {/* 1. Hero */}
      <section 
        className="relative min-h-[92vh] flex items-center border-b border-border"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230f172a' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundPosition: 'center center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-50/80 via-white/50 to-blue-50/80" />
        
        <div className="container max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center pt-20 pb-16">
          <motion.div 
            className="flex flex-col items-start text-left md:pr-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-border/60 text-xs text-primary mb-8 font-semibold tracking-wider uppercase shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Founders' Circle Connect
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.05]">
              Build Your Startup with <br className="hidden md:block" />
              <span className="text-primary">Structure,</span> Not Chaos
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-md mb-10 leading-relaxed">
              A rigorous execution system designed to help founders move from ideas to revenue through clarity, strict accountability, and the right network.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button asChild size="lg" className="h-14 px-8 text-base font-medium rounded-none hover:translate-y-[-2px] transition-transform" data-testid="hero-cta-apply">
                <Link href="/apply">
                  Apply for the Next Cohort <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base font-medium rounded-none border-border/80 text-foreground hover:bg-gray-50" data-testid="hero-cta-learn">
                <Link href="/how-it-works">See How It Works</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hidden md:flex justify-center items-center h-full w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, -8, 0] }}
            transition={{ 
              opacity: { duration: 1, delay: 0.4 },
              y: { repeat: Infinity, duration: 6, ease: "easeInOut" }
            }}
          >
            <svg viewBox="0 0 400 400" className="w-full max-w-[500px] h-auto drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(var(--muted))" strokeWidth="1" strokeDasharray="4 4" />
                </pattern>
              </defs>
              <rect width="400" height="400" fill="url(#grid)" />
              
              <circle cx="200" cy="200" r="120" stroke="hsl(var(--primary))" strokeWidth="2" strokeOpacity="0.2" strokeDasharray="8 8" />
              <circle cx="200" cy="200" r="160" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.1" />
              
              <circle cx="200" cy="200" r="60" fill="hsl(var(--primary))" fillOpacity="0.05" stroke="hsl(var(--primary))" strokeWidth="2" />
              <rect x="180" y="180" width="40" height="40" fill="hsl(var(--primary))" />
              
              <line x1="200" y1="80" x2="200" y2="140" stroke="hsl(var(--primary))" strokeWidth="1.5" />
              <line x1="200" y1="260" x2="200" y2="320" stroke="hsl(var(--primary))" strokeWidth="1.5" />
              <line x1="80" y1="200" x2="140" y2="200" stroke="hsl(var(--primary))" strokeWidth="1.5" />
              <line x1="260" y1="200" x2="320" y2="200" stroke="hsl(var(--primary))" strokeWidth="1.5" />
              
              <circle cx="200" cy="80" r="12" fill="white" stroke="hsl(var(--primary))" strokeWidth="2" />
              <circle cx="200" cy="320" r="16" fill="hsl(var(--primary))" />
              <circle cx="80" cy="200" r="8" fill="hsl(var(--secondary))" stroke="hsl(var(--border))" strokeWidth="2" />
              <circle cx="320" cy="200" r="10" fill="white" stroke="hsl(var(--primary))" strokeWidth="2" />
              
              <line x1="285" y1="115" x2="242" y2="158" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.5" />
              <circle cx="285" cy="115" r="6" fill="hsl(var(--primary))" fillOpacity="0.5" />
              
              <line x1="115" y1="285" x2="158" y2="242" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.5" />
              <rect x="110" y="280" width="10" height="10" fill="white" stroke="hsl(var(--primary))" strokeWidth="1" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Section 1: What FCC Is */}
      <section className="py-24 md:py-32 border-b border-border bg-white">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-16 items-start">
            <motion.div 
              className="md:col-span-7 flex flex-col items-start text-left"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">A system, not a community.</h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed">
                We remove the noise. No inspirational quotes, no endless networking events. Just a rigorous framework designed to help you execute consistently.
              </p>
              <div className="border-l-4 border-primary bg-primary/5 py-5 px-6 rounded-r-sm">
                <p className="text-primary font-semibold text-lg">NOT a community. NOT networking.</p>
                <p className="text-primary/80 mt-1">If you want to chat, join a Slack group. If you want to build, join FCC.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:col-span-5 grid grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-0"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { num: "01", icon: <Target className="h-5 w-5" />, title: "Validate" },
                { num: "02", icon: <LayoutDashboard className="h-5 w-5" />, title: "Build" },
                { num: "03", icon: <Zap className="h-5 w-5" />, title: "Execute" },
                { num: "04", icon: <Flag className="h-5 w-5" />, title: "Grow" }
              ].map((item, i) => (
                <div key={i} className="relative overflow-hidden p-6 bg-white border border-border shadow-sm hover:shadow-md transition-shadow group">
                  <div className="absolute -right-4 -bottom-6 text-7xl font-black text-gray-50/80 pointer-events-none group-hover:scale-110 transition-transform">{item.num}</div>
                  <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                    <div className="w-10 h-10 rounded-none bg-primary/10 flex items-center justify-center text-primary">
                      {item.icon}
                    </div>
                    <h3 className="text-gray-900 font-bold text-lg tracking-tight">{item.title}</h3>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: The Problem */}
      <section className="py-24 md:py-32 bg-gray-50 border-b border-border">
        <div className="container max-w-7xl mx-auto px-6">
          <motion.div 
            className="max-w-lg mb-16"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">Most founders fail for the same reasons.</h2>
            <p className="text-xl text-muted-foreground">It's rarely a lack of ambition. It's a lack of system.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-start">
            {[
              { title: "No Execution System", desc: "Building without a framework leads to endless pivoting and zero shipping.", mt: "md:mt-0" },
              { title: "No Clarity", desc: "Drowning in advice but starving for clear, actionable next steps.", mt: "md:mt-12" },
              { title: "Wrong Network", desc: "Surrounded by wantrepreneurs instead of serious builders holding you to a standard.", mt: "md:mt-24 md:ml-auto w-full" }
            ].map((problem, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
                className={`p-8 bg-white border border-border border-l-4 border-l-destructive shadow-sm ${problem.mt}`}
              >
                <XCircle className="h-7 w-7 text-destructive mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{problem.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{problem.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: The FCC Solution */}
      <section className="py-24 md:py-32 border-b border-border bg-white overflow-hidden">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-16 items-center">
            
            <motion.div 
              className="md:col-span-5 relative py-8 pl-4"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="absolute left-[23px] top-0 bottom-0 w-px bg-border hidden md:block" />
              <div className="space-y-12 relative z-10">
                {[
                  { phase: "Idea", label: "Validate ruthlessly" },
                  { phase: "MVP", label: "Ship in weeks" },
                  { phase: "Revenue", label: "Get paid" },
                  { phase: "Growth", label: "Scale what works" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6">
                    <div className="w-10 h-10 rounded-full border-4 border-white bg-primary flex-shrink-0 shadow-sm relative z-10 flex items-center justify-center">
                      <span className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-primary uppercase tracking-wider mb-1">Phase {i+1}: {item.phase}</div>
                      <div className="text-gray-900 font-medium">{item.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="md:col-span-7">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 leading-tight"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                The FCC execution system.
              </motion.h2>
              
              <div className="space-y-8">
                {[
                  { title: "Structured execution system", desc: "Weekly sprints, hard deadlines, zero excuses." },
                  { title: "Phase-based growth", desc: "Move systematically: Idea → MVP → Revenue → Growth." },
                  { title: "Accountability and tracking", desc: "Metrics over talk. If you don't ship, you don't stay." },
                  { title: "Access to serious builders", desc: "A curated room of peers executing at your level or higher." }
                ].map((solution, i) => (
                  <motion.div 
                    key={i}
                    variants={slideInRightVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-start gap-5 group"
                  >
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1 transition-transform group-hover:scale-110" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                      <p className="text-muted-foreground text-lg">{solution.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Section 4: How It Works */}
      <section className="py-24 md:py-32 bg-gray-50 border-b border-border">
        <div className="container max-w-7xl mx-auto px-6">
          <motion.div 
            className="mb-16"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="text-xs tracking-widest font-semibold text-primary uppercase mb-4">Process</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Four steps. No shortcuts.</h2>
          </motion.div>
          
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px border-t border-dashed border-border/80 -translate-y-1/2 z-0" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 relative z-10">
              {[
                { step: "01", title: "Apply", desc: "Submit your profile and current stage." },
                { step: "02", title: "Evaluated", desc: "We review your bias toward action." },
                { step: "03", title: "Selected", desc: "Only serious builders are admitted." },
                { step: "04", title: "Execute", desc: "Enter the system and start shipping." }
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
                  className="relative bg-white p-8 border border-border shadow-sm hover:shadow-md transition-shadow overflow-hidden group"
                >
                  <div className="absolute -top-4 -right-2 text-8xl font-black text-gray-50/60 pointer-events-none group-hover:text-gray-100/50 transition-colors z-0 select-none">
                    {step.step}
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Who It's For */}
      <section className="py-24 md:py-32 border-b border-border bg-white">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 md:gap-20">
            <motion.div 
              className="md:col-span-7"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">Built for founders who ship.</h2>
              <p className="text-xl text-muted-foreground mb-12 max-w-xl">
                FCC is not a place to explore your feelings about entrepreneurship. It is a structured environment for those ready to do the work.
              </p>
              
              <div className="space-y-2">
                <div className="text-sm font-bold tracking-wider uppercase text-gray-900 mb-6">For:</div>
                {["Founders building real startups with a bias toward action", "People ready to execute and be held accountable", "Individuals who want structure, not cheerleading"].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 hover:bg-gray-50 transition-colors border-b border-transparent hover:border-border/50">
                    <CheckCircle2 className="text-primary w-6 h-6 shrink-0 mt-0.5" />
                    <span className="text-gray-800 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="md:col-span-5 md:mt-24"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="p-8 md:p-10 border border-destructive/30 bg-destructive/5 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-destructive/30" />
                <div className="text-sm font-bold tracking-wider uppercase text-destructive mb-8">Not For:</div>
                <ul className="space-y-6">
                  {["Passive learners wanting another course", "Idea collectors who never build", "Casual networkers looking for coffee chats"].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <XCircle className="text-destructive/80 w-6 h-6 shrink-0 mt-0.5" />
                      <span className="text-gray-900 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 6: The Result */}
      <section className="py-24 md:py-32 bg-gray-50 border-b border-border">
        <div className="container max-w-7xl mx-auto px-6">
          <motion.div 
            className="mb-16"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="text-xs tracking-widest font-semibold text-primary uppercase mb-4">Outcomes</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 max-w-2xl leading-tight">What changes when you operate with structure.</h2>
          </motion.div>
          
          <motion.div 
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-0 bg-white p-8 md:p-12 border border-border shadow-sm"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex flex-col">
              <div className="text-7xl font-black text-primary mb-2 tracking-tighter">3x</div>
              <div className="text-sm uppercase tracking-widest text-muted-foreground font-semibold">Faster Execution</div>
            </div>
            
            <div className="hidden md:block w-px h-24 bg-border" />
            
            <div className="flex flex-col">
              <div className="text-6xl font-black text-gray-900 mb-2 tracking-tighter">100%</div>
              <div className="text-sm uppercase tracking-widest text-muted-foreground font-semibold">Clear Direction</div>
            </div>
            
            <div className="hidden md:block w-px h-24 bg-border" />
            
            <div className="flex flex-col">
              <div className="text-5xl font-black text-gray-700 mb-3 tracking-tighter">Absolute</div>
              <div className="text-sm uppercase tracking-widest text-muted-foreground font-semibold">Accountability</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-24 pb-12 bg-white">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 mb-24 items-end">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-none border-2 border-gray-900 text-sm font-bold text-gray-900 mb-8 tracking-widest uppercase">
                <span className="w-2 h-2 bg-primary" />
                FCC
              </div>
              <p className="text-2xl text-muted-foreground font-light max-w-md leading-relaxed">
                FCC is where founders move from ideas to execution, and from execution to growth.
              </p>
            </div>
            
            <div className="flex flex-col items-start md:items-end text-left md:text-right">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Ready to stop talking?</h2>
              <Button asChild size="lg" className="h-16 px-10 text-lg font-bold rounded-none hover:translate-y-[-2px] transition-transform w-full md:w-auto shadow-sm" data-testid="footer-cta-apply">
                <Link href="/apply">Apply Now <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6 text-muted-foreground text-sm font-medium">
            <p>&copy; {new Date().getFullYear()} Founders' Circle Connect.</p>
            <div className="flex gap-8">
              <Link href="/how-it-works" className="hover:text-primary transition-colors">Process</Link>
              <Link href="/apply" className="hover:text-primary transition-colors">Apply</Link>
              <Link href="/about" className="hover:text-primary transition-colors">About</Link>
              <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
