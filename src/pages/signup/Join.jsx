import { useNavigate } from 'react-router-dom'
import style from '../../styles/pages/Join.module.css'
import { useState } from 'react'
import {join} from '../../api/signup/JoinApi'
function Join() {

    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [name, setName] = useState('');
    const [birthday, setBirthDay] = useState(null);

    const navigation = useNavigate()

   const signUp = () => {
    if (password !== passwordConfirm) {
        alert("비밀번호가 서로 다릅니다.")
        return
    }
    if (!(userId || password || passwordConfirm || name || birthday)) {
        alert('빈칸 없이 입력해주세요')
        return
    }
    const user = {
        userId: userId,
        password: password,
        name: name,
        birthday: birthday,
    }
    join(user)
        .then((response) => { 
            alert(response.data)
        })
        .catch((error) => {
            alert(error.response.data)
        })
        navigation("/")
   }



    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.title} onClick={() => navigation('/')}>
                    <img src="images/title.png"/>
                </div>
                <div className={style.idWrapper}>
                    <img src="icons/join/person.svg" className={style.idIcon} />
                    <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} className={style.inputId} placeholder='아이디'/>
                </div>
                <div className={style.pwWrapper}>
                    <img src="icons/join/password.svg" className={style.pwIcon} />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className={style.inputPw} placeholder='비밀번호' />
                </div>
                <div className={style.pwConfirmWrapper}>
                    <img src="icons/join/passwordConfirm.svg" className={style.pwConfirmIcon} />
                    <input type="password" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} className={style.inputPwConfirm} placeholder='비밀번호 확인' />
                </div>

                <div className={style.nameWrapper}>
                    <img src="icons/join/person.svg" className={style.nameIcon} />
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className={style.inputName} placeholder='이름' />
                </div>
                <div className={style.birthdayWrapper}>
                    <img src="icons/join/birthday.svg" className={style.birthdayIcon} />
                    <input type="text" maxLength="8" value={birthday} onChange={(e) => setBirthDay(e.target.value)} className={style.inputBirthday} placeholder='생년월일 8자리' />
                </div>

                <div className={style.signUp} onClick={signUp}>
                    <p style={{
                        userSelect: 'none',
                    }}>회원가입</p>
                </div>
            </div>
        </div>
    )
}

export default Join