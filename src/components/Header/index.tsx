import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../Logo";
import LogoDraw from "../LogoDraw";
import Modal from "../Modal";
import * as S from "./styles";

export interface IHeader {
  withIcon?: boolean;
}

const Header = () => {
  const [withIcon, setWithIcon] = useState(false);
  const { pathname } = useLocation();
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setWithIcon(pathname !== "/");
  }, [pathname]);

  return (
    <S.Container>
      <S.Content withIcon={withIcon}>
        <Link to="/">
          <Logo responsive size="sm" />
        </Link>

        <S.Icon onClick={() => setOpenModal(!openModal)}>
          {withIcon && <LogoDraw responsive size="sm" />}
        </S.Icon>
      </S.Content>

      <Modal
        onClose={() => setOpenModal(false)}
        isOpen={openModal}
        title="Seu contrato"
      >
        <h4>Clausula 1</h4>
        <p>Fugiat excepteur ea cupidatat commodo ad in.</p>
        <p>
          In adipisicing culpa aute ea officia laborum nisi excepteur. Non nulla
          laboris ut excepteur nostrud esse occaecat. Nulla fugiat officia
          incididunt quis.
        </p>
        <p>
          Qui non consectetur officia in occaecat Lorem quis eiusmod excepteur
          anim nulla deserunt ipsum sint. Labore veniam et minim id minim eu ad
          minim. Esse aliqua ex excepteur laboris consectetur magna sit. Anim
          minim laboris laborum in in incididunt irure fugiat aliqua enim. Sint
          commodo nostrud enim sunt enim incididunt non Lorem eu Lorem in id.
          Duis est amet pariatur nisi ut non pariatur. Consectetur qui aliquip
          laborum eiusmod irure veniam adipisicing mollit in aliquip do dolor
          occaecat.
        </p>
        <p>
          Deserunt exercitation sit nisi ullamco incididunt fugiat nisi non
          dolor. Voluptate minim cillum proident magna nisi nostrud sint. Sint
          fugiat occaecat est in consectetur ad cupidatat quis cillum magna
          velit enim consectetur sint. Excepteur ut tempor cillum velit
          excepteur sunt pariatur ad.
        </p>
        <p>Fugiat excepteur ea cupidatat commodo ad in.</p>
        <p>
          In adipisicing culpa aute ea officia laborum nisi excepteur. Non nulla
          laboris ut excepteur nostrud esse occaecat. Nulla fugiat officia
          incididunt quis.
        </p>
        <p>
          Qui non consectetur officia in occaecat Lorem quis eiusmod excepteur
          anim nulla deserunt ipsum sint. Labore veniam et minim id minim eu ad
          minim. Esse aliqua ex excepteur laboris consectetur magna sit. Anim
          minim laboris laborum in in incididunt irure fugiat aliqua enim. Sint
          commodo nostrud enim sunt enim incididunt non Lorem eu Lorem in id.
          Duis est amet pariatur nisi ut non pariatur. Consectetur qui aliquip
          laborum eiusmod irure veniam adipisicing mollit in aliquip do dolor
          occaecat.
        </p>
        <p>
          Deserunt exercitation sit nisi ullamco incididunt fugiat nisi non
          dolor. Voluptate minim cillum proident magna nisi nostrud sint. Sint
          fugiat occaecat est in consectetur ad cupidatat quis cillum magna
          velit enim consectetur sint. Excepteur ut tempor cillum velit
          excepteur sunt pariatur ad.
        </p>

        <p>Fugiat excepteur ea cupidatat commodo ad in.</p>
        <p>
          In adipisicing culpa aute ea officia laborum nisi excepteur. Non nulla
          laboris ut excepteur nostrud esse occaecat. Nulla fugiat officia
          incididunt quis.
        </p>
        <p>
          Qui non consectetur officia in occaecat Lorem quis eiusmod excepteur
          anim nulla deserunt ipsum sint. Labore veniam et minim id minim eu ad
          minim. Esse aliqua ex excepteur laboris consectetur magna sit. Anim
          minim laboris laborum in in incididunt irure fugiat aliqua enim. Sint
          commodo nostrud enim sunt enim incididunt non Lorem eu Lorem in id.
          Duis est amet pariatur nisi ut non pariatur. Consectetur qui aliquip
          laborum eiusmod irure veniam adipisicing mollit in aliquip do dolor
          occaecat.
        </p>
        <p>
          Deserunt exercitation sit nisi ullamco incididunt fugiat nisi non
          dolor. Voluptate minim cillum proident magna nisi nostrud sint. Sint
          fugiat occaecat est in consectetur ad cupidatat quis cillum magna
          velit enim consectetur sint. Excepteur ut tempor cillum velit
          excepteur sunt pariatur ad.
        </p>

        <p>Fugiat excepteur ea cupidatat commodo ad in.</p>
        <p>
          In adipisicing culpa aute ea officia laborum nisi excepteur. Non nulla
          laboris ut excepteur nostrud esse occaecat. Nulla fugiat officia
          incididunt quis.
        </p>
        <p>
          Qui non consectetur officia in occaecat Lorem quis eiusmod excepteur
          anim nulla deserunt ipsum sint. Labore veniam et minim id minim eu ad
          minim. Esse aliqua ex excepteur laboris consectetur magna sit. Anim
          minim laboris laborum in in incididunt irure fugiat aliqua enim. Sint
          commodo nostrud enim sunt enim incididunt non Lorem eu Lorem in id.
          Duis est amet pariatur nisi ut non pariatur. Consectetur qui aliquip
          laborum eiusmod irure veniam adipisicing mollit in aliquip do dolor
          occaecat.
        </p>
        <p>
          Deserunt exercitation sit nisi ullamco incididunt fugiat nisi non
          dolor. Voluptate minim cillum proident magna nisi nostrud sint. Sint
          fugiat occaecat est in consectetur ad cupidatat quis cillum magna
          velit enim consectetur sint. Excepteur ut tempor cillum velit
          excepteur sunt pariatur ad.
        </p>
      </Modal>
    </S.Container>
  );
};

export default Header;
