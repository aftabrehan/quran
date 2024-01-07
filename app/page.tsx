"use client"

import { useState, useEffect } from "react"
import { useToast } from "@/components/ui/use-toast"
import ListSurah from "@/components/listsurah"
import { FaArrowUp91 } from "react-icons/fa6";
import { Skeleton } from "@/components/ui/skeleton"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Home() {
  const { toast } = useToast()
  const [listSurah, setListSurah] = useState([])
  const [sort, setSort] = useState("acc")

  useEffect(() => {
    fetchData()
  }, [sort])

  const fetchData = async () => {
    try {
      fetch("/api/listsurah")
        .then((res) => res.json())
        .then((data) => {
          sortData(data.data)
        })
    } catch (err: any) {
      toast({
        title: "Error",
        description: err.message,
      })
    }
  }

  const sortData = (data: any) => {
    if (sort === "acc") {
      setListSurah(data.sort((a: any, b: any) => a.number - b.number))
    } else {
      setListSurah(data.sort((a: any, b: any) => b.number - a.number))
    }
  }

  return (
    <main className="w-full flex items-center justify-center">
      <div className="w-full lg:w-2/3 mx-4 md:mx-7 lg:mx-10 items-center mt-5 mb-5">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-semibold">List Surah <span className="text-xs text-gray-400">Total: {listSurah.length}</span></h1>
          {/* Sort By dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <p className="flex items-center gap-1 cursor-pointer px-2 py-[5px] border rounded-md">Sort By <FaArrowUp91 /></p>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Sort By</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={sort} onValueChange={setSort}>
                <DropdownMenuRadioItem value="acc">Accending</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="dec">Decending</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {/* // if large screen 3 grid else 1 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-5">
          {listSurah.length > 0 ? (
            listSurah.map((item) => (
              <ListSurah key={item} data={item} />
            ))
          ) : (
            <>
            <Skeleton className="w-full h-20 rounded-md" />
            <Skeleton className="w-full h-20 rounded-md" />
            <Skeleton className="w-full h-20 rounded-md" />
            <Skeleton className="w-full h-20 rounded-md" />
            <Skeleton className="w-full h-20 rounded-md" />
            <Skeleton className="w-full h-20 rounded-md" />
            </>
          )}
        </div>
      </div>
    </main>
  )
}
