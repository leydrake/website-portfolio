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
  I’m a BS Information Technology student specializing in Web and Mobile Development, 
  with a strong interest in building practical, user-focused systems. I work on projects 
  that combine clean UI, structured logic, and real-world problem solving.
</p>

<p>
  I’m currently a Project Management Intern at Lightweight Solutions, where I assist in 
  coordinating website projects, preparing documentation such as Minutes of Meeting (MoM), 
  design sign-offs, and UAT sign-off forms, and tracking progress using tools like Monday.com. 
  I also help with website quality checks and maintenance reporting.
</p>

<p>
  For my capstone project, I developed an AR-based campus navigation system using Unity, 
  AR Foundation, and Firebase. I enjoy working across both technical and organizational 
  aspects of projects, and I’m continuously improving my skills in development, project 
  coordination, and system design.
</p>
      </div>
    </section>
  )
}
