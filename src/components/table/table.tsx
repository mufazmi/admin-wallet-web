interface ITable {
    name: string,
    tr: string[],
    children: any
}

const Table = ({ name, tr, children }: ITable) => {

    return (
        <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{name ?? 'Details'}</h4>
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