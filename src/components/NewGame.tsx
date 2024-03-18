import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import AddPlayer from "@/components/AddPlayer";
import { Game } from '@/models/Game';
import { Player } from '@/models/Player';
import { Cross2Icon, ExclamationTriangleIcon } from "@radix-ui/react-icons"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { saveToLocalStorage, getCurrentGame } from '@/uttlis';
import { DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle } from './ui/drawer';
import { Badge } from './ui/badge';

interface NewGameProps {
  isEdit?: boolean;
  onSubmit: (updatedGame: Game) => void;
}

const NewGame: React.FC<NewGameProps> = ({ isEdit, onSubmit }) => {
  const [bank, setBank] = useState<number | ''>('');
  const [players, setPlayers] = useState<Player[]>([]);
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isEdit) {
      const gameData = getCurrentGame();
      if (gameData) {
        setBank(gameData.bank);
        setPlayers(gameData.players);
      }
    }
  }, [isEdit]);

  const handleAddPlayer = (playerName: string) => {
    setPlayers([...players, { name: playerName, value: 0 }]);
  };

  const handleRemovePlayer = (index: number) => {
    setPlayers(players.filter((_, i) => i !== index));
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
      if (isEdit) onSubmit(game);
      else navigate('/game');
    }
  };

  return (
    <>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{isEdit ? 'Upravit hru' : 'Nova hra'}</DrawerTitle>
        </DrawerHeader>
        {error && 
          <Alert variant="destructive">
              <ExclamationTriangleIcon className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Vyplnte bank a pridajte aspon jedneho hraca
              </AlertDescription>
          </Alert>
          }
          <div className="grid gap-4 p-6 pb-0">
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
            <div>
            {players.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center">
                Zatial niesu pridany ziadny hraci
              </p>
            ) : (
              players.map((player, index) => (
                <Badge variant="secondary" key={index} className='w-auto mr-1'>
                  <p>{player.name}</p>
                  <Cross2Icon className='ml-1' onClick={() => handleRemovePlayer(index)}></Cross2Icon>
                </Badge>
              ))
            )}
            </div>
            <br />

            <AddPlayer onAddPlayer={handleAddPlayer} />
          </div>
        <DrawerFooter>
        {isEdit ? 
          <DrawerClose asChild>
            <Button type="submit" onClick={handleSubmit}>Upravit hru'</Button>
          </DrawerClose>
            :
          <Button type="submit" onClick={handleSubmit}>Vytvorit hru</Button>
        }
        </DrawerFooter>
      </DrawerContent>
    </>
  );
};

export default NewGame;
