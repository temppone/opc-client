import React from "react";
import * as S from "./styles";

interface ICard {
  image: string;
  title: string;
  description: string;
}

const Card = ({ image, title, description }: ICard) => {
  return (
    <S.Container>
      <S.Image src={image} />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Container>
  );
};

export default Card;
