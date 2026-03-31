import { ArrowRight, Upload, Sparkles, Download, FileCheck, Layout, Zap, FileText, Check } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900/20 via-gray-900 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-32 sm:pb-32">
          <div className="text-center space-y-8">
            <div className="inline-block">
              <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-400 font-medium">AI-Powered Resume Builder</span>
              </div>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              Land Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">First Job</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-400 leading-relaxed">
              Create professional, ATS-optimized resumes in minutes with AI. Perfect for recent graduates ready to launch their careers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <button className="group bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-lg shadow-green-500/25 hover:shadow-green-500/40">
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200">
                See Examples
              </button>
            </div>
            <div className="pt-8 flex items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>Free forever plan</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-400">Three simple steps to your perfect resume</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                number: '01',
                icon: Upload,
                title: 'Upload Info',
                description: 'Share your education, experience, and skills. No formatting needed—just the facts.'
              },
              {
                number: '02',
                icon: Sparkles,
                title: 'AI Builds Resume',
                description: 'Our AI analyzes your info and crafts compelling bullet points optimized for ATS systems.'
              },
              {
                number: '03',
                icon: Download,
                title: 'Download & Apply',
                description: 'Get your polished resume as a PDF and start applying to jobs with confidence.'
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-6xl font-bold text-gray-800 group-hover:text-green-500/20 transition-colors">
                      {step.number}
                    </div>
                    <div className="bg-green-500/10 p-3 rounded-xl border border-green-500/20 group-hover:bg-green-500/20 transition-colors">
                      <step.icon className="w-6 h-6 text-green-400" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-6 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-gray-700" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-400">Everything you need to create a winning resume</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: FileCheck,
                title: 'ATS Optimized',
                description: 'Pass applicant tracking systems with optimized keywords and formatting'
              },
              {
                icon: Layout,
                title: '50+ Templates',
                description: 'Choose from modern, professional templates designed for recent grads'
              },
              {
                icon: Zap,
                title: 'AI Bullet Points',
                description: 'Transform your experience into compelling, action-oriented bullet points'
              },
              {
                icon: FileText,
                title: 'Instant PDF',
                description: 'Download print-ready PDFs with perfect formatting every time'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-green-500/50 hover:bg-gray-800/80 transition-all duration-300 group">
                <div className="bg-green-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-gray-400">Join thousands of grads who landed their dream jobs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Chen',
                role: 'Software Engineer @ Google',
                quote: 'ResumeForge helped me land 5 interviews in my first week. The AI bullet points made my projects sound so professional!'
              },
              {
                name: 'Marcus Johnson',
                role: 'Marketing Analyst @ Nike',
                quote: 'As a recent grad, I had no idea how to format my resume. This tool made it effortless and the results were incredible.'
              },
              {
                name: 'Emily Rodriguez',
                role: 'Data Scientist @ Meta',
                quote: 'The ATS optimization was a game-changer. I finally started getting callbacks after using ResumeForge. Highly recommend!'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-8 hover:border-green-500/50 transition-all duration-300">
                <div className="mb-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6">"{testimonial.quote}"</p>
                </div>
                <div className="border-t border-gray-700 pt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-black font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Simple Pricing</h2>
            <p className="text-xl text-gray-400">Choose the plan that works for you</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Free',
                price: '$0',
                period: 'forever',
                features: ['1 resume', 'Basic templates', 'PDF download', 'ATS optimization'],
                cta: 'Start Free',
                highlighted: false
              },
              {
                name: 'Pro',
                price: '$9',
                period: '/month',
                features: ['Unlimited resumes', 'All 50+ templates', 'AI bullet points', 'Priority support', 'Custom colors', 'Cover letters'],
                cta: 'Go Pro',
                highlighted: true
              },
              {
                name: 'Lifetime',
                price: '$49',
                period: 'one-time',
                features: ['Everything in Pro', 'Lifetime access', 'Future updates', 'LinkedIn optimization', 'Interview prep guide'],
                cta: 'Get Lifetime',
                highlighted: false
              }
            ].map((plan, index) => (
              <div key={index} className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.highlighted 
                  ? 'bg-gradient-to-b from-green-500/10 to-gray-800 border-2 border-green-500 shadow-xl shadow-green-500/20 scale-105' 
                  : 'bg-gray-800/50 border border-gray-700 hover:border-gray-600'
              }`}>
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-black text-sm font-bold px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        plan.highlighted ? 'text-green-400' : 'text-gray-400'
                      }`} />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-lg font-semibold transition-all duration-200 ${
                  plan.highlighted
                    ? 'bg-green-500 hover:bg-green-600 text-black shadow-lg shadow-green-500/25'
                    : 'bg-gray-700 hover:bg-gray-600 text-white'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-black" />
              </div>
              <span className="text-xl font-bold">ResumeForge AI</span>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
              <a href="#" className="hover:text-green-400 transition-colors">About</a>
              <a href="#" className="hover:text-green-400 transition-colors">Features</a>
              <a href="#" className="hover:text-green-400 transition-colors">Pricing</a>
              <a href="#" className="hover:text-green-400 transition-colors">Blog</a>
              <a href="#" className="hover:text-green-400 transition-colors">Contact</a>
            </div>
            <div className="text-sm text-gray-400">
              © 2024 ResumeForge AI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}