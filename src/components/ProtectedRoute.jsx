import useToken from "../customhooks/useToken"
import { Navigate } from 'react-router-dom'

function ProtectedRoute({children}) {
    const token =  useToken();
    if (!token) {
        return <Navigate to="/login" replace/>
      }
    return(
        children
    )
}
export default ProtectedRoute