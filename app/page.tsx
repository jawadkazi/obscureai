"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Twitter, Github } from 'lucide-react';

const projects = [
{
  date: "ONGOING",
  title: "Faithfulness of Chain-of-Thought Explanations in Small Language Models",
  desc: "Chain-of-Thought explanations suggest models reason step by step, but do they really? This study probes their causal role and finds that CoT can mislead about how small models make decisions.",
  tags: ["Chain-of-Thought", "Faithfulness", "Interpretability", "Small Language Models"]
},
{
  date: "OCT 4, 2025",
  title: "Scaling Test-Time Compute for Small Language Models: An Information-Theoretic Framework",
  desc: "Small models can't grow infinitely, so how do we get more out of them at inference? We formalize the link between test-time compute and reasoning fidelity, showing predictable gains when compute is allocated wisely.",
  tags: ["Test-Time Compute", "Information Theory", "Scaling Laws", "Small Language Models"]
}
];

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#030303] text-[#f0f0f0] overflow-hidden font-sans selection:bg-white selection:text-black">
      
      {/* Gradient Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-30%] left-[-10%] w-[110%] h-[100%] rounded-full bg-[#3d1c52]/20 blur-[90px]" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] rounded-full bg-[#d4ff00]/5 blur-[60px]" />
      </div>

      {/* Hero Section */}
      <section className="relative w-full flex flex-col items-center justify-center py-20 z-10">
        <div className="relative flex flex-col items-center gap-24">
          <div className="relative flex items-center justify-center">
            <div className="w-[480px] h-[420px] relative overflow-hidden backdrop-blur-2xl border border-white/10 shadow-[0_0_80px_rgba(255,255,255,0.02)] animate-morph bg-white/[0.01]">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />
            </div>
            <div className="absolute w-1.5 h-1.5 bg-white/30 rounded-full blur-[1px]" />
          </div>

          <h1 className="text-5xl tracking-[1.8em] uppercase font-thin text-white/90 mr-[-1.8em]">
            obscureAI
          </h1>
        </div>
      </section>

      {/* Work Section */}
      <section className="relative z-10 px-8 md:px-24 py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-xs tracking-widest opacity-50 uppercase mb-2">Research Index</h2>
            <p className="text-xl max-w-xl mx-auto leading-relaxed opacity-70">Systematic explorations into the limits of test-time compute and algorithmic patience.</p>
          </motion.div>

          <div className="space-y-12">
            {projects.map((p, i) => (
              <motion.article 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="border-l border-white/10 pl-6 hover:border-white/30 transition-colors group cursor-pointer"
                onClick={() => {
                  if (i === 0) window.location.href = '/papers/faithfulness-cot';
                  if (i === 1) window.location.href = '/papers/test-time-compute';
                }}
              >
                <span className="text-[10px] opacity-40">{p.date}</span>
                <h3 className="text-lg my-2 group-hover:translate-x-2 transition-transform duration-500">{p.title}</h3>
                <p className="text-sm opacity-50 max-w-2xl mb-4 leading-relaxed">{p.desc}</p>
                <div className="flex gap-4 flex-wrap">
                  {p.tags.map(tag => <span key={tag} className="text-[9px] border border-white/20 px-2 py-0.5 opacity-40 italic">{tag}</span>)}
                </div>
                <p className="text-xs opacity-30 mt-2 italic">Read full paper →</p>
              </motion.article>
            ))}
          </div>

          {/* View All Papers CTA */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link 
              href="/papers" 
              className="inline-block px-8 py-3 border border-white/20 text-[10px] uppercase tracking-[0.6em] hover:bg-white hover:text-black transition-all duration-500 mb-8"
            >
              View All Papers
            </Link>
          </motion.div>

          {/* Contact CTA */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-20"
          >
            <a 
              href="mailto:jawad@obscureai.io" 
              className="inline-block px-8 py-3 text-[10px] uppercase tracking-[0.6em] hover:text-white transition-all duration-500"
            >
              jawad@obscureai.io
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full h-32 px-12 flex items-center z-20 relative">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 text-[10px] uppercase tracking-[0.6em] font-light">
            <div className="flex gap-16">
              <p className="text-[9px] tracking-[0.4em] uppercase opacity-30 font-light whitespace-nowrap">
                701 Brazos St, Austin, TX 78701
              </p>
              <span className="w-8 h-[1px] bg-white/10 hidden md:block" />
              <p className="text-[9px] tracking-[0.4em] uppercase opacity-30 font-light">
                ©2026 ObscureAI LLC
              </p>
            </div>
            
            <div className="flex gap-6 opacity-30">
              <a href="https://x.com/JawadKazi13" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
                <Twitter size={16} />
              </a>
              <a href="https://github.com/jawadkazi" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
                <Github size={16} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Noise Overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.05] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <style jsx global>{`
        @keyframes morph {
          0%, 100% {
            border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
            transform: translate3d(0,0,0) rotate(0deg);
          }
          33% {
            border-radius: 70% 30% 46% 54% / 30% 29% 71% 70%;
            transform: translate3d(5px,-5px,0) rotate(120deg);
          }
          66% {
            border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%;
            transform: translate3d(-5px,5px,0) rotate(240deg);
          }
        }
        .animate-morph {
          animation: morph 20s ease-in-out infinite;
          will-change: transform, border-radius;
        }
      `}</style>
    </main>
  );
}
