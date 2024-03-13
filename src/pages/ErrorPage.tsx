import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="p-4 mt-10 w-11/12 flex text-center m-auto gap-5 flex-col">
      <h1 className="scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-6xl">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
}