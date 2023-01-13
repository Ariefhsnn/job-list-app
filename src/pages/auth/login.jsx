import { Link } from "react-router-dom"
import { Button, Search } from "../../components"

export const Login = () => {
    return (
        <div className="h-screen w-full bg-gray-100 flex items-center justify-center">
            <div className="bg-white border-2 shadow-xl rounded-xl p-5 flex flex-col w-[20%] gap-5">
                <p className="text-gray-800 font-bold text-2xl flex justify-center underline">Login</p>
                <Search placeholder="email" icon="MdPerson" label="Email" />
                <Search placeholder="password" icon="MdOutlineVpnKey" label="Password" />
                <Link to="/list">
                    <Button variant="primary" className="w-full flex justify-center">
                        <p>Login</p>
                    </Button>
                </Link>
            </div>
        </div>
    )
}