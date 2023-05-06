import { Link } from "react-router-dom";


const DropDownRwo = ({data,index}:any) => {
    return (
        <li className="nav-item">
            <a className="nav-link" data-toggle="collapse" href={`#admin${index}`} aria-expanded="false" aria-controls="ui-basic">
                <i className="icon-layout menu-icon"></i>
                <span className="menu-title">{data?.parent_menu?.pagename}</span>
                <i className="menu-arrow"></i>
            </a>
            <div className="collapse" id={`admin${index}`}>
                <ul className="nav flex-column sub-menu">
                    {
                        data.sub_menu.map((e:any)=>{
                            return <li className="nav-item"> <Link className="nav-link" to={e.url}>{e.pagename}</Link></li>
                        })
                    }
                </ul>
            </div>
        </li>
    )
}

export default DropDownRwo;