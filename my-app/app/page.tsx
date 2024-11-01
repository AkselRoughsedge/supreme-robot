import Home from "./pages/home";
import LandingPage from "./pages/landingpage";

//Typescript examples
let Name: string = "Hello";
let Tuple: [number, boolean, string];

//when creating a const, you need to set the values as well.
const car: { type: string, model: string, year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009
};

//enums are good to use when setting distinct cases. If left blank they will increase by +1.
enum CardinalDirections {
  North = 'North',
  East = "East",
  South = "South",
  West = "West"
};

export default function Index() {
  return (
    <div className="">
      {/* <Home></Home> */}
      <LandingPage></LandingPage>
    </div>
  );
}
