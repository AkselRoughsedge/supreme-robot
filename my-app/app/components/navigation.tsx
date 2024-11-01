import icon from "../../public/globe.svg"

export default function Navigation() {
  return (
    <div className="bg-gray-200 dark:bg-gray-700 w-full h-14 flex justify-center">
        <div className="h-full w-4/5 flex items-center justify-between">
            <div className="w-5">
                <img src={icon.src}></img>
            </div>
            <div className="space-x-4">
                <button>Signup</button>
                <button>Login</button>
            </div>
        </div>
    </div>
  );
}

