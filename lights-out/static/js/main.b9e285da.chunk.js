(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(n,e,t){n.exports=t(34)},26:function(n,e,t){},27:function(n,e,t){n.exports=t.p+"static/media/logo.5d5d9eef.svg"},28:function(n,e,t){},34:function(n,e,t){"use strict";t.r(e);var a=t(0),i=t.n(a),r=t(14),o=t.n(r),c=(t(26),t(2)),s=(t(27),t(28),t(17)),l=t(4),u=t(5),h=t(6),d=t(8),p=t(7),b=t(1),f=t(9),x=t(3);function m(){var n=Object(c.a)(["\nflex: 1 1 20%;\njustify-content: center;\nbackground: ","\nmargin: 5px;\nbox-shadow: ","\ntransition: all 0.3s ease-in-out;\nborder: none;\nborder-radius: 5px;\n&:before {\n  content:'';\n     float:left;\n     padding-top:100%;\n}\n\n\n"]);return m=function(){return n},n}var w=x.a.div(m(),function(n){return n.status?"#38a1e6":"#797979"},function(n){return n.status?"0px 0px 6px 4px #00fffa33,  1px 2px 6px 1px #aeaeaeae":"1px 2px 6px 1px #aeaeaeae"}),g=function(n){n.status,n.status;return i.a.createElement(w,{status:n.status,onClick:function(){n.changer(n.row,n.col)}}," ")};function v(){var n=Object(c.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: center;\n\n"]);return v=function(){return n},n}var y=function(n){function e(n){return Object(u.a)(this,e),Object(d.a)(this,Object(p.a)(e).call(this,n))}return Object(f.a)(e,n),Object(h.a)(e,[{key:"render",value:function(){var n=this,e=this.props.cells.map(function(e,t){return i.a.createElement(g,{status:e,changer:n.props.changer,row:n.props.row,col:t})});return i.a.createElement(j,{style:{display:"flex",justifyContent:"center"}},e)}}]),e}(a.Component),j=x.a.div(v()),k=y,O=function(n){return i.a.createElement("button",{style:{width:"40%",height:"60px",alignSelf:"center",margin:"4%",fontSize:"1.5rem",background:"#9c6ccc",border:"1px solid grey",color:"white",borderRadius:"5px",boxShadow:"1px 2px 6px 1px #9c6cccae"},onClick:n.onClick},n.children)},E=function(n){var e={width:"100vw",height:"100vh",background:"#61dafbe0",zIndex:"10",position:"absolute",left:"0",bottom:"0",right:"0",top:"0",display:"flex",flexDirection:"column",justifyContent:"center",opacity:n.win?"1":"0",transition:"opacity 300ms ease-in-out",animation:"fadeIn 150ms ease-in"};return i.a.createElement("div",{style:e},i.a.createElement("h2",null,"Congratulations!"),i.a.createElement(O,{onClick:n.newGame}," Play again? "))},C=function(n){function e(n){var t;return Object(u.a)(this,e),(t=Object(d.a)(this,Object(p.a)(e).call(this,n))).state={boardTiles:[[0,0,0,0,0],[0,0,1,0,0],[0,1,1,1,0],[0,0,1,0,0],[0,0,0,0,0]],win:!1},t.changer=t.changer.bind(Object(b.a)(t)),t.newGame=t.newGame.bind(Object(b.a)(t)),t.randomise=t.randomise.bind(Object(b.a)(t)),t.randomiseBoard=t.randomiseBoard.bind(Object(b.a)(t)),t.winCondition=t.winCondition.bind(Object(b.a)(t)),t.reset=t.reset.bind(Object(b.a)(t)),t}return Object(f.a)(e,n),Object(h.a)(e,[{key:"changer",value:function(n,e){for(var t=Object(l.a)(this.state.boardTiles),a=0;a<t.length;a++)if(a===n)for(var i=0;i<t[n].length;i++)n+1<t[n].length&&(t[n+1][e]=!t[n+1][e]),n-1>=0&&(t[n-1][e]=!t[n-1][e]),t[n][e]=!t[n][e],e+1<t.length&&(t[n][e+1]=!t[n][e+1]),e-1>=0&&(t[n][e-1]=!t[n][e-1]);this.setState(t),this.winCondition()&&this.setState(Object(s.a)({},this.state,{win:!0})),console.log(this.state)}},{key:"reset",value:function(){for(var n=Object(l.a)(this.state.boardTiles),e=0;e<n.length;e++)for(var t=0;t<n[e].length;t++)n[e][t]=0}},{key:"newGame",value:function(){var n=Object(l.a)(this.state.boardTiles);this.reset(),this.randomiseBoard(n),this.setState({boardTiles:n,win:!1})}},{key:"randomise",value:function(n){return Math.floor(Math.random()*n)}},{key:"randomiseBoard",value:function(n){for(var e=5,t=n.length,a=0;a<t;a++)for(this.randomise(t);0<t&&(this.randomise(t),e>0);a++)n[this.randomise(t)][this.randomise(t)]=1,e--}},{key:"winCondition",value:function(){for(var n=Object(l.a)(this.state.boardTiles),e=0,t=0;t<n.length;t++)for(var a=0;a<n[t].length;a++)n[t][a]&&e++;return 0===e}},{key:"render",value:function(){var n=this,e=this.state.boardTiles.map(function(e,t){return i.a.createElement(k,{cells:e,changer:n.changer,row:t})}),t=this.state.win&&i.a.createElement(E,{newGame:this.newGame,win:this.state.win});return i.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-around",background:"white",padding:"50px",boxShadow:"1px 1px 4px #aeaeaeae",width:"50%",maxWidth:"600px"}},e,t,i.a.createElement(O,{onClick:this.newGame},"New Game"))}}]),e}(a.Component);function G(){var n=Object(c.a)(["\ncolor: white;\ntext-shadow: 0 1px 0 #cccccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbbbbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaaaaa, 0 6px 1px rgba(0,0,0,0.1), 0 0 5px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.3), 0 3px 5px rgba(0,0,0,0.2), 0 5px 10px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.2), 0 20px 20px rgba(0,0,0,0.15);\nfont-family: 'Kaushan Script',cursive;\nfont-size: 30px;\nmargin: 0px;\nposition: absolute;\ntop: 0;\nright: 0;\nmargin-right: 20px;\n-webkit-transition: all 0.3s ease;\ntransition: all 0.3s ease;\ncursor: pointer;\n@media only screen and (max-width: 800px) {\n  text-align: center;\n  font-size: 20px;\n\n}\n\n"]);return G=function(){return n},n}function S(){var n=Object(c.a)(["\ncolor: white;\ncursor: pointer;\n"]);return S=function(){return n},n}function T(){var n=Object(c.a)(["\nposition: absolute;\ntop:0;\nwidth:100%;\nheight: 60px;\ndisplay: flex;\njustify-content: space-between;\nbackground: #FF7972;\nline-height: 40px;\nbox-shadow: inset 0px -1px 3px  #00000040;\nalign-items: center;\n@media only screen and (max-width: 800px) {\n  height: 40px;\n  line-height: 40px;\n\n}\n"]);return T=function(){return n},n}var B=x.a.div(T()),z=x.a.a(S()),I=x.a.h1(G()),A=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(B,null,i.a.createElement(z,{onClick:function(){return window.history.back()}},"  ","<< Return to home"," "),i.a.createElement(I,{onClick:function(){return window.history.back()}}," Anthony Ashurst")),i.a.createElement("h1",null," LIGHTS OUT "),i.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.b9e285da.chunk.js.map