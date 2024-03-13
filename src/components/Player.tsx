import { PlusIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const Player = () => {
    return(
        <>
            <Card>
                <CardContent className="p-4">
                    <div className="flex justify-between align-middle">
                        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight self-center">
                        Player 1
                        </h4>
                        <div className="flex gap-4">
                            <Button size="icon" variant={"secondary"}>
                                <PlusIcon className="h-4 w-4" />
                            </Button>
                            <h1 className="scroll-m-20 text-2xl font-bold tracking-tight self-center">
                                20$      
                            </h1>
                            <Button size="icon" variant={"secondary"}>
                                <PlusIcon className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

export default Player;