import { useEffect, useState } from "react"
import Layout from "../../components/layout/layout"
import DepositMoneyModal from "./deposit-money";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const DepositPage = () => {

    const [despositOpen, setDepositOpen] = useState(false);
    const [init, setInit] = useState(true);
    const { deposites } = useSelector((state: RootState) => state.wallet);

    useEffect(() => {
        if (init)
            return setInit(false);
        setDepositOpen(false)
    }, [deposites])

    return (
        <>
            {
                despositOpen && <DepositMoneyModal close={() => setDepositOpen(false)} />
            }
            <div className="col-lg-6">
                <button type="button" onClick={() => setDepositOpen(true)} className="btn btn-info btn-lg btn-block">Deposit Money
                </button>
            </div>
        </>

    )

}

export default DepositPage