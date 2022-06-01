import React from "react";
import * as S from "./styles";

const Loading = () => {
  return (
    <S.Container>
      <S.Ring>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </S.Ring>
    </S.Container>
  );
};

export default Loading;
