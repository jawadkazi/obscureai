"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

const papers = [
  {
    id: "test-time-compute",
    title: "Scaling Test-Time Compute for Small Language Models: An Information-Theoretic Framework",
    authors: "ObscureAI Research Team",
    date: "NOV 21, 2025",
    desc: "Recent advances in Large Language Models have demonstrated that performance scales predictably with model size and training data. However, for Small Language Models where parameter count is constrained, the primary avenue for performance gain lies in the effective utilization of inference-time computation.",
    tags: ["Test-Time Compute", "Information Theory", "Scaling Laws", "Small Language Models"],
    color: "#d4ff00"
  },
  {
    id: "faithfulness-cot",
    title: "Faithfulness of Chain-of-Thought Explanations in Small Language Models",
    authors: "Anonymous Authors (Tsinghua University)",
    date: "JAN 2, 2026",
    desc: "Chain-of-Thought (CoT) explanations are widely adopted as indicators of model reasoning in language models. Despite their popularity, the causal relationship between generated reasoning traces and final predictions remains unclear—particularly for small language models deployed on commodity hardware.",
    tags: ["Chain-of-Thought", "Faithfulness", "Interpretability", "Small Language Models"],
    color: "#3d1c52"
  }
];

export default function PapersIndex() {
  return (
    <main className="min-h-screen bg-black text-white p-8 md:p-24 font-mono">
      <Link href="/" className="fixed top-8 left-8 text-[10px] opacity-30 hover:opacity-100 transition-opacity">← BACK</Link>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <header className="mb-20 border-b border-white/10 pb-8">
          <h1 className="text-xs tracking-widest opacity-50 uppercase mb-2">Research Papers</h1>
          <p className="text-xl max-w-xl leading-relaxed">Systematic explorations into the limits of test-time compute and algorithmic patience.</p>
        </header>

        <div className="space-y-16">
          {papers.map((paper, i) => (
            <motion.article 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              key={paper.id} 
              className="group cursor-pointer border-l border-white/5 pl-6 hover:border-white/40 transition-colors"
            >
              <Link href={`/papers/${paper.id}`} className="block">
                <div className="flex items-start justify-between mb-2">
                  <span className="text-[10px] opacity-30">{paper.date}</span>
                  <div 
                    className="w-2 h-2 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: paper.color }}
                  />
                </div>
                <h2 className="text-lg my-2 group-hover:translate-x-2 transition-transform duration-500">{paper.title}</h2>
                <p className="text-xs opacity-40 mb-3 italic">{paper.authors}</p>
                <p className="text-sm opacity-50 max-w-2xl mb-4 leading-relaxed">{paper.desc}</p>
                <div className="flex gap-4 flex-wrap">
                  {paper.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="text-[9px] border border-white/20 px-2 py-0.5 opacity-40 italic"
                      style={{ borderColor: `${paper.color}40` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-xs opacity-30 mt-4 italic group-hover:opacity-60 transition-opacity">
                  Click to read full paper →
                </p>
              </Link>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
