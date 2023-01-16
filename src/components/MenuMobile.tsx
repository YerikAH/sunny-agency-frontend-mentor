import React from "react";
import ReactDOM from "react-dom";
import { PropsMenu } from "../interface/interface";
import {
  BoxLi,
  BoxUl,
  MenuMobileStyle,
  MobileStyleBox,
  BoxA,
} from "../styles/menu_mobile_style";

function MenuMobile({ switchMenu }: PropsMenu) {
  const elementHTML = document.getElementById("menu")!;
  return ReactDOM.createPortal(
    <MenuMobileStyle>
      <BoxUl>
        <BoxLi>
          <BoxA href="#">About</BoxA>
        </BoxLi>
        <BoxLi>
          <BoxA href="#">Services</BoxA>
        </BoxLi>
        <BoxLi>
          <BoxA href="#">Projects</BoxA>
        </BoxLi>
        <BoxLi>
          <BoxA className="special" href="#">
            Contact
          </BoxA>
        </BoxLi>
      </BoxUl>
    </MenuMobileStyle>,
    elementHTML
  );
}
export default MenuMobile;
