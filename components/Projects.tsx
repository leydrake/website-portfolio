'use client'

import { FolderOpen, ExternalLink, X } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import Image from 'next/image'
import { useState } from 'react'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

    const projects = [
      {
        title: "AR Campus Navigation System (Capstone Project)",
        description: "Led the planning and execution of an AR-based campus navigation project, coordinating project activities from requirements gathering to deployment. Managed project schedules, deliverables, and team collaboration while ensuring alignment with project objectives. Facilitated project documentation, stakeholder communication, testing activities, and progress tracking to support the successful delivery of the solution.",
        image: "/project-images/navigatemycampuspng.png",
        link: "https://navigatemycampus.capstone-two.com/"
        },
        {
        title: "Bigbrew Online Coffee Management System (Baliuag, Bulacan)",
        description: "Coordinated the development and implementation of an online coffee management system designed to streamline ordering, inventory management, and business operations. Managed project requirements, monitored progress, facilitated team collaboration, and supported testing and deployment activities to ensure the system met business needs and project goals.",
        image: "/project-images/bigbrew.jpg",
        link: "https://bigbrewtarcan.capstone-two.com/"
        },
      {
        title: "GC3 CMS Website",
        description: "Coordinated project activities for the Global Capability Center Council Philippines (GC3) CMS Website, supporting the project lifecycle from planning through deployment. Managed project tracking, monitored deliverables and team progress, facilitated stakeholder communication, maintained key project documentation including BRDs, WBS, and status reports, and assisted with QA, issue management, and deployment efforts. Collaborated closely with developers, designers, QA specialists, and stakeholders to ensure alignment and successful project execution.",
        image: "/project-images/gc3-cms.png",
        link: ""
      },
    ]

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg">
            <FolderOpen size={20} className="text-primary" />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Recent Projects</h2>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <Card key={idx} className="p-6 flex flex-col interactive-card bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 rounded-xl hover:shadow-xl hover:shadow-primary/5 group">
            <h3 className="font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
            <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed">{project.description}</p>
            <Button 
              variant="ghost" 
              size="sm"
              className="justify-start gap-2 p-0 hover:bg-transparent mt-2"
              onClick={() => setSelectedProject(idx)}
            >
              View Project
              <ExternalLink size={14} />
            </Button>
          </Card>
        ))}
      </div>

      {/* Project Image Modal */}
      <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="text-2xl font-bold">
              {selectedProject !== null && projects[selectedProject].title}
            </DialogTitle>
          </DialogHeader>
          {selectedProject !== null && (
            <div className="p-6 overflow-auto">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-muted">
                <Image
                  src={projects[selectedProject].image}
                  alt={projects[selectedProject].title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <p className="mt-4 text-foreground">
                {projects[selectedProject].description}
              </p>
              <div className="mt-6 flex justify-end">
                <Button
                  variant="default"
                  size="sm"
                  className="gap-2"
                  onClick={() => window.open(projects[selectedProject].link, '_blank')}
                >
                  <ExternalLink size={16} />
                  Visit Website
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
