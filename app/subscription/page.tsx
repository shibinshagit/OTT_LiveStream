"use client"

import { useState } from "react"
import { Check, Crown, Star, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "@/components/organisms/Header"
import Footer from "@/components/organisms/Footer"

export default function SubscriptionPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly")

  const plans = [
    {
      id: "basic",
      name: "Basic",
      icon: <Star className="h-6 w-6" />,
      description: "Perfect for casual viewers",
      monthlyPrice: 199,
      annualPrice: 1999,
      features: [
        "HD streaming quality",
        "1 device at a time",
        "Limited content library",
        "Mobile & tablet access",
        "Basic customer support",
      ],
      color: "from-gray-500 to-gray-600",
      popular: false,
    },
    {
      id: "premium",
      name: "Premium",
      icon: <Zap className="h-6 w-6" />,
      description: "Most popular choice",
      monthlyPrice: 499,
      annualPrice: 4999,
      features: [
        "Ultra HD (4K) streaming",
        "4 devices simultaneously",
        "Full content library",
        "All devices supported",
        "Download for offline viewing",
        "Priority customer support",
        "Ad-free experience",
      ],
      color: "from-red-500 to-pink-500",
      popular: true,
    },
    {
      id: "family",
      name: "Family",
      icon: <Crown className="h-6 w-6" />,
      description: "Best value for families",
      monthlyPrice: 799,
      annualPrice: 7999,
      features: [
        "Ultra HD (4K) streaming",
        "6 devices simultaneously",
        "Full content library + exclusives",
        "All devices supported",
        "Download for offline viewing",
        "24/7 premium support",
        "Ad-free experience",
        "Multiple user profiles",
        "Parental controls",
        "Early access to new content",
      ],
      color: "from-yellow-500 to-orange-500",
      popular: false,
    },
  ]

  const currentPlan = "premium" // This would come from user state

  const getPrice = (plan: (typeof plans)[0]) => {
    return billingCycle === "monthly" ? plan.monthlyPrice : plan.annualPrice
  }

  const getSavings = (plan: (typeof plans)[0]) => {
    const monthlyTotal = plan.monthlyPrice * 12
    const annualPrice = plan.annualPrice
    return Math.round(((monthlyTotal - annualPrice) / monthlyTotal) * 100)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />

      <main className="px-4 md:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Choose Your Perfect Plan</h1>
            <p className="text-xl text-gray-300 mb-8">Unlimited streaming, no commitments. Cancel anytime.</p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-gray-800 rounded-full p-1">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  billingCycle === "monthly" ? "bg-red-600 text-white" : "text-gray-300 hover:text-white"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("annual")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  billingCycle === "annual" ? "bg-red-600 text-white" : "text-gray-300 hover:text-white"
                }`}
              >
                Annual
                <Badge variant="secondary" className="ml-2 bg-green-600 text-white">
                  Save up to 20%
                </Badge>
              </button>
            </div>
          </div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {plans.map((plan) => (
              <Card
                key={plan.id}
                className={`relative bg-gray-800 border-gray-700 ${
                  plan.popular ? "ring-2 ring-red-500" : ""
                } ${currentPlan === plan.id ? "ring-2 ring-green-500" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-red-600 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}

                {currentPlan === plan.id && (
                  <div className="absolute -top-4 right-4">
                    <Badge className="bg-green-600 text-white px-3 py-1">Current Plan</Badge>
                  </div>
                )}

                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center mb-4`}
                  >
                    {plan.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-white">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-300">{plan.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Pricing */}
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">
                      ₹{getPrice(plan)}
                      <span className="text-lg text-gray-400 font-normal">
                        /{billingCycle === "monthly" ? "month" : "year"}
                      </span>
                    </div>
                    {billingCycle === "annual" && (
                      <div className="text-sm text-green-400">Save {getSavings(plan)}% annually</div>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    className={`w-full ${
                      currentPlan === plan.id
                        ? "bg-green-600 hover:bg-green-700"
                        : plan.popular
                          ? "bg-red-600 hover:bg-red-700"
                          : "bg-gray-700 hover:bg-gray-600"
                    }`}
                    disabled={currentPlan === plan.id}
                  >
                    {currentPlan === plan.id ? "Current Plan" : `Choose ${plan.name}`}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Payment Methods */}
          <div className="bg-gray-800 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Accepted Payment Methods</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {["Visa", "Mastercard", "UPI", "Paytm", "PhonePe", "Google Pay"].map((method) => (
                <div key={method} className="bg-gray-700 rounded-lg p-4 flex items-center justify-center">
                  <span className="text-gray-300 font-medium">{method}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-gray-800">
                <TabsTrigger value="general" className="data-[state=active]:bg-red-600">
                  General
                </TabsTrigger>
                <TabsTrigger value="billing" className="data-[state=active]:bg-red-600">
                  Billing
                </TabsTrigger>
                <TabsTrigger value="technical" className="data-[state=active]:bg-red-600">
                  Technical
                </TabsTrigger>
              </TabsList>

              <TabsContent value="general" className="space-y-4">
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="font-semibold text-white mb-2">Can I cancel my subscription anytime?</h3>
                  <p className="text-gray-300">
                    Yes, you can cancel your subscription at any time. There are no cancellation fees, and you'll
                    continue to have access until the end of your billing period.
                  </p>
                </div>
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="font-semibold text-white mb-2">How many devices can I use simultaneously?</h3>
                  <p className="text-gray-300">
                    It depends on your plan. Basic allows 1 device, Premium allows 4 devices, and Family allows 6
                    devices to stream simultaneously.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="billing" className="space-y-4">
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="font-semibold text-white mb-2">When will I be charged?</h3>
                  <p className="text-gray-300">
                    You'll be charged immediately when you sign up, and then on the same date each month or year
                    depending on your billing cycle.
                  </p>
                </div>
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="font-semibold text-white mb-2">Can I change my plan later?</h3>
                  <p className="text-gray-300">
                    Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next
                    billing cycle.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="technical" className="space-y-4">
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="font-semibold text-white mb-2">What devices are supported?</h3>
                  <p className="text-gray-300">
                    OTT-Demo works on smartphones, tablets, computers, smart TVs, and streaming devices like Chromecast
                    and Fire TV.
                  </p>
                </div>
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="font-semibold text-white mb-2">What internet speed do I need?</h3>
                  <p className="text-gray-300">
                    We recommend at least 5 Mbps for HD streaming and 25 Mbps for Ultra HD (4K) streaming for the best
                    experience.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
