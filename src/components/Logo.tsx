import React from "react";
import { Link } from "gatsby";
import LogoImg from "../images/logo.svg";

type Props = {
  title: string;
};

export default function Logo({ title }: Props) {
  return (
    <Link to="/">
      <img src={LogoImg} alt={title} width={150} />
    </Link>
  );
}
