import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function CardDashboard({children}: {children: React.ReactNode}) {
  return(
    <Card className="w-full p-2 lg:p-5 border-black/10 dark:border-inherit bg-inherit shadow-sm">
      <CardContent className="relative">
        {children}
      </CardContent>
    </Card>
  )
}