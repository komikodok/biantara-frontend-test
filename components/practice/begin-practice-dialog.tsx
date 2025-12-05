import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"


const BeginPracticeDialog = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button 
                    size="lg"
                    className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 text-xs rounded-full"
                >
                    Begin Practice
                    <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
            </DialogTrigger>
            <DialogContent className="w-[400px] h-[400px]">

            </DialogContent>
        </Dialog>
    )
}

export default BeginPracticeDialog
