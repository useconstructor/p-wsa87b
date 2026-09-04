'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F0F13]">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-[#0F0F13]/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#0066FF] rounded-lg flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22,4 12,14.01 9,11.01" />
              </svg>
            </div>
            <span className="text-white text-xl font-bold">Taskflow</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#product" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Product</a>
            <a href="#solutions" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Solutions</a>
            <a href="#resources" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Resources</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Pricing</a>
            <a href="#enterprise" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Enterprise</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="#login" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Log in</a>
            <a href="#signup" className="bg-[#0066FF] hover:bg-[#0052CC] text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors">
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0066FF]/10 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-gray-300 text-sm">Now with AI-powered insights</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            Ship work that moves<br />your business
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            The collaborative project management platform for distributed engineering and product teams. Real-time visibility, AI insights, and seamless integrations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#demo" className="w-full sm:w-auto bg-[#0066FF] hover:bg-[#0052CC] text-white px-8 py-4 rounded-full text-base font-semibold transition-colors">
              Start Free Trial
            </a>
            <a href="#demo" className="w-full sm:w-auto border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-full text-base font-semibold transition-colors flex items-center justify-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5,3 19,12 5,21" />
              </svg>
              Watch Demo
            </a>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-16 px-6 bg-[#1A1A1E] border-y border-white/10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">12,847</div>
            <div className="text-gray-400 text-sm uppercase tracking-wide">Active Teams</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">98.2%</div>
            <div className="text-gray-400 text-sm uppercase tracking-wide">Success Rate</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">2.4M</div>
            <div className="text-gray-400 text-sm uppercase tracking-wide">Tasks Completed</div>
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Everything you need to ship faster</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Powerful features designed for modern teams</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Smart Planning */}
            <div className="bg-[#1A1A1E] rounded-2xl p-8 border border-white/10 hover:border-[#0066FF]/50 transition-colors">
              <div className="w-12 h-12 bg-[#0066FF]/20 rounded-xl flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Smart Planning</h3>
              <p className="text-gray-400">AI-powered sprint planning that learns from your team&apos;s velocity and suggests optimal task allocation.</p>
            </div>
            {/* Team Alignment */}
            <div className="bg-[#1A1A1E] rounded-2xl p-8 border border-white/10 hover:border-[#0066FF]/50 transition-colors">
              <div className="w-12 h-12 bg-[#0066FF]/20 rounded-xl flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Team Alignment</h3>
              <p className="text-gray-400">Keep everyone on the same page with real-time updates, shared goals, and transparent progress tracking.</p>
            </div>
            {/* Advanced Reporting */}
            <div className="bg-[#1A1A1E] rounded-2xl p-8 border border-white/10 hover:border-[#0066FF]/50 transition-colors">
              <div className="w-12 h-12 bg-[#0066FF]/20 rounded-xl flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Advanced Reporting</h3>
              <p className="text-gray-400">Comprehensive dashboards and custom reports to measure performance and identify bottlenecks.</p>
            </div>
            {/* Seamless Integrations */}
            <div className="bg-[#1A1A1E] rounded-2xl p-8 border border-white/10 hover:border-[#0066FF]/50 transition-colors">
              <div className="w-12 h-12 bg-[#0066FF]/20 rounded-xl flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16,18 22,12 16,6" />
                  <polyline points="8,6 2,12 8,18" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Seamless Integrations</h3>
              <p className="text-gray-400">Connect with GitHub, Slack, Figma, and 100+ other tools your team already uses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Dashboard Mockup */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0F0F13] to-[#1A1A1E]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">See your work in action</h2>
            <p className="text-gray-400 text-lg">A clean, intuitive interface designed for productivity</p>
          </div>
          <div className="bg-[#1A1A1E] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
            {/* Browser Chrome */}
            <div className="bg-[#252529] px-4 py-3 flex items-center gap-2 border-b border-white/10">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27CA3F]" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-[#1A1A1E] rounded-md px-4 py-1 text-gray-500 text-sm">app.taskflow.io/projects</div>
              </div>
            </div>
            {/* Dashboard Content */}
            <div className="p-6">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-white font-semibold text-lg">Projects</h3>
                  <p className="text-gray-500 text-sm">Manage all your team projects</p>
                </div>
                <button className="bg-[#0066FF] text-white px-4 py-2 rounded-lg text-sm font-medium">+ New Project</button>
              </div>
              {/* Projects Table */}
              <div className="bg-[#0F0F13] rounded-xl overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10 text-left">
                      <th className="px-4 py-3 text-gray-400 font-medium text-sm">Project</th>
                      <th className="px-4 py-3 text-gray-400 font-medium text-sm hidden sm:table-cell">Status</th>
                      <th className="px-4 py-3 text-gray-400 font-medium text-sm hidden md:table-cell">Progress</th>
                      <th className="px-4 py-3 text-gray-400 font-medium text-sm hidden lg:table-cell">Team</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/5 hover:bg-white/5">
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400 text-sm font-semibold">M</div>
                          <div>
                            <div className="text-white font-medium">Mobile App Redesign</div>
                            <div className="text-gray-500 text-sm">12 tasks remaining</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 hidden sm:table-cell">
                        <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-medium">On Track</span>
                      </td>
                      <td className="px-4 py-4 hidden md:table-cell">
                        <div className="flex items-center gap-3">
                          <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                            <div className="w-3/4 h-full bg-[#0066FF] rounded-full" />
                          </div>
                          <span className="text-gray-400 text-sm">75%</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 hidden lg:table-cell">
                        <div className="flex -space-x-2">
                          <div className="w-7 h-7 rounded-full bg-blue-500 border-2 border-[#0F0F13]" />
                          <div className="w-7 h-7 rounded-full bg-pink-500 border-2 border-[#0F0F13]" />
                          <div className="w-7 h-7 rounded-full bg-yellow-500 border-2 border-[#0F0F13]" />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/5">
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 text-sm font-semibold">A</div>
                          <div>
                            <div className="text-white font-medium">API Integration</div>
                            <div className="text-gray-500 text-sm">8 tasks remaining</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 hidden sm:table-cell">
                        <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full text-xs font-medium">At Risk</span>
                      </td>
                      <td className="px-4 py-4 hidden md:table-cell">
                        <div className="flex items-center gap-3">
                          <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                            <div className="w-1/2 h-full bg-[#0066FF] rounded-full" />
                          </div>
                          <span className="text-gray-400 text-sm">50%</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 hidden lg:table-cell">
                        <div className="flex -space-x-2">
                          <div className="w-7 h-7 rounded-full bg-green-500 border-2 border-[#0F0F13]" />
                          <div className="w-7 h-7 rounded-full bg-purple-500 border-2 border-[#0F0F13]" />
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center text-green-400 text-sm font-semibold">D</div>
                          <div>
                            <div className="text-white font-medium">Dashboard Analytics</div>
                            <div className="text-gray-500 text-sm">3 tasks remaining</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 hidden sm:table-cell">
                        <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-medium">On Track</span>
                      </td>
                      <td className="px-4 py-4 hidden md:table-cell">
                        <div className="flex items-center gap-3">
                          <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                            <div className="w-[90%] h-full bg-[#0066FF] rounded-full" />
                          </div>
                          <span className="text-gray-400 text-sm">90%</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 hidden lg:table-cell">
                        <div className="flex -space-x-2">
                          <div className="w-7 h-7 rounded-full bg-orange-500 border-2 border-[#0F0F13]" />
                          <div className="w-7 h-7 rounded-full bg-cyan-500 border-2 border-[#0F0F13]" />
                          <div className="w-7 h-7 rounded-full bg-red-500 border-2 border-[#0F0F13]" />
                          <div className="w-7 h-7 rounded-full bg-[#252529] border-2 border-[#0F0F13] flex items-center justify-center text-gray-400 text-xs">+2</div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to transform how your team works?</h2>
          <p className="text-gray-400 text-lg mb-8">Join thousands of teams shipping better products faster</p>
          <a href="#signup" className="inline-block bg-[#0066FF] hover:bg-[#0052CC] text-white px-8 py-4 rounded-full text-base font-semibold transition-colors">
            Start Your Free Trial
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#0066FF] rounded-lg flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22,4 12,14.01 9,11.01" />
                </svg>
              </div>
              <span className="text-white text-xl font-bold">Taskflow</span>
            </div>
            <p className="text-gray-500 text-sm">© 2026 Taskflow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
