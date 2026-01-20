'use client'

import { User } from 'lucide-react'

export default function About() {
  return (
    <section className="fade-in">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg">
          <User size={20} className="text-primary" />
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">About</h2>
      </div>
      
      <div className="space-y-4 text-foreground leading-relaxed bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
        <p>
        I’m a BS Information Technology student specializing in Web and Mobile Development, with a strong interest in creating practical, user-focused digital solutions. I value clean interfaces, structured thinking, and building systems that address real-world needs.
</p>

<p>
Currently, I’m gaining industry exposure as a Project Management Intern at Lightweight Solutions, where I collaborate within a professional development environment and contribute to the successful delivery of web-based projects.
</p>

<p>
My academic work includes developing an AR-based campus navigation system as my capstone project, which strengthened my appreciation for emerging technologies and thoughtful system design. I enjoy working at the intersection of technical development and project coordination, and I’m continuously growing my skills to build meaningful and well-designed solutions.
</p>
      </div>
    </section>
  )
}
