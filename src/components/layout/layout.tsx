import Navbar from "../navbar"
import Sidebar from "../sidebar"
import Table from "../table/table"

const Layout = ({children}:any) => {
    return (
        <>

            <div className="container-scroller">
                <Navbar />
                <div className="container-fluid page-body-wrapper">
                    <Sidebar />
                    <div className="main-panel">
                        <div className="content-wrapper">
                            <div className="row">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout