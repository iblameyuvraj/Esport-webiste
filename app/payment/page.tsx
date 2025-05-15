"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { CheckCircle2 } from "lucide-react"

export default function PaymentPage() {
  const router = useRouter()
  const [upiId, setUpiId] = useState("")
  const [error, setError] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentDetails, setPaymentDetails] = useState({
    entryFee: 0,
    platformFee: 0,
    totalAmount: 0,
  })

  useEffect(() => {
    // Fetch payment details from localStorage
    const savedPaymentDetails = localStorage.getItem("paymentDetails")
    if (savedPaymentDetails) {
      setPaymentDetails(JSON.parse(savedPaymentDetails))
    }
  }, [])

  const handlePayment = () => {
    if (!upiId.trim()) {
      setError("UPI ID is required")
      return
    }

    setError("")
    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      // Redirect to payment success page
      router.push("/payment/success")
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <Card className="bg-gray-900 border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
                PAYMENT DETAILS
              </CardTitle>
              <CardDescription className="text-center text-gray-400">
                Complete your registration by making a payment
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-gray-800 p-4 rounded-md mb-6">
                  <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Tournament Entry</span>
                    <span>₹{paymentDetails.entryFee}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Platform Fee</span>
                    <span>₹{paymentDetails.platformFee}</span>
                  </div>
                  <div className="border-t border-gray-700 my-2"></div>
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span className="text-purple-400">₹{paymentDetails.totalAmount}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">UPI Payment</h3>
                  <div className="bg-gray-800 p-4 rounded-md border border-purple-500/30">
                    <div className="flex items-center justify-center mb-4">
                      <div className="bg-purple-900/30 p-3 rounded-full">
                        <CheckCircle2 className="h-6 w-6 text-purple-400" />
                      </div>
                    </div>
                    <p className="text-center text-gray-300 mb-4">Pay instantly using your UPI ID</p>
                    <div className="space-y-2">
                      <Label htmlFor="upiId">UPI ID</Label>
                      <Input
                        id="upiId"
                        placeholder="yourname@upi"
                        value={upiId}
                        onChange={(e) => {
                          setUpiId(e.target.value)
                          if (error) setError("")
                        }}
                        className="bg-gray-800 border-gray-700 focus:border-purple-500 text-white"
                      />
                      {error && <p className="text-red-500 text-sm">{error}</p>}
                    </div>
                  </div>
                </div>

                <Button
                  onClick={handlePayment}
                  disabled={isProcessing}
                  className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-0"
                >
                  {isProcessing ? "Processing..." : "PAY NOW"}
                </Button>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <p className="text-sm text-gray-400">Secured by industry-standard encryption</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
