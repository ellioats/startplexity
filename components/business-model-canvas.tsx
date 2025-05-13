import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Mock data - in a real app, this would come from an API
const getBusinessModel = (ideaId: string) => {
  const models = {
    "idea-1": {
      keyPartners: [
        "Healthcare providers",
        "Health insurance companies",
        "Wearable device manufacturers",
        "Medical research institutions",
      ],
      keyActivities: [
        "AI algorithm development",
        "Data analysis",
        "Mobile app development",
        "Health recommendation generation",
        "Regulatory compliance",
      ],
      keyResources: [
        "AI and machine learning expertise",
        "Health data scientists",
        "Mobile development team",
        "HIPAA-compliant infrastructure",
        "Medical advisors",
      ],
      valuePropositions: [
        "Continuous health monitoring without expensive equipment",
        "Early detection of potential health issues",
        "Personalized health recommendations",
        "Reduced healthcare costs",
        "Improved health outcomes",
      ],
      customerRelationships: [
        "Self-service platform",
        "Automated recommendations",
        "Community forums",
        "Health coach support (premium tier)",
        "Email and in-app support",
      ],
      channels: [
        "Mobile app stores",
        "Website",
        "Healthcare provider partnerships",
        "Insurance company programs",
        "Digital marketing",
      ],
      customerSegments: [
        "Health-conscious individuals",
        "People with chronic conditions",
        "Elderly population",
        "Fitness enthusiasts",
        "Corporate wellness programs",
      ],
      costStructure: [
        "AI research and development",
        "Cloud infrastructure",
        "Mobile app development and maintenance",
        "Marketing and user acquisition",
        "Regulatory compliance",
        "Customer support",
      ],
      revenueStreams: [
        "Freemium subscription model",
        "Premium subscription tiers",
        "Enterprise licensing for healthcare providers",
        "Data insights for research (anonymized)",
        "Corporate wellness programs",
      ],
    },
    "idea-2": {
      keyPartners: [
        "Educational institutions",
        "Professional tutors and educators",
        "Learning assessment providers",
        "Educational content creators",
      ],
      keyActivities: [
        "Tutor vetting and onboarding",
        "Learning style assessment",
        "Matching algorithm development",
        "Platform development and maintenance",
        "Quality assurance",
      ],
      keyResources: [
        "Matching algorithm",
        "Tutor network",
        "Learning style assessment tools",
        "Educational content library",
        "Video conferencing infrastructure",
      ],
      valuePropositions: [
        "Personalized education support matched to learning styles",
        "Higher success rates through compatibility matching",
        "Convenient online access to quality tutors",
        "Progress tracking and reporting",
        "Flexible scheduling",
      ],
      customerRelationships: [
        "Personalized matching service",
        "Progress monitoring",
        "Feedback and rating system",
        "Customer support",
        "Parent-tutor communication tools",
      ],
      channels: [
        "Website and mobile app",
        "School partnerships",
        "Social media marketing",
        "Referral programs",
        "Educational conferences",
      ],
      customerSegments: [
        "K-12 students",
        "College students",
        "Parents of struggling students",
        "Schools and educational institutions",
        "Adult learners",
      ],
      costStructure: [
        "Platform development and maintenance",
        "Tutor recruitment and vetting",
        "Payment processing fees",
        "Marketing and user acquisition",
        "Customer support",
      ],
      revenueStreams: [
        "Commission on tutoring sessions",
        "Subscription plans for premium features",
        "School and institutional partnerships",
        "Assessment services",
        "Featured tutor placements",
      ],
    },
    "idea-3": {
      keyPartners: [
        "Public transportation agencies",
        "Bike and scooter sharing companies",
        "Environmental organizations",
        "Local businesses for rewards",
        "Corporate employers",
      ],
      keyActivities: [
        "App development and maintenance",
        "Carbon footprint calculation",
        "Gamification design",
        "Reward partner management",
        "Community building",
      ],
      keyResources: [
        "Carbon calculation algorithms",
        "Mobile app platform",
        "Rewards network",
        "Transportation data",
        "Community management team",
      ],
      valuePropositions: [
        "Make sustainable transportation rewarding and fun",
        "Reduce personal carbon footprint",
        "Save money on commuting costs",
        "Earn rewards from local businesses",
        "Connect with like-minded community",
      ],
      customerRelationships: [
        "Gamified user experience",
        "Community challenges and events",
        "Automated tracking and rewards",
        "Social sharing and connections",
        "Impact reporting",
      ],
      channels: [
        "Mobile app stores",
        "Corporate wellness programs",
        "Environmental organizations",
        "Social media",
        "Transportation hubs",
      ],
      customerSegments: [
        "Urban commuters",
        "Environmentally conscious individuals",
        "Corporate employees",
        "Students",
        "Budget-conscious travelers",
      ],
      costStructure: [
        "App development and maintenance",
        "Reward program management",
        "Marketing and user acquisition",
        "Data processing and analytics",
        "Community management",
      ],
      revenueStreams: [
        "Corporate sustainability programs",
        "Premium subscription features",
        "Sponsored challenges",
        "Advertising from eco-friendly brands",
        "Data insights (anonymized)",
      ],
    },
    "idea-4": {
      keyPartners: [
        "Productivity tool providers",
        "Virtual team building facilitators",
        "HR technology companies",
        "Remote work consultants",
        "Cloud infrastructure providers",
      ],
      keyActivities: [
        "Platform development and maintenance",
        "Integration with existing tools",
        "Virtual team building content creation",
        "Remote work best practices research",
        "Customer success management",
      ],
      keyResources: [
        "Software development team",
        "Remote work expertise",
        "Team building content library",
        "Integration capabilities",
        "Customer success team",
      ],
      valuePropositions: [
        "Foster collaboration and company culture in remote environments",
        "Reduce tool switching fatigue",
        "Improve team cohesion across distances",
        "Increase remote work productivity",
        "Strengthen company culture remotely",
      ],
      customerRelationships: [
        "Customer success managers",
        "Onboarding support",
        "Remote work consulting",
        "Community of practice",
        "Knowledge base and resources",
      ],
      channels: ["Direct sales team", "Website", "Remote work conferences", "Partner referrals", "Content marketing"],
      customerSegments: [
        "Remote-first companies",
        "Hybrid workplaces",
        "Distributed teams",
        "Global organizations",
        "Remote team managers",
      ],
      costStructure: [
        "Software development",
        "Cloud infrastructure",
        "Sales and marketing",
        "Customer success team",
        "Content creation",
      ],
      revenueStreams: [
        "SaaS subscription model",
        "Tiered pricing based on team size",
        "Enterprise contracts",
        "Add-on modules",
        "Remote work consulting services",
      ],
    },
  }

  return models[ideaId as keyof typeof models]
}

