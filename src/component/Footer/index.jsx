import React from "react";
import { Footer, Social } from "./style";
import { FooterList } from "../../utils/FooterList";
import { Global } from "../../root/style";
import { useNavigate } from "react-router-dom";

export default function Foot() {
   const navigate = useNavigate()
   return (
      <Global.FullBg height="420px" bg="cyanBlue">
         <Global.Container>
            <Footer>
               <Footer.Head>
                  {FooterList.map(({ id, title, list, icon, social }) => {
                     return (
                        <Footer.List key={id}>
                           <li>
                              <h5 className="footer__title">{title}</h5>
                           </li>
                           {list.map(({ id, text, link }, index) => {
                              return (
                                 <li key={id}>
                                    <a href={link} className="footer__link">
                                       {icon && <i className={icon[index]}></i>}
                                       {text}
                                    </a>
                                 </li>
                              );
                           })}
                           {social && (
                              <Social>
                                 {social.map(({ id, brand }) => {
                                    return (
                                       <li key={id}>
                                          <a
                                             target="_blank"
                                             href={`https://www.${brand}.com`}
                                             rel="noreferrer"
                                             className="social__link"
                                          >
                                             <i className={`icon-${brand}`}></i>
                                          </a>
                                       </li>
                                    );
                                 })}
                              </Social>
                           )}
                        </Footer.List>
                     );
                  })}
               </Footer.Head>

               <Footer.Bottom>
                  <Global.Logo onClick = {() => navigate("/home")}/>
                  <h5 className="productBy">
                     Copyright © 2021 CreativeLayers. All Right Reserved.
                  </h5>
               </Footer.Bottom>
            </Footer>
         </Global.Container>
      </Global.FullBg>
   );
}
