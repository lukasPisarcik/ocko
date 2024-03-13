import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import NewGame from "../components/NewGame";

const Home = () => {
    return ( 
      <>    
        <div className="p-4 mt-10 w-11/12 flex justify-center align-middle m-auto gap-20 flex-col">
          <h1 className="scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-6xl">
            Vitaj spat Lukas Pisarcik 👋      
          </h1>
          <p className="text-md text-muted-foreground">
            Tato aplikacia sluzi ako pomocka pri hre Ocko. Vytvorte si novu hru alebo pokracujte v poslednej.
          </p>
          <div className="flex gap-5 self-center">
            <NewGame />
            <Button asChild>
              <Link to={`/game`}>Pokracovat</Link>
            </Button>
          </div>
        </div>
      </>
    )
  };
  
  export default Home;