(this.webpackJsonpdemolition=this.webpackJsonpdemolition||[]).push([[0],{11:function(A,e,t){},13:function(A,e,t){},14:function(A,e,t){"use strict";t.r(e);var c=t(1),h=t.n(c),v=t(6),s=t.n(v),a=(t(11),t(5),t(2)),n=h.a.createContext({numbers:[],setRolledNumbers:function(A){}}),o=h.a.createContext({activePlayerIndex:0,numberOfTeams:0,hasPlayed:!1,setNumberOfTeams:function(A){},setActivePlayer:function(A){},setHasPlayed:function(A){}}),l=function(A){var e=Object(c.useState)(new Audio(A)),t=Object(a.a)(e,1)[0],h=Object(c.useState)(!1),v=Object(a.a)(h,2),s=v[0],n=v[1];return Object(c.useEffect)((function(){s?t.play():t.pause()}),[s,t]),Object(c.useEffect)((function(){return t.addEventListener("ended",(function(){return n(!1)})),function(){t.removeEventListener("ended",(function(){return n(!1)}))}}),[t]),[s,function(){return n(!s)}]},r=t.p+"static/media/swipe.89413937.mp3",i=t(0),b=function(A){var e=A.team,t=A.number,h=A.selectable,v=A.callback,s=A.building,b=Object(c.useState)(!1),u=Object(a.a)(b,2),g=u[0],d=u[1],j=Object(c.useState)(!0),O=Object(a.a)(j,2),C=O[0],m=O[1],Q=Object(c.useContext)(n),B=Q.numbers,M=Q.setRolledNumbers,I=Object(c.useContext)(o),D=I.activePlayerIndex,w=I.setActivePlayer,E=I.setHasPlayed,H=l(r),x=Object(a.a)(H,2),N=(x[0],x[1]),f=Object(c.useState)(!1),z=Object(a.a)(f,2),G=z[0],p=z[1];return Object(c.useEffect)((function(){"playTwice"===B[2]?p(!0):p(!1)}),[B,G]),Object(i.jsx)("div",{className:"story ".concat(g?"backOutLeft":""," ").concat(h.includes(t)&&e===D?"selectable":""," \n      ").concat(s," Patua"),style:{display:C?"flex":"none"},onClick:function(){h.includes(t)&&e===D&&(N(),v(),setTimeout((function(){return d(!0)}),500),setTimeout((function(){return m(!1)}),1100),E(!1),console.log("numbers",B),G?(w(e),p(!1)):w(),M([]))},children:Object(i.jsx)("span",{className:"story-number",children:Object(i.jsx)("h4",{children:t})})})};var u=function(){var A=h.a.useState(void 0),e=Object(a.a)(A,2),t=e[0],c=e[1],v=h.a.useState(!0),s=Object(a.a)(v,2),n=s[0],o=s[1],l=h.a.useState([]),r=Object(a.a)(l,2),i=r[0],b=r[1],u=h.a.useCallback((function(A){c(A)}),[]),g=h.a.useCallback((function(A){o(A)}),[]),d=h.a.useCallback((function(A){var e=i.find((function(e){return A.team===e.team})),t=i;void 0!==e?0===A.score.length?setTimeout((function(){return u(A.team)}),1200):(t[i.indexOf(e)]=A,b(t)):(t.push(A),b(t))}),[i,u]),j=h.a.useCallback((function(){var A=i.filter((function(A){return A.score.length===function(A){return Math.min.apply(Math,A.map((function(A){return A.score.length})))}(i)})).map((function(A){return"Team ".concat(A.team)}));u(A)}),[u,i]);return{blur:n,setBlur:g,winner:t,setWinner:u,scores:i,setScores:d,findWinner:j}},g=h.a.createContext({blur:!0,setBlur:function(A){},winner:void 0,setWinner:function(A){},scores:[],setScores:function(){},findWinner:function(A){}}),d=t.p+"static/media/coin.9384c68f.wav",j=t.p+"static/media/shake.4077e084.wav";var O=function(A){var e=A.team,t=A.color,v=l(d),s=Object(a.a)(v,2),r=(s[0],s[1]),u=l(j),O=Object(a.a)(u,2),C=(O[0],O[1]),m=Object(c.useContext)(o),Q=m.hasPlayed,B=m.setHasPlayed,M=m.activePlayerIndex,I=m.setActivePlayer,D=Object(c.useContext)(n),w=D.numbers,E=D.setRolledNumbers,H=Object(c.useContext)(g),x=H.scores,N=H.setScores,f=H.setWinner,z=Object(c.useState)([1,2,3,4,5,6,7,8,9]),G=Object(a.a)(z,2),p=G[0],y=G[1];var Y=h.a.useCallback((function(){var A=[];return w.forEach((function(e){void 0!==p.find((function(A){return A===e}))&&A.push(e)})),A.length>0}),[w,p]);Object(c.useEffect)((function(){console.log("numbers[2] === 'playTwice'","playTwice"===w[2]),M===e&&0!==p.length&&"playTwice"===w[2]&&Q&&(Y()||(r(),I(),E([]),B(!1)))}),[f,e,r,M,Q,Y,p,t,B,I,E]);var k=Object(c.useState)(!1),Z=Object(a.a)(k,2),T=Z[0],S=Z[1];function R(A){!function(A){var e=p,t=e.indexOf(A);e.splice(t,1),y(e)}(A),N({team:e+1,score:p}),console.log("scores",x),setTimeout((function(){S(!0)}),1100),setTimeout((function(){return C()}),1200),setTimeout((function(){return S(!1)}),3e3)}return Object(c.useEffect)((function(){console.log("scores[team]",x[e],e)}),[x,e]),Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"building ".concat(T?"shake":""),children:[Object(i.jsx)(b,{number:1,selectable:w,callback:function(){return R(1)},building:t,team:e}),Object(i.jsx)(b,{number:2,selectable:w,callback:function(){return R(2)},building:t,team:e}),Object(i.jsx)(b,{number:3,selectable:w,callback:function(){return R(3)},building:t,team:e}),Object(i.jsx)(b,{number:4,selectable:w,callback:function(){return R(4)},building:t,team:e}),Object(i.jsx)(b,{number:5,selectable:w,callback:function(){return R(5)},building:t,team:e}),Object(i.jsx)(b,{number:6,selectable:w,callback:function(){return R(6)},building:t,team:e}),Object(i.jsx)(b,{number:7,selectable:w,callback:function(){return R(7)},building:t,team:e}),Object(i.jsx)(b,{number:8,selectable:w,callback:function(){return R(8)},building:t,team:e}),Object(i.jsx)(b,{number:9,selectable:w,callback:function(){return R(9)},building:t,team:e})]})})},C=function(A){var e=A.id,t=A.color,h=Object(c.useContext)(o).activePlayerIndex;return Object(i.jsxs)("div",{className:"team",children:[Object(i.jsxs)("h2",{className:"team-name Patua team-".concat(t," ").concat(e===h?"highlight hvr-pulse-grow":""),children:["Team ",e+1]}),Object(i.jsx)(O,{team:e,color:t})]})},m=function(){var A=Object(c.useContext)(o),e=A.numberOfTeams,t=(A.setNumberOfTeams,Object(c.useState)([])),v=Object(a.a)(t,2),s=v[0],n=v[1],l=["red","green","pink","yellow","blue"].sort((function(){return Math.random()-.5})),r=h.a.useCallback((function(){for(var A=[],t=0;t<e;t++)A.push(Object(i.jsx)(C,{id:t,color:l[t]}));n(A)}),[e]);return Object(c.useEffect)((function(){r()}),[e,r]),Object(i.jsx)("div",{className:"teams-container",children:s})},Q=t(3);var B=function(A){return Object(i.jsxs)("svg",Object(Q.a)(Object(Q.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 10 48 44.6"},A),{},{className:"dice-icon",children:[Object(i.jsx)("path",{class:"st0",d:"M16.9,0.3c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6C17.9,0.7,17.5,0.3,16.9,0.3z M6.9,1.3\r c-0.3,0-0.5,0.1-0.7,0.3C5.9,2,5.9,2.6,6.2,3l4,4c0.4,0.4,1,0.4,1.4,0c0.4-0.4,0.4-1,0-1.4l-4-4C7.5,1.4,7.2,1.3,6.9,1.3z M38.6,2.3\r c-0.6,0-1.3,0.1-1.9,0.4L26,7c-2.5,1.1-3.8,4-2.7,6.5l4.4,10.6c1.1,2.5,4,3.8,6.5,2.7l10.6-4.4c2.5-1.1,3.8-4,2.7-6.5L43.2,5.3\r C42.4,3.4,40.5,2.3,38.6,2.3z M38.6,4.2c1.2,0,2.3,0.7,2.7,1.9l4.4,10.6c0.6,1.6-0.1,3.3-1.6,3.9L33.5,25c-1.6,0.6-3.3-0.1-3.9-1.6\r l-4.4-10.6c-0.6-1.6,0.1-3.3,1.6-3.9l10.6-4.4C37.8,4.3,38.2,4.2,38.6,4.2z M5.9,11.3c-0.6,0-1,0.4-1,1s0.4,1,1,1h6c0.6,0,1-0.4,1-1\r s-0.4-1-1-1H5.9z M31.4,11.3c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5l0,0c0.8,0,1.5-0.7,1.5-1.5l0,0C32.9,11.9,32.3,11.3,31.4,11.3z\r M39.4,15.3c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S40.3,15.3,39.4,15.3z M9.3,17.3c-1.9,0-3.8,1.2-4.6,3.1\r L0.3,30.9c-1.1,2.5,0.2,5.5,2.7,6.5l10.6,4.4c2.5,1.1,5.5-0.2,6.5-2.7l4.4-10.6c1.1-2.5-0.2-5.5-2.7-6.5l-10.6-4.4\r C10.6,17.4,9.9,17.2,9.3,17.3z M9.3,19.2c0.4,0,0.8,0.1,1.2,0.2l10.6,4.4c1.6,0.6,2.3,2.4,1.6,3.9l-4.4,10.6\r c-0.6,1.6-2.4,2.3-3.9,1.6L3.8,35.6c-1.6-0.6-2.3-2.4-1.6-3.9l4.4-10.6C7,19.9,8.1,19.3,9.3,19.2z M10.4,23.3\r c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S11.3,23.3,10.4,23.3z M17.4,26.3c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5\r s1.5-0.7,1.5-1.5S18.3,26.3,17.4,26.3z M7.4,30.3c-0.8,0-1.5,0.7-1.5,1.5c0,0.8,0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5\r C8.9,30.9,8.3,30.3,7.4,30.3z M34.9,31.3c-0.5,0-1,0.5-1,1c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1c0-0.6-0.4-1-1-1H34.9z M14.4,33.3\r c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S15.3,33.3,14.4,33.3z M29.9,36.3c-0.5,0-1,0.5-1,1v6c0,0.6,0.4,1,1,1\r s1-0.4,1-1v-6C30.9,36.7,30.5,36.3,29.9,36.3z M35.9,37.3c-0.3,0-0.5,0.1-0.7,0.3c-0.4,0.4-0.4,1,0,1.4l0,0l0,0l4,4\r c0.4,0.4,1,0.4,1.4,0c0.4-0.4,0.4-1,0-1.4l-4-4l0,0l0,0C36.4,37.4,36.2,37.3,35.9,37.3z"}),Object(i.jsx)("path",{class:"st1",d:"M17,0.8c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6C18,1.2,17.6,0.8,17,0.8z M7,1.8\r c-0.3,0-0.5,0.1-0.7,0.3c-0.4,0.4-0.4,1,0,1.4l4,4c0.4,0.4,1,0.4,1.4,0c0.4-0.4,0.4-1,0-1.4l-4-4C7.5,1.9,7.3,1.8,7,1.8z M38.6,2.8\r c-0.6,0-1.3,0.1-1.9,0.4L26.1,7.6c-2.5,1.1-3.8,4-2.7,6.5l4.4,10.6c1.1,2.5,4,3.8,6.5,2.7L44.9,23c2.5-1.1,3.8-4,2.7-6.5L43.2,5.9\r C42.4,4,40.6,2.8,38.6,2.8z M38.6,4.8c1.2,0,2.3,0.7,2.7,1.9l4.4,10.6c0.6,1.6-0.1,3.3-1.6,3.9l-10.6,4.4c-1.6,0.6-3.3-0.1-3.9-1.6\r l-4.4-10.6c-0.6-1.6,0.1-3.3,1.6-3.9L37.5,5C37.8,4.9,38.2,4.8,38.6,4.8z M6,11.8c-0.6,0-1,0.4-1,1s0.4,1,1,1h6c0.6,0,1-0.4,1-1\r s-0.4-1-1-1H6z M31.5,11.8c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5l0,0c0.8,0,1.5-0.7,1.5-1.5l0,0C33,12.5,32.3,11.8,31.5,11.8z\r M39.5,15.8c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5c0.8,0,1.5-0.7,1.5-1.5S40.3,15.8,39.5,15.8z M9.4,17.8c-1.9,0-3.8,1.2-4.6,3.1\r L0.4,31.5C-0.7,34,0.5,37,3.1,38l10.6,4.4c2.5,1.1,5.5-0.2,6.5-2.7l4.4-10.6c1.1-2.5-0.2-5.5-2.7-6.5l-10.6-4.4\r C10.7,17.9,10,17.8,9.4,17.8z M9.4,19.8c0.4,0,0.8,0.1,1.2,0.2l10.6,4.4c1.6,0.6,2.3,2.4,1.6,3.9l-4.4,10.6\r c-0.6,1.6-2.4,2.3-3.9,1.6L3.9,36.2c-1.6-0.6-2.3-2.4-1.6-3.9l4.4-10.6C7.1,20.5,8.2,19.8,9.4,19.8z M10.5,23.8\r c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S11.3,23.8,10.5,23.8z M17.5,26.8c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5\r s1.5-0.7,1.5-1.5S18.3,26.8,17.5,26.8z M7.5,30.8c-0.8,0-1.5,0.7-1.5,1.5c0,0.8,0.7,1.5,1.5,1.5S9,33.1,9,32.3\r C9,31.5,8.3,30.8,7.5,30.8z M35,31.8c-0.5,0-1,0.5-1,1c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1s-0.4-1-1-1H35z M14.5,33.8\r c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S15.3,33.8,14.5,33.8z M30,36.8c-0.5,0-1,0.5-1,1v6c0,0.6,0.4,1,1,1\r s1-0.4,1-1v-6C31,37.2,30.6,36.8,30,36.8z M36,37.8c-0.3,0-0.5,0.1-0.7,0.3c-0.4,0.4-0.4,1,0,1.4l0,0l0,0l4,4c0.4,0.4,1,0.4,1.4,0\r c0.4-0.4,0.4-1,0-1.4l-4-4l0,0l0,0C36.5,37.9,36.3,37.8,36,37.8z"})]}))};var M=function(A){var e=A.handleClick;return Object(i.jsx)("div",{className:"close-icon",onClick:function(){return e()},children:Object(i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 41.3 41.3",children:Object(i.jsx)("path",{d:"M37.6 41.3c-1 0-1.9-.4-2.6-1.1L20.6 25.8 6.3 40.2c-1.4 1.4-3.7 1.4-5.2 0s-1.4-3.7 0-5.2l14.4-14.4L1.1 6.3c-1.4-1.4-1.4-3.7 0-5.2s3.7-1.4 5.2 0l14.4 14.4L35 1.1c1.4-1.4 3.7-1.4 5.2 0 1.4 1.4 1.4 3.7 0 5.2L25.8 20.6 40.2 35c1.4 1.4 1.4 3.7 0 5.2-.7.7-1.6 1.1-2.6 1.1z"})})})},I=(t(13),h.a.forwardRef((function(A,e){var t=A.faceColor,c=void 0===t?"#115DBF":t,h=A.dotColor,v=void 0===h?"#F2CF63":h;return Object(i.jsxs)("ol",{className:"die-list even-roll","data-roll":"1",id:"die-1",ref:e,children:[Object(i.jsx)("li",{className:"die-item",style:{backgroundColor:c},"data-side":"1",children:Object(i.jsx)("span",{className:"dot",style:{backgroundColor:v}})}),Object(i.jsxs)("li",{className:"die-item",style:{backgroundColor:c},"data-side":"2",children:[Object(i.jsx)("span",{className:"dot",style:{backgroundColor:v}}),Object(i.jsx)("span",{className:"dot",style:{backgroundColor:v}})]}),Object(i.jsxs)("li",{className:"die-item",style:{backgroundColor:c},"data-side":"3",children:[Object(i.jsx)("span",{className:"dot",style:{backgroundColor:v}}),Object(i.jsx)("span",{className:"dot",style:{backgroundColor:v}}),Object(i.jsx)("span",{className:"dot",style:{backgroundColor:v}})]}),Object(i.jsxs)("li",{className:"die-item",style:{backgroundColor:c},"data-side":"4",children:[Object(i.jsx)("span",{className:"dot",style:{backgroundColor:v}}),Object(i.jsx)("span",{className:"dot",style:{backgroundColor:v}}),Object(i.jsx)("span",{className:"dot",style:{backgroundColor:v}}),Object(i.jsx)("span",{className:"dot",style:{backgroundColor:v}})]}),Object(i.jsxs)("li",{className:"die-item",style:{backgroundColor:c},"data-side":"5",children:[Object(i.jsx)("span",{className:"dot",style:{backgroundColor:v}}),Object(i.jsx)("span",{className:"dot",style:{backgroundColor:v}}),Object(i.jsx)("span",{className:"dot",style:{backgroundColor:v}}),Object(i.jsx)("span",{className:"dot",style:{backgroundColor:v}}),Object(i.jsx)("span",{className:"dot",style:{backgroundColor:v}})]}),Object(i.jsxs)("li",{className:"die-item",style:{backgroundColor:c},"data-side":"6",children:[Object(i.jsx)("span",{className:"dot",style:{backgroundColor:v}}),Object(i.jsx)("span",{className:"dot",style:{backgroundColor:v}}),Object(i.jsx)("span",{className:"dot",style:{backgroundColor:v}}),Object(i.jsx)("span",{className:"dot",style:{backgroundColor:v}}),Object(i.jsx)("span",{className:"dot",style:{backgroundColor:v}}),Object(i.jsx)("span",{className:"dot",style:{backgroundColor:v}})]})]})}))),D=function(){var A=Object(c.useContext)(n).setRolledNumbers,e=Object(c.useContext)(o),t=(e.activePlayerIndex,e.setActivePlayer);return Object(i.jsx)("button",{onClick:function(){A([]),t()},className:"btn  Patua",children:"Skip turn"})},w=function(A){var e=A.item,t=A.show;return Object(i.jsxs)("div",{className:"special-item-modal ".concat(t&&"zoomInDown"),children:["bomb"===e&&Object(i.jsx)("h1",{className:"Patua",children:"Choose any story!"}),"bomb"===e&&Object(i.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjoAAAJ2CAYAAABW0ijXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFHGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTA3LTA3VDE0OjMzOjQ3KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wNy0wN1QxNDozNzo1NyswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wNy0wN1QxNDozNzo1NyswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxNzcwNDc5Mi02ODdm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",className:"special-item-image",alt:"bomb"}),"playTwice"===e&&Object(i.jsx)("h1",{className:"Patua",children:"Play twice!"}),"playTwice"===e&&Object(i.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAADcCAYAAACiTknJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFFmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTA3LTA3VDE0OjM2KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wNy0wN1QxNDozODoyNSswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wNy0wN1QxNDozODoyNSswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpkZjk1MjAzNC0zZTk2LTA4NDQtOGZiYy02YTY0N2UwOTBhOWYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ZGY5NTIwMzQtM2U5Ni0wODQ0LThmYmMtNmE2NDdlMDkwYTlmIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZGY5NTIwMzQtM2U5Ni0wODQ0LThmYmMtNmE2NDdlMDkwYTlmIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpkZjk1MjAzNC0zZTk2LTA4NDQtOGZiYy02YTY0N2UwOTBhOWYiIHN0RXZ0OndoZW49IjIwMjEtMDctMDdUMTQ6MzYrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4S6+KfAAADGklEQVR42u3dsU0EMRBAUYdUQDMIJGI6oAzqoAUaIEaUQEwRhAToMjZZMiKCCYYbr+eN9NOzzn7R7sk3xiKzbdte0TDAAAMMMAYYA4wBxgADDDDAAAOMAcYBJ7V/X8X6vIj1NkIBCAwwwAADDDDAAAMMMMAAAwwwwAADDDDA9IUQPuBsCFUlAwQGGGCAAQYYYIABBhhggAEGGGCAAQYYYICZAMJpxJodAjDAAAMMMMAAAwwwwAADDDDAAAMMMMAAA0xfMMkbvcrnAQMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwBzokX/2wVWBmRxWOkBggAEGGGCAAQYYYIABBhhggAEGGGCAAaYDmOwN1FkKwwJGwAgYASNggAEGGGCAETACRsD89nhzGerr/aVV0X1p92oAGGCAAQYYYIABBhhggAEGGGCAAQYYYIABZrnKrgUBBhhggAFGwAADDDDAAAMMMMAAAwwwwEwIJhtWFEIVmDFGqNnXBQYYYIABBhhggAEGGGCAAQYYYIABBhhggPk/MB+vT6E83vdqABhggAEGGGCAAQYYAQMMMMAAAwwwwABzdDBg/V10X4ABBhhggAEGGGCAAQYYYIABBhhggAEGGGDWg7VKy0AABhhggAEGGGCAAQYYYIABBhhggAEGGGAaTHRj7m6vQ+0PI7WqdYEBBhhggAEGGGCAAQYYYIABBhhggAEGGGDWg9ANTHTddj8CBwYYYIABBhhggAEGGGCAAQYYYIABBhhggAEGGGCAAQYYYIABBhhggAEGGGCAAQYYYIABJh1M9KLj7AMJdwqWvO4yf+EHDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAUw6m6tUAMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADzHEm/IXvn1vlJnBggAEGGGCAAQYYYIABBhhggAEGGGCAAQasrAOpWteJAwMMMMAAAwwwwAADjAEGGGCAAQYYYIDpCyZ6PUc2mOx1nTgwwAADDDDAAAMMMMAYYIABBhhggAEGGLDOfSAgAAMMMMAYYAwwBhhggAEGGGCAAcYAUz4/yM/DJImsTCIAAAAASUVORK5CYII=",className:"special-item-image",alt:"worker"})]})};function E(A){A.classList.toggle("odd-roll"),A.classList.toggle("even-roll")}function H(A,e){return A=Math.ceil(A),e=Math.floor(e),Math.floor(Math.random()*(e-A+1))+A}var x=function(){var A=Object(c.useState)(!1),e=Object(a.a)(A,2),t=(e[0],e[1]),h=Object(c.useRef)(),v=Object(c.useRef)(),s=Object(c.useContext)(n).setRolledNumbers,l=Object(c.useContext)(o).setHasPlayed,r=Object(c.useState)(""),b=Object(a.a)(r,2),u=b[0],g=b[1],d=Object(c.useState)(!1),j=Object(a.a)(d,2),O=j[0],C=j[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(w,{item:u,show:O}),Object(i.jsxs)("div",{className:"dice-container",onClick:function(){!function(){var A=[];A.push(H(1,6)),A.push(H(1,6)),E(h.current),E(v.current),h.current.dataset.roll=A[0],v.current.dataset.roll=A[1];var e=A.reduce((function(A,e){return A+e}),0);7===e?(s(["bomb"]),g("bomb"),C(!0),setTimeout((function(){return C(!1)}),2e3)):e>=10?(A.push("playTwice"),s(A),g("playTwice"),C(!0),setTimeout((function(){return C(!1)}),2e3)):(A.push(e),s(A))}(),l(!0),setTimeout((function(){return t(!1)}),2500)},children:[Object(i.jsx)(I,{ref:h,faceColor:"var(--red)",dotColor:"var(--yellow)"}),Object(i.jsx)(I,{ref:v,faceColor:"var(--lime)",dotColor:"var(--red-shadow)"})]})]})};var N=function(A){return Object(i.jsxs)("svg",Object(Q.a)(Object(Q.a)({id:"start_svg__Layer_1",xmlns:"http://www.w3.org/2000/svg",x:0,y:0,viewBox:"0 0 81.8 54.6",xmlSpace:"preserve"},A),{},{children:[Object(i.jsx)("style",{children:".start_svg__st0{fill:#d77643}.start_svg__st2{fill:#1653b4}.start_svg__st3{fill:#3074dc}"}),Object(i.jsx)("path",{className:"start_svg__st0",d:"M22.7 50h4.5v4.5h-4.5zM18.2 45.5h4.5V50h-4.5zM13.6 40.9h4.5v4.5h-4.5zM9.1 36.4h4.5v4.5H9.1zM4.5 31.8H9v4.5H4.5zM0 27.3h4.5v4.5H0zM77.3 40.9h-50v4.6h54.5v-4.6z"}),Object(i.jsx)("path",{fill:"#fec243",d:"M77.3 9.1h-50V0h-4.6v4.5h-4.5v4.6h-4.6v4.5H9.1v4.6H4.5v4.5H0v4.6h4.5v4.5h4.6v4.6h4.5v4.5h4.6v4.6h4.5V50h4.6v-9.1h54.5V9.1z"}),Object(i.jsxs)("g",{children:[Object(i.jsx)("path",{className:"start_svg__st2",d:"M30.9 20.8h.7v1.4h-.7v.7h-4.2v.7h4.2v.7h.7v4.2h-.7v.7h-.7v.8h-7.8v-.7h-.7v-2.1h.7v-.7H28v-.7h-5.6V25h-.7v-3.5h.7v.7h.7v-.7h.7v-.7h-.7v-.7h7.8v.7zM33.7 22.2H33v-1.4h.7v1.4zm8.5-1.4h.7v1.4h-.7v.7H40v6.4h-.7v.7h-2.8v-.7h-.7v-6.4h-2.1v-.7h.7v-.7h.7v-.7h-1.4v-.7h8.5v.7zM53.5 22.2h.7v7.1h-.7v.7H52v-.7h-.7V25h-2.1v4.2h-.7v.8H45v-.7h-.7v-7.8h.7v.7h.7v-.7h.7v-.7h-.7v-.7H52v.7h.7v.7h.7v.7zm-4.3 1.4h2.1v-1.4h-2.1v1.4zM64.7 21.5h.7v2.8h-.7v.7H64v.7h.7v.7h.7v2.8h-.7v.8h-1.4v-.7h-.7v-.7h-.7v-.7h-.7v-.7h-.7v2.1h-.7v.7h-3.5v-.7h-.7v-8.5h.7v1.4h.7v-.7h.7v-.7h-1.4v-.7H64v.7h.7v.7zm-2.1.7h-2.1v1.4h2.1v-1.4zM67.6 22.2h-.7v-1.4h.7v1.4zm8.4-1.4h.7v1.4H76v.7h-2.1v6.4h-.7v.7h-2.8v-.7h-.7v-6.4h-2.1v-.7h.7v-.7h.7v-.7h-1.4v-.7H76v.7z"}),Object(i.jsx)("g",{children:Object(i.jsx)("path",{className:"start_svg__st2",d:"M30.9 20.2h.7v1.4h-.7v.7h-4.2v.7h4.2v.7h.7v4.2h-.7v.7h-.7v.7h-7.8v-.7h-.7v-2.1h.7v-.7H28v-.7h-5.6v-.7h-.7v-3.5h.7v.7h.7v-.7h.7v-.7h-.7v-.7h7.8v.7zM33.7 21.6H33v-1.4h.7v1.4zm8.5-1.4h.7v1.4h-.7v.7h-2.1v6.4h-.7v.7h-2.8v-.7h-.7v-6.4h-2.1v-.7h.7v-.7h.7v-.7h-1.4v-.7h8.5v.7zM53.5 21.6h.7v7.1h-.7v.7h-1.4v-.7h-.7v-4.2h-2.1v4.2h-.7v.7H45v-.7h-.7v-7.8h.7v.7h.7v-.7h.7v-.7h-.7v-.7h6.4v.7h.7v.7h.7v.7zM49.2 23h2.1v-1.4h-2.1V23zM64.8 20.9h.7v2.8h-.7v.7h-.7v.7h.7v.7h.7v2.8h-.7v.7h-1.4v-.7h-.7v-.7H62v-.7h-.7v-.7h-.7v2.1h-.7v.7h-3.5v-.7h-.7v-8.5h.7v1.4h.6v-.7h.7v-.7h-1.4v-.7h7.8v.7h.7v.8zm-2.1.7h-2.1V23h2.1v-1.4zM67.6 21.6h-.7v-1.4h.7v1.4zm8.5-1.4h.7v1.4h-.7v.7H74v6.4h-.7v.7h-2.8v-.7h-.7v-6.4h-2.1v-.7h.7v-.7h.6v-.7h-1.4v-.7h8.5v.7z"})}),Object(i.jsx)("g",{children:Object(i.jsx)("path",{className:"start_svg__st3",d:"M30.9 20.8h.7v1.4h-.7v.7h-4.2v.7h4.2v.7h.7v4.2h-.7v.7h-.7v.8h-7.8v-.7h-.7v-2.1h.7v-.7H28v-.7h-5.6V25h-.7v-3.5h.7v.7h.7v-.7h.7v-.7h-.7v-.7h7.8v.7zM33.7 22.2H33v-1.4h.7v1.4zm8.5-1.4h.7v1.4h-.7v.7H40v6.4h-.7v.7h-2.8v-.7h-.7v-6.4h-2.1v-.7h.7v-.7h.7v-.7h-1.4v-.7h8.5v.7zM53.5 22.2h.7v7.1h-.7v.7H52v-.7h-.7V25h-2.1v4.2h-.7v.8H45v-.7h-.7v-7.8h.7v.7h.7v-.7h.7v-.7h-.7v-.7H52v.7h.7v.7h.7v.7zm-4.3 1.4h2.1v-1.4h-2.1v1.4zM64.7 21.5h.7v2.8h-.7v.7H64v.7h.7v.7h.7v2.8h-.7v.8h-1.4v-.7h-.7v-.7h-.7v-.7h-.7v-.7h-.7v2.1h-.7v.7h-3.5v-.7h-.7v-8.5h.7v1.4h.7v-.7h.7v-.7h-1.4v-.7H64v.7h.7v.7zm-2.1.7h-2.1v1.4h2.1v-1.4zM67.6 22.2h-.7v-1.4h.7v1.4zm8.4-1.4h.7v1.4H76v.7h-2.1v6.4h-.7v.7h-2.8v-.7h-.7v-6.4h-2.1v-.7h.7v-.7h.7v-.7h-1.4v-.7H76v.7z"})})]})]}))},f=function(){var A=Object(c.useState)(!1),e=Object(a.a)(A,2),t=e[0],h=e[1],v=Object(c.useState)(!0),s=Object(a.a)(v,2),n=s[0],o=s[1];Object(c.useContext)(g).scores;return Object(i.jsxs)(i.Fragment,{children:[n&&Object(i.jsx)("div",{className:"tooltip wobble-horizontal",children:Object(i.jsx)(N,{})}),Object(i.jsxs)("div",{className:"dice-menu ".concat(t?"opened":""),children:[t?"":Object(i.jsx)(B,{onClick:function(){n&&o(!1),h(!0)}}),t?Object(i.jsx)(M,{handleClick:function(){return h(!1)}}):"",t?Object(i.jsx)(x,{}):"",t?Object(i.jsx)(D,{}):""]})]})},z=function(){var A=Object(c.useContext)(g).findWinner;return Object(i.jsx)("button",{onClick:function(){A()},className:"btn  Patua",children:"End Game"})};var G=function(A){return Object(i.jsxs)("svg",Object(Q.a)(Object(Q.a)({id:"endgame_svg__Layer_1",xmlns:"http://www.w3.org/2000/svg",x:0,y:0,viewBox:"0 0 48 45",xmlSpace:"preserve"},A),{},{children:[Object(i.jsx)("style",{children:".endgame_svg__st0{fill:#d77643}.endgame_svg__st1{fill:#fec243}"}),Object(i.jsx)("path",{className:"endgame_svg__st0",d:"M10.1 9.9h.8v.8h-.8v.8H5.5V13h4.6v.8h.8v.8h-.8v.8H5.5v1.5h4.6v.8h.8V19h-.8v.8H1V19H.2V9.9H1v1.5h.8v-.8h.8v-.7H1v-.8h9.1v.8zM22.2 9.9h.8V19h-.8v.8h-2.3V19h-.8v-2.3h-.8v-.8h-.8v3h-.8v.8h-3.8V19h-.8V9.9h.8v1.5h.8v-.8h.8v-.7H13v-.8h3.8v.8h.8v3h.8v.8h.8V9.9h.8v-.8h2.3v.8zM34.4 11.4h.8v6.8h-.8v.8h-.8v.8h-8.3V19h-.8V9.9h.8v1.5h.7v-.8h.8v-.7h-1.5v-.8h7.6v.8h.8v.8h.8v.7zm-3.1.8v-.8h-1.5v5.3h1.5v-.8h.8v-3.8h-.8zM10.1 24.7h.8v.8h-.8v.8H5.5v5.3h2.3V30H7v-.8h-.7v-.8H7v-.8h3v.8h.8V33H10v.8h-.7v.8H1.7v-.8H1V33H.2v-7.6H1v.8h.8v-.8h.8v-.8h-.9v-.8H10v.9zM22.2 26.2h.8v7.6h-.8v.8h-1.5v-.8h-.8v-4.6h-2.3v4.6h-.8v.8H13v-.8h-.8v-8.3h.8v.8h.8v-.8h.8v-.8h-.8v-.8h6.8v.8h.8v.8h.8v.7zm-4.5 1.5H20v-1.5h-2.3v1.5zM35.1 24.7h.8v9.1h-.8v.8h-2.3v-.8H32v-2.3h-.8v.8h-.8v-.8h-.8v2.3H29v.8h-3.8v-.8h-.8v-9.1h.8v1.5h.8v-.8h.8v-.8h-1.5v-.8H29v.8h.8v3h.8v.8h.8v-.8h.8v-3h.8v-.8h2.3v.9zM47.2 24.7h.8v.8h-.8v.8h-4.6v1.5h4.6v.8h.8v.8h-.8v.6h-4.6v1.5h4.6v.8h.8v1.5h-.8v.8h-9.1v-.8h-.8v-9.1h.8v1.5h.8v-.8h.8v-.8h-1.5v-.8h9.1v.9z"}),Object(i.jsx)("g",{children:Object(i.jsx)("path",{className:"endgame_svg__st1",d:"M10 10.6h.8v.8H10v.8H5.4v1.5H10v.8h.8v.8H10v.8H5.4v1.5H10v.8h.8v1.5H10v.8H.9v-.8H.1v-9.1h.8v1.5h.8v-.8h.8v-.8H.9v-.9H10v.8zM22.1 10.6h.8v9.1h-.8v.8h-2.3v-.8H19v-2.3h-.8v-.8h-.8v3h-.8v.8H13v-.8h-.8v-9.1h.8V12h.8v-.8h.8v-.8H13v-.6h3.8v.8h.8v3h.8v.8h.8v-3.8h.8v-.8h2.3v.8zM34.2 12.1h.8v6.8h-.8v.8h-.8v.8h-8.3v-.8h-.8v-9.1h.8v1.5h.8v-.8h.8v-.8h-1.5v-.7h7.6v.8h.8v.8h.8v.7zm-3 .8v-.8h-1.5v5.3h1.5v-.8h.8v-3.8h-.8z"})}),Object(i.jsx)("g",{children:Object(i.jsx)("path",{className:"endgame_svg__st1",d:"M10 25.4h.8v.8H10v.8H5.4v5.3h2.3v-1.5h-.8V30h-.7v-.8H7v-.8h3v.8h.8v4.6H10v.8h-.8v.8H1.6v-.8H.9v-.8H.1v-7.6h.8v.8h.8v-.8h.8v-.8h-.9v-.8H10v.8zM22.1 26.9h.8v7.6h-.8v.8h-1.5v-.8h-.8v-4.6h-2.3v4.6h-.8v.8H13v-.8h-.8v-8.3h.8v.8h.8v-.8h.8v-.8h-.8v-.8h6.8v.8h.8v.8h.8v.7zm-4.5 1.5h2.3v-1.5h-2.3v1.5zM35 25.4h.8v9.1H35v.8h-2.3v-.8H32v-2.3h-.8v.8h-.8v-.8h-.8v2.3h-.8v.8H25v-.8h-.8v-9.1h.8v1.5h.8v-.8h.8v-.8h-1.5v-.8h3.8v.8h.8v3h.8v.8h.8v-.8h.7v-3h.8v-.8H35v.9zM47.1 25.4h.8v.8h-.8v.8h-4.6v1.5h4.6v.8h.8v.8h-.8v.8h-4.6v1.5h4.6v.6h.8v1.5h-.8v.8H38v-.8h-.8v-9.1h.8v1.5h.8v-.8h.8v-.8H38v-.8h9.1v.9z"})})]}))},p=function(){var A=Object(c.useState)(!1),e=Object(a.a)(A,2),t=e[0],h=e[1];return Object(i.jsxs)("div",{className:"end-game-menu ".concat(t?"opened-right":""),children:[t?"":Object(i.jsx)(G,{className:"end-game-icon",onClick:function(){return h(!0)}}),t?Object(i.jsx)(M,{handleClick:function(){return h(!1)}}):"",t?Object(i.jsx)(z,{}):""]})};var y=function(){var A=Object(c.useContext)(g).blur,e=function(){var A=h.a.useState([]),e=Object(a.a)(A,2),t=e[0],c=e[1];return{numbers:t,setRolledNumbers:h.a.useCallback((function(A){"bomb"===A[0]?c([1,2,3,4,5,6,7,8,9]):c(A)}),[])}}();return Object(c.useEffect)((function(){window.onbeforeunload=function(){return"show warning"}}),[]),Object(i.jsx)("div",{className:"App ".concat(A?"blur":""),children:Object(i.jsxs)(n.Provider,{value:e,children:[Object(i.jsx)(f,{}),Object(i.jsx)(p,{}),Object(i.jsx)(m,{})]})})},Y=function(){var A=Object(c.useState)(!0),e=Object(a.a)(A,2),t=e[0],h=e[1],v=Object(c.useState)(4),s=Object(a.a)(v,2),n=s[0],l=s[1],r=Object(c.useContext)(o).setNumberOfTeams,b=Object(c.useContext)(g),u=b.scores,d=b.setScores,j=b.setBlur;return Object(i.jsxs)("div",{className:"modal bounceInRight",style:{display:t?"inline-flex":"none"},children:[Object(i.jsx)("h1",{className:"bigShoulders hvr-pulse-grow",children:"Demolition"}),Object(i.jsx)("p",{className:"message Patua",children:"Number of Teams:"}),Object(i.jsxs)("div",{className:"modal-options",children:[Object(i.jsx)("button",{className:"btn round-corners minus",onClick:function(){n>1&&l(n-1)},disabled:2===n}),Object(i.jsx)("button",{className:"btn no-effects Patua",id:"numberOfTeams",children:n}),Object(i.jsx)("button",{className:"btn round-corners plus",onClick:function(){n<5&&l(n+1)},disabled:5===n})]}),Object(i.jsxs)("div",{className:"modal-options",children:[Object(i.jsx)("button",{className:"btn reset Patua",children:"Reset"}),Object(i.jsx)("button",{className:"btn Patua",onClick:function(){r(n),function(){for(var A=1;A<=n;A++)d({team:A,score:[1,2,3,4,5,6,7,8,9]});console.log("scores",u)}(),j(!1),h(!1)},children:"Go!"})]})]})},k=t.p+"static/media/funny-celebrate-5.c1d5b0d7.gif",Z=t.p+"static/media/funny-celebrate-8.f5f796dc.gif",T=t.p+"static/media/funny-celebrate-14.7ea319c1.gif",S=t.p+"static/media/funny-celebrate-56.4a95ac50.gif",R=t.p+"static/media/pokemon.97de7445.gif",L=t.p+"static/media/tenor.2db474ba.gif",P=function(){var A=Object(c.useState)(!1),e=Object(a.a)(A,2),t=e[0],h=e[1],v=Object(c.useState)(""),s=Object(a.a)(v,2),n=s[0],o=s[1],l=Object(c.useContext)(g),r=l.winner,b=l.setBlur,u=[k,Z,T,S,R,L];return Object(c.useEffect)((function(){void 0!==r&&(Array.isArray(r)&&0===r.length?window.location.reload():(o(function(A){var e;if(Array.isArray(A)){for(var t="",c=0;c<A.length;c++)0===c?t=A[c]:t+=", ".concat(A[c]);e=t+" won!"}else e="Team ".concat(A+1," won!");return e}(r)),h(!0),b(!0)))}),[r,b]),Object(i.jsxs)("div",{className:"modal bounceInRight",style:{display:t?"inline-flex":"none"},children:[Object(i.jsx)("h1",{className:"Patua",children:n}),Object(i.jsx)("img",{src:u[Math.floor(Math.random()*u.length)],alt:"celebration",className:"celebration-gif"})]})},W=function(){var A=u(),e=function(){var A=h.a.useState(0),e=Object(a.a)(A,2),t=e[0],c=e[1],v=h.a.useState(0),s=Object(a.a)(v,2),n=s[0],o=s[1],l=h.a.useState(!1),r=Object(a.a)(l,2),i=r[0],b=r[1],u=h.a.useCallback((function(A){o(A)}),[]),g=h.a.useCallback((function(A){c(void 0!=A?A:(t+1)%n)}),[t,n]),d=h.a.useCallback((function(A){b(A)}),[]);return{activePlayerIndex:t,numberOfTeams:n,setNumberOfTeams:u,setActivePlayer:g,hasPlayed:i,setHasPlayed:d}}();return Object(i.jsx)(g.Provider,{value:A,children:Object(i.jsxs)(o.Provider,{value:e,children:[Object(i.jsx)(y,{}),Object(i.jsx)(Y,{}),Object(i.jsx)(P,{})]})})},V=function(A){A&&A instanceof Function&&t.e(3).then(t.bind(null,15)).then((function(e){var t=e.getCLS,c=e.getFID,h=e.getFCP,v=e.getLCP,s=e.getTTFB;t(A),c(A),h(A),v(A),s(A)}))};s.a.render(Object(i.jsx)(h.a.StrictMode,{children:Object(i.jsx)(W,{})}),document.getElementById("root")),V()},5:function(A,e,t){}},[[14,1,2]]]);
//# sourceMappingURL=main.cd31d38f.chunk.js.map