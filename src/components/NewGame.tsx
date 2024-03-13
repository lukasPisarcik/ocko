import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import AddPlayer from "@/components/AddPlayer";

const NewGame = () => {
    return (
      <>
        <Dialog>
              <DialogTrigger asChild>
                <Button variant={"secondary"}>
                  Nova hra
                </Button>
              </DialogTrigger>
              <DialogContent className="w-11/12">
              <DialogHeader>
                  <DialogTitle>Nova hra</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="bank" className="text-left">
                      Bank
                    </Label>
                    <Input id="bank" value="bank" className="col-span-3" />
                  </div>
                  <Separator />

                  <h4 className="scroll-m-20 text-l font-semibold tracking-tight text-center">
                    Hraci
                  </h4>
                  <p className="text-sm text-muted-foreground text-center">Zatial niesu pridany ziadny hraci</p>
                  <br></br>

                  <AddPlayer />
                </div>
                <DialogFooter>
                  <Button type="submit">Vytvorit hru</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
      </>
    );
  };
  
  export default NewGame;