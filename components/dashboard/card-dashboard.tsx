import {
  Card,
  CardContent,
} from "@/components/ui/card"

export function CardDashboard({children, className}: {children: React.ReactNode, className?: string}) {
  return(
    <Card className={`${className} w-full my-3 border-black/10 dark:border-inherit bg-inherit shadow-sm`}>
      <CardContent className="relative">
        {children}
      </CardContent>
    </Card>
  )
}