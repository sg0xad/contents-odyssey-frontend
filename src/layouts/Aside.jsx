import style from "../styles/layouts/Aside.module.css"
function Aside() {
    return (
        <aside>
            <div>
                <img src="icons/profile.svg" />
                프로필
            </div>
            <div>
                <img src="icons/friend.svg" />
                서로이웃
            </div>
            <div>
                <img src="icons/volunteer.svg" />
                기부 캠페인
            </div>
            <div>
                <img src="icons/bookmark.svg" />
                저장됨
            </div>
            <div>
                <img src="icons/group.svg" />
                그룹
            </div>
            <div>
                <img src="icons/chat.svg" />
                Messenger
            </div>
        </aside>
    )
}

export default Aside