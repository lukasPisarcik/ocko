import { Game } from "./models/Game";

export const saveToLocalStorage = (game: Game) => {
    localStorage.setItem("game", JSON.stringify(game));
}

export const getCurrentGame = (): Game | null => {
    const storedGame = localStorage.getItem("game");
    if (storedGame) {
        return JSON.parse(storedGame);
    }
    return null;
}
