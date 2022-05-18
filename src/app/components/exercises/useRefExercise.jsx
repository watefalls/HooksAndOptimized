import React, { useRef, useState } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const [text, setText] = useState("Блок");
    const [styles, setStyles] = useState({
        height: 40,
        width: 100,
        color: "white"
    });
    const block = useRef();
    const handleClick = () => {
        setText((prevState) => (prevState === "Блок" ? "Text" : "Блок"));
        if (styles.width === 100) {
            setStyles({
                height: 80,
                width: 150,
                color: "white",
                transition: "all .2s ease-in"
            });
        } else {
            setStyles({
                height: 40,
                width: 100,
                color: "white",
                transition: "all .2s ease-in"
            });
        }
    };

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={styles}
            >
                <small ref={block} onClick={handleClick}>
                    {text}
                </small>
            </div>
            <button className="btn btn-danger mt-2" onClick={handleClick}>
                Изменить стили
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
