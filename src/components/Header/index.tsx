import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../Logo";
import LogoDraw from "../LogoDraw";
import * as S from "./styles";

export interface IHeader {
  withIcon?: boolean;
}

const Header = () => {
  const [withIcon, setWithIcon] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setWithIcon(pathname !== "/");
  }, [pathname]);

  return (
    <S.Container withIcon={withIcon}>
      <Link to="/">
        <Logo responsive size="sm" />
      </Link>

      <S.Icon>{withIcon && <LogoDraw responsive size="sm" />}</S.Icon>
    </S.Container>
  );
};

export default Header;
