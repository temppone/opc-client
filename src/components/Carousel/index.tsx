import { ChevronRight } from "@styled-icons/fa-solid";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import primary from "../../assets/Carousel/1.svg";
import secondary from "../../assets/Carousel/2.svg";
import third from "../../assets/Carousel/3.svg";
import Button from "../Button";
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

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const navigate = useNavigate();

  const updateItem = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = items.length - 1;
    } else if (newIndex > items.length - 1) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateItem(activeIndex + 1);
      }
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex, paused]);

  const handless = useSwipeable({
    onSwipedLeft: () => {
      updateItem(activeIndex + 1);
    },

    onSwipedRight: () => {
      updateItem(activeIndex - 1);
    },
  });

  return (
    <S.Container
      {...handless}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <S.Inner activeIndex={activeIndex}>
        {items.map((item, index) => {
          return (
            <S.Item key={index}>
              <S.ItemContainer>
                <S.Image src={item.image} />
                <S.Title>{item.title}</S.Title>
                <S.Description>{item.description}</S.Description>
              </S.ItemContainer>
            </S.Item>
          );
        })}
      </S.Inner>

      <S.Indicators>
        {items.map((item, index) => {
          return (
            <S.Bar
              key={item.id}
              active={index === activeIndex}
              onClick={() => updateItem(index)}
            />
          );
        })}
      </S.Indicators>

      <S.StartButton items={items} activeIndex={activeIndex}>
        <Button
          onClick={() => navigate("/wizard")}
          color="darkYellow"
          endIcon={<ChevronRight size={20} />}
          arrow
        >
          VAMOS LÁ!
        </Button>
      </S.StartButton>

      <S.JumpButton
        onClick={
          activeIndex === 2 ? () => updateItem(0) : () => navigate("/wizard")
        }
      >
        {activeIndex === 2 ? "VOLTAR" : "PULAR"}
      </S.JumpButton>
    </S.Container>
  );
};

export default Carousel;
