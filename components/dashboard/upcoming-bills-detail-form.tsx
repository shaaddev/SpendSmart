'use client'
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { input_style } from "./new/getting-started";

export function UpcomingBillsDetailForm({ children, data}: {children: React.ReactNode, data: any}) {
  const { register } = useForm()

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="p-10">
        <div className="flex flex-col items-center justify-center ">
          <form onSubmit={async (e) => {
            e.preventDefault()

            const formData = new FormData(e.currentTarget)
            await data(formData)
          }}
            className="space-y-6 w-full"
          >
            <Input 
              id="description"
              type="text"
              className={input_style}
              {...register('description', {required: true})}
            />

            <Button 
              type="submit"
            >Add</Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}