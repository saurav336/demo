import {useParams} from "react-router-dom";
import {Bounce, toast} from "react-toastify";

export const User = () => {
    const handleUser = () => {
        toast.success('🦄 User Created Successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }
    const {id} = useParams();
    return (
        <>
            <h1 className="pt-40">User ID:{id}</h1>
            <button onClick={handleUser}>Add User</button>
        </>
    )
}