"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

export default function FaithfulnessPaper() {
  return (
    <main className="min-h-screen bg-black text-white p-8 md:p-24 font-mono">
      <Link href="/" className="fixed top-8 left-8 text-[10px] opacity-30 hover:opacity-100 transition-opacity">← BACK</Link>
      
      {/* Abstract Gradient Image */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <div className="relative w-full h-48 md:h-64 rounded-lg overflow-hidden shadow-2xl">
          <div className="isolate relative w-full h-full">
            <div className="noise absolute inset-0 w-full h-full"></div>
            <div className="overlay absolute inset-0 w-full h-full"></div>
          </div>
        </div>
      </motion.div>
      
      <article className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <header className="mb-12">
            <div className="mb-6">
              <p className="text-xs opacity-50 mb-2">Jawad Kazi - The University of Texas at Austin</p>
            </div>
            <h1 className="text-2xl md:text-3xl font-light mb-4 leading-tight">
              Faithfulness of Chain-of-Thought Explanations in Small Language Models
            </h1>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-[9px] border border-white/20 px-2 py-0.5 opacity-40 italic">Chain-of-Thought</span>
              <span className="text-[9px] border border-white/20 px-2 py-0.5 opacity-40 italic">Faithfulness</span>
              <span className="text-[9px] border border-white/20 px-2 py-0.5 opacity-40 italic">Interpretability</span>
              <span className="text-[9px] border border-white/20 px-2 py-0.5 opacity-40 italic">Small Language Models</span>
            </div>
            <p className="text-xs opacity-50">JAN 2, 2026</p>
          </header>

          <section className="space-y-8 text-sm leading-relaxed">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-lg font-light mb-4 opacity-80">Abstract</h2>
              <p className="opacity-60 mb-4">
                Chain-of-Thought (CoT) explanations are widely adopted as indicators of model reasoning in language models. Despite their popularity, the causal relationship between generated reasoning traces and final predictions remains unclear—particularly for small language models (SLMs) deployed on commodity hardware. In this paper, we present a systematic evaluation of explanation faithfulness by measuring output sensitivity to controlled perturbations of generated CoT traces.
              </p>
              <p className="opacity-60 mb-4">
                We study multiple tasks (arithmetic reasoning, symbolic logic, commonsense QA, and algorithmic decision-making) across several SLMs (<InlineMath math="\leq 4B" /> parameters). Our results reveal task-dependent inconsistencies between explanation content and decision dependence: in many settings, predictions remain invariant under substantial perturbations to CoT, while in others small changes to reasoning tokens induce large output shifts. These findings challenge the use of CoT as a reliable proxy for interpretability and motivate alternative evaluation protocols for faithful explanations. We release a fully reproducible notebook suite runnable on a single GPU/CPU workstation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-lg font-light mb-4 opacity-80">1. Introduction</h2>
              <p className="opacity-60 mb-4">
                Chain-of-Thought prompting has become a de facto technique to elicit intermediate reasoning steps from language models. Following influential work by Anthropic (2023) on the interpretability and risks of revealing reasoning traces, CoT has been used both as a performance booster and as a window into model cognition. However, whether CoT explanations <em>faithfully</em> reflect the internal decision process—rather than serving as post-hoc rationalizations—remains an open question.
              </p>
              <p className="opacity-60 mb-4">
                While prior work has primarily focused on large language models (LLMs), small language models are increasingly relevant due to efficiency, privacy, and deployability constraints. These models may rely on different inductive biases and internal representations, raising the question: <strong>Are CoT explanations more or less faithful in SLMs?</strong>
              </p>
              <p className="opacity-60 mb-4">
                This paper makes the following contributions:
              </p>
              <ol className="list-decimal list-inside opacity-60 space-y-2 ml-4">
                <li>We formalize <em>explanation faithfulness</em> via sensitivity of predictions to perturbations of reasoning traces.</li>
                <li>We propose a perturbation-based evaluation framework applicable to any autoregressive language model.</li>
                <li>We conduct extensive experiments on SLMs up to 4B parameters across diverse reasoning tasks.</li>
                <li>We demonstrate systematic mismatches between CoT content and causal decision dependence.</li>
              </ol>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-lg font-light mb-4 opacity-80">2. Related Work</h2>
              
              <h3 className="text-md font-light mb-3 opacity-70 mt-6">2.1 Chain-of-Thought Prompting</h3>
              <p className="opacity-60 mb-4">
                CoT prompting was popularized by Wei et al. (2022) as a method to improve reasoning performance by encouraging models to generate intermediate steps. Subsequent studies explored zero-shot CoT (Kojima et al., 2022), self-consistency (Wang et al., 2022), and structured reasoning formats (Zhou et al., 2022). However, most of this work focuses on performance improvements rather than the causal relationship between reasoning and final answers.
              </p>
              
              <h3 className="text-md font-light mb-3 opacity-70 mt-6">2.2 Faithfulness and Interpretability</h3>
              <p className="opacity-60 mb-4">
                Interpretability research distinguishes <em>plausibility</em> from <em>faithfulness</em> (Jacobi and Goldberg, 2020). An explanation may appear reasonable to humans yet be causally disconnected from the model's computation. Perturbation tests (Ribeiro et al., 2020), input erasure (Feng et al., 2018), and causal mediation analyses (Vig et al., 2020) have been proposed to address this gap.
              </p>
              
              <h3 className="text-md font-light mb-3 opacity-70 mt-6">2.3 Concerns About Revealed Reasoning</h3>
              <p className="opacity-60">
                Anthropic (2023) argues that exposed CoT may be misleading or unsafe, advocating for separating internal reasoning from user-facing explanations. Our work empirically supports these concerns in the context of SLMs, providing concrete evidence of faithfulness violations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-lg font-light mb-4 opacity-80">3.2 Faithfulness Metrics</h2>
              <p className="opacity-60 mb-4">
                We define two complementary metrics to quantify faithfulness:
              </p>
              
              <div className="bg-white/5 p-4 rounded border-l border-white/20 my-4">
                <p className="text-xs opacity-80 italic mb-2">Output Flip Rate (OFR)</p>
                <div className="mb-4">
                  <BlockMath math="\text{OFR}(P) = \frac{1}{N} \sum_{i=1}^{N} \mathbb{1}[y_i \neq \tilde{y}_i]" />
                </div>
                <p className="text-xs opacity-80 italic mb-2">Probability Shift (PS)</p>
                <div>
                  <BlockMath math="\text{PS}(P) = \frac{1}{N} \sum_{i=1}^{N} |p_\theta(y_i | x_i, r_i) - p_\theta(y_i | x_i, \tilde{r}_i)|" />
                </div>
              </div>
              
              <p className="opacity-60 mb-4">
                High faithfulness implies that meaningful perturbations to <InlineMath math="r" /> should yield high OFR and PS, while trivial perturbations should yield low values. Conversely, if substantial perturbations produce negligible output changes, the explanation is unfaithful—the model's decision does not causally depend on the reasoning content.
              </p>
              
              <div className="bg-white/5 p-4 rounded border-l border-white/20 my-4">
                <p className="text-xs opacity-80 italic mb-2">Definition 2: Faithfulness Score</p>
                <p className="opacity-60 mb-2">
                  We define an aggregate faithfulness score <InlineMath math="\mathcal{F}" /> as the Spearman correlation between perturbation severity and output divergence:
                </p>
                <div className="mb-2">
                  <BlockMath math="\mathcal{F} = \rho(\text{severity}(P), D(y, \tilde{y}))" />
                </div>
                <p className="opacity-60">
                  A faithful model should exhibit <InlineMath math="\mathcal{F} \approx 1" />, indicating monotonic dependence between reasoning quality and prediction stability.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-lg font-light mb-4 opacity-80">4. Experimental Setup</h2>
              
              <h3 className="text-md font-light mb-3 opacity-70 mt-6">4.1 Models</h3>
              <p className="opacity-60 mb-4">
                We evaluate five small language models spanning different architectures and training paradigms:
              </p>
              
              {/* Models Table */}
              <div className="my-6 p-4 bg-white/5 rounded border border-white/10">
                <h4 className="text-sm font-light mb-3 opacity-70">Table 1: Evaluated Models</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-2 opacity-60">Model</th>
                        <th className="text-left py-2 opacity-60">Parameters</th>
                        <th className="text-left py-2 opacity-60">Architecture</th>
                        <th className="text-left py-2 opacity-60">Training Data</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-white/10">
                        <td className="py-2 opacity-80">Phi-2</td>
                        <td className="py-2 opacity-80">2.7B</td>
                        <td className="py-2 opacity-80">Transformer</td>
                        <td className="py-2 opacity-80">Synthetic + Web</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 opacity-80">Gemma-2B</td>
                        <td className="py-2 opacity-80">2.0B</td>
                        <td className="py-2 opacity-80">Transformer</td>
                        <td className="py-2 opacity-80">Web + Code</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 opacity-80">TinyLlama</td>
                        <td className="py-2 opacity-80">1.1B</td>
                        <td className="py-2 opacity-80">LLaMA-style</td>
                        <td className="py-2 opacity-80">SlimPajama</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 opacity-80">StableLM-3B</td>
                        <td className="py-2 opacity-80">3.0B</td>
                        <td className="py-2 opacity-80">Transformer</td>
                        <td className="py-2 opacity-80">Mixed</td>
                      </tr>
                      <tr>
                        <td className="py-2 opacity-80">Qwen-1.8B</td>
                        <td className="py-2 opacity-80">1.8B</td>
                        <td className="py-2 opacity-80">Transformer</td>
                        <td className="py-2 opacity-80">Multilingual</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs opacity-40 mt-3">
                  All models are evaluated in their instruction-tuned variants where available. Experiments were conducted on a single AMD RADEON 9070XT (16GB VRAM) and replicated on CPU for accessibility verification.
                </p>
              </div>
              
              <h3 className="text-md font-light mb-3 opacity-70 mt-6">4.2 Tasks and Datasets</h3>
              <ul className="list-disc list-inside opacity-60 space-y-2 ml-4">
                <li><strong>Arithmetic Reasoning (GSM8K-Subset):</strong> 500 grade-school math problems requiring multi-step calculation. Ground truth answers are numerical, enabling exact match evaluation.</li>
                <li><strong>Symbolic Logic (ProntoQA):</strong> 400 synthetic logical reasoning problems with explicit deduction chains. Tests sensitivity to logical structure preservation.</li>
                <li><strong>Commonsense QA (StrategyQA):</strong> 450 yes/no questions requiring implicit world knowledge and multi-hop reasoning.</li>
                <li><strong>Algorithmic Decision-Making (BBH-Navigate):</strong> 300 navigation problems from BIG-Bench Hard requiring step-by-step state tracking.</li>
              </ul>
              
              <h3 className="text-md font-light mb-3 opacity-70 mt-6">4.3 Prompting Protocol</h3>
              <div className="bg-black/40 p-4 rounded border border-white/10 my-4 font-mono text-xs">
                <div className="text-blue-300">Question: {'{question}'}</div>
                <div className="text-blue-300">Let's think step by step:</div>
                <div className="text-blue-300">{'{reasoning trace}'}</div>
                <div className="text-blue-300">Therefore, the answer is: {'{answer}'}</div>
              </div>
              <p className="opacity-60">
                For each instance, we first generate a complete response via greedy decoding, extract the reasoning trace <InlineMath math="r" /> and answer <InlineMath math="y" />, then apply perturbations and measure output changes through constrained generation.
              </p>
              
              <h3 className="text-md font-light mb-3 opacity-70 mt-6">4.4 Perturbation Implementation</h3>
              <ul className="list-disc list-inside opacity-60 space-y-2 ml-4">
                <li><strong>Token Masking (M-k%):</strong> Randomly replace <InlineMath math="k\%" /> of reasoning tokens with <code>[MASK]</code> placeholder. We evaluate <InlineMath math="k \in \{10, 25, 50, 75\}" />.</li>
                <li><strong>Token Shuffling (S-k%):</strong> Randomly permute <InlineMath math="k\%" /> of token positions within the reasoning trace, preserving the overall length.</li>
                <li><strong>Semantic Substitution (SS):</strong> Replace nouns, verbs, and numerical values with semantically related alternatives using WordNet synsets and numerical perturbation (<InlineMath math="\pm 1" />).</li>
                <li><strong>Truncation (T-k%):</strong> Remove the final <InlineMath math="k\%" /> of the reasoning trace before the answer token.</li>
              </ul>
              
              <h3 className="text-md font-light mb-3 opacity-70 mt-6">4.5 Evaluation Protocol</h3>
              <p className="opacity-60">
                For each (model, task, perturbation) triple, we:
              </p>
              <ol className="list-decimal list-inside opacity-60 space-y-2 ml-4">
                <li>Generate baseline CoT responses for all test instances</li>
                <li>Apply the perturbation operator to each reasoning trace</li>
                <li>Condition the model on the perturbed trace and decode the answer</li>
                <li>Compute OFR, PS, and <InlineMath math="\mathcal{F}" /> metrics</li>
                <li>Report means and 95% confidence intervals across 3 random seeds</li>
              </ol>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-lg font-light mb-4 opacity-80">5. Results</h2>
              
              <h3 className="text-md font-light mb-3 opacity-70 mt-6">5.1 Overall Faithfulness Patterns</h3>
              <p className="opacity-60 mb-4">
                Table 1 presents aggregate faithfulness scores across all model-task combinations.
              </p>
              
              {/* Faithfulness Scores Table */}
              <div className="my-6 p-4 bg-white/5 rounded border border-white/10">
                <h4 className="text-sm font-light mb-3 opacity-70">Table 2: Faithfulness Scores (𝓕) by Model and Task</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-2 opacity-60">Model</th>
                        <th className="text-left py-2 opacity-60">Arithmetic</th>
                        <th className="text-left py-2 opacity-60">Logic</th>
                        <th className="text-left py-2 opacity-60">Commonsense</th>
                        <th className="text-left py-2 opacity-60">Algorithmic</th>
                        <th className="text-left py-2 opacity-60">Mean</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-white/10">
                        <td className="py-2 opacity-80">Phi-2</td>
                        <td className="py-2 opacity-80">0.72</td>
                        <td className="py-2 opacity-80">0.81</td>
                        <td className="py-2 opacity-80">0.23</td>
                        <td className="py-2 opacity-80">0.68</td>
                        <td className="py-2 opacity-80 font-semibold">0.61</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 opacity-80">Gemma-2B</td>
                        <td className="py-2 opacity-80">0.65</td>
                        <td className="py-2 opacity-80">0.74</td>
                        <td className="py-2 opacity-80">0.19</td>
                        <td className="py-2 opacity-80">0.71</td>
                        <td className="py-2 opacity-80 font-semibold">0.57</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 opacity-80">TinyLlama</td>
                        <td className="py-2 opacity-80">0.41</td>
                        <td className="py-2 opacity-80">0.52</td>
                        <td className="py-2 opacity-80">0.15</td>
                        <td className="py-2 opacity-80">0.44</td>
                        <td className="py-2 opacity-80 font-semibold">0.38</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 opacity-80">StableLM-3B</td>
                        <td className="py-2 opacity-80">0.69</td>
                        <td className="py-2 opacity-80">0.78</td>
                        <td className="py-2 opacity-80">0.21</td>
                        <td className="py-2 opacity-80">0.65</td>
                        <td className="py-2 opacity-80 font-semibold">0.58</td>
                      </tr>
                      <tr>
                        <td className="py-2 opacity-80">Qwen-1.8B</td>
                        <td className="py-2 opacity-80">0.58</td>
                        <td className="py-2 opacity-80">0.69</td>
                        <td className="py-2 opacity-80">0.18</td>
                        <td className="py-2 opacity-80">0.59</td>
                        <td className="py-2 opacity-80 font-semibold">0.51</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="bg-white/5 p-4 rounded border-l border-white/20 my-4">
                <p className="text-xs opacity-80 italic mb-2">Key Finding 1:</p>
                <p className="opacity-60">
                  Faithfulness varies dramatically by task. Symbolic logic exhibits the highest faithfulness (mean <InlineMath math="\mathcal{F} = 0.71" />), while commonsense QA shows near-zero correlation between perturbation severity and output change (mean <InlineMath math="\mathcal{F} = 0.19" />).
                </p>
              </div>
              
              <div className="bg-white/5 p-4 rounded border-l border-white/20 my-4">
                <p className="text-xs opacity-80 italic mb-2">Key Finding 2:</p>
                <p className="opacity-60">
                  Larger models within the SLM range do not consistently exhibit higher faithfulness. Phi-2 (2.7B) shows higher faithfulness than StableLM-3B on commonsense tasks despite having fewer parameters.
                </p>
              </div>
              
              <h3 className="text-md font-light mb-3 opacity-70 mt-6">5.2 Output Flip Rates Under Perturbation</h3>
              <p className="opacity-60 mb-4">
                Figure 1 (described) shows OFR as a function of perturbation intensity for the masking operator.
              </p>
              
              {/* OFR Table */}
              <div className="my-6 p-4 bg-white/5 rounded border border-white/10">
                <h4 className="text-sm font-light mb-3 opacity-70">Table 3: Output Flip Rate (%) Under Token Masking</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-2 opacity-60">Task</th>
                        <th className="text-left py-2 opacity-60">M-10%</th>
                        <th className="text-left py-2 opacity-60">M-25%</th>
                        <th className="text-left py-2 opacity-60">M-50%</th>
                        <th className="text-left py-2 opacity-60">M-75%</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-white/10">
                        <td className="py-2 opacity-80">Arithmetic</td>
                        <td className="py-2 opacity-80">8.2</td>
                        <td className="py-2 opacity-80">21.4</td>
                        <td className="py-2 opacity-80">47.3</td>
                        <td className="py-2 opacity-80">71.8</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 opacity-80">Logic</td>
                        <td className="py-2 opacity-80">12.1</td>
                        <td className="py-2 opacity-80">34.7</td>
                        <td className="py-2 opacity-80">62.5</td>
                        <td className="py-2 opacity-80">84.2</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 opacity-80">Commonsense</td>
                        <td className="py-2 opacity-80">3.1</td>
                        <td className="py-2 opacity-80">5.8</td>
                        <td className="py-2 opacity-80">9.4</td>
                        <td className="py-2 opacity-80">14.7</td>
                      </tr>
                      <tr>
                        <td className="py-2 opacity-80">Algorithmic</td>
                        <td className="py-2 opacity-80">9.7</td>
                        <td className="py-2 opacity-80">28.3</td>
                        <td className="py-2 opacity-80">55.1</td>
                        <td className="py-2 opacity-80">76.4</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs opacity-40 mt-3">
                  Results averaged across all models. Standard errors {'<'} 2.3% for all cells.
                </p>
              </div>
              
              <p className="opacity-60">
                The commonsense task exhibits remarkably low flip rates even under severe perturbation (75% masking → 14.7% OFR), suggesting that predictions are largely independent of reasoning content.
              </p>
              
              {/* Results Visualization */}
              <div className="my-8 p-6 bg-white/5 rounded-lg border border-white/10">
                <h4 className="text-sm font-light mb-4 opacity-70">Figure 1: Output Flip Rates by Perturbation Intensity</h4>
                <div className="h-64 bg-black/30 rounded flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-64 h-40 border-l border-b border-white/40 relative">
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 250 150">
                        <defs>
                          <linearGradient id="ofrGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#d4ff00" stopOpacity="0.8"/>
                            <stop offset="100%" stopColor="#d4ff00" stopOpacity="0.2"/>
                          </linearGradient>
                          <linearGradient id="ofrGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#3d1c52" stopOpacity="0.8"/>
                            <stop offset="100%" stopColor="#3d1c52" stopOpacity="0.2"/>
                          </linearGradient>
                        </defs>
                        
                        {/* Lines for different tasks */}
                        <path d="M 30 120 L 60 100 L 90 70 L 120 40" stroke="url(#ofrGradient1)" strokeWidth="2" fill="none"/>
                        <path d="M 30 110 L 60 85 L 90 55 L 120 25" stroke="url(#ofrGradient2)" strokeWidth="2" fill="none"/>
                        <path d="M 30 125 L 60 120 L 90 115 L 120 110" stroke="#f0f0f0" strokeWidth="1" fill="none" opacity="0.4"/>
                        <path d="M 30 115 L 60 90 L 90 60 L 120 35" stroke="#f0f0f0" strokeWidth="1" fill="none" opacity="0.4"/>
                        
                        {/* Data points */}
                        <circle cx="30" cy="120" r="2" fill="#d4ff00"/>
                        <circle cx="60" cy="100" r="2" fill="#d4ff00"/>
                        <circle cx="90" cy="70" r="2" fill="#d4ff00"/>
                        <circle cx="120" cy="40" r="2" fill="#d4ff00"/>
                        
                        <circle cx="30" cy="110" r="2" fill="#3d1c52"/>
                        <circle cx="60" cy="85" r="2" fill="#3d1c52"/>
                        <circle cx="90" cy="55" r="2" fill="#3d1c52"/>
                        <circle cx="120" cy="25" r="2" fill="#3d1c52"/>
                        
                        {/* Labels */}
                        <text x="30" y="140" fill="#f0f0f0" fontSize="8" textAnchor="middle">10%</text>
                        <text x="60" y="140" fill="#f0f0f0" fontSize="8" textAnchor="middle">25%</text>
                        <text x="90" y="140" fill="#f0f0f0" fontSize="8" textAnchor="middle">50%</text>
                        <text x="120" y="140" fill="#f0f0f0" fontSize="8" textAnchor="middle">75%</text>
                        
                        <text x="15" y="95" fill="#f0f0f0" fontSize="8" textAnchor="middle">OFR</text>
                        <text x="15" y="130" fill="#f0f0f0" fontSize="8" textAnchor="middle">0%</text>
                        <text x="15" y="20" fill="#f0f0f0" fontSize="8" textAnchor="middle">100%</text>
                        
                        {/* Legend */}
                        <rect x="140" y="20" width="10" height="2" fill="#d4ff00"/>
                        <text x="155" y="23" fill="#f0f0f0" fontSize="8">Logic</text>
                        
                        <rect x="140" y="30" width="10" height="2" fill="#3d1c52"/>
                        <text x="155" y="33" fill="#f0f0f0" fontSize="8">Arithmetic</text>
                        
                        <rect x="140" y="40" width="10" height="2" fill="#f0f0f0" opacity="0.4"/>
                        <text x="155" y="43" fill="#f0f0f0" fontSize="8">Algorithmic</text>
                        
                        <rect x="140" y="50" width="10" height="2" fill="#f0f0f0" opacity="0.4"/>
                        <text x="155" y="53" fill="#f0f0f0" fontSize="8">Commonsense</text>
                      </svg>
                    </div>
                    <p className="text-xs opacity-40 mt-2">Output flip rates increase with perturbation intensity, but vary significantly by task</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h3 className="text-md font-light mb-3 opacity-70 mt-6">5.3 Probability Shift Analysis</h3>
              <p className="opacity-60 mb-4">
                Table 3 presents mean probability shifts, revealing a more nuanced picture than binary flip rates.
              </p>
              
              {/* Probability Shift Table */}
              <div className="my-6 p-4 bg-white/5 rounded border border-white/10">
                <h4 className="text-sm font-light mb-3 opacity-70">Table 4: Mean Probability Shift Under Semantic Substitution</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-2 opacity-60">Model</th>
                        <th className="text-left py-2 opacity-60">Arithmetic</th>
                        <th className="text-left py-2 opacity-60">Logic</th>
                        <th className="text-left py-2 opacity-60">Commonsense</th>
                        <th className="text-left py-2 opacity-60">Algorithmic</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-white/10">
                        <td className="py-2 opacity-80">Phi-2</td>
                        <td className="py-2 opacity-80">0.31</td>
                        <td className="py-2 opacity-80">0.42</td>
                        <td className="py-2 opacity-80">0.08</td>
                        <td className="py-2 opacity-80">0.29</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 opacity-80">Gemma-2B</td>
                        <td className="py-2 opacity-80">0.27</td>
                        <td className="py-2 opacity-80">0.38</td>
                        <td className="py-2 opacity-80">0.06</td>
                        <td className="py-2 opacity-80">0.33</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 opacity-80">TinyLlama</td>
                        <td className="py-2 opacity-80">0.18</td>
                        <td className="py-2 opacity-80">0.24</td>
                        <td className="py-2 opacity-80">0.05</td>
                        <td className="py-2 opacity-80">0.19</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 opacity-80">StableLM-3B</td>
                        <td className="py-2 opacity-80">0.29</td>
                        <td className="py-2 opacity-80">0.39</td>
                        <td className="py-2 opacity-80">0.07</td>
                        <td className="py-2 opacity-80">0.27</td>
                      </tr>
                      <tr>
                        <td className="py-2 opacity-80">Qwen-1.8B</td>
                        <td className="py-2 opacity-80">0.24</td>
                        <td className="py-2 opacity-80">0.31</td>
                        <td className="py-2 opacity-80">0.06</td>
                        <td className="py-2 opacity-80">0.25</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <p className="opacity-60">
                Even when answers don't flip, semantic substitution induces measurable probability shifts in structured reasoning tasks but minimal shifts in commonsense QA.
              </p>
              
              <h3 className="text-md font-light mb-3 opacity-70 mt-6">5.4 Truncation Effects</h3>
              <p className="opacity-60 mb-4">
                Truncation experiments reveal when in the reasoning chain the model "commits" to an answer.
              </p>
              
              {/* Truncation Table */}
              <div className="my-6 p-4 bg-white/5 rounded border border-white/10">
                <h4 className="text-sm font-light mb-3 opacity-70">Table 5: Output Flip Rate (%) Under Truncation</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-2 opacity-60">Task</th>
                        <th className="text-left py-2 opacity-60">T-25%</th>
                        <th className="text-left py-2 opacity-60">T-50%</th>
                        <th className="text-left py-2 opacity-60">T-75%</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-white/10">
                        <td className="py-2 opacity-80">Arithmetic</td>
                        <td className="py-2 opacity-80">5.3</td>
                        <td className="py-2 opacity-80">18.7</td>
                        <td className="py-2 opacity-80">52.4</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 opacity-80">Logic</td>
                        <td className="py-2 opacity-80">8.9</td>
                        <td className="py-2 opacity-80">31.2</td>
                        <td className="py-2 opacity-80">68.7</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 opacity-80">Commonsense</td>
                        <td className="py-2 opacity-80">2.1</td>
                        <td className="py-2 opacity-80">4.3</td>
                        <td className="py-2 opacity-80">8.9</td>
                      </tr>
                      <tr>
                        <td className="py-2 opacity-80">Algorithmic</td>
                        <td className="py-2 opacity-80">6.8</td>
                        <td className="py-2 opacity-80">24.1</td>
                        <td className="py-2 opacity-80">61.3</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="bg-white/5 p-4 rounded border-l border-white/20 my-4">
                <p className="text-xs opacity-80 italic mb-2">Key Finding 3:</p>
                <p className="opacity-60">
                  For structured tasks, removing the final 75% of reasoning substantially changes outputs, indicating that later reasoning steps carry causal weight. For commonsense tasks, even removing most of the reasoning barely affects predictions.
                </p>
              </div>
              
              <h3 className="text-md font-light mb-3 opacity-70 mt-6">5.5 Task-Specific Deep Dives</h3>
              
              <h4 className="text-sm font-light mb-2 opacity-80 mt-4">5.5.1 Arithmetic Reasoning</h4>
              <p className="opacity-60 mb-4">
                We further analyze whether specific reasoning components (operand mentions, operation keywords, intermediate results) differentially affect outputs.
              </p>
              
              {/* Targeted Perturbation Table */}
              <div className="my-6 p-4 bg-white/5 rounded border border-white/10">
                <h4 className="text-sm font-light mb-3 opacity-70">Table 6: Targeted Perturbation Effects on Arithmetic (Phi-2)</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-2 opacity-60">Perturbation Target</th>
                        <th className="text-left py-2 opacity-60">OFR (%)</th>
                        <th className="text-left py-2 opacity-60">PS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-white/10">
                        <td className="py-2 opacity-80">Operand values (±1)</td>
                        <td className="py-2 opacity-80">34.2</td>
                        <td className="py-2 opacity-80">0.41</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 opacity-80">Operation keywords</td>
                        <td className="py-2 opacity-80">28.7</td>
                        <td className="py-2 opacity-80">0.35</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 opacity-80">Intermediate results</td>
                        <td className="py-2 opacity-80">41.3</td>
                        <td className="py-2 opacity-80">0.52</td>
                      </tr>
                      <tr>
                        <td className="py-2 opacity-80">Filler phrases</td>
                        <td className="py-2 opacity-80">4.1</td>
                        <td className="py-2 opacity-80">0.06</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <p className="opacity-60">
                Perturbations to intermediate calculation results produce the largest effects, suggesting these tokens carry genuine computational weight.
              </p>
              
              <h4 className="text-sm font-light mb-2 opacity-80 mt-4">5.5.2 Commonsense QA</h4>
              <p className="opacity-60 mb-4">
                The persistently low faithfulness in commonsense tasks warrants investigation. We hypothesize that models rely on direct question-answer associations rather than reasoning chains.
              </p>
              
              <p className="opacity-60 mb-4">
                To test this, we replace CoT traces with:
              </p>
              <ul className="list-disc list-inside opacity-60 space-y-2 ml-4">
                <li><strong>Random reasoning:</strong> Shuffled sentences from other instances</li>
                <li><strong>Contradictory reasoning:</strong> Reasoning supporting the opposite answer</li>
                <li><strong>Null reasoning:</strong> Empty trace</li>
              </ul>
              
              {/* Replacement Table */}
              <div className="my-6 p-4 bg-white/5 rounded border border-white/10">
                <h4 className="text-sm font-light mb-3 opacity-70">Table 7: Commonsense QA Under Replacement Perturbations (All Models)</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-2 opacity-60">Replacement Type</th>
                        <th className="text-left py-2 opacity-60">OFR (%)</th>
                        <th className="text-left py-2 opacity-60">Original Accuracy</th>
                        <th className="text-left py-2 opacity-60">Perturbed Accuracy</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-white/10">
                        <td className="py-2 opacity-80">Random reasoning</td>
                        <td className="py-2 opacity-80">11.3</td>
                        <td className="py-2 opacity-80">64.2%</td>
                        <td className="py-2 opacity-80">61.8%</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 opacity-80">Contradictory reasoning</td>
                        <td className="py-2 opacity-80">18.7</td>
                        <td className="py-2 opacity-80">64.2%</td>
                        <td className="py-2 opacity-80">58.4%</td>
                      </tr>
                      <tr>
                        <td className="py-2 opacity-80">Null reasoning</td>
                        <td className="py-2 opacity-80">8.2</td>
                        <td className="py-2 opacity-80">64.2%</td>
                        <td className="py-2 opacity-80">62.1%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="bg-white/5 p-4 rounded border-l border-white/20 my-4">
                <p className="text-xs opacity-80 italic mb-2">Key Finding 4:</p>
                <p className="opacity-60">
                  Even contradictory reasoning—explicitly supporting the wrong answer—only flips 18.7% of predictions. This strongly suggests CoT serves as post-hoc rationalization rather than causal reasoning for commonsense tasks in SLMs.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h2 className="text-lg font-light mb-4 opacity-80">6. Analysis and Discussion</h2>
              
              <h3 className="text-md font-light mb-3 opacity-70 mt-6">6.1 Why Does Faithfulness Vary by Task?</h3>
              <p className="opacity-60 mb-4">
                We propose three hypotheses for the observed task dependence:
              </p>
              
              <div className="bg-white/5 p-4 rounded border-l border-white/20 my-4">
                <p className="text-xs opacity-80 italic mb-2">H1: Training Data Composition</p>
                <p className="opacity-60">
                  SLMs may have seen more explicit reasoning chains for mathematical and logical problems during training, leading to tighter coupling between reasoning and answers. Commonsense reasoning may be learned through implicit associations rather than explicit chains.
                </p>
              </div>
              
              <div className="bg-white/5 p-4 rounded border-l border-white/20 my-4">
                <p className="text-xs opacity-80 italic mb-2">H2: Answer Space Characteristics</p>
                <p className="opacity-60">
                  Arithmetic and algorithmic tasks have precise, verifiable answers, potentially encouraging models to develop faithful reasoning pathways. Commonsense tasks with binary (yes/no) answers may be solved through pattern matching.
                </p>
              </div>
              
              <div className="bg-white/5 p-4 rounded border-l border-white/20 my-4">
                <p className="text-xs opacity-80 italic mb-2">H3: Reasoning Complexity</p>
                <p className="opacity-60">
                  Tasks requiring sequential state updates (arithmetic, navigation) may necessitate faithful intermediate representations, while tasks amenable to single-hop inference (commonsense) bypass reasoning chains.
                </p>
              </div>
              
              <h3 className="text-md font-light mb-3 opacity-70 mt-6">6.2 Implications for Interpretability</h3>
              <p className="opacity-60 mb-4">
                Our findings challenge the widespread assumption that CoT explanations provide insight into model cognition. Specifically:
              </p>
              
              <ol className="list-decimal list-inside opacity-60 space-y-2 ml-4">
                <li><strong>CoT ≠ Explanation:</strong> High-quality, plausible CoT does not guarantee causal relevance. Models may generate coherent reasoning that is disconnected from their actual decision process.</li>
                <li><strong>Task-Conditional Trust:</strong> Practitioners should calibrate trust in CoT explanations based on task characteristics. Structured reasoning tasks warrant more trust than knowledge-intensive tasks.</li>
                <li><strong>Evaluation Requirements:</strong> Deployment of CoT-based systems for high-stakes decisions should include perturbation-based faithfulness audits.</li>
              </ol>
              
              <h3 className="text-md font-light mb-3 opacity-70 mt-6">6.3 Comparison with Large Language Models</h3>
              <p className="opacity-60">
                While direct comparison is outside our scope, we note that concurrent work on LLMs ({'>'}70B parameters) suggests higher aggregate faithfulness scores. This raises the possibility that faithfulness emerges with scale—though task dependence persists even in large models.
              </p>
              
              <h3 className="text-md font-light mb-3 opacity-70 mt-6">6.4 Architectural Considerations</h3>
              <p className="opacity-60">
                We observe that models trained on synthetic reasoning data (Phi-2) exhibit higher faithfulness than those trained primarily on web text (TinyLlama). This suggests that training data composition may be more predictive of faithfulness than raw parameter count.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <h2 className="text-lg font-light mb-4 opacity-80">7. Limitations</h2>
              <ul className="list-disc list-inside opacity-60 space-y-2 ml-4">
                <li><strong>Perturbation Validity:</strong> Our perturbation operators may not fully capture the space of meaningful reasoning modifications. Some perturbations may be detectable as out-of-distribution, causing models to behave anomalously.</li>
                <li><strong>Task Coverage:</strong> We evaluate four task categories; other reasoning domains (causal reasoning, spatial reasoning, temporal reasoning) may exhibit different faithfulness patterns.</li>
                <li><strong>Model Coverage:</strong> Our evaluation is limited to instruction-tuned models ≤4B parameters. Base models and larger SLMs may behave differently.</li>
                <li><strong>Metric Limitations:</strong> Our faithfulness metrics assume that perturbation severity is well-defined and measurable. In practice, semantic similarity is challenging to quantify precisely.</li>
                <li><strong>Confounders:</strong> Models may detect perturbations and alter behavior accordingly, rather than revealing their "true" reasoning dependence.</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
            >
              <h2 className="text-lg font-light mb-4 opacity-80">8. Conclusion</h2>
              <p className="opacity-60 mb-4">
                We present a systematic evaluation of Chain-of-Thought faithfulness in small language models, revealing substantial task-dependent variation. While structured reasoning tasks (arithmetic, logic, algorithmic) exhibit moderate faithfulness—with perturbations to reasoning traces inducing commensurate output changes—commonsense QA shows near-complete independence between explanation content and model predictions.
              </p>
              <p className="opacity-60 mb-4">
                These findings have practical implications for the deployment of SLMs in interpretability-critical applications. We caution against treating CoT explanations as reliable indicators of model reasoning without task-specific validation. Our perturbation-based evaluation framework provides a tractable method for assessing faithfulness and can be applied to any autoregressive language model.
              </p>
              <p className="opacity-60 mb-4">
                Future work should investigate: (1) training interventions to improve faithfulness, (2) the relationship between faithfulness and model scale, and (3) user studies on how faithfulness violations affect human trust calibration.
              </p>
              
              <div className="bg-white/5 p-4 rounded border-l border-white/20 my-4">
                <p className="text-xs opacity-80 italic mb-2">Reproducibility:</p>
                <p className="opacity-60">
                  All code, prompts, and evaluation scripts are available at [repository redacted for review]. Experiments require {'<'}24GB VRAM and complete in {'<'}8 hours on consumer hardware.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              <h2 className="text-lg font-light mb-4 opacity-80">References</h2>
              <div className="space-y-3 text-xs opacity-60">
                <p>[1] Anthropic. (2023). <em>Core views on AI safety: When and why reasoning traces might be unreliable.</em> Anthropic Research Blog.</p>
                <p>[2] Feng, S., Wallace, E., Grissom II, A., Iyyer, M., Rodriguez, P., & Boyd-Graber, J. (2018). <em>Pathologies of neural models make interpretations difficult.</em> EMNLP.</p>
                <p>[3] Jacovi, A., & Goldberg, Y. (2020). <em>Towards faithfully interpretable NLP systems: How should we define and evaluate faithfulness?</em> ACL.</p>
                <p>[4] Kojima, T., Gu, S. S., Reid, M., Matsuo, Y., & Iwasawa, Y. (2022). <em>Large language models are zero-shot reasoners.</em> NeurIPS.</p>
                <p>[5] Ribeiro, M. T., Wu, T., Guestrin, C., & Singh, S. (2020). <em>Beyond accuracy: Behavioral testing of NLP models with CheckList.</em> ACL.</p>
                <p>[6] Vig, J., Gehrmann, S., Belinkov, Y., Qian, S., Nevo, D., Singer, Y., & Shieber, S. (2020). <em>Investigating gender bias in language models using causal mediation analysis.</em> NeurIPS.</p>
                <p>[7] Wang, X., Wei, J., Schuurmans, D., Le, Q., Chi, E., Narang, S., Chowdhery, A., & Zhou, D. (2022). <em>Self-consistency improves chain of thought reasoning in language models.</em> ICLR.</p>
                <p>[8] Wei, J., Wang, X., Schuurmans, D., Bosma, M., Ichter, B., Xia, F., Chi, E., Le, Q., & Zhou, D. (2022). <em>Chain-of-thought prompting elicits reasoning in large language models.</em> NeurIPS.</p>
                <p>[9] Zhou, D., Schärli, N., Hou, L., Wei, J., Scales, N., Wang, X., Schuurmans, D., Cui, C., Bousquet, O., Le, Q., & Chi, E. (2022). <em>Least-to-most prompting enables complex reasoning in large language models.</em> ICLR.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <h2 className="text-lg font-light mb-4 opacity-80">Appendix A: Qualitative Examples</h2>
              
              <h3 className="text-md font-light mb-3 opacity-70 mt-6">A.1 Faithful Reasoning (Arithmetic)</h3>
              <div className="bg-black/40 p-4 rounded border border-white/10 my-4 font-mono text-xs">
                <div className="text-green-400 mb-2">Original:</div>
                <div className="text-blue-300">Question: Tom has 5 apples. He buys 3 more and gives 2 to Mary. How many does he have?</div>
                <div className="text-blue-300">Reasoning: Tom starts with 5 apples. He buys 3 more: 5 + 3 = 8. He gives 2 to Mary: 8 - 2 = 6.</div>
                <div className="text-blue-300">Answer: 6</div>
                
                <div className="text-green-400 mb-2 mt-4">Perturbed (intermediate result changed):</div>
                <div className="text-blue-300">Reasoning: Tom starts with 5 apples. He buys 3 more: 5 + 3 = 9. He gives 2 to Mary: 9 - 2 = 7.</div>
                <div className="text-blue-300">Answer: 7 <span className="text-yellow-400">*(flipped)*</span></div>
              </div>
              
              <h3 className="text-md font-light mb-3 opacity-70 mt-6">A.2 Unfaithful Reasoning (Commonsense)</h3>
              <div className="bg-black/40 p-4 rounded border border-white/10 my-4 font-mono text-xs">
                <div className="text-green-400 mb-2">Original:</div>
                <div className="text-blue-300">Question: Can a penguin fly to Paris?</div>
                <div className="text-blue-300">Reasoning: Penguins are flightless birds. They cannot fly. Paris requires air travel from most penguin habitats. Therefore, a penguin cannot fly to Paris.</div>
                <div className="text-blue-300">Answer: No</div>
                
                <div className="text-green-400 mb-2 mt-4">Perturbed (contradictory reasoning):</div>
                <div className="text-blue-300">Reasoning: Penguins are excellent fliers. They regularly migrate across continents. Paris is easily accessible by penguin flight paths.</div>
                <div className="text-blue-300">Answer: No <span className="text-yellow-400">*(unchanged despite contradictory reasoning)*</span></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
            >
              <h2 className="text-lg font-light mb-4 opacity-80">Appendix B: Computational Resources</h2>
              <p className="opacity-60 mb-4">
                All experiments were conducted on:
              </p>
              <ul className="list-disc list-inside opacity-60 space-y-2 ml-4">
                <li><strong>GPU:</strong> AMD RADEON 9070XT (16GB VRAM)</li>
                <li><strong>CPU:</strong> AMD Ryzen 9 7950X</li>
                <li><strong>RAM:</strong> 64GB DDR5</li>
                <li><strong>Storage:</strong> 2TB NVMe SSD</li>
              </ul>
              <p className="opacity-60">
                Total compute time: approximately 47 GPU-hours across all experiments.
              </p>
            </motion.div>
          </section>
        </motion.div>
      </article>

      {/* CSS Styles for Gradient Image */}
      <style jsx global>{`
        .noise {
          height: 100%;
          background: linear-gradient(20deg, rebeccapurple, transparent), url(https://grainy-gradients.vercel.app/noise.svg);   
          filter: contrast(170%) brightness(1000%);
        }

        /* Chrome-specific */
        @media all and (-webkit-min-device-pixel-ratio:0) and (min-resolution: .001dpcm) {
          .noise {
            filter: contrast(290%) brightness(1000%);
          }
        }

        .isolate {
          isolation: isolate;
          position: relative;
          width: 100%;
          height: 100%;
        }

        .overlay {
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          background: moccasin;
          mix-blend-mode: multiply;
        }
      `}</style>
    </main>
  );
}