export default function BusinessModelCanvas({ ideaId }: { ideaId: string }) {
  const model = getBusinessModel(ideaId)

  if (!model) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Business Model Canvas</CardTitle>
          <CardDescription>No business model available for this idea.</CardDescription>
        </CardHeader>
      </Card>
    )
  }

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card className="md:col-span-1">
        <CardHeader>
          <CardTitle>Key Partners</CardTitle>
          <CardDescription>Who helps you deliver your value proposition?</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-inside list-disc space-y-1 text-sm">
            {model.keyPartners.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="md:col-span-1">
        <CardHeader>
          <CardTitle>Key Activities</CardTitle>
          <CardDescription>What do you do to deliver your value?</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-inside list-disc space-y-1 text-sm">
            {model.keyActivities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="md:col-span-1">
        <CardHeader>
          <CardTitle>Key Resources</CardTitle>
          <CardDescription>What assets do you need?</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-inside list-disc space-y-1 text-sm">
            {model.keyResources.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="md:col-span-3">
        <CardHeader>
          <CardTitle>Value Propositions</CardTitle>
          <CardDescription>What value do you deliver to customers?</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-inside list-disc space-y-1 text-sm">
            {model.valuePropositions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="md:col-span-1">
        <CardHeader>
          <CardTitle>Customer Relationships</CardTitle>
          <CardDescription>How do you interact with customers?</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-inside list-disc space-y-1 text-sm">
            {model.customerRelationships.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="md:col-span-1">
        <CardHeader>
          <CardTitle>Channels</CardTitle>
          <CardDescription>How do you reach your customers?</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-inside list-disc space-y-1 text-sm">
            {model.channels.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="md:col-span-1">
        <CardHeader>
          <CardTitle>Customer Segments</CardTitle>
          <CardDescription>Who are you creating value for?</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-inside list-disc space-y-1 text-sm">
            {model.customerSegments.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="md:col-span-3 lg:col-span-1">
        <CardHeader>
          <CardTitle>Cost Structure</CardTitle>
          <CardDescription>What are your most important costs?</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-inside list-disc space-y-1 text-sm">
            {model.costStructure.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="md:col-span-3 lg:col-span-2">
        <CardHeader>
          <CardTitle>Revenue Streams</CardTitle>
          <CardDescription>How do you make money?</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-inside list-disc space-y-1 text-sm">
            {model.revenueStreams.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
