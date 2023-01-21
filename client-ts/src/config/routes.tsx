import { Route, Routes, useLocation, Navigate } from "react-router-dom"
import { useAppCtx } from "../AppProvider"

import Login from "../pages/login"
import PannAppbar from "../components/pann-app-bar"

type Props = {
    staffOnly?: boolean
    children: JSX.Element
}

const ProtectedRoute = ({staffOnly, children}: Props) => {
    const {userInfo, action} = useAppCtx()
    const location = useLocation()
    const staffDenied = staffOnly && !action.isStaff()
    if (!userInfo.ready || staffDenied){
        if(staffDenied){
            action.signOut()
        }
        console.log('backTo = ', location.pathname)
        return <Navigate to="login" replace state={{backTo: location.pathname}}/>
    }

    return children
}

const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<Login />} />
            <Route path="login" element={<Login />}/>
            <Route path="home" element={<ProtectedRoute><PannAppbar/></ProtectedRoute>} />
        </Routes>
    )
}

export default AppRoutes
