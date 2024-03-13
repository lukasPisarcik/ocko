import React from 'react';
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Player } from '@/models/Player';

const PlayerCard: React.FC<{ player: Player, onUpdatePlayer: (newValue: number) => void }> = ({ player, onUpdatePlayer }) => {
    const handleMinusClick = () => {
        onUpdatePlayer(player.value - 1); // Call the callback function with the new value
    };

    const handlePlusClick = () => {
        onUpdatePlayer(player.value + 1); // Call the callback function with the new value
    };

    return (
        <Card>
            <CardContent className="p-4">
                <div className="flex justify-between align-middle">
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight self-center">
                        {player.name}
                    </h4>
                    <div className="flex gap-4">
                        <Button size="icon" variant={"secondary"} onClick={handleMinusClick}>
                            <MinusIcon className="h-4 w-4" />
                        </Button>
                        <h1 className="scroll-m-20 text-2xl font-bold tracking-tight self-center">
                            {player.value}$
                        </h1>
                        <Button size="icon" variant={"secondary"} onClick={handlePlusClick}>
                            <PlusIcon className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default PlayerCard;
