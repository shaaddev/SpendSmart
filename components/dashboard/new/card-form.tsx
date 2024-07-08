import { card_style } from "./getting-started";
import { Card, CardContent } from "@/components/ui/card";

export function CardForm({ children}: {children: React.ReactNode}) {
  return(
    <Card className={card_style}>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  )
}