(this["webpackJsonpreact-tictactoe"]=this["webpackJsonpreact-tictactoe"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),i=c.n(n),r=c(8),l=c.n(r),s=(c(14),c(2)),h=c(4),o=c(3);c(15);function j(e){for(var t=e.handleClick,c=e.board,n=e.highlight,i=[],r=function(e){for(var r=function(r){i.push(Object(a.jsx)("button",{className:"space ".concat(n["".concat(e,",").concat(r)]),onClick:function(){t(e,r)},id:"".concat(e).concat(r),children:Object(a.jsx)("div",{className:"print",children:c[e][r]})},"space-".concat(e).concat(r)))},l=0;l<3;l++)r(l)},l=0;l<3;l++)r(l);return Object(a.jsx)("div",{className:"board",children:i})}function u(e){var t=e.players,c=e.playerHighlight;console.log(t[0].score);for(var n=[],i=0;i<2;i++)n.push(Object(a.jsxs)("div",{className:"player-score",children:[Object(a.jsxs)("span",{className:"player-text ".concat(c[i]),children:[" ","Player ",t[i].player,":"]})," ",t[i].score," "]},"player-".concat(i)));return Object(a.jsx)("div",{className:"scores",children:n})}c(16);var b=function(){var e=Object(n.useState)([{player:1,mark:"X",score:0},{player:2,mark:"O",score:0}]),t=Object(o.a)(e,2),c=t[0],i=t[1],r=Object(n.useState)(Object(h.a)(Array(3)).map((function(){return Array(3).fill(null)}))),l=Object(o.a)(r,2),b=l[0],O=l[1],g=Object(n.useState)(c[0]),d=Object(o.a)(g,2),f=d[0],p=d[1],m=Object(n.useState)(!1),y=Object(o.a)(m,2),x=y[0],v=y[1],k=Object(n.useState)({}),N=Object(o.a)(k,2),S=N[0],C=N[1],T=Object(n.useState)(["playerHighlight",null]),A=Object(o.a)(T,2),H=A[0],F=A[1],P=Object(n.useState)(!0),E=Object(o.a)(P,2),I=E[0],w=E[1],B=Object(n.useState)("tic-tac-toe"),J=Object(o.a)(B,2),L=J[0],R=J[1],X=function(){for(var e=0;e<3;e++){var t;if(null!==b[0][e]&&b[0][e]===b[1][e]&&b[1][e]===b[2][e])return C((t={},Object(s.a)(t,"0,".concat(e),"highlight"),Object(s.a)(t,"1,".concat(e),"highlight"),Object(s.a)(t,"2,".concat(e),"highlight"),t)),!0}for(var c=0;c<3;c++){var a;if(null!==b[c][0]&&b[c][0]===b[c][1]&&b[c][1]===b[c][2])return C((a={},Object(s.a)(a,"".concat(c,",0"),"highlight"),Object(s.a)(a,"".concat(c,",1"),"highlight"),Object(s.a)(a,"".concat(c,",2"),"highlight"),a)),!0}var n,i;if(null!==b[0][0]&&b[0][0]===b[1][1]&&b[1][1]===b[2][2])return C((n={},Object(s.a)(n,"0,0","highlight"),Object(s.a)(n,"1,1","highlight"),Object(s.a)(n,"2,2","highlight"),n)),!0;if(null!==b[2][0]&&b[2][0]===b[1][1]&&b[1][1]===b[0][2])return C((i={},Object(s.a)(i,"2,0","highlight"),Object(s.a)(i,"1,1","highlight"),Object(s.a)(i,"0,2","highlight"),i)),!0;for(var r=0;r<b.length;r++)if(b[r].includes(null))return!1;return"Tie"},D=function(){w(!0),O(Object(h.a)(Array(3)).map((function(){return Array(3).fill(null)}))),p(c[0]),C([]),v(!1),F(["playerHighlight",null]),R("tic-tac-toe")};return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("div",{className:"message",children:L}),function(){if(x)return Object(a.jsx)("div",{className:"nextContainer",children:Object(a.jsx)("div",{className:"nextRound",children:Object(a.jsx)("button",{className:"next-btn",onClick:D,children:"Next Game"})})})}(),Object(a.jsx)("div",{className:"main",children:Object(a.jsx)(j,{handleClick:function(e,t){if(I)if(b[e][t])R("you cant move there"),setTimeout((function(){R("tic-tac-toe")}),2e3);else{var a=Object(h.a)(b);if(a[e][t]=f.mark,O(a),X()){R("Winner");var n=Object(h.a)(c);n[c.findIndex((function(e){return e.player===f.player}))].score++,i(n),w(!1),v(!0)}else"Tie"==X()?R("Tie"):(p(f.mark===c[0].mark?c[1]:c[0]),f===c[0]?F([null,"playerHighlight"]):F(["playerHighlight",null]))}else R("Click the next button")},board:b,highlight:S})}),Object(a.jsxs)("div",{children:['Player "',Object(a.jsx)("span",{className:"player-text",children:f.mark}),'" Turn']}),Object(a.jsx)("div",{children:Object(a.jsx)(u,{players:c,playerHighlight:H})}),Object(a.jsx)("button",{className:"next-btn",onClick:function(){w(!0),O(Object(h.a)(Array(3)).map((function(){return Array(3).fill(null)}))),p(c[0]),C([]),v(!1),F(["playerHighlight",null]),i([{player:1,mark:"X",score:0},{player:2,mark:"O",score:0}]),R("tic-tac-toe")},children:"RESET"})]})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),i(e),r(e)}))};l.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(b,{})}),document.getElementById("root")),O()}},[[17,1,2]]]);
//# sourceMappingURL=main.0dec3169.chunk.js.map