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
        I am a BS Information Technology graduate with hands-on experience in project coordination, supporting the successful delivery of web-based projects from planning to deployment. My experience includes managing project timelines, scope, deliverables, and Work Breakdown Structures (WBS), while ensuring alignment between project teams, stakeholders, and clients.
        </p>

<p>
I have coordinated cross-functional teams, facilitated daily stand-up meetings, supported project and UAT kick-off sessions, and maintained essential project documentation, including Business Requirements Documents (BRDs), Minutes of Meeting (MoM), sign-offs, and change requests. I have also been involved in requirements gathering, risk monitoring, project tracking, and quality assurance activities to help ensure projects are delivered on time and meet stakeholder expectations.</p>

<p>
With proficiency in Monday.com, Microsoft Excel, and Google Workspace, I bring strong organizational, communication, and stakeholder management skills. My background in Information Technology allows me to effectively bridge technical teams and business stakeholders, ensuring clear communication and efficient project execution.
</p>
<p>
I am passionate about project management and enjoy creating structure, driving collaboration, and helping teams achieve project goals. I am currently pursuing Project Coordinator and entry-level Project Management opportunities where I can contribute my experience, continue developing my leadership capabilities, and support the successful delivery of impactful projects.
</p>
      </div>
    </section>
  )
}
