import React, { useState } from 'react';
import { PlusIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
interface AddPlayerProps {
  onAddPlayer: (name: string) => void;
}

const AddPlayer: React.FC<AddPlayerProps> = ({ onAddPlayer }) => {
  const [playerName, setPlayerName] = useState<string>('');

  const handleAddPlayer = () => {
    if (playerName.trim() !== '') {
      onAddPlayer(playerName);
      setPlayerName('');
    }
  };

  return (
    <>
      <div className="grid grid-cols-5 items-center gap-5">
        <Label htmlFor="hrac" className="text-left">
          Hrac
        </Label>
        <Input
          id="hrac"
          placeholder="Janko Hrasko"
          className="col-span-3"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
        />
        <Button size="icon" onClick={handleAddPlayer}>
          <PlusIcon className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
};

export default AddPlayer;
