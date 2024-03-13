import { Separator } from "./ui/separator"


const Header = () => {
    return(
        <>
            <div className="w-full flex justify-between p-2">
                <h1>Ocko</h1>
                <p>Lukas Pisarcik</p>
            </div>
            <Separator />
        </>
    )
}

export default Header