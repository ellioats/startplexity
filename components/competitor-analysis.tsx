import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

// Mock data - in a real app, this would come from an API or database
const getCompetitors = (ideaId: string) => {
  const competitors = {
    "idea-1": [
      {
        name: "HealthMonitor Pro",
        description: "Established health tracking platform requiring dedicated hardware",
        strengths: ["Accurate measurements", "FDA approved", "Strong brand recognition"],
        weaknesses: ["Expensive hardware", "Limited accessibility", "Subscription required"],
        marketShare: 35,
        differentiationScore: 65,
      },
      {
        name: "VitalTrack",
        description: "Mobile app for basic health tracking with manual input",
        strengths: ["Large user base", "Simple interface", "Free tier available"],
        weaknesses: ["Limited automation", "Basic analysis only", "No integration with healthcare providers"],
        marketShare: 25,
        differentiationScore: 40,
      },
      {
        name: "MedSense",
        description: "AI-powered health analytics platform for healthcare providers",
        strengths: ["Advanced analytics", "Medical-grade insights", "Provider network"],
        weaknesses: ["Not consumer-focused", "Requires professional interpretation", "High cost"],
        marketShare: 15,
        differentiationScore: 70,
      },
    ],
    "idea-2": [
      {
        name: "TutorMatch",
        description: "Online platform connecting students with tutors",
        strengths: ["Large tutor database", "Established brand", "Affordable rates"],
        weaknesses: ["No learning style matching", "Inconsistent quality", "Limited subjects"],
        marketShare: 40,
        differentiationScore: 50,
      },
      {
        name: "AcademicHelp",
        description: "On-demand homework help and tutoring service",
        strengths: ["24/7 availability", "Quick response time", "Subject specialists"],
        weaknesses: ["No ongoing relationships", "Transaction-based model", "No progress tracking"],
        marketShare: 30,
        differentiationScore: 45,
      },
    ],
    "idea-3": [
      {
        name: "EcoTravel",
        description: "App for tracking carbon footprint of travel",
        strengths: ["Detailed carbon calculations", "Educational content", "Environmental partnerships"],
        weaknesses: ["No incentives", "Limited to travel only", "No social features"],
        marketShare: 20,
        differentiationScore: 55,
      },
      {
        name: "CommuteSmart",
        description: "Corporate commute planning and carpooling platform",
        strengths: ["B2B focus", "Carpooling coordination", "Reporting for companies"],
        weaknesses: ["Not consumer-friendly", "Limited to carpooling", "No gamification"],
        marketShare: 15,
        differentiationScore: 60,
      },
    ],
    "idea-4": [
      {
        name: "TeamFlow",
        description: "Project management platform with communication features",
        strengths: ["Robust project tools", "Integrations ecosystem", "Established user base"],
        weaknesses: ["Not remote-first", "Limited culture features", "Complex interface"],
        marketShare: 45,
        differentiationScore: 40,
      },
      {
        name: "RemoteHQ",
        description: "Virtual office platform for remote teams",
        strengths: ["Virtual office environment", "Presence indicators", "Casual communication"],
        weaknesses: ["Weak project management", "High bandwidth requirements", "Limited asynchronous tools"],
        marketShare: 20,
        differentiationScore: 65,
      },
      {
        name: "WorkTogether",
        description: "Team collaboration and document sharing platform",
        strengths: ["Document collaboration", "Task management", "Clean interface"],
        weaknesses: ["Limited team building", "No culture tools", "Communication silos"],
        marketShare: 25,
        differentiationScore: 35,
      },
    ],
  }

  return competitors[ideaId as keyof typeof competitors] || []
}

export default function CompetitorAnalysis({ ideaId }: { ideaId: string }) {
  const competitors = getCompetitors(ideaId)

  if (competitors.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Competitor Analysis</CardTitle>
          <CardDescription>No competitor data available for this idea.</CardDescription>
        </CardHeader>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Competitor Analysis</CardTitle>
          <CardDescription>Analysis of key competitors in this market space</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {competitors.map((competitor, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">{competitor.name}</h3>
                  <div className="text-sm text-muted-foreground">Market Share: {competitor.marketShare}%</div>
                </div>

                <p className="text-sm text-muted-foreground">{competitor.description}</p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="mb-2 text-sm font-medium">Strengths</h4>
                    <ul className="list-inside list-disc text-sm text-muted-foreground">
                      {competitor.strengths.map((strength, i) => (
                        <li key={i}>{strength}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-2 text-sm font-medium">Weaknesses</h4>
                    <ul className="list-inside list-disc text-sm text-muted-foreground">
                      {competitor.weaknesses.map((weakness, i) => (
                        <li key={i}>{weakness}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-sm">Differentiation Potential</span>
                    <span className="text-sm font-medium">{competitor.differentiationScore}%</span>
                  </div>
                  <Progress value={competitor.differentiationScore} className="h-2" />
                </div>

                {index < competitors.length - 1 && <div className="my-6 border-t border-border" />}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
