import Modal from "../../components/modal/modal";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { getUserDetails } from "../../redux/slice/user-slice";
import { RootState } from "../../redux/store";

const UserDetailsModal = ({ close, customer_id }: any) => {

    const dispatch = useDispatch();

    const { isUserDetailsLoading, user,business } = useSelector((state: RootState) => state.user);
    console.log({user},{business},{isUserDetailsLoading})
    useEffect(() => {
        dispatch(getUserDetails({ customer_id }));
    }, [])


    return (
        <Modal close={close} title="User Details" width='30%'>
            {
                isUserDetailsLoading ? <h1>User Details is loading</h1> :
                    <div>
                        <div className="user-details-container">
                            <h2>Personal Information</h2>
                            <p>Date of Birth: {user.date_of_birth}</p>
                            <p>Gender: {user.gender}</p>
                            <p>Marital Status: {user.married || 'N/A'}</p>
                            <p>Father/Spouse Name: {user.father_or_spousename || 'N/A'}</p>
                            <p>PAN Number: {user.pan_no || 'N/A'}</p>
                            <p>Aadhar Number: {user.aadhar_no || 'N/A'}</p>
                            <h2>Address</h2>
                            <p>Area: {user?.address?.area}</p>
                            <p>City: {user?.address?.city}</p>
                            <p>Line: {user?.address?.line}</p>
                            <p>State: {user?.address?.state}</p>
                            <p>Pincode: {user?.address?.pincode}</p>
                            <p>District: {user?.address?.district}</p>
                        </div>
                        <hr />
                        <div className="business-profile-container">
                            <h2>Legal Information</h2>
                            <p>Legal Name: {business?.legal_name}</p>
                            <p>Entity Type: {business?.entity_type}</p>
                            <h2>Address</h2>
                            <p>Area: {business?.address?.area}</p>
                            <p>City: {business?.address?.city}</p>
                            <p>Line: {business?.address?.line}</p>
                            <p>State: {business?.address?.state}</p>
                            <p>Pincode: {business?.address?.pincode}</p>
                            <p>District: {business?.address?.district}</p>
                            <h2>Registration Information</h2>
                            <p>Date of Registration: {business?.date_of_registration}</p>
                            <p>Registration Number: {business?.registration_no || 'N/A'}</p>
                            <p>GST Number: {business?.gst_no || 'N/A'}</p>
                            <h2>Status</h2>
                            <p>Status: {business?.status}</p>
                        </div>


                    </div>
            }
        </Modal>
    );
};

export default UserDetailsModal;
