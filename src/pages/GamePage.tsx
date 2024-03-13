import React from 'react';
import PlayerCard from "@/components/PlayerCard";
import { Progress } from "@/components/ui/progress"
import { getCurrentGame, saveToLocalStorage } from '@/uttlis';
import { Game } from "@/models/Game";
import { Player } from "@/models/Player";

const GamePage = () => {
    const [gameConfig, setGameConfig] = React.useState<Game | null>(getCurrentGame());

    // Function to update player value
    const updatePlayerValue = (index: number, newValue: number) => {
      if (gameConfig) {
          const updatedPlayers = [...gameConfig.players];
          updatedPlayers[index].value = newValue;
          const playersValueSum = updatedPlayers.reduce((sum, player) => sum + (player.value * -1), 0);
          const newCurrentBank = gameConfig.bank + playersValueSum;
          setGameConfig({ ...gameConfig, players: updatedPlayers, currentBank: newCurrentBank });
          saveToLocalStorage(gameConfig);
      }
  };

    return (
        <>
            {gameConfig ? (
                <div className="p-4 mt-10 w-11/12 flex justify-center align-middle m-auto gap-10 flex-col">
                    <div className="flex w-full justify-between items-center">
                        <div className="flex gap-1">
                            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight">
                                Bank
                            </h1>
                            <h1 className="scroll-m-20 text-4xl tracking-tight text-muted-foreground">
                                {gameConfig.bank}€
                            </h1>
                        </div>
                        <div className="self-center text-center">
                            <p className="text-sm font-bold text-muted-foreground">Zostatok</p>
                            <h1 className="scroll-m-20 text-4xl tracking-tight text-muted-foreground text-emerald-500">
                                {gameConfig.currentBank}€
                            </h1>
                        </div>
                    </div>

                    <Progress value={(gameConfig.currentBank / gameConfig.bank) * 100} />

                    {gameConfig.players.map((player: Player, index: number) => (
                        <PlayerCard
                            key={index}
                            player={player}
                            onUpdatePlayer={(newValue: number) => updatePlayerValue(index, newValue)}
                        />
                    ))}
                </div>
            ) : (
                <p>Zly game config</p>
            )}
        </>
    );
};

export default GamePage;
