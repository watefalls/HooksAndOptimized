import React, { useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const RenderCountExample = () => {
    const renderCurrent = useRef(0);
    const [otherSatte, setOtherState] = useState(false);

    const toggleOtherState = () => {
        setOtherState(!otherSatte);
    };

    useEffect(() => {
        renderCurrent.current++;
    });
    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <Divider />
            <p>Render count: {renderCurrent.current}</p>
            <button className="btn btn-primary" onClick={toggleOtherState}>
                Toggle other state
            </button>
        </CardWrapper>
    );
};

export default RenderCountExample;
