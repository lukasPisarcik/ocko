// Reset.tsx
import React from 'react';
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "./ui/button";
import { ResetIcon } from "@radix-ui/react-icons";

const Reset: React.FC<{ onGameReset: () => void }> = ({ onGameReset }) => {

    return (
        <>
            <Drawer>
                <DrawerTrigger>
                    <Button variant="destructive">
                        <ResetIcon className="mr-2 h-4 w-4" />Resetovat 
                    </Button>
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>Urcite chcete resetovat hru ?</DrawerTitle>
                        <DrawerDescription>Po vykonani resetu sa vsetky ulozene udaje vymazu</DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                        <DrawerClose asChild>
                            <Button variant="destructive" onClick={onGameReset}>Potvrdit</Button>
                        </DrawerClose>
                        <DrawerClose asChild>
                            <Button variant="outline">Zrusit</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
}

export default Reset;
