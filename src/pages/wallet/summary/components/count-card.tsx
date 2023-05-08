
const CountCard = ({title,value}:any) => {

    return (
        <div className="col-md-12 mb-4 stretch-card transparent">
            <div className="card card-tale">
                <div className="card-body">
                    <h4 className="mb-4">{title}</h4>
                    <p className="fs-30 mb-2">{value}</p>
                </div>
            </div>
        </div>
    )
}

export default CountCard;