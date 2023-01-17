import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
/* styles */
import {
  BoxLi,
  BoxUl,
  MenuMobileStyle,
  BoxA,
  DecorationTrian,
  BoxUlFather,
  DecorationBox,
} from "../styles/menu_mobile_style";

/* props */
import { PropsMenu, StylesMenuInterface } from "../interface/interface";

function MenuMobile({ switchMenu }: PropsMenu) {
  const elementHTML = document.getElementById("menu")!;
  const [stylesMenu, setStylesMenu] = useState<StylesMenuInterface>({});

  useEffect(() => {
    let stylesVariable: StylesMenuInterface = {
      height: "100%",
      transitionTimingFunction: "cubic-bezier(0, 0.04, 0.83, -0.19)",
    };
    if (switchMenu) {
      setStylesMenu(stylesVariable);
    } else {
      stylesVariable.height = "0%";
      stylesVariable.transitionTimingFunction = "cubic-bezier(0,.04,0,1)";
      setStylesMenu(stylesVariable);
    }
  }, [switchMenu]);

  return ReactDOM.createPortal(
    <MenuMobileStyle style={stylesMenu}>
      <BoxUlFather>
        <DecorationBox>
          <DecorationTrian />
        </DecorationBox>
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
      </BoxUlFather>
    </MenuMobileStyle>,
    elementHTML
  );
}
export default MenuMobile;
