import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getNavigations } from "../redux/slice/dashboard-slice";
import { RootState } from "../redux/store";
import DropDownRwo from "./sidebar/drop-down-row";
import SingleRow from "./sidebar/single-row";

const Sidebar = () => {

    const dispatch = useDispatch();
    
    const {isLoading, navigations} = useSelector((state:RootState) => state.dashboard);

    useEffect(()=>{
        dispatch(getNavigations())
    },[])

    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
                {!isLoading && navigations.length > 0 && navigations.map((e,index) => {
                    return e.sub_menu.length > 0 ?
                        <DropDownRwo key={index+'multi'} data={e} index={index}/> :
                        <SingleRow key={index+'single'} data={e}/>
                })}
            </ul>
        </nav>
    )

}

export default Sidebar;
