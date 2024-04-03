import style from '../styles/components/Editor.module.css'
import { useState, useRef, useMemo } from 'react';
import "react-quill/dist/quill.snow.css"
import ReactQuill from "react-quill"
import {storage} from "../Firebase";
import { uploadBytes, getDownloadURL, ref, deleteObject} from "firebase/storage";

// React-Quill 및 이미지처리: https://yhuj79.github.io/React/230214/

/**
 * 에디터 컴포넌트
 */
function Editor({setPostStatus}) {
  const [tags, setTags] = useState([]);
  const [content, setContent] = useState("")
  const [imageFiles, setImageFiles] = useState([]);  // 이미지 파일을 임시로 저장할 상태
  const quillRef = useRef()

  const handleAddTag = (e) => {
    if (e.key === 'Enter') {
      if(tags.length >= 3) {
        alert("태그는 최대 3개까지 가능합니다")
        return
      }
      setTags([...tags, e.target.value]);
      e.target.value = '';
    }
  };

  const renderTags = () =>
    tags.map((tag, index) => (
      <li key={index}>
        {tag}
        <img
          className={style.tagDelete}
          src="icons/editor/tag_delete.svg"
          alt="Delete Tag"
          onClick={() => handleDeleteTag(index)}
        />
      </li>
    ));

  const handleDeleteTag = (index) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };

  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.addEventListener("change", async () => {
      const file = input.files[0];
      if (!file) {
        return;
      }
      const editor = quillRef.current.getEditor();
      const range = editor.getSelection(true);

      try {
        const storageRef = ref(storage, `images/${Date.now()}_${file.name}`);
        const snapshot = await uploadBytes(storageRef, file);
        const imageUrl = await getDownloadURL(snapshot.ref);

        // 업로드된 이미지의 URL을 에디터에 삽입
        editor.insertEmbed(range.index, "image", imageUrl);
        editor.setSelection(range.index + 1);

        // 업로드된 이미지의 Storage 경로를 상태에 저장
        setImageFiles(prev => [...prev, snapshot.ref.fullPath]);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    });
};

  // quill에서 사용할 모듈
  // useMemo를 사용하여 modules가 렌더링 시 에디터가 사라지는 버그를 방지
  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline", "strike"],
          ["blockquote"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ color: [] }, { background: [] }],
          [{ align: [] }, "link", "image"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    };
  }, []);

  const uploadImages = async () => {
    try {
      const uploadPromises = imageFiles.map(async (file) => {
        const storageRef = ref(storage, `image/${Date.now()}`);
        const snapshot = await uploadBytes(storageRef, file);
        return await getDownloadURL(snapshot.ref);
      });
      const imageUrls = await Promise.all(uploadPromises);
      console.log("Uploaded Image URLs:", imageUrls);
    } catch (error) {
      console.error("Error uploading images:", error);
    }
  };

  const deleteImages = async () => {
    const deletePromises = imageFiles.map((filePath) => {
        const fileRef = ref(storage, filePath);
        return deleteObject(fileRef);
    });

    try {
        await Promise.all(deletePromises);
        console.log("All images deleted successfully.");
    } catch (error) {
        console.error("Error deleting images:", error);
    }
};

  return (
    <div className={style.wrapper}>
      <input type="text" placeholder="제목을 입력하세요" className={style.titleInput} />
      <div className={style.line} />
      <input type="text" placeholder="태그를 입력하세요" className={style.tagInput} onKeyDown={handleAddTag} />
      <ul className={style.tagList}>{renderTags()}</ul>

      <ReactQuill
        style={{ width: "848px", height: "720px", marginTop: "12px" }}
        placeholder="내용"
        theme="snow"
        ref={quillRef}
        value={content}
        onChange={setContent}
        modules={modules}
      />

      {/* 나가기, 등록하기 버튼 메뉴바 */}
      <div className={style.navWrapper}>
        <div className={style.nav}>
          <ul>
            <li className={style.back} onClick={() => {
                deleteImages().then(() => {
                history.back();
                });
              }
            }>
              <img src="icons/editor/back.svg" alt="Back" />&nbsp;나가기
            </li>
            <li className={style.post} onClick={() => {
              console.log(content)
              setPostStatus(true)
              // uploadImages()
              }}>
              <div>등록하기</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Editor;
