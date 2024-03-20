import { Computer, Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useTheme } from "@/theme-provider"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@radix-ui/react-dropdown-menu"
import { Card } from "./ui/card"


export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <Card className="p-4">
            <DropdownMenuItem onClick={() => setTheme("light")} className="flex gap-1 py-1">
                <Sun/><p>Light</p>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}  className="flex gap-1 py-1">
                <Moon /><p>Dark</p>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")} className="flex gap-1 py-1">
                 <Computer /> <p>System</p>
            </DropdownMenuItem>
        </Card>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
