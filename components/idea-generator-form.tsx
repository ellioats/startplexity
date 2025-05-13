"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function IdeaGeneratorForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    interests: "",
    skills: "",
    problemArea: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // In a real app, we would send this data to our API
      // For demo purposes, we'll just redirect to the results page with query params
      const queryParams = new URLSearchParams({
        interests: formData.interests,
        skills: formData.skills,
        problemArea: formData.problemArea,
      }).toString()

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      router.push(`/results?${queryParams}`)
    } catch (error) {
      console.error("Error generating ideas:", error)
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="interests">Your Interests</Label>
            <Input
              id="interests"
              name="interests"
              placeholder="e.g., technology, health, education"
              value={formData.interests}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="skills">Your Skills</Label>
            <Input
              id="skills"
              name="skills"
              placeholder="e.g., programming, marketing, design"
              value={formData.skills}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="problemArea">Problem Area</Label>
            <Textarea
              id="problemArea"
              name="problemArea"
              placeholder="Describe a problem you'd like to solve"
              value={formData.problemArea}
              onChange={handleChange}
              required
              className="min-h-[100px]"
            />
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating Ideas...
              </>
            ) : (
              "Generate Startup Ideas"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
