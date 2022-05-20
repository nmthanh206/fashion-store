import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const mainNav = [
   {
      display: "Trang chủ",
      path: "/",
   },
   {
      display: "Sản phẩm",
      path: "/catalog",
   },
   {
      display: "Phụ kiện",
      path: "/accessories",
   },
   {
      display: "Liên hệ",
      path: "/contact",
   },
];

const Header = () => {
   const { pathname } = useRouter();
   const activeNav = mainNav.findIndex((e) => e.path === pathname);

   const headerRef = useRef(null);

   useEffect(() => {
      const handlerScroll = () => {
         if (
            document.body.scrollTop > 80 ||
            document.documentElement.scrollTop > 80
         ) {
            headerRef.current.classList.add("shrink");
         } else {
            headerRef.current.classList.remove("shrink");
         }
      };
      window.addEventListener("scroll", handlerScroll);
      return () => {
         window.removeEventListener("scroll", handlerScroll);
      };
   }, []);

   const menuLeft = useRef(null);

   const menuToggle = () => menuLeft.current.classList.toggle("active");

   return (
      <div className="header" ref={headerRef}>
         <div className="container">
            <div className="header__logo">
               <Link href="/">
                  <img src={"./assets/images/Logo-2.png"} alt="" />
               </Link>
            </div>
            <div className="header__menu">
               <div
                  className="header__menu__mobile-toggle"
                  onClick={menuToggle}
               >
                  <i className="bx bx-menu-alt-left"></i>
               </div>
               <div className="header__menu__left" ref={menuLeft}>
                  <div
                     className="header__menu__left__close"
                     onClick={menuToggle}
                  >
                     <i className="bx bx-chevron-left"></i>
                  </div>
                  {mainNav.map((item, index) => (
                     <div
                        key={index}
                        className={`header__menu__item header__menu__left__item ${
                           index === activeNav ? "active" : ""
                        }`}
                        onClick={menuToggle}
                     >
                        {/* <span className="block mt-[100px] bg-[#3a7abb]">
                           asdasdas
                        </span> */}
                        <Link href={item.path}>
                           <span>{item.display}</span>
                        </Link>
                     </div>
                  ))}
               </div>
               <div className="header__menu__right">
                  <div className="header__menu__item header__menu__right__item">
                     <i className="bx bx-search"></i>
                  </div>
                  <div className="header__menu__item header__menu__right__item">
                     <Link href="/cart">
                        <i className="bx bx-shopping-bag"></i>
                     </Link>
                  </div>
                  <div className="header__menu__item header__menu__right__item">
                     <i className="bx bx-user"></i>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Header;
