import { Link } from "react-router-dom"


const SingleRow = ({ data }: any) => {
    return (
        <li className="nav-item">
            <Link className="nav-link" to={'/' + data?.parent_menu?.url}>
                <i className="icon-paper menu-icon"></i>
                <span className="menu-title">{data?.parent_menu?.pagename}</span>
            </Link>
        </li>
    )

}

export default SingleRow