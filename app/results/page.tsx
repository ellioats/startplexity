import { Suspense } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import StartupIdeas from "@/components/startup-ideas"

export default function ResultsPage({
  searchParams,
}: {
  searchParams: { interests: string; skills: string; problemArea: string }
}) {
  return (
    <div className="container py-10">
      <div className="mb-8 flex items-center">
        <Link href="/">
          <Button variant="outline" size="sm" className="gap-1">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
        </Link>
        <h1 className="ml-4 text-2xl font-bold">Your Startup Ideas</h1>
      </div>

      <div className="mb-6 rounded-lg bg-muted p-4">
        <h2 className="mb-2 font-medium">Based on your input:</h2>
        <p>
          <strong>Interests:</strong> {searchParams.interests}
        </p>
        <p>
          <strong>Skills:</strong> {searchParams.skills}
        </p>
        <p>
          <strong>Problem Area:</strong> {searchParams.problemArea}
        </p>
      </div>

      <Suspense fallback={<IdeasSkeleton />}>
        <StartupIdeas
          interests={searchParams.interests}
          skills={searchParams.skills}
          problemArea={searchParams.problemArea}
        />
      </Suspense>
    </div>
  )
}

function IdeasSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {[1, 2, 3, 4].map((i) => (
        <Card key={i}>
          <CardHeader>
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </CardHeader>
          <CardContent>
            <Skeleton className="mb-4 h-24" />
          </CardContent>
          <CardFooter>
            <Skeleton className="h-10 w-full" />
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
