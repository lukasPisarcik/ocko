import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
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
import { Game } from '@/models/Game';
import { Player } from '@/models/Player';
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { saveToLocalStorage } from '@/uttlis';


const NewGame: React.FC = () => {
  const [bank, setBank] = useState<number | ''>('');
  const [players, setPlayers] = useState<Player[]>([]);
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleAddPlayer = (playerName: string) => {
    setPlayers([...players, { name: playerName, value: 0 }]);
  };

  const handleSubmit = () => {
    if (typeof bank !== 'number' || players.length === 0) {
      setError(true);
    } else {
      setError(false);
      const game: Game = {
        bank: bank,
        currentBank: bank,
        players: players,
      };
      saveToLocalStorage(game);
      navigate('/game');
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"secondary"}>Nova hra</Button>
        </DialogTrigger>
        <DialogContent className="w-11/12">
          <DialogHeader>
            <DialogTitle>Nova hra</DialogTitle>
          </DialogHeader>
          {error && 
          <Alert variant="destructive">
              <ExclamationTriangleIcon className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Vyplnte bank a pridajte aspon jedneho hraca
              </AlertDescription>
          </Alert>
          }
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="bank" className="text-left">
                Bank
              </Label>
              <Input
                id="bank"
                placeholder="bank"
                className="col-span-3"
                value={bank === '' ? '' : bank.toString()}
                onChange={(e) => setBank(e.target.value === '' ? '' : parseInt(e.target.value))}
              />
            </div>
            <Separator />

            <h4 className="scroll-m-20 text-l font-semibold tracking-tight text-center">
              Hraci
            </h4>
            {players.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center">
                Zatial niesu pridany ziadny hraci
              </p>
            ) : (
              players.map((player, index) => (
                <p key={index} className="text-sm text-muted-foreground text-center">
                  {player.name}
                </p>
              ))
            )}
            <br />

            <AddPlayer onAddPlayer={handleAddPlayer} />
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handleSubmit}>Vytvorit hru</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default NewGame;
