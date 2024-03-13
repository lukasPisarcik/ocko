import { PlusIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const AddPlayer = () => {
    return (
        <>
        <div className="grid grid-cols-5 items-center gap-5">
                    <Label htmlFor="hrac" className="text-left">
                      Hrac
                    </Label>
                    <Input id="hrac" value="Janko Hrasko" className="col-span-3" />
                    <Button size="icon">
                      <PlusIcon className="h-4 w-4" />
                    </Button>
        </div>
        </>
    )
}

export default AddPlayer;