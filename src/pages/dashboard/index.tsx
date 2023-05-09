import { useEffect, useState } from "react"
import Layout from "../../components/layout/layout"
import DepositMoneyModal from "./deposit-money";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import PurchaseOrderModal from "./purchase-order";
import CountCard from "../wallet/summary/components/count-card";
import { getFetchBalance } from "../../redux/slice/wallet-slice";

const DashboardPage = () => {
    const dispatch = useDispatch();

    const { balance, isFetchBalanceLoading } = useSelector((state: RootState) => state.wallet);

    //DEPOSIT
    const [despositOpen, setDepositOpen] = useState(false);
    const { isDepositProcessing, deposites } = useSelector((state: RootState) => state.wallet);

    useEffect(() => {
        setDepositOpen(false)
    }, [deposites])

    //PURCHASE ORDER
    const [purchaseOrderOpen, setPurchaseOrderOpen] = useState(false);
    const { isPurchaseOrderProcessing, purchases } = useSelector((state: RootState) => state.wallet);

    useEffect(() => {
        setPurchaseOrderOpen(false)
    }, [purchases])


    //Count Card

    useEffect(() => {
        dispatch(getFetchBalance());
    },[]);

    return (
        <Layout>

            {/* Count Card */}
            <div className="row col-lg-12">
                <div className="col-lg-4">
                    {/* @ts-ignore */}
                    <CountCard title="Pool Balance" value={!isFetchBalanceLoading ? balance["pool balance"] : '-'} />
                </div>


                <div className="col-lg-4">
                    {/* @ts-ignore */}
                    <CountCard title="Wallet" value={!isFetchBalanceLoading ? balance?.wallet : '-'} />
                </div>


                <div className="col-lg-4">
                    {/* @ts-ignore */}
                    <CountCard title="Status" value={!isFetchBalanceLoading ? balance?.status : '-'} />
                </div>
            </div>


            {/* DEPOSIT */}
            {
                despositOpen && <DepositMoneyModal close={() => setDepositOpen(false)} />
            }

            {/* PURCHASE ORDER */}
            {
                purchaseOrderOpen && <PurchaseOrderModal close={() => setPurchaseOrderOpen(false)} />
            }

            {/* DEPOSIT */}
            <div className="col-lg-6 mt-3 mb-4">
                <button type="button" onClick={() => setDepositOpen(true)} className="btn btn-info btn-lg btn-block">Deposit Money
                </button>
            </div>

            {/* PURCHASE ORDER */}
            <div className="col-lg-6 mt-3 mb-4">
                <button type="button" onClick={() => setPurchaseOrderOpen(true)} className="btn btn-info btn-lg btn-block">Purchase Order
                </button>
            </div>
        </Layout>
    )

}

export default DashboardPage