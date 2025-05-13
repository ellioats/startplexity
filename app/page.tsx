import { Sparkles } from "lucide-react"
import Link from "next/link"
import IdeaGeneratorForm from "@/components/idea-generator-form"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <Sparkles className="h-5 w-5" />
            <span>Startplexity</span>
          </Link>
          <nav className="ml-auto flex gap-4">
            <Link href="/dashboard">
              <Button variant="ghost">Dashboard</Button>
            </Link>
            <Link href="/saved">
              <Button variant="ghost">Saved Ideas</Button>
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
              Generate Your Next <span className="text-primary">Startup Idea</span>
            </h1>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              Enter your interests, skills, or problem areas and let AI generate innovative startup concepts tailored to
              you.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-3xl">
            <IdeaGeneratorForm />
          </div>
        </section>
      </main>
      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Startplexity. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
