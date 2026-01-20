'use client'

import { Code2 } from 'lucide-react'
import { Card } from '@/components/ui/card'

export default function TechStack() {
  const techStacks = [
    {
      category: "💻 Programming & Web Development",
      tech: [
        ["HTML", "CSS"],
        ["CSS", "JavaScript"],
        ["JavaScript", "Java"],
        ["Java", "C++"],
        ["C++", "C#"],
        ["C#", "PHP"],
        ["PHP", "MySQL"],
        ["MySQL", "Firebase"],
        ["Firebase", "Android Studio"]
      ]
    },
    {
      category: "🎨 Design & Multimedia",
      tech: [
        ["Photoshop", "Illustrator"],
        ["Illustrator", "Premiere"],
        ["Premiere", "Canva"],
        ["Canva", "Figma"]
      ]
    },
    {
      category: "🗂️ Productivity Tools",
      tech: [
        ["Word", "PowerPoint"]
      ]
    }
  ]

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg">
            <Code2 size={20} className="text-primary" />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Tech Stack</h2>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {techStacks.map((stack, idx) => (
          <Card key={idx} className="p-6 interactive-card bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 rounded-xl hover:shadow-xl hover:shadow-primary/5 group">
            <h3 className="font-bold text-lg text-foreground mb-4 group-hover:text-primary transition-colors">{stack.category}</h3>
            <div className="space-y-2">
              {stack.tech.map((pair, i) => (
                <div key={i} className="grid grid-cols-2 gap-2">
                  {pair.map((tech, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full text-center transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-primary-foreground cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
