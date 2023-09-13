import React from "react";
import { Link } from "gatsby";
import LogoImg from "../images/logo.svg";

type Props = {};

export default function Logo({}: Props) {
  return (
    <Link to="/">
      <img src={LogoImg} width={150} alt="Logo" />
    </Link>
  );
}
