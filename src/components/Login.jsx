import { useNavigate } from 'react-router-dom';
import style from '../styles/components/Login.module.css'
function Login() {
    const navigation = useNavigate();

    return (
        <div className={style.loginForm}>
            <input type="text" id={style.id} placeholder='아이디를 입력하세요'/>
            <input type="password" id={style.password} placeholder='비밀번호를 입력하세요' />
            <div className={style.loginBtn} onClick={() => navigation('/home')}>로그인</div>
            <div className={style.googleLogin}>구글 로그인</div>
            <div className={style.naverLogin}>네이버 로그인</div>
            <a href="#" className={style.findPassword}>비밀번호를 잊으셨나요?</a>
            <div className={style.line}></div>
            <div className={style.signUp} onClick={() => navigation('/agree')}>새 계정 만들기</div>
    </div>
    )
}

export default Login;