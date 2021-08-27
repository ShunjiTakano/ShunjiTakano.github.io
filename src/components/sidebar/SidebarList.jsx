export default function SidebarList({section,name,setMenuOpen}) {
        return (
            <li onClick={()=>setMenuOpen(false)}>
                <a href={"#"+section}>{name}</a>
            </li>
    )
}
