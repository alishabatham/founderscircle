import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight, XCircle, Zap, Target, LayoutDashboard, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import NetworkCanvas from "@/components/NetworkCanvas";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
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

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      {/* 1. Hero */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden border-b border-white/5">
        <NetworkCanvas />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0.1)_60%,transparent_100%)] pointer-events-none z-[1]" />
        
        <motion.div 
          className="container max-w-5xl mx-auto px-6 relative z-10 text-center flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-primary mb-8 font-medium tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Not a community. Not networking. A system for execution.
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            Build Your Startup with <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-200">Structure, Not Chaos</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-12 font-light leading-relaxed">
            Founders' Circle Connect is a system designed to help founders move from ideas to execution through clarity, accountability, and the right network.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button size="lg" className="h-14 px-8 text-lg font-medium rounded-none hover:scale-[1.02] transition-transform" data-testid="button-hero-apply">
              Apply Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="h-14 px-8 text-lg font-medium rounded-none border-white/10 hover:bg-white/5 hover:text-white" data-testid="button-hero-learn">
              Learn How It Works
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. What is FCC */}
      <section className="py-32 border-b border-white/5 relative">
        <div className="container max-w-6xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">A structured environment for builders.</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We remove the noise. No inspirational quotes, no endless networking events. Just a rigorous system designed to help you execute consistently.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Target className="h-6 w-6 text-primary mb-3" />, title: "Validate Ideas" },
                { icon: <LayoutDashboard className="h-6 w-6 text-primary mb-3" />, title: "Build Products" },
                { icon: <Zap className="h-6 w-6 text-primary mb-3" />, title: "Execute Consistently" },
                { icon: <Flag className="h-6 w-6 text-primary mb-3" />, title: "Grow with Accountability" }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white/5 border border-white/5 flex flex-col justify-center">
                  {item.icon}
                  <h3 className="text-white font-medium">{item.title}</h3>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. The Problem */}
      <section className="py-32 bg-black/40 border-b border-white/5">
        <div className="container max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Why most founders fail</h2>
            <p className="text-xl text-muted-foreground">It's rarely a lack of ambition. It's a lack of system.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "No Execution System", desc: "Building without a framework leads to endless pivoting and zero shipping." },
              { title: "No Clarity", desc: "Drowning in advice but starving for clear, actionable next steps." },
              { title: "Wrong Network", desc: "Surrounded by wantrepreneurs instead of serious builders holding you to a standard." }
            ].map((problem, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 border border-destructive/20 bg-destructive/5 relative"
              >
                <XCircle className="h-8 w-8 text-destructive mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The FCC Solution */}
      <section className="py-32 border-b border-white/5">
        <div className="container max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">The FCC System</h2>
            <p className="text-xl text-muted-foreground">We engineer the environment for inevitable progress.</p>
          </div>

          <div className="space-y-4">
            {[
              { title: "Structured execution system", desc: "Weekly sprints, hard deadlines, zero excuses." },
              { title: "Phase-based growth", desc: "Move systematically: Idea → MVP → Revenue → Growth." },
              { title: "Accountability and tracking", desc: "Metrics over talk. If you don't ship, you don't stay." },
              { title: "Access to serious builders", desc: "A curated room of peers executing at your level or higher." }
            ].map((solution, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-4 p-6 bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors"
              >
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-bold text-white">{solution.title}</h3>
                  <p className="text-muted-foreground">{solution.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How It Works */}
      <section className="py-32 bg-black/40 border-b border-white/5">
        <div className="container max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Apply", desc: "Submit your profile and current stage." },
              { step: "02", title: "Get Evaluated", desc: "We review your bias toward action." },
              { step: "03", title: "Get Selected", desc: "Only serious builders are admitted." },
              { step: "04", title: "Start Executing", desc: "Enter the system and start shipping." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-black text-white/5 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
                {i < 3 && <ChevronRight className="hidden md:block absolute top-8 -right-6 text-white/10 w-8 h-8" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Who This Is For */}
      <section className="py-32 border-b border-white/5">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-10 border border-primary/20 bg-primary/5">
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <CheckCircle2 className="text-primary" /> Who This Is For
              </h2>
              <ul className="space-y-4">
                {["Founders building real startups", "People ready to execute", "Individuals who want structure"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-10 border border-destructive/20 bg-destructive/5">
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <XCircle className="text-destructive" /> Who This Is NOT For
              </h2>
              <ul className="space-y-4">
                {["Passive learners", "Idea collectors", "Casual networkers"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-destructive/50" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Core Benefits */}
      <section className="py-32 bg-black/40 border-b border-white/5">
        <div className="container max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">The Result</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: "Faster Execution", value: "3x" },
              { title: "Clear Direction", value: "100%" },
              { title: "Real Collaboration", value: "24/7" },
              { title: "Accountability", value: "Absolute" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="text-4xl md:text-5xl font-black text-primary mb-2">{stat.value}</div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground font-medium">{stat.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Footer */}
      <footer className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
        <div className="container max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Ready to stop talking and start shipping?</h2>
          <Button size="lg" className="h-14 px-10 text-lg font-medium rounded-none mb-16 hover:scale-[1.02] transition-transform" data-testid="button-footer-apply">
            Apply for the Next Cohort
          </Button>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground text-sm">
            <p className="font-medium">FCC is where founders move from ideas to execution, and from execution to growth.</p>
            <p>&copy; {new Date().getFullYear()} Founders' Circle Connect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
