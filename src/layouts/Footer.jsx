import style from '../styles/layouts/Footer.module.css'
function Footer() {
    return (
        <div className={style.footer}>
            <div >
                <h1 className={style.footerTitle}>Contents <br/> Odyssey</h1>
            </div>
            <div className={style.footerInfo}>
                <div>(주) 콘텐츠 오디세이 정보</div><div></div>
                <div>회사 이름</div><div>Contents Odyssey</div>
                <div>주소</div><div>경기도 성남시 중원구 광명로 377</div>
                <div>전화번호</div><div>000-000-0000</div>
                <div>이메일</div><div>itsg2708@g.shingu.ac.kr</div>
                <div>호스팅 서비스 제공</div><div>로컬</div>
            </div>
            <div className={style.quickLink}>
                <a href="#">콘텐츠 오디세이 이용약관</a>
                <a href="#">콘텐츠 오디세이 운영정책</a>
                <a href="#">개인정보처리방침</a>
                <a href="#">프리미엄 콘텐츠 운영정책</a>
                <a href="#">법적고지</a>
                <a href="#">고객센터</a>
            </div>
            <div className={style.copyright}>
                <div>Copyright © 2023 Contents Odyssey. All rights reserved.</div>
            </div>
        </div>
    )
}

export default Footer