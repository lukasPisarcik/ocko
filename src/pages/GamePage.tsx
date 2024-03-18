import React from 'react';
import PlayerCard from "@/components/PlayerCard";
import { Progress } from "@/components/ui/progress"
import { getCurrentGame, saveToLocalStorage } from '@/uttlis';
import { Game } from "@/models/Game";
import { Player } from "@/models/Player";
import NewGame from '@/components/NewGame';
import { Button } from '@/components/ui/button';
import { Drawer, DrawerTrigger } from '@/components/ui/drawer';
import { UpdateIcon } from '@radix-ui/react-icons';
import Reset from '@/components/Reset';

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

    const resetGame = () => {
        if(gameConfig){
            gameConfig.players.forEach(player => player.value = 0);
            setGameConfig({...gameConfig, currentBank: gameConfig.bank})
            saveToLocalStorage(gameConfig);
        }
        console.log('reset');
    }

    const handleGameSubmit = (updatedGame: Game) => {
        setGameConfig(updatedGame);
        // You can add any further actions here after submitting the game
    };

    return (
        <>
            {gameConfig ? (
                <div className="p-4 mt-2 w-11/12 flex justify-center align-middle m-auto gap-5 flex-col">
                    <div className='flex justify-center gap-1 '>
                        <Drawer>
                            <DrawerTrigger asChild>
                                <Button variant="outline"> <UpdateIcon className="mr-2 h-4 w-4" />Upravit hru</Button>
                            </DrawerTrigger>
                            <NewGame isEdit={true} onSubmit={handleGameSubmit} />
                        </Drawer>
                        <Reset onGameReset={resetGame}/>
                    </div>
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
                            <h1 className="scroll-m-20 text-4xl tracking-tight text-muted-foreground">
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
