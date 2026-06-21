'use client'

import { BookOpen, Award, ExternalLink } from 'lucide-react'
import { Card } from '@/components/ui/card'

export default function Education() {
  const certifications = [
    {
      name: "Project Management Professional Certificate",
      issuer: "Google",
      date: "Completed",
      details: "Project planning, scheduling, risk management, stakeholder communication, Agile methodologies, and project execution",
      link: "https://www.coursera.org/account/accomplishments/specialization/U8M1GYMTIJLC"
    },
    {
      name: "PMI® Essentials: M.O.R.E. Maximizing Project Success",
      issuer: "PMI®",
      date: "June 2026",
      details: "Project management fundamentals, value delivery, stakeholder engagement, and project success principles",
      link: "https://www.credly.com/badges/c35e813f-c088-46e3-a33b-ce7ea5af2cba/linked_in?t=tgpwpv"
    },
    {
      name: "Lean Six Sigma Yellow Belt",
      issuer: "MST Connect",
      date: "May 2026",
      details: "Process improvement methodologies, DMAIC framework, waste reduction, and quality management principles",
      link: null
    },
    {
      name: "Certified Associate in Project Management (CAPM)® Exam Prep",
      issuer: "Packt",
      date: "April 2026",
      details: "CAPM exam preparation covering predictive, Agile, and hybrid project management approaches based on PMI standards",
      link: "https://www.coursera.org/account/accomplishments/specialization/CYIM3PBD238G"
    },
    {
      name: "Microsoft Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      date: "Currently Studying",
      details: "Cloud computing fundamentals, Azure services, Azure pricing and support, and cloud security concepts",
      link: null
    },
    {
      name: "The Complete Web Development Bootcamp",
      issuer: "Udemy",
      date: "Certified",
      details: "Full-stack web development — HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, and GitHub",
      link: "https://www.udemy.com/certificate/UC-25658ed8-63c3-49ef-b93a-c183c4afbbe3/"
    },
    {
      name: "Networking Basics",
      issuer: "Cisco Networking Academy",
      date: "Certified",
      details: "Fundamentals of computer networking, IP addressing, and connectivity",
      link: "https://www.credly.com/badges/fb359c41-9936-4d7e-a26f-6172d962b0e4"
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Information Technology",
      school: "Bulacan State University – Bustos Campus",
      period: "2022 - 2026",
      details: "Specialization in Web and Mobile Development. Dean Lister and Class President. Capstone Project: AR-Based Campus Navigation System using Unity and Firebase"
    }
  ]

  return (
    <section>
      <div className="flex items-center gap-2 mb-4">
        <Award size={20} />
        <h2 className="text-2xl font-bold">Certifications</h2>
      </div>

      <div className="space-y-6 mb-8">
        {certifications.map((cert, idx) => (
          <Card key={idx} className="p-6 bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 group">
            {cert.link ? (
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="block">
                <div className="flex items-center gap-1">
                  <h3 className="font-bold text-foreground text-sm hover:text-primary transition-colors cursor-pointer">{cert.name}</h3>
                  <ExternalLink size={12} className="text-muted-foreground hover:text-primary transition-colors" />
                </div>
              </a>
            ) : (
              <h3 className="font-bold text-foreground text-sm">{cert.name}</h3>
            )}
            <p className="text-xs text-muted-foreground mt-0.5">{cert.issuer}</p>
            <div className="flex justify-between items-center mt-1.5">
              <p className="text-xs text-foreground font-medium">{cert.details}</p>
              <span className="text-xs text-muted-foreground">{cert.date}</span>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex items-center gap-2 mb-4">
        <BookOpen size={20} />
        <h2 className="text-2xl font-bold">Education</h2>
      </div>

      <div className="space-y-6">
        {education.map((edu, idx) => (
          <Card key={idx} className="p-6 bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 group">
            <h3 className="font-bold text-foreground text-sm">{edu.degree}</h3>
            <p className="text-xs text-muted-foreground mt-1">{edu.school}</p>
            <div className="flex justify-between items-center mt-2">
              <p className="text-xs text-foreground font-medium">{edu.details}</p>
              <span className="text-xs text-muted-foreground">{edu.period}</span>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
