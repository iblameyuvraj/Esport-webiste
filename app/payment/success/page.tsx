"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Clock } from "lucide-react"

export default function PaymentSuccessPage() {
  const router = useRouter()
  const [timeLeft, setTimeLeft] = useState(5)
  const [isExpired, setIsExpired] = useState(false)

  useEffect(() => {
    // Start countdown timer for 5 minutes (300 seconds)
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1)
      }, 1000)

      return () => clearTimeout(timer)
    } else {
      setIsExpired(true)
    }
  }, [timeLeft])

  // Set initial timeLeft to 300 seconds (5 minutes)
  useEffect(() => {
    setTimeLeft(300)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <Card className="bg-gray-900 border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
                {isExpired ? "PAYMENT FAILED" : "PROCESSING PAYMENT"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-center">
              {!isExpired ? (
                <>
                  <div className="flex justify-center my-8">
                    <div className="relative">
                      <Clock className="h-20 w-20 text-purple-400 animate-pulse" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xl font-bold">{timeLeft}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300">Please wait while we process your payment...</p>
                  <p className="text-gray-400 text-sm">Do not close or refresh this page.</p>
                </>
              ) : (
                <>
                  <div className="flex justify-center my-8">
                    <AlertCircle className="h-20 w-20 text-red-500" />
                  </div>
                  <p className="text-gray-300 mb-6">
                    Payment failed or time expired. Please go back and retry from the Payment Page.
                  </p>
                  <Button
                    onClick={() => router.push("/payment")}
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-0"
                  >
                    Return to Payment Page
                  </Button>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
