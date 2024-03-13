import { Separator } from "./ui/separator"


const Header = () => {
    return(
        <>
            <div className="w-11/12 flex justify-between p-4 h-auto m-a">
                <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">Ocko</h1>
            </div>
            <Separator />
        </>
    )
}

export default Header