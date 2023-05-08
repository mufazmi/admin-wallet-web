import Modal from "../../../../components/modal/modal";
import { useForm, Controller } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../../../../redux/store";
import { getDeposit, getWalletSummaries } from "../../../../redux/slice/wallet-slice";
import { useEffect } from 'react';

const WalletSummaryFilterModal = ({ close }: any) => {

    const dispatch = useDispatch();

    const currentDate = new Date();
    const from_date = new Date(currentDate.getFullYear(), currentDate.getMonth() - 2, 1);
    const initialValue = {
        page: '1',
        limit: '10',
        from_date: from_date.toISOString().slice(0, 10),
        to_date: currentDate.toISOString().slice(0, 10),
        ac_type: "pool",
    };

    // useEffect(() => {
    //     dispatch(getWalletSummaries(initialValue))
    // }, [])

    const { handleSubmit, control, formState, setValue } = useForm({
        mode: "onChange",
        defaultValues: initialValue
    });

    const { errors: apiError, isDepositProcessing } = useSelector(
        (state: RootState) => state.wallet
    );

    const { errors } = formState;

    const onSubmit = (data: { from_date: string; to_date: string; ac_type: string }) => {
        console.log(data);
        dispatch(getWalletSummaries(data));
    };

    return (
        <Modal close={close} title="Filter" width='30%'>
            <form onSubmit={handleSubmit(onSubmit)} style={{ padding: '40px' }}>
                <Controller
                    name="from_date"
                    control={control}
                    render={({ field }) => (
                        <div className="form-group">
                            <input
                                {...field}
                                type="date"
                                className="form-control form-control-lg"
                                id="from_date"
                            />
                        </div>
                    )}
                />
                <Controller
                    name="to_date"
                    control={control}
                    render={({ field }) => (
                        <div className="form-group">
                            <input
                                {...field}
                                type="date"
                                className="form-control form-control-lg"
                                id="to_date"
                            />
                        </div>
                    )}
                />
                <Controller
                    name="ac_type"
                    control={control}
                    render={({ field }) => (
                        <div className="form-group">
                            <select
                                {...field}
                                className="form-control form-control-lg"
                                id="ac_type"
                            >
                                <option value="wallet">Wallet</option>
                                <option value="pool">Pool</option>
                            </select>
                        </div>
                    )}
                />
                <div className="mt-3">
                    <button
                        className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                        disabled={isDepositProcessing}
                        type="submit"
                    >
                        FILTER
                    </button>
                </div>
            </form>


        </Modal>
    );
};

export default WalletSummaryFilterModal;
