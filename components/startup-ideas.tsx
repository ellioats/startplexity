"use client"

import { useState } from "react"
import Link from "next/link"
import { Bookmark, ExternalLink, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"

// This would normally come from an API call
const generateIdeas = (interests: string, skills: string, problemArea: string) => {
  // For demo purposes, we'll generate some static ideas based on the input
  const ideas = [
    {
      id: "idea-1",
      name: "HealthTrack AI",
      description:
        "An AI-powered health monitoring platform that uses smartphone sensors to track vital signs and provide personalized health recommendations.",
      targetAudience: "Health-conscious individuals and those managing chronic conditions",
      valueProposition: "Continuous health monitoring without expensive equipment",
    },
    {
      id: "idea-2",
      name: "EduMatch",
      description:
        "A platform connecting students with tutors and mentors based on learning style compatibility and specific subject needs.",
      targetAudience: "K-12 and college students struggling with specific subjects",
      valueProposition: "Personalized education support matched to individual learning styles",
    },
    {
      id: "idea-3",
      name: "GreenCommute",
      description:
        "An app that incentivizes and gamifies eco-friendly commuting options, helping users reduce their carbon footprint while saving money.",
      targetAudience: "Urban professionals and environmentally conscious commuters",
      valueProposition: "Make sustainable transportation choices rewarding and fun",
    },
    {
      id: "idea-4",
      name: "RemoteTeamOS",
      description:
        "An all-in-one platform for remote teams that combines project management, communication, and virtual team building activities.",
      targetAudience: "Distributed teams and remote-first companies",
      valueProposition: "Foster collaboration and company culture in remote environments",
    },
  ]

  return ideas
}

export default function StartupIdeas({
  interests,
  skills,
  problemArea,
}: {
  interests: string
  skills: string
  problemArea: string
}) {
  const ideas = generateIdeas(interests, skills, problemArea)
  const [savedIdeas, setSavedIdeas] = useState<string[]>([])

  const handleSave = (ideaId: string) => {
    if (savedIdeas.includes(ideaId)) {
      setSavedIdeas(savedIdeas.filter((id) => id !== ideaId))
      toast({
        title: "Idea removed from saved list",
        description: "You can always save it again later.",
      })
    } else {
      setSavedIdeas([...savedIdeas, ideaId])
      toast({
        title: "Idea saved!",
        description: "View all your saved ideas in your dashboard.",
      })
    }
  }

  const handleShare = (idea: any) => {
    // In a real app, this would generate a shareable link
    navigator.clipboard.writeText(`Check out this startup idea: ${idea.name} - ${idea.description}`)
    toast({
      title: "Link copied to clipboard!",
      description: "You can now share this idea with others.",
    })
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {ideas.map((idea) => (
        <Card key={idea.id}>
          <CardHeader>
            <CardTitle>{idea.name}</CardTitle>
            <CardDescription>Target: {idea.targetAudience}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{idea.description}</p>
            <p className="text-sm font-medium">Value Proposition:</p>
            <p className="text-sm text-muted-foreground">{idea.valueProposition}</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleSave(idea.id)}
              className={savedIdeas.includes(idea.id) ? "bg-primary/10" : ""}
            >
              <Bookmark className={`mr-2 h-4 w-4 ${savedIdeas.includes(idea.id) ? "fill-primary" : ""}`} />
              {savedIdeas.includes(idea.id) ? "Saved" : "Save"}
            </Button>
            <Button variant="outline" size="sm" onClick={() => handleShare(idea)}>
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
            <Link href={`/idea/${idea.id}`}>
              <Button variant="default" size="sm">
                <ExternalLink className="mr-2 h-4 w-4" />
                Details
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
