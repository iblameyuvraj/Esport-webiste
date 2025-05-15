"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AtSign, Lock } from "lucide-react"

export default function AdminLoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  })
  const [loginError, setLoginError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

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

    // Clear login error when user types
    if (loginError) {
      setLoginError("")
    }
  }

  const validateForm = () => {
    let valid = true
    const newErrors = {
      email: "",
      password: "",
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
      valid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
      valid = false
    }

    // Password validation
    if (!formData.password.trim()) {
      newErrors.password = "Password is required"
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      setIsLoading(true)

      // Simulate API call with timeout
      setTimeout(() => {
        // Simple admin credentials check
        // In a real app, this would be a secure authentication system
        if (formData.email === "mechox31@gmail.com" && formData.password === "13Feb2007!") {
          // Set admin authentication in localStorage
          localStorage.setItem("adminAuthenticated", "true")

          // Redirect to admin dashboard
          router.push("/admin")
        } else {
          setLoginError("Invalid email or password")
          setIsLoading(false)
        }
      }, 1000)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <Card className="bg-gray-900 border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
                ADMIN LOGIN
              </CardTitle>
              <CardDescription className="text-center text-gray-400">
                Enter your credentials to access the admin dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              {loginError && (
                <Alert className="mb-6 bg-red-900/30 border-red-500/50 text-red-400">
                  <AlertDescription>{loginError}</AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Email
                    </Label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <AtSign className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="admin@nexusgaming.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-gray-800 border-gray-700 focus:border-purple-500 text-white pl-10"
                      />
                    </div>
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-white">
                      Password
                    </Label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={handleChange}
                        className="bg-gray-800 border-gray-700 focus:border-purple-500 text-white pl-10"
                      />
                    </div>
                    {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-0"
                  >
                    {isLoading ? "Logging in..." : "LOGIN"}
                  </Button>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-center">
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
