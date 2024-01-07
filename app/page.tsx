"use client"

import { useToast } from "@/components/ui/use-toast"

export default function Home() {
  const { toast } = useToast()

  return (
    <main className="w-full min-h-screen flex items-center justify-center">
      <div className="w-2/4 items-center min-h-screen">
        Main Body
      </div>
    </main>
  )
}
