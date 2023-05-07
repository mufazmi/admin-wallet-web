import Modal from "../../components/modal/modal";
import { useForm, Controller } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../../redux/store";
import { getDeposit } from "../../redux/slice/wallet-slice";

const DepositMoneyModal = ({ close }: any) => {

    const dispatch = useDispatch();

    const { handleSubmit, control, formState } = useForm({
        mode: "onChange",
        defaultValues: {
            amount: "",
        },
    });

    const { errors: apiError, isDepositProcessing } = useSelector(
        (state: RootState) => state.wallet
    );

    const { errors } = formState;

    const onSubmit = (data: { amount: string }) => {
        console.log(data);
        dispatch(getDeposit({ amount: parseInt(data.amount) }));
    };


    return (
        <Modal close={close} title="Deposit Money" width='30%'>
            <form onSubmit={handleSubmit(onSubmit)} style={{ padding: '40px' }}>
                <Controller
                    name="amount"
                    control={control}
                    render={({ field }) => (
                        <div className="form-group">
                            <input
                                {...field}
                                type="number"
                                step="any"
                                min="0"
                                readOnly={isDepositProcessing}
                                className="form-control form-control-lg"
                                id="amount"
                                placeholder="Enter Amount"
                            />
                            {errors.amount && (
                                <span style={{ color: "red", fontSize: "12px", opacity: 0.6 }}>
                                    {errors.amount.message}
                                </span>
                            )}
                            {apiError.amount && (
                                <span style={{ color: "red", fontSize: "12px", opacity: 0.6 }}>
                                    {apiError.amount}
                                </span>
                            )}
                        </div>
                    )}
                />
                <div className="mt-3">
                    <button
                        className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                        disabled={isDepositProcessing}
                        type="submit"
                    >
                        DEPOSIT
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default DepositMoneyModal;
