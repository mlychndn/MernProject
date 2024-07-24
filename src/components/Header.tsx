import {NETFLIX_LOGO} from "../config"

const Header = ()=>{
    return <div className="flex justify-between">
        <img src={NETFLIX_LOGO} alt="logo" className="w-60 cursor-pointer"/>
        <div className="text-white flex justify-between items-center gap-14 mx-4">
            <select value="English">
            <option value="hindi">hindi</option>
            <option value="eng">English</option>
            </select>
            <button className="text-xl font-extrabold bg-red-600 px-4 py-2 rounded-lg">sign in</button>
        </div>
    </div>
}

export default Header;