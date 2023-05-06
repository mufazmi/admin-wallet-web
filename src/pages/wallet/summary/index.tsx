import Layout from "../../../components/layout/layout"
import Table from "../../../components/table/table"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getWalletSummaries } from "../../../redux/slice/wallet-slice";
import { RootState } from "../../../redux/store";

const WalletSummaryPage = () => {

    const dispatch = useDispatch();
    const { walletSummaries, isSummariesLoading } = useSelector((state: RootState) => state.wallet);

    useEffect(() => {
        dispatch(getWalletSummaries())
    }, [])

    return (
        <Layout>
            <Table name="Wallet Summaries" tr={['Sr No. ', 'Account Type', 'Amount', 'Closing Balance', 'Type', 'Status', 'Date']} >

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
        </Layout>
    )
}

export default WalletSummaryPage