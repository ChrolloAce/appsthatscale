'use client'

import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0b1a35] to-[#020611] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="mb-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-white font-semibold text-lg tracking-tight">Apps That Scale</span>
            </div>
          </div>
          <p className="text-gray-400 text-sm font-light">
            © 2025 Apps That Scale. Building the future of scalable applications.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 