import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardPage() {
  return (
    <div className="container py-10">
      <h1 className="mb-8 text-3xl font-bold">Your Dashboard</h1>

      <Tabs defaultValue="overview">
        <TabsList className="mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="saved">Saved Ideas</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Ideas Generated</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">+3 from last week</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Saved Ideas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5</div>
                <p className="text-xs text-muted-foreground">+2 from last week</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Shared Ideas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">+1 from last week</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your recent interactions with the platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Generated 3 new startup ideas</p>
                      <p className="text-xs text-muted-foreground">2 hours ago</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Saved "HealthTrack AI" to your ideas</p>
                      <p className="text-xs text-muted-foreground">1 day ago</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Shared "EduMatch" with a colleague</p>
                      <p className="text-xs text-muted-foreground">2 days ago</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Viewed competitor analysis for "GreenCommute"</p>
                      <p className="text-xs text-muted-foreground">3 days ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recommended Actions</CardTitle>
                <CardDescription>Next steps to develop your ideas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-3">
                    <h3 className="font-medium">Complete Your Profile</h3>
                    <p className="text-sm text-muted-foreground">
                      Add more details about your skills and interests to get better recommendations.
                    </p>
                  </div>

                  <div className="rounded-lg border p-3">
                    <h3 className="font-medium">Analyze Market Potential</h3>
                    <p className="text-sm text-muted-foreground">
                      Review the competitor analysis for your saved ideas to identify opportunities.
                    </p>
                  </div>

                  <div className="rounded-lg border p-3">
                    <h3 className="font-medium">Create a Business Plan</h3>
                    <p className="text-sm text-muted-foreground">
                      Use our business plan generator to develop a detailed plan for your favorite idea.
                    </p>
                  </div>

                  <div className="rounded-lg border p-3">
                    <h3 className="font-medium">Share for Feedback</h3>
                    <p className="text-sm text-muted-foreground">
                      Share your top ideas with colleagues or mentors to get valuable feedback.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="saved">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>HealthTrack AI</CardTitle>
                <CardDescription>Saved 1 day ago</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  An AI-powered health monitoring platform that uses smartphone sensors to track vital signs and provide
                  personalized health recommendations.
                </p>
                <div className="flex gap-2">
                  <div className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">Health</div>
                  <div className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">AI</div>
                  <div className="rounded-full bg-purple-100 px-2 py-1 text-xs font-medium text-purple-800">Mobile</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>EduMatch</CardTitle>
                <CardDescription>Saved 3 days ago</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  A platform connecting students with tutors and mentors based on learning style compatibility and
                  specific subject needs.
                </p>
                <div className="flex gap-2">
                  <div className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
                    Education
                  </div>
                  <div className="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800">Marketplace</div>
                  <div className="rounded-full bg-indigo-100 px-2 py-1 text-xs font-medium text-indigo-800">SaaS</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>GreenCommute</CardTitle>
                <CardDescription>Saved 1 week ago</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  An app that incentivizes and gamifies eco-friendly commuting options, helping users reduce their
                  carbon footprint while saving money.
                </p>
                <div className="flex gap-2">
                  <div className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                    Sustainability
                  </div>
                  <div className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">Mobile</div>
                  <div className="rounded-full bg-orange-100 px-2 py-1 text-xs font-medium text-orange-800">
                    Gamification
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>RemoteTeamOS</CardTitle>
                <CardDescription>Saved 2 weeks ago</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  An all-in-one platform for remote teams that combines project management, communication, and virtual
                  team building activities.
                </p>
                <div className="flex gap-2">
                  <div className="rounded-full bg-purple-100 px-2 py-1 text-xs font-medium text-purple-800">
                    Remote Work
                  </div>
                  <div className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
                    Productivity
                  </div>
                  <div className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800">SaaS</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Idea Generation Trends</CardTitle>
                <CardDescription>Your idea generation activity over time</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <div className="flex h-full items-center justify-center">
                  <p className="text-muted-foreground">Analytics visualization would appear here</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Industry Distribution</CardTitle>
                <CardDescription>Categories of your generated ideas</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <div className="flex h-full items-center justify-center">
                  <p className="text-muted-foreground">Analytics visualization would appear here</p>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Idea Performance Metrics</CardTitle>
                <CardDescription>Comparative analysis of your top ideas</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <div className="flex h-full items-center justify-center">
                  <p className="text-muted-foreground">Analytics visualization would appear here</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
