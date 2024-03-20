import { MemeEnum } from "@/models/MemeEnum";
import { Button } from "./ui/button";
import { DrawerContent, DrawerHeader, DrawerTitle, DrawerFooter, DrawerClose, DrawerTrigger } from "./ui/drawer";

interface MemePopupProps {
    memeType: MemeEnum; // Define prop for meme type
}

const MemePopup: React.FC<MemePopupProps> = ({ memeType }) => {

    const getImageSource = (type: MemeEnum): string => {
        switch (type) {
            case MemeEnum.WIN:
                return "src/assets/money.gif";
            case MemeEnum.LOSE:
                return "src/assets/recover.gif";
            case MemeEnum.BANK:
                return "src/assets/skoda.jpg";
            default:
                return "";
        }
    };

  
    return (
      <>
            <DrawerTrigger></DrawerTrigger>
            <DrawerContent>
            <DrawerHeader>
                <DrawerTitle>{memeType === MemeEnum.BANK && "Škoda Škoda že už došiel bank"}</DrawerTitle>
            </DrawerHeader>
            <img src={getImageSource(memeType)}></img>
            <DrawerFooter>
                <DrawerClose asChild>
                <Button type="submit">Zrušiť</Button>
                </DrawerClose>
            </DrawerFooter>
            </DrawerContent>
      </>
    );
  };
  
  export default MemePopup;