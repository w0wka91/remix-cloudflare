import { LoaderFunction, useLoaderData } from "remix";

export const loader: LoaderFunction = async () => {
  const response = await fetch("https://v2.jokeapi.dev/joke/Any?type=twopart");
  const data: any = await response.json();
  return {
    setup: data.setup,
    delivery: data.delivery,
  };
};

export default function Jokes() {
  const joke = useLoaderData();
  return <h1>{joke.setup}</h1>;
}
