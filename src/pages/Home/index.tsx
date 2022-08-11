import { ChevronRight } from "@styled-icons/fa-solid";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import primary from "../../assets/Carousel/1.svg";
import secondary from "../../assets/Carousel/2.svg";
import third from "../../assets/Carousel/3.svg";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { useQuestions } from "../../services/hooks/useQuestions";
import Carousel from "./../../components/Carousel/index";
import * as S from "./styles";

const items = [
  {
    id: 1,
    image: primary,
    title: "Oi, seja bem-vindo",
    description:
      "Aqui você vai gerar seu contrato de forma simples e rápida. Mas antes, preciso te explicar algumas coisinhas.",
  },
  {
    id: 2,
    image: secondary,
    title: "Veja seu contrato",
    description:
      "Em todo momento durante a elaboração do seu contrato, haverá um ícone no canto superior a direta, onde terá um prévia do contrato.  ",
  },
  {
    id: 3,
    image: third,
    title: "Com simplicidade ",
    description:
      "Cada pergunta referencia às cláusulas que estão sendo editadas com perguntas simples,  podendo ser obrigatórias ou não.",
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.CarouselContainer>
        <Carousel />
      </S.CarouselContainer>

      <S.CardsContainer>
        {items.map((item, index) => (
          <Card
            key={index}
            description={item.description}
            image={item.image}
            title={item.title}
          />
        ))}
      </S.CardsContainer>
      <S.ButtonContainer>
        <Button
          onClick={() => navigate("/wizard")}
          color="darkYellow"
          icon={<ChevronRight size={20} />}
          arrow
        >
          VAMOS LÁ!
        </Button>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default Home;
