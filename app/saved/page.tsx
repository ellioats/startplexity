import Link from "next/link"
import { ArrowLeft, ExternalLink, Star, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function SavedIdeasPage() {
  // Mock data - in a real app, this would come from a database
  const savedIdeas = [
    {
      id: "idea-1",
      name: "HealthTrack AI",
      description:
        "An AI-powered health monitoring platform that uses smartphone sensors to track vital signs and provide personalized health recommendations.",
      targetAudience: "Health-conscious individuals and those managing chronic conditions",
      valueProposition: "Continuous health monitoring without expensive equipment",
      savedDate: "May 11, 2025",
      tags: ["Health", "AI", "Mobile"],
    },
    {
      id: "idea-2",
      name: "EduMatch",
      description:
        "A platform connecting students with tutors and mentors based on learning style compatibility and specific subject needs.",
      targetAudience: "K-12 and college students struggling with specific subjects",
      valueProposition: "Personalized education support matched to individual learning styles",
      savedDate: "May 9, 2025",
      tags: ["Education", "Marketplace", "SaaS"],
    },
    {
      id: "idea-3",
      name: "GreenCommute",
      description:
        "An app that incentivizes and gamifies eco-friendly commuting options, helping users reduce their carbon footprint while saving money.",
      targetAudience: "Urban professionals and environmentally conscious commuters",
      valueProposition: "Make sustainable transportation choices rewarding and fun",
      savedDate: "May 5, 2025",
      tags: ["Sustainability", "Mobile", "Gamification"],
    },
    {
      id: "idea-4",
      name: "RemoteTeamOS",
      description:
        "An all-in-one platform for remote teams that combines project management, communication, and virtual team building activities.",
      targetAudience: "Distributed teams and remote-first companies",
      valueProposition: "Foster collaboration and company culture in remote environments",
      savedDate: "April 28, 2025",
      tags: ["Remote Work", "Productivity", "SaaS"],
    },
  ]

  return (
    <div className="container py-10">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <Button variant="outline" size="sm" className="gap-1">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="ml-4 text-2xl font-bold">Your Saved Ideas</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Star className="mr-2 h-4 w-4" />
            Sort by Favorites
          </Button>
          <Button variant="outline" size="sm">
            Filter by Tag
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {savedIdeas.map((idea) => (
          <Card key={idea.id}>
            <CardHeader>
              <CardTitle>{idea.name}</CardTitle>
              <CardDescription>Saved on {idea.savedDate}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{idea.description}</p>
              <div className="mb-4">
                <p className="text-sm font-medium">Target Audience:</p>
                <p className="text-sm text-muted-foreground">{idea.targetAudience}</p>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium">Value Proposition:</p>
                <p className="text-sm text-muted-foreground">{idea.valueProposition}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {idea.tags.map((tag, index) => {
                  const colors = {
                    Health: "green",
                    AI: "blue",
                    Mobile: "purple",
                    Education: "yellow",
                    Marketplace: "red",
                    SaaS: "indigo",
                    Sustainability: "green",
                    Gamification: "orange",
                    "Remote Work": "purple",
                    Productivity: "blue",
                  }
                  const color = colors[tag as keyof typeof colors] || "gray"

                  return (
                    <div
                      key={index}
                      className={`rounded-full bg-${color}-100 px-2 py-1 text-xs font-medium text-${color}-800`}
                    >
                      {tag}
                    </div>
                  )
                })}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">
                <Trash2 className="mr-2 h-4 w-4" />
                Remove
              </Button>
              <Link href={`/idea/${idea.id}`}>
                <Button variant="default" size="sm">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Details
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
