import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Toast from "../../utils/toast";

interface State {
    isLoading: boolean;
    isSummariesLoading: boolean;
    isFetchBalanceLoading: boolean;
    isDepositProcessing: boolean;
    deposites: any[],
    purchases: any[],
    balance: {},
    isBalanceTransferLoading: boolean;
    isPurchaseOrderProcessing: boolean;
    walletSummaries: any[];
    metaData?: any,
    errors: {
        amount?: number
    }
}
const errors = {
    amount: ''
}

const initialState: State = {
    isLoading: true,
    isSummariesLoading: true,
    isFetchBalanceLoading: true,
    isDepositProcessing: false,
    isBalanceTransferLoading: true,
    isPurchaseOrderProcessing: false,
    deposites: [],
    purchases: [],
    balance: {},
    walletSummaries: [],
    metaData: {},
    errors: {
        amount: undefined
    }
};

const walletSlice = createSlice({
    name: "wallet",
    initialState,
    reducers: {
        getWalletSummaries: (state, action: PayloadAction<any>) => {
            state.isSummariesLoading = true;
            console.log(action)
        },
        setWalletSummaries: (state, action: PayloadAction<any>) => {
            state.isSummariesLoading = false;
            const { total_rows, page, limits, results } = action.payload;
            state.metaData = {
                total_rows,
                page,
                limits
            }
            state.walletSummaries = results
        },
        failedWalletSummaries: (state) => {
            state.isSummariesLoading = false;
            state.walletSummaries = [];
        },

        //Balance
        getFetchBalance: (state) => {
            state.isFetchBalanceLoading = true;
        },
        setFetchBalance: (state, action: PayloadAction<any>) => {
            state.isFetchBalanceLoading = false;
            console.log(action.payload)
            state.balance = action.payload.balances
        },
        failedFetchBalance: (state) => {
            state.isFetchBalanceLoading = false;
            state.walletSummaries = [];
        },

        //Deposit
        getDeposit: (state, action: PayloadAction<any>) => {
            state.isDepositProcessing = true;
        },
        setDeposit: (state, action: PayloadAction<any>) => {
            state.isDepositProcessing = false;
            state.deposites = action.payload
            Toast.showSuccessToast(action.payload.message ?? 'Transaction Successfull')
            console.log(action.payload)
        },
        failedDeposit: (state) => {
            state.isDepositProcessing = false;
            state.deposites = [];
        },

        //BalanceTransfer
        getBalanceTransfer: (state, action: PayloadAction<any>) => {
            state.isBalanceTransferLoading = true;
        },
        setBalanceTransfer: (state, action: PayloadAction<any>) => {
            state.isPurchaseOrderProcessing = false;
            state.purchases = action.payload
            Toast.showSuccessToast(action.payload.message ?? 'Transaction Successfull')
            console.log(action.payload)
        },
        failedBalanceTransfer: (state) => {
            state.isPurchaseOrderProcessing = false;
            state.purchases = [];
        },

        //PurchaseOrder
        getPurchaseOrder: (state, action: PayloadAction<any>) => {
            state.isPurchaseOrderProcessing = true;
        },

        setPurchaseOrder: (state, action: PayloadAction<any>) => {
            state.isPurchaseOrderProcessing = false;
            state.purchases = action.payload
            Toast.showSuccessToast(action.payload.message ?? 'Transaction Successfull')
            console.log(action.payload)
        },
        failedPurchaseOrder: (state) => {
            state.isPurchaseOrderProcessing = false;
            state.walletSummaries = [];
        },


    },
});

export const {
    getWalletSummaries,
    setWalletSummaries,
    failedWalletSummaries,

    getFetchBalance,
    setFetchBalance,
    failedFetchBalance,

    getDeposit,
    setDeposit,
    failedDeposit,

    getBalanceTransfer,
    setBalanceTransfer,
    failedBalanceTransfer,

    getPurchaseOrder,
    setPurchaseOrder,
    failedPurchaseOrder
} =
    walletSlice.actions;

export default walletSlice.reducer;
