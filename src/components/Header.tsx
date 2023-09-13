import React from "react";
import Logo from "./Logo";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className='px-4'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between'>
          <Logo />
        </div>
      </div>
    </header>
  );
}
