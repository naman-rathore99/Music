import { ChevronFirst, MoreVertical } from "lucide-react"

const  Sidebar = ({children}:any) => {
    return (

        <aside className="h-screen">
            <nav className="h-full flex flex-col bg-white border-r shadow-sm">
                <div className="p-4 pb-2 flex flex-between items-center">
                    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ffreebiesupply.com%2Flogos%2Ftemp-logo-2%2F&psig=AOvVaw0AJxcH7WSkvqJy1N1Rzzxr&ust=1719301334413000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCMjQu97e84YDFQAAAAAdAAAAABAE" alt="" className="w-32" />
                    <button className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
                        <ChevronFirst />
                    </button>
                </div>
                <ul className="flex-1 px-3">{children}</ul>
                <div className="border-t flex p-3">
                    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ffreebiesupply.com%2Flogos%2Ftemp-logo-2%2F&psig=AOvVaw0AJxcH7WSkvqJy1N1Rzzxr&ust=1719301334413000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCMjQu97e84YDFQAAAAAdAAAAABAE" alt=""  className="w-10 h-10 rounded-md"/>

                    <div className="flex justify0betwwn items-center w-52 ml-3"></div>
                    <div>
                        <h4 className="font-semibold">Sidebar</h4>
                        <span className="text-xs text-gray-600">text</span>
                    </div>
                    <MoreVertical size={20}/>
                </div>
            </nav>
        </aside>
    )
}

export default Sidebar;

export function Sidebaritems({ icon, text, active, alert }: {
    icon: any;
    text: any;
    active: any;
    alert: any;
    size: number;
}): JSX.Element{
    return (
        <li  >
            {icon}
            <span>{text}</span>
            </li>
    )
}