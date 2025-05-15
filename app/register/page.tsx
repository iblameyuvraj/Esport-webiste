"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

export default function RegisterPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    teamLeaderName: "",
    user1Id: "",
    user2Id: "",
    user3Id: "",
    user4Id: "",
    teamLeaderMobile: "",
  })
  const [errors, setErrors] = useState({
    teamLeaderName: "",
    user1Id: "",
    user2Id: "",
    user3Id: "",
    user4Id: "",
    teamLeaderMobile: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  const validateForm = () => {
    let valid = true
    const newErrors = {
      teamLeaderName: "",
      user1Id: "",
      user2Id: "",
      user3Id: "",
      user4Id: "",
      teamLeaderMobile: "",
    }

    if (!formData.teamLeaderName.trim()) {
      newErrors.teamLeaderName = "Team leader name is required"
      valid = false
    }

    if (!formData.user1Id.trim()) {
      newErrors.user1Id = "User 1 ID is required"
      valid = false
    }

    if (!formData.user2Id.trim()) {
      newErrors.user2Id = "User 2 ID is required"
      valid = false
    }

    if (!formData.user3Id.trim()) {
      newErrors.user3Id = "User 3 ID is required"
      valid = false
    }

    if (!formData.user4Id.trim()) {
      newErrors.user4Id = "User 4 ID is required"
      valid = false
    }

    if (!formData.teamLeaderMobile.trim()) {
      newErrors.teamLeaderMobile = "Team leader mobile number is required"
      valid = false
    } else if (!/^\d{10}$/.test(formData.teamLeaderMobile.replace(/\D/g, ""))) {
      newErrors.teamLeaderMobile = "Mobile number must be 10 digits"
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      // In a real app, you would send this data to your backend
      console.log("Form submitted:", formData)

      // Navigate to payment page
      router.push("/payment")
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <Card className="bg-gray-900 border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
                TEAM REGISTRATION
              </CardTitle>
              <CardDescription className="text-center text-gray-400">
                Enter your team details to register for tournaments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="teamLeaderName" className="text-white">
                      Team Leader Name
                    </Label>
                    <Input
                      id="teamLeaderName"
                      name="teamLeaderName"
                      placeholder="Enter team leader's name"
                      value={formData.teamLeaderName}
                      onChange={handleChange}
                      className="bg-gray-800 border-gray-700 focus:border-purple-500 text-white"
                    />
                    {errors.teamLeaderName && <p className="text-red-500 text-sm">{errors.teamLeaderName}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="teamLeaderMobile" className="text-white">
                      Team Leader Mobile Number
                    </Label>
                    <Input
                      id="teamLeaderMobile"
                      name="teamLeaderMobile"
                      placeholder="Enter team leader's mobile number"
                      value={formData.teamLeaderMobile}
                      onChange={handleChange}
                      className="bg-gray-800 border-gray-700 focus:border-purple-500 text-white"
                    />
                    {errors.teamLeaderMobile && <p className="text-red-500 text-sm">{errors.teamLeaderMobile}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="user1Id" className="text-white">
                      Team Leader ID
                    </Label>
                    <Input
                      id="user1Id"
                      name="user1Id"
                      placeholder="Enter team leader's ID"
                      value={formData.user1Id}
                      onChange={handleChange}
                      className="bg-gray-800 border-gray-700 focus:border-purple-500 text-white"
                    />
                    {errors.user1Id && <p className="text-red-500 text-sm">{errors.user1Id}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="user2Id" className="text-white">
                      Team Member ID
                    </Label>
                    <Input
                      id="user2Id"
                      name="user2Id"
                      placeholder="Enter team member's ID"
                      value={formData.user2Id}
                      onChange={handleChange}
                      className="bg-gray-800 border-gray-700 focus:border-purple-500 text-white"
                    />
                    {errors.user2Id && <p className="text-red-500 text-sm">{errors.user2Id}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="user3Id" className="text-white">
                      Team Member ID
                    </Label>
                    <Input
                      id="user3Id"
                      name="user3Id"
                      placeholder="Enter team member's ID"
                      value={formData.user3Id}
                      onChange={handleChange}
                      className="bg-gray-800 border-gray-700 focus:border-purple-500 text-white"
                    />
                    {errors.user3Id && <p className="text-red-500 text-sm">{errors.user3Id}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="user4Id" className="text-white">
                      Team Member ID
                    </Label>
                    <Input
                      id="user4Id"
                      name="user4Id"
                      placeholder="Enter team member's ID"
                      value={formData.user4Id}
                      onChange={handleChange}
                      className="bg-gray-800 border-gray-700 focus:border-purple-500 text-white"
                    />
                    {errors.user4Id && <p className="text-red-500 text-sm">{errors.user4Id}</p>}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-0 group"
                  >
                    PROCEED TO PAYMENT
                    <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-center">
              <p className="text-sm text-gray-400">
                By registering, you agree to our{" "}
                <a href="/terms" className="text-purple-400 hover:underline">
                  Terms & Conditions
                </a>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}