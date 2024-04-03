import style from '../../styles/components/Post.module.css'

/**
 * 콘텐츠 등록 확인 페이지
 */
function Post({setPostStatus}) {
    return (
        <div className={style.background}>
            <div className={style.wrapper}>
               
                <h2 style={{marginTop:"20px"}}>카테고리 설정</h2>
                <select name="" id="" className={style.category}>
                    <option value="기타">기타</option>
                    <option value="경제">경제/비즈니스</option>
                    <option value="재테크">재테크</option>
                    <option value="부동산">부동산</option>
                    <option value="책/작가/출판사">책/작가/출판사</option>
                    <option value="취미/실용">취미/실용</option>
                    <option value="교육/학습">교육/학습</option>
                    <option value="자기개발/취업">자기개발/취업</option>
                    <option value="자기개발/취업">문화/예술</option>
                </select>
                
                    
                    <div className={style.post}>등록하기</div>
                    <div className={style.cancel} onClick={() => setPostStatus(false)}>취소</div>
              
            </div>
        </div>
    )
}

export default Post