import { useState } from 'react'
import style from '../../styles/pages/Agree.module.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {termsOfService, privacyPolicy, provideService} from '../../api/AgreeContents'
function Agree() {

    const [allCheckbox, setAllChecked] = useState(false)
    const [checkbox1, setCheckbox1] = useState(false)
    const [checkbox2, setCheckbox2] = useState(false)
    const [checkbox3, setCheckbox3] = useState(false)

    const navigation = useNavigate()

    const handleAllCheckboxChange = (event) => {
        setAllChecked(event.target.checked)
    }

    useEffect(() => {
        if (allCheckbox) {
            setCheckbox1(true)
            setCheckbox2(true)
            setCheckbox3(true)
        } else {
            setCheckbox1(false)
            setCheckbox2(false)
            setCheckbox3(false)
        }
    }, [allCheckbox])

    const handleCheckbox1Change = (event) => {
        setCheckbox1(event.target.checked)
    }

    const handleCheckbox2Change = (event) => {
        setCheckbox2(event.target.checked)
    }

    const handleCheckbox3Change = (event) => {
        setCheckbox3(event.target.checked)
    }

    const nextBtn = () => {
        if (checkbox1 === false || checkbox2 === false || checkbox2 === false) {
            return
        }
        navigation('/join')
    }

    

    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.title} onClick={() => navigation('/')}>
                    <img src="images/title.png"/>
                </div>
                <div className={style.allAgree}>
                    <input type="checkbox" className={style.allCheckbox} value={allCheckbox} onChange={handleAllCheckboxChange} /> 
                    <span>전체 동의하기</span>
                    <p>콘텐츠 오디세이 이용약관, 개인정보 수집 및 이용 동의를 포함합니다.</p>
                </div>
                <div className={style.agree}>
                    <input type="checkbox" className={style.checkbox1} checked={checkbox1} onChange={handleCheckbox1Change}/> 
                    <span><b>[필수]</b> 콘텐츠 오디세이 이용약관</span>
                    <textarea value={termsOfService} cols="30" rows="10" readOnly></textarea>
                </div>
                <div className={style.agree}>
                    <input type="checkbox" className={style.checkbox2} checked={checkbox2} onChange={handleCheckbox2Change} /> 
                    <span><b>[필수]</b> 개인정보 수집 및 이용</span>
                    <textarea value={privacyPolicy} cols="30" rows="10" readOnly></textarea>
                </div>
                <div className={style.agree}>
                    <input type="checkbox" className={style.checkbox3} checked={checkbox3} onChange={handleCheckbox3Change} /> 
                    <span><b>[필수]</b> 서비스 제공 및 이용</span>
                    <textarea value={provideService}  cols="30" rows="10" readOnly></textarea>
                </div>
                <div className={style.next} style={{
                    backgroundColor: checkbox1===true && checkbox2===true && checkbox3===true? '#4C4C4C' : '#DCDCDC',
                    cursor: checkbox1===true && checkbox2===true && checkbox3===true ? 'pointer' : 'default'
                    }}
                    onClick={nextBtn}>
                    <p style={{
                        userSelect: 'none',
                        color: checkbox1===true && checkbox2===true && checkbox3===true ? '#FFFFFF' : 'black'
                    }}>다음</p>
                </div>
            </div>
        </div>
    )
}

export default Agree