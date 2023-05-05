import toast from "react-hot-toast";

class Toast{

    static showSuccessToast(message:string){
        toast.success(message)
    }

    static showErrorToast(message:string){
        toast.error(message)
    }

}

export default  Toast