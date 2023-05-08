import Layout from "../../../components/layout/layout"
import Table from "../../../components/table/table"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getWalletSummaries } from "../../../redux/slice/wallet-slice";
import { RootState } from "../../../redux/store";
import Modal from "../../../components/modal/modal";
import PurchaseOrderModal from "../../dashboard/purchase-order";
import DepositMoneyModal from "../../dashboard/deposit-money";
import BalanceTransferModal from "../../dashboard/balance-transfer";
import { useState } from 'react';
import WalletSummaryFilterModal from "./components/filter-component";

const WalletSummaryPage = () => {

    const dispatch = useDispatch();
    const { walletSummaries, isSummariesLoading } = useSelector((state: RootState) => state.wallet);

    const [open, setOpen] = useState(false);

    const page = 1

    useEffect(() => {
        setOpen(false)
    }, [walletSummaries])

    const currentDate = new Date();
    const from_date = new Date(currentDate.getFullYear(), currentDate.getMonth() - 2, 1);
    const initialValue = {
        page: '1',
        limit: '10',
        from_date: from_date.toISOString().slice(0, 10),
        to_date: currentDate.toISOString().slice(0, 10),
        ac_type: "pool",
    };
    useEffect(() => {
        dispatch(getWalletSummaries(initialValue))
    }, [])


    const onFilterButtonClicked = () => {
        setOpen(true);
    }

    return (
        <Layout>
            {open && <WalletSummaryFilterModal close={() => setOpen(false)} />}
            <Table name="Wallet Summaries" tr={['Sr No. ', 'Account Type', 'Amount', 'Closing Balance', 'Type', 'Status', 'Date']} onFilterButtonClicked={onFilterButtonClicked} >

                {!isSummariesLoading && walletSummaries.map((e, index) => {
                    return <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{e.ac_type}</td>
                        <td>{e.amount}</td>
                        <td>{e.clo_bal}</td>
                        <td>{e.type}</td>
                        <td><label className="badge badge-danger">{e.status}</label></td>
                        <td>{e.tran_date}</td>
                    </tr>
                })}

            </Table>

            {/* <PurchaseOrderModal /> */}

            {/* <DepositMoneyModal /> */}

            {/* <BalanceTransferModal /> */}



        </Layout>
    )
}

export default WalletSummaryPage