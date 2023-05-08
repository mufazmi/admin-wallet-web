interface ITable {
    name: string,
    tr: string[],
    onFilterButtonClicked?: any,
    children: any
}

const Table = ({ name, tr, children, onFilterButtonClicked }: ITable) => {

    return (
        <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
                <div className="card-body">
                    <div style={{ display: "flex", justifyContent: 'space-between', placeItems: 'center' }}>
                        <h4 className="card-title">{name ?? 'Details'}</h4>
                        {
                            onFilterButtonClicked &&
                            <button onClick={onFilterButtonClicked} type="button" className="btn btn-primary btn-rounded btn-icon">
                                <i className="mdi mdi-filter-outline"></i>
                            </button>
                        }
                    </div>
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    {tr.map((e, index) => {
                                        return <th key={index}>{e}</th>
                                    })}
                                </tr>
                            </thead>
                            <tbody>
                                {children}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Table