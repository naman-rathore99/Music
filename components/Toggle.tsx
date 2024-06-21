import { Label } from "./ui/label"
import { Switch } from "./ui/switch"
import { useTheme } from "next-themes"

const Toggle =()=>{

    return (
        <div className="flex items-center space-x-2">
        <Switch onClick={() => setTheme("dark")}/>
      </div>
    )
}
export default  Toggle;