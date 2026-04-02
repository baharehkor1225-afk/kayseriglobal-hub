"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { categories, materials, styles } from "@/lib/data"
import { X } from "lucide-react"

export function ProductFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const category = searchParams.get("category") || ""
  const material = searchParams.get("material") || ""
  const style = searchParams.get("style") || ""

  const hasFilters = category || material || style

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      if (value) {
        params.set(name, value)
      } else {
        params.delete(name)
      }
      return params.toString()
    },
    [searchParams]
  )

  const updateFilter = (name: string, value: string) => {
    const queryString = createQueryString(name, value)
    router.push(`/products${queryString ? `?${queryString}` : ""}`)
  }

  const clearFilters = () => {
    router.push("/products")
  }

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap items-center gap-3">
        <Select
          value={category}
          onValueChange={(value) => updateFilter("category", value)}
        >
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={material}
          onValueChange={(value) => updateFilter("material", value)}
        >
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Material" />
          </SelectTrigger>
          <SelectContent>
            {materials.map((mat) => (
              <SelectItem key={mat} value={mat}>
                {mat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={style}
          onValueChange={(value) => updateFilter("style", value)}
        >
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Style" />
          </SelectTrigger>
          <SelectContent>
            {styles.map((sty) => (
              <SelectItem key={sty} value={sty}>
                {sty}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {hasFilters && (
        <Button
          variant="ghost"
          size="sm"
          onClick={clearFilters}
          className="text-muted-foreground"
        >
          <X className="mr-1 h-4 w-4" />
          Clear Filters
        </Button>
      )}
    </div>
  )
}
