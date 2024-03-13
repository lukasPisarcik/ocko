import { Player } from "./Player";

export type Game = {
    bank: number;
    currentBank: number;
    players: Player[];
}