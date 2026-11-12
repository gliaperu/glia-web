"use strict";
document.documentElement.classList.add("js");
const toggle=document.querySelector(".menu-toggle");
const nav=document.getElementById("navegacion");
const mobile=window.matchMedia("(max-width: 800px)");
toggle.hidden=false;
function closeMenu(returnFocus=false){toggle.setAttribute("aria-expanded","false");nav.classList.remove("is-open");if(returnFocus)toggle.focus();}
toggle.addEventListener("click",()=>{const open=toggle.getAttribute("aria-expanded")==="true";toggle.setAttribute("aria-expanded",String(!open));nav.classList.toggle("is-open",!open);});
nav.addEventListener("click",event=>{const link=event.target.closest('a[href^="#"]');if(link&&mobile.matches){closeMenu();const target=document.querySelector(link.getAttribute("href"));if(target){target.setAttribute("tabindex","-1");target.focus({preventScroll:true});}}});
document.addEventListener("keydown",event=>{if(event.key==="Escape"&&toggle.getAttribute("aria-expanded")==="true")closeMenu(true);});
document.addEventListener("click",event=>{if(!event.target.closest(".site-header"))closeMenu();});
mobile.addEventListener("change",()=>closeMenu());
if("IntersectionObserver" in window){const links=[...nav.querySelectorAll('a[href^="#"]')];const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(link=>{if(link.getAttribute("href")==="#"+entry.target.id)link.setAttribute("aria-current","location");else link.removeAttribute("aria-current");});}});},{rootMargin:"-15% 0px -65% 0px",threshold:0});links.forEach(link=>{const section=document.querySelector(link.getAttribute("href"));if(section)observer.observe(section);});}
