"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// This would be imported from a charting library in a real app
// For this example, we'll create a simple visualization
function SimpleBarChart({ data, maxValue }: { data: { label: string; value: number }[]; maxValue: number }) {
  return (
    <div className="space-y-2">
      {data.map((item, index) => (
        <div key={index} className="space-y-1">
          <div className="flex items-center justify-between text-sm">
            <span>{item.label}</span>
            <span className="font-medium">{item.value.toLocaleString()}</span>
          </div>
          <div className="h-2 w-full rounded-full bg-muted">
            <div className="h-2 rounded-full bg-primary" style={{ width: `${(item.value / maxValue) * 100}%` }} />
          </div>
        </div>
      ))}
    </div>
  )
}

// Mock data - in a real app, this would come from an API
const getMetrics = (ideaId: string) => {
  const metrics = {
    "idea-1": {
      revenue: [
        { label: "Year 1", value: 250000 },
        { label: "Year 2", value: 750000 },
        { label: "Year 3", value: 1500000 },
        { label: "Year 4", value: 3000000 },
        { label: "Year 5", value: 5000000 },
      ],
      users: [
        { label: "Year 1", value: 5000 },
        { label: "Year 2", value: 15000 },
        { label: "Year 3", value: 50000 },
        { label: "Year 4", value: 100000 },
        { label: "Year 5", value: 200000 },
      ],
      marketSize: 15000000000,
      growthRate: 22,
      acquisitionCost: 35,
      lifetimeValue: 250,
      breakEvenMonths: 18,
    },
    "idea-2": {
      revenue: [
        { label: "Year 1", value: 180000 },
        { label: "Year 2", value: 500000 },
        { label: "Year 3", value: 1200000 },
        { label: "Year 4", value: 2500000 },
        { label: "Year 5", value: 4000000 },
      ],
      users: [
        { label: "Year 1", value: 3000 },
        { label: "Year 2", value: 10000 },
        { label: "Year 3", value: 30000 },
        { label: "Year 4", value: 75000 },
        { label: "Year 5", value: 150000 },
      ],
      marketSize: 8500000000,
      growthRate: 18,
      acquisitionCost: 25,
      lifetimeValue: 200,
      breakEvenMonths: 15,
    },
    "idea-3": {
      revenue: [
        { label: "Year 1", value: 120000 },
        { label: "Year 2", value: 350000 },
        { label: "Year 3", value: 800000 },
        { label: "Year 4", value: 1800000 },
        { label: "Year 5", value: 3500000 },
      ],
      users: [
        { label: "Year 1", value: 8000 },
        { label: "Year 2", value: 25000 },
        { label: "Year 3", value: 60000 },
        { label: "Year 4", value: 120000 },
        { label: "Year 5", value: 250000 },
      ],
      marketSize: 5000000000,
      growthRate: 25,
      acquisitionCost: 15,
      lifetimeValue: 120,
      breakEvenMonths: 14,
    },
    "idea-4": {
      revenue: [
        { label: "Year 1", value: 300000 },
        { label: "Year 2", value: 900000 },
        { label: "Year 3", value: 2000000 },
        { label: "Year 4", value: 4500000 },
        { label: "Year 5", value: 8000000 },
      ],
      users: [
        { label: "Year 1", value: 2000 },
        { label: "Year 2", value: 6000 },
        { label: "Year 3", value: 15000 },
        { label: "Year 4", value: 35000 },
        { label: "Year 5", value: 70000 },
      ],
      marketSize: 25000000000,
      growthRate: 28,
      acquisitionCost: 150,
      lifetimeValue: 1200,
      breakEvenMonths: 22,
    },
  }

  return metrics[ideaId as keyof typeof metrics]
}

export default function PerformanceMetrics({ ideaId }: { ideaId: string }) {
  const metrics = getMetrics(ideaId)

  if (!metrics) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Performance Metrics</CardTitle>
          <CardDescription>No metrics available for this idea.</CardDescription>
        </CardHeader>
      </Card>
    )
  }

  const maxRevenue = Math.max(...metrics.revenue.map((item) => item.value))
  const maxUsers = Math.max(...metrics.users.map((item) => item.value))

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Market Size</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${(metrics.marketSize / 1000000000).toFixed(1)}B</div>
            <p className="text-xs text-muted-foreground">Estimated global market opportunity</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Annual Growth Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.growthRate}%</div>
            <p className="text-xs text-muted-foreground">Projected year-over-year growth</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Break-Even Point</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.breakEvenMonths} months</div>
            <p className="text-xs text-muted-foreground">Estimated time to profitability</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Customer Metrics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="mb-1 text-sm font-medium">Customer Acquisition Cost</div>
              <div className="text-2xl font-bold">${metrics.acquisitionCost}</div>
              <p className="text-xs text-muted-foreground">Average cost to acquire a new customer</p>
            </div>

            <div>
              <div className="mb-1 text-sm font-medium">Customer Lifetime Value</div>
              <div className="text-2xl font-bold">${metrics.lifetimeValue}</div>
              <p className="text-xs text-muted-foreground">Average revenue per customer</p>
            </div>

            <div>
              <div className="mb-1 text-sm font-medium">LTV:CAC Ratio</div>
              <div className="text-2xl font-bold">{(metrics.lifetimeValue / metrics.acquisitionCost).toFixed(1)}:1</div>
              <p className="text-xs text-muted-foreground">Value generated per acquisition dollar</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Projected Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="revenue">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="revenue">Revenue</TabsTrigger>
                <TabsTrigger value="users">Users</TabsTrigger>
              </TabsList>
              <TabsContent value="revenue" className="mt-4 space-y-4">
                <SimpleBarChart data={metrics.revenue} maxValue={maxRevenue} />
                <div className="text-center text-xs text-muted-foreground">Projected annual revenue in USD</div>
              </TabsContent>
              <TabsContent value="users" className="mt-4 space-y-4">
                <SimpleBarChart data={metrics.users} maxValue={maxUsers} />
                <div className="text-center text-xs text-muted-foreground">Projected user growth over 5 years</div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
