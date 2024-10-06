// 'use client';
import { NavLinks } from './nav-links';
import { NavSearch } from './nav-search';

// use clientに指定したファイルの子コンポーネントはuse clientを書かなくても自動的にuse clientになる
export const Navbar = () => {
  console.log('ナブメニュー');
  return (
    <div>
      <NavLinks />
      <NavSearch />
    </div>
  );
};
