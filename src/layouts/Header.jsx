import { useNavigate } from 'react-router-dom'
import style from "../styles/layouts/Header.module.css"

function Header() {
    const navigation = useNavigate()
    return (
        <nav>
            <img onClick={()=>navigation('/home')} className={style.navTitle} src="images/title.png" />
            <ul className={style.navList}>
                <li onClick={()=>navigation('/home')}>
                    <img src="icons/nav/home.svg" />
                </li>
                <li onClick={() => navigation('/list')}>
                    <img src="icons/nav/list.svg" />
                </li>
                <li>
                    <img src="icons/nav/friend.svg" />
                </li>
                <li>
                    <img src="icons/nav/profile.svg" />                  
                </li>
                <li>
                    <img src="icons/support.svg" />
                </li>
            </ul>
            <img className={style.navAlarm} src="icons/nav/alarm.svg" />
            <img className={style.navSearch} src="icons/nav/search.svg" />
            <div className={style.write} onClick={() => navigation('/write')}>
                글쓰기
            </div>
            <div className={style.logout}>
                로그아웃
            </div>
        </nav>
    )
}

export default Header