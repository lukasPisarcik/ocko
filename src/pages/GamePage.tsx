import Player from "@/components/Player";
import { Progress } from "@/components/ui/progress"
import { getCurrentGame } from "@/uttlis";
import { Game } from "@/models/Game";

const GamePage = () => {

    const gameConfig: Game | null = getCurrentGame()

    return (
      <>
        { gameConfig ? 
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

          <Progress value={(gameConfig.currentBank/gameConfig.bank)*100} />

          {gameConfig.players.map((player, index) => (
            <Player key={index} playerName={player.name} />
          ))}
        </div>
        : 
          <p>Zly game config</p>
        }
      </>
    )
  };
  
  export default GamePage;