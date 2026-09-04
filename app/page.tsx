'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-[#0a0a0f]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 relative">
              <svg viewBox="0 0 36 36" fill="none" className="w-full h-full">
                <path d="M18 2L32 10V26L18 34L4 26V10L18 2Z" stroke="#3b82f6" strokeWidth="1.5" fill="none"/>
                <path d="M18 8L26 12.5V23.5L18 28L10 23.5V12.5L18 8Z" stroke="#3b82f6" strokeWidth="1.5" fill="none"/>
                <circle cx="18" cy="18" r="3" fill="#3b82f6"/>
              </svg>
            </div>
            <span className="text-white text-lg font-semibold">Project 1788534251307</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#product" className="text-gray-400 hover:text-white transition-colors text-sm">Product</a>
            <a href="#solutions" className="text-gray-400 hover:text-white transition-colors text-sm">Solutions</a>
            <a href="#resources" className="text-gray-400 hover:text-white transition-colors text-sm">Resources</a>
            <a href="#pricing" className="text-gray-400 hover:text-white transition-colors text-sm">Pricing</a>
            <a href="#enterprise" className="text-gray-400 hover:text-white transition-colors text-sm">Enterprise</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="#signin" className="text-gray-400 hover:text-white transition-colors text-sm">Sign in</a>
            <a href="#signup" className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-8 px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 via-blue-600/3 to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="w-2 h-2 bg-blue-500 rounded-full" />
            <span className="text-gray-400 text-sm tracking-widest uppercase">Project Management, Reimagined</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            Ship work that<br />moves your business<span className="text-blue-500">.</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-xl mx-auto mb-10">
            Plan, track, and deliver projects with speed and clarity.<br />
            Built for high-performing teams.
          </p>
          <div className="flex flex-col items-center gap-4">
            <a href="#signup" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-base font-medium transition-colors inline-flex items-center gap-2">
              Get Started — It&apos;s Free
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                No credit card required
              </span>
              <span className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Free forever plan
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {/* Active Teams */}
            <div className="bg-[#12121a] rounded-2xl p-5 border border-white/5">
              <div className="w-12 h-12 bg-[#1a1a24] rounded-xl flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">12,847</div>
              <div className="text-gray-500 text-sm mb-2">Active Teams</div>
              <div className="text-green-500 text-xs flex items-center gap-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 15l-6-6-6 6"/>
                </svg>
                24% <span className="text-gray-600">vs last month</span>
              </div>
            </div>

            {/* Project Success Rate */}
            <div className="bg-[#12121a] rounded-2xl p-5 border border-white/5">
              <div className="w-12 h-12 bg-[#1a1a24] rounded-xl flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                  <polyline points="17 6 23 6 23 12"/>
                </svg>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">98.2%</div>
              <div className="text-gray-500 text-sm mb-2">Project Success Rate</div>
              <div className="text-green-500 text-xs flex items-center gap-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 15l-6-6-6 6"/>
                </svg>
                12% <span className="text-gray-600">vs last month</span>
              </div>
            </div>

            {/* Tasks Completed */}
            <div className="bg-[#12121a] rounded-2xl p-5 border border-white/5">
              <div className="w-12 h-12 bg-[#1a1a24] rounded-xl flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">2.4M</div>
              <div className="text-gray-500 text-sm mb-2">Tasks Completed</div>
              <div className="text-green-500 text-xs flex items-center gap-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 15l-6-6-6 6"/>
                </svg>
                32% <span className="text-gray-600">vs last month</span>
              </div>
            </div>

            {/* Hours Saved */}
            <div className="bg-[#12121a] rounded-2xl p-5 border border-white/5">
              <div className="w-12 h-12 bg-[#1a1a24] rounded-xl flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">34.6K</div>
              <div className="text-gray-500 text-sm mb-2">Hours Saved</div>
              <div className="text-green-500 text-xs flex items-center gap-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 15l-6-6-6 6"/>
                </svg>
                18% <span className="text-gray-600">vs last month</span>
              </div>
            </div>

            {/* Customer Value Delivered */}
            <div className="bg-[#12121a] rounded-2xl p-5 border border-white/5 col-span-2 md:col-span-1">
              <div className="w-12 h-12 bg-[#1a1a24] rounded-xl flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"/>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">$18.7M</div>
              <div className="text-gray-500 text-sm mb-2">Customer Value Delivered</div>
              <div className="text-green-500 text-xs flex items-center gap-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 15l-6-6-6 6"/>
                </svg>
                26% <span className="text-gray-600">vs last month</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Dashboard */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Features */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
                Everything your team<br />needs to ship faster
              </h2>
              <p className="text-gray-400 text-lg mb-10">
                Powerful features designed to streamline<br />planning, execution, and delivery.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Smart Planning */}
                <div className="bg-[#12121a] rounded-xl p-5 border border-white/5 hover:border-white/10 transition-colors group">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold mb-2 flex items-center justify-between">
                    Smart Planning
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-600 group-hover:text-white transition-colors">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </h3>
                  <p className="text-gray-500 text-sm">Break down work, set estimates, and build timelines in minutes.</p>
                </div>

                {/* Team Alignment */}
                <div className="bg-[#12121a] rounded-xl p-5 border border-white/5 hover:border-white/10 transition-colors group">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold mb-2 flex items-center justify-between">
                    Team Alignment
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-600 group-hover:text-white transition-colors">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </h3>
                  <p className="text-gray-500 text-sm">Keep everyone in sync with real-time updates and shared context.</p>
                </div>

                {/* Advanced Reporting */}
                <div className="bg-[#12121a] rounded-xl p-5 border border-white/5 hover:border-white/10 transition-colors group">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="20" x2="18" y2="10"/>
                      <line x1="12" y1="20" x2="12" y2="4"/>
                      <line x1="6" y1="20" x2="6" y2="14"/>
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold mb-2 flex items-center justify-between">
                    Advanced Reporting
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-600 group-hover:text-white transition-colors">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </h3>
                  <p className="text-gray-500 text-sm">Track progress with intuitive dashboards and custom reports.</p>
                </div>

                {/* Seamless Integrations */}
                <div className="bg-[#12121a] rounded-xl p-5 border border-white/5 hover:border-white/10 transition-colors group">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="6" width="20" height="12" rx="2"/>
                      <path d="M12 12h.01"/>
                      <path d="M17 12h.01"/>
                      <path d="M7 12h.01"/>
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold mb-2 flex items-center justify-between">
                    Seamless Integrations
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-600 group-hover:text-white transition-colors">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </h3>
                  <p className="text-gray-500 text-sm">Connect your favorite tools and automate workflows.</p>
                </div>
              </div>

              <a href="#features" className="inline-flex items-center gap-2 text-blue-500 text-sm mt-6 hover:text-blue-400 transition-colors">
                Explore all features
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>

            {/* Right Column - Dashboard Mockup */}
            <div className="bg-[#0d0d12] rounded-2xl border border-white/10 overflow-hidden">
              <div className="flex">
                {/* Sidebar */}
                <div className="w-56 bg-[#0d0d12] border-r border-white/5 p-4 hidden md:block">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-6 h-6 relative">
                      <svg viewBox="0 0 36 36" fill="none" className="w-full h-full">
                        <path d="M18 2L32 10V26L18 34L4 26V10L18 2Z" stroke="#3b82f6" strokeWidth="2" fill="none"/>
                        <circle cx="18" cy="18" r="4" fill="#3b82f6"/>
                      </svg>
                    </div>
                    <span className="text-white text-xs font-medium">Project 1788534251307</span>
                  </div>

                  <div className="bg-[#1a1a24] rounded-lg px-3 py-2 mb-4 flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2">
                      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                    </svg>
                    <span className="text-gray-500 text-xs">Search</span>
                    <span className="text-gray-600 text-xs ml-auto">⌘K</span>
                  </div>

                  <nav className="space-y-1">
                    <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-white rounded-lg text-xs">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                      Inbox
                      <span className="bg-blue-600 text-white text-[10px] px-1.5 py-0.5 rounded-full ml-auto">12</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-white rounded-lg text-xs">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/></svg>
                      My Work
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-2 text-white bg-white/5 rounded-lg text-xs">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
                      Projects
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-white rounded-lg text-xs">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                      Teams
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-white rounded-lg text-xs">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
                      Reports
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-white rounded-lg text-xs">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
                      Goals
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-white rounded-lg text-xs">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                      Settings
                    </a>
                  </nav>

                  <div className="mt-6 pt-4 border-t border-white/5">
                    <div className="text-gray-600 text-[10px] uppercase tracking-wider mb-2 px-3">Favorites</div>
                    <a href="#" className="flex items-center gap-2 px-3 py-1.5 text-gray-400 text-xs">
                      <span className="text-yellow-500">★</span> Website Redesign
                    </a>
                    <a href="#" className="flex items-center gap-2 px-3 py-1.5 text-gray-400 text-xs">
                      <span className="text-yellow-500">★</span> Mobile App
                    </a>
                    <a href="#" className="flex items-center gap-2 px-3 py-1.5 text-gray-400 text-xs">
                      <span className="text-yellow-500">★</span> Q2 Marketing Campaign
                    </a>
                  </div>

                  <a href="#" className="flex items-center gap-2 px-3 py-2 text-gray-500 text-xs mt-2">
                    View all
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 18l6-6-6-6"/>
                    </svg>
                  </a>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-5">
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="text-white font-semibold">Projects</h3>
                    <div className="flex items-center gap-2">
                      <button className="text-gray-500 text-xs flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-white/5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
                        </svg>
                        Filter
                      </button>
                      <button className="bg-blue-600 text-white text-xs px-3 py-1.5 rounded-lg font-medium">
                        New Project
                      </button>
                    </div>
                  </div>

                  {/* Tabs */}
                  <div className="flex gap-4 mb-5 border-b border-white/5">
                    <button className="text-blue-500 text-xs pb-2 border-b-2 border-blue-500">All Projects</button>
                    <button className="text-gray-500 text-xs pb-2">Active</button>
                    <button className="text-gray-500 text-xs pb-2">Planning</button>
                    <button className="text-gray-500 text-xs pb-2">Completed</button>
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-4 gap-3 mb-5">
                    <div className="bg-[#1a1a24] rounded-lg p-3">
                      <div className="text-gray-500 text-[10px] mb-1">Total Projects</div>
                      <div className="text-white text-xl font-bold">42</div>
                      <div className="text-green-500 text-[10px]">↑ 8% vs last month</div>
                    </div>
                    <div className="bg-[#1a1a24] rounded-lg p-3">
                      <div className="text-gray-500 text-[10px] mb-1">In Progress</div>
                      <div className="text-white text-xl font-bold">18</div>
                      <div className="text-green-500 text-[10px]">↑ 12% vs last month</div>
                    </div>
                    <div className="bg-[#1a1a24] rounded-lg p-3">
                      <div className="text-gray-500 text-[10px] mb-1">Completed</div>
                      <div className="text-white text-xl font-bold">24</div>
                      <div className="text-green-500 text-[10px]">↑ 15% vs last month</div>
                    </div>
                    <div className="bg-[#1a1a24] rounded-lg p-3">
                      <div className="text-gray-500 text-[10px] mb-1">On Track</div>
                      <div className="text-white text-xl font-bold">94%</div>
                      <div className="text-green-500 text-[10px]">↑ 5% vs last month</div>
                    </div>
                  </div>

                  {/* Projects Table */}
                  <div className="bg-[#0a0a0f] rounded-lg overflow-hidden">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="border-b border-white/5 text-left">
                          <th className="px-3 py-2 text-gray-500 font-medium">Project</th>
                          <th className="px-3 py-2 text-gray-500 font-medium">Status</th>
                          <th className="px-3 py-2 text-gray-500 font-medium">Progress</th>
                          <th className="px-3 py-2 text-gray-500 font-medium">Due Date</th>
                          <th className="px-3 py-2 text-gray-500 font-medium">Owner</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-white/5">
                          <td className="px-3 py-2.5 text-white">Website Redesign</td>
                          <td className="px-3 py-2.5"><span className="bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded text-[10px]">In Progress</span></td>
                          <td className="px-3 py-2.5">
                            <div className="flex items-center gap-2">
                              <div className="w-16 h-1.5 bg-white/10 rounded-full overflow-hidden">
                                <div className="w-3/4 h-full bg-blue-500 rounded-full"/>
                              </div>
                              <span className="text-gray-500">75%</span>
                            </div>
                          </td>
                          <td className="px-3 py-2.5 text-gray-400">May 24, 2024</td>
                          <td className="px-3 py-2.5">
                            <div className="flex -space-x-1">
                              <div className="w-5 h-5 rounded-full bg-blue-500 border border-[#0a0a0f]"/>
                              <div className="w-5 h-5 rounded-full bg-pink-500 border border-[#0a0a0f]"/>
                              <div className="w-5 h-5 rounded-full bg-yellow-500 border border-[#0a0a0f]"/>
                              <div className="w-5 h-5 rounded-full bg-[#1a1a24] border border-[#0a0a0f] flex items-center justify-center text-[8px] text-gray-400">+3</div>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="px-3 py-2.5 text-white">Mobile App Development</td>
                          <td className="px-3 py-2.5"><span className="bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded text-[10px]">In Progress</span></td>
                          <td className="px-3 py-2.5">
                            <div className="flex items-center gap-2">
                              <div className="w-16 h-1.5 bg-white/10 rounded-full overflow-hidden">
                                <div className="w-3/5 h-full bg-blue-500 rounded-full"/>
                              </div>
                              <span className="text-gray-500">60%</span>
                            </div>
                          </td>
                          <td className="px-3 py-2.5 text-gray-400">Jun 15, 2024</td>
                          <td className="px-3 py-2.5">
                            <div className="flex -space-x-1">
                              <div className="w-5 h-5 rounded-full bg-green-500 border border-[#0a0a0f]"/>
                              <div className="w-5 h-5 rounded-full bg-purple-500 border border-[#0a0a0f]"/>
                              <div className="w-5 h-5 rounded-full bg-orange-500 border border-[#0a0a0f]"/>
                              <div className="w-5 h-5 rounded-full bg-cyan-500 border border-[#0a0a0f]"/>
                              <div className="w-5 h-5 rounded-full bg-[#1a1a24] border border-[#0a0a0f] flex items-center justify-center text-[8px] text-gray-400">+5</div>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="px-3 py-2.5 text-white">Q2 Marketing Campaign</td>
                          <td className="px-3 py-2.5"><span className="bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded text-[10px]">Planning</span></td>
                          <td className="px-3 py-2.5">
                            <div className="flex items-center gap-2">
                              <div className="w-16 h-1.5 bg-white/10 rounded-full overflow-hidden">
                                <div className="w-1/4 h-full bg-yellow-500 rounded-full"/>
                              </div>
                              <span className="text-gray-500">25%</span>
                            </div>
                          </td>
                          <td className="px-3 py-2.5 text-gray-400">May 30, 2024</td>
                          <td className="px-3 py-2.5">
                            <div className="flex -space-x-1">
                              <div className="w-5 h-5 rounded-full bg-red-500 border border-[#0a0a0f]"/>
                              <div className="w-5 h-5 rounded-full bg-indigo-500 border border-[#0a0a0f]"/>
                              <div className="w-5 h-5 rounded-full bg-[#1a1a24] border border-[#0a0a0f] flex items-center justify-center text-[8px] text-gray-400">+2</div>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="px-3 py-2.5 text-white">API Integration</td>
                          <td className="px-3 py-2.5"><span className="bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded text-[10px]">In Progress</span></td>
                          <td className="px-3 py-2.5">
                            <div className="flex items-center gap-2">
                              <div className="w-16 h-1.5 bg-white/10 rounded-full overflow-hidden">
                                <div className="w-4/5 h-full bg-blue-500 rounded-full"/>
                              </div>
                              <span className="text-gray-500">80%</span>
                            </div>
                          </td>
                          <td className="px-3 py-2.5 text-gray-400">May 18, 2024</td>
                          <td className="px-3 py-2.5">
                            <div className="flex -space-x-1">
                              <div className="w-5 h-5 rounded-full bg-teal-500 border border-[#0a0a0f]"/>
                              <div className="w-5 h-5 rounded-full bg-amber-500 border border-[#0a0a0f]"/>
                              <div className="w-5 h-5 rounded-full bg-rose-500 border border-[#0a0a0f]"/>
                              <div className="w-5 h-5 rounded-full bg-[#1a1a24] border border-[#0a0a0f] flex items-center justify-center text-[8px] text-gray-400">+4</div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2.5 text-white">Customer Portal</td>
                          <td className="px-3 py-2.5"><span className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded text-[10px]">Completed</span></td>
                          <td className="px-3 py-2.5">
                            <div className="flex items-center gap-2">
                              <div className="w-16 h-1.5 bg-white/10 rounded-full overflow-hidden">
                                <div className="w-full h-full bg-green-500 rounded-full"/>
                              </div>
                              <span className="text-gray-500">100%</span>
                            </div>
                          </td>
                          <td className="px-3 py-2.5 text-gray-400">Apr 28, 2024</td>
                          <td className="px-3 py-2.5">
                            <div className="flex -space-x-1">
                              <div className="w-5 h-5 rounded-full bg-violet-500 border border-[#0a0a0f]"/>
                              <div className="w-5 h-5 rounded-full bg-sky-500 border border-[#0a0a0f]"/>
                              <div className="w-5 h-5 rounded-full bg-lime-500 border border-[#0a0a0f]"/>
                              <div className="w-5 h-5 rounded-full bg-fuchsia-500 border border-[#0a0a0f]"/>
                              <div className="w-5 h-5 rounded-full bg-[#1a1a24] border border-[#0a0a0f] flex items-center justify-center text-[8px] text-gray-400">+6</div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 relative">
              <svg viewBox="0 0 36 36" fill="none" className="w-full h-full">
                <path d="M18 2L32 10V26L18 34L4 26V10L18 2Z" stroke="#3b82f6" strokeWidth="1.5" fill="none"/>
                <circle cx="18" cy="18" r="3" fill="#3b82f6"/>
              </svg>
            </div>
            <span className="text-white text-sm font-medium">Project 1788534251307</span>
          </div>
          <p className="text-gray-600 text-sm">© 2024 Project 1788534251307. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
