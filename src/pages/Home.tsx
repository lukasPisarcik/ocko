import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import NewGame from "../components/NewGame";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
// import { Game } from "@/models/Game";

const Home = () => {
    return ( 
      <>    
        <div className="p-4 mt-10 w-11/12 flex justify-center align-middle m-auto gap-20 flex-col">
          <Alert>
            <AlertTitle>Nová verzia k dispozícii</AlertTitle>
            <AlertDescription>
              Nová verzia aplikácie je dostupná na{" "}
              <a
                href="https://ockov2.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-medium"
              >
                ockov2.vercel.app
              </a>
              . Táto verzia bude odstránená do konca apríla.
            </AlertDescription>
          </Alert>
          <h1 className="scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-6xl">
            Vitaj spat Pirat 🏴‍☠️👋    
          </h1>
          <p className="text-md text-muted-foreground">
            Tato aplikacia sluzi ako pomocka pri hre Ocko. Vytvorte si novu hru alebo pokracujte v poslednej.
          </p>
          <div className="flex gap-5 self-center">
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant={"secondary"}>Nova hra</Button>
              </DrawerTrigger>
              <NewGame isEdit={false} onSubmit={function (): void {
                throw new Error("Function not implemented.");
              } }/>
            </Drawer>
            <Button asChild>
              <Link to={`/game`}>Pokracovat</Link>
            </Button>
          </div>
        </div>
      </>
    )
  };
  
  export default Home;