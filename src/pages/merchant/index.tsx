import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/layout/layout";
import Table from "../../components/table/table";
import { RootState } from "../../redux/store";
import { useEffect } from "react";
import { getUserList } from "../../redux/slice/user-slice";
import { useLocation } from "react-router-dom";


const MerchantPage = () => {

    const dispatch = useDispatch();
    const location = useLocation();
    const endpoint = location.pathname.split('/')[1];
    console.log(endpoint)
    const { isUserListLoading, users } = useSelector((state: RootState) => state.user);

    const page = 1

    const initialValue = {
        "user_type": 'merchant',
        "page": page,
        "limit": "10"
    }

    useEffect(() => {
        dispatch(getUserList(initialValue))
    }, [])


    return (
        <Layout>
            <Table name="User List" tr={['Sr No. ', 'Name', 'Mobile', 'User ID', 'Status', 'Wallet']}>

                {/* {!isUserListLoading && users.map((e, index) => {
                    return <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{e.ac_type}</td>
                        <td>{e.amount}</td>
                        <td>{e.clo_bal}</td>
                        <td>{e.type}</td>
                        <td><label className="badge badge-danger">{e.status}</label></td>
                        <td>{e.tran_date}</td>
                    </tr>
                })} */}

                {
                    !isUserListLoading &&
                    <tr key={1}>
                        <td>{1}</td>
                        {/* @ts-ignore */}
                        <td>{users?.name}</td>
                        {/* @ts-ignore */}
                        <td>{users?.mobile}</td>
                        {/* @ts-ignore */}
                        <td>{users?.customer_id}</td>
                        {/* @ts-ignore */}
                        <td><label className="badge badge-danger">{users?.status == 0 ? 'Active' : 'Inactive'}</label></td>
                        {/* @ts-ignore */}
                        <td>{users?.wallet[0]?.wallet ?? '0'}</td>
                    </tr>}

            </Table>

            {/* <PurchaseOrderModal /> */}

            {/* <DepositMoneyModal /> */}

            {/* <BalanceTransferModal /> */}



        </Layout>
    )
}

export default MerchantPage