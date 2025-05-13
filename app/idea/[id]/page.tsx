import Link from "next/link"
import { ArrowLeft, Bookmark, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CompetitorAnalysis from "@/components/competitor-analysis"
import BusinessModelCanvas from "@/components/business-model-canvas"
import PerformanceMetrics from "@/components/performance-metrics"

// Mock data - in a real app, this would come from a database or API
const getIdeaById = (id: string) => {
  const ideas = {
    "idea-1": {
      id: "idea-1",
      name: "HealthTrack AI",
      description:
        "An AI-powered health monitoring platform that uses smartphone sensors to track vital signs and provide personalized health recommendations.",
      targetAudience: "Health-conscious individuals and those managing chronic conditions",
      valueProposition: "Continuous health monitoring without expensive equipment",
      longDescription:
        "HealthTrack AI leverages the sensors already present in smartphones and wearables to monitor key health metrics like heart rate, respiratory rate, sleep patterns, and activity levels. Using machine learning algorithms, the platform analyzes this data to identify patterns and potential health concerns, providing users with actionable insights and recommendations. The platform can also connect users with healthcare providers for telehealth consultations when necessary.",
      problemStatement:
        "Traditional health monitoring requires expensive equipment and regular doctor visits, making preventative healthcare inaccessible to many. Additionally, people often lack awareness of subtle changes in their health until problems become serious.",
      solution:
        "HealthTrack AI democratizes health monitoring by using devices people already own, providing continuous monitoring without additional hardware costs. The AI analysis provides early detection of potential health issues and personalized recommendations for improving overall wellness.",
    },
    "idea-2": {
      id: "idea-2",
      name: "EduMatch",
      description:
        "A platform connecting students with tutors and mentors based on learning style compatibility and specific subject needs.",
      targetAudience: "K-12 and college students struggling with specific subjects",
      valueProposition: "Personalized education support matched to individual learning styles",
      longDescription:
        "EduMatch uses a proprietary algorithm to match students with tutors and mentors based on learning style compatibility, subject expertise, and scheduling availability. The platform includes features for video sessions, collaborative document editing, and progress tracking. Tutors undergo a rigorous vetting process to ensure quality, and the platform uses AI to continuously improve matching based on session outcomes.",
      problemStatement:
        "Traditional tutoring services often fail to consider learning style compatibility, resulting in ineffective sessions. Finding the right tutor is time-consuming and often involves trial and error.",
      solution:
        "EduMatch streamlines the process of finding educational support by using data-driven matching to connect students with compatible tutors. The platform's focus on learning style compatibility significantly improves learning outcomes and student satisfaction.",
    },
    "idea-3": {
      id: "idea-3",
      name: "GreenCommute",
      description:
        "An app that incentivizes and gamifies eco-friendly commuting options, helping users reduce their carbon footprint while saving money.",
      targetAudience: "Urban professionals and environmentally conscious commuters",
      valueProposition: "Make sustainable transportation choices rewarding and fun",
      longDescription:
        "GreenCommute tracks users' transportation choices and calculates the environmental impact and cost savings of choosing eco-friendly options. The app gamifies the experience with challenges, achievements, and rewards from partner businesses. Users can compete with friends or colleagues, join community challenges, and track their collective impact. The platform also provides real-time information on public transit, bike-sharing availability, and carpooling opportunities.",
      problemStatement:
        "Despite growing environmental concerns, many people still choose convenience over sustainability for their daily commute. Eco-friendly transportation options often seem less convenient or require more effort.",
      solution:
        "GreenCommute transforms sustainable commuting from a sacrifice into a rewarding experience through gamification and tangible rewards. By making the environmental and financial benefits visible and adding social elements, the app motivates lasting behavior change.",
    },
    "idea-4": {
      id: "idea-4",
      name: "RemoteTeamOS",
      description:
        "An all-in-one platform for remote teams that combines project management, communication, and virtual team building activities.",
      targetAudience: "Distributed teams and remote-first companies",
      valueProposition: "Foster collaboration and company culture in remote environments",
      longDescription:
        "RemoteTeamOS integrates essential tools for remote work including project management, asynchronous communication, document collaboration, and team building activities. The platform includes features specifically designed to address remote work challenges like virtual water cooler spaces, cultural rituals, and team building activities that can be done asynchronously across time zones. It also provides analytics on team collaboration patterns and suggestions for improving remote work effectiveness.",
      problemStatement:
        "Remote teams often struggle with fragmented tools, communication challenges, and difficulty maintaining company culture and team cohesion across distances and time zones.",
      solution:
        "RemoteTeamOS provides a unified platform specifically designed for remote work, with features that not only facilitate productivity but also intentionally foster culture and connection. The platform reduces tool switching fatigue and addresses the unique challenges of distributed teams.",
    },
  }

  return ideas[id as keyof typeof ideas]
}

export default function IdeaDetailPage({ params }: { params: { id: string } }) {
  const idea = getIdeaById(params.id)

  if (!idea) {
    return <div className="container py-10">Idea not found</div>
  }

  return (
    <div className="container py-10">
      <div className="mb-8 flex items-center">
        <Link href="/results">
          <Button variant="outline" size="sm" className="gap-1">
            <ArrowLeft className="h-4 w-4" />
            Back to Results
          </Button>
        </Link>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">{idea.name}</CardTitle>
              <CardDescription className="text-lg">{idea.description}</CardDescription>
              <div className="mt-2 flex gap-2">
                <Button variant="outline" size="sm">
                  <Bookmark className="mr-2 h-4 w-4" />
                  Save
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Target Audience</h3>
                  <p className="text-muted-foreground">{idea.targetAudience}</p>
                </div>
                <div>
                  <h3 className="font-medium">Value Proposition</h3>
                  <p className="text-muted-foreground">{idea.valueProposition}</p>
                </div>
                <div>
                  <h3 className="font-medium">Problem Statement</h3>
                  <p className="text-muted-foreground">{idea.problemStatement}</p>
                </div>
                <div>
                  <h3 className="font-medium">Solution</h3>
                  <p className="text-muted-foreground">{idea.solution}</p>
                </div>
                <div>
                  <h3 className="font-medium">Detailed Description</h3>
                  <p className="text-muted-foreground">{idea.longDescription}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full justify-start">Generate Business Plan</Button>
              <Button className="w-full justify-start">Create Pitch Deck</Button>
              <Button className="w-full justify-start">Find Potential Investors</Button>
              <Button className="w-full justify-start">Estimate Startup Costs</Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Tabs defaultValue="analysis" className="mt-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="analysis">Competitor Analysis</TabsTrigger>
          <TabsTrigger value="metrics">Performance Metrics</TabsTrigger>
          <TabsTrigger value="canvas">Business Model Canvas</TabsTrigger>
        </TabsList>
        <TabsContent value="analysis" className="mt-4">
          <CompetitorAnalysis ideaId={params.id} />
        </TabsContent>
        <TabsContent value="metrics" className="mt-4">
          <PerformanceMetrics ideaId={params.id} />
        </TabsContent>
        <TabsContent value="canvas" className="mt-4">
          <BusinessModelCanvas ideaId={params.id} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
