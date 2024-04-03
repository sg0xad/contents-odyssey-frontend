import style from '../styles/pages/Root.module.css'
import Login from '../components/Login'

function Root() {
    return (
        <div>
            <header>
            </header>
            <main>
                <div className={style.title}>
                    <h1>콘텐츠 오디세이</h1>
                    <h2>다양한 콘텐츠를 경험하고 탐험해보세요!</h2>
                </div>
                <div className={style.loginContainer}>
                    <Login/>
                </div>
            </main>
            <footer>
                
            </footer>
        </div>
    )
}
export default Root