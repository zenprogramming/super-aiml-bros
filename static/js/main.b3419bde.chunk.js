(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,n){e.exports=n(64)},47:function(e,t,n){},49:function(e,t,n){},57:function(e,t,n){},59:function(e,t,n){},62:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var o=n(14),a=n.n(o),r=n(1),s=n.n(r),i=n(15),l=n.n(i),c=n(4),u=n(6),h=n(9),p=n(8),m=n(10),d=n(24),f=n(66),y=n(67),w=(n(47),n(7)),g=n(65),b={ROMS:{"Bubble Bobble":"https://cors-anywhere.herokuapp.com/http://theromdepot.com/roms/NES/US/Bubble%20Bobble%20(U).nes",Castlevania:"https://cors-anywhere.herokuapp.com/http://theromdepot.com/roms/NES/US/Castlevania%20(U).nes",Contra:"https://cors-anywhere.herokuapp.com/http://theromdepot.com/roms/NES/US/Contra%20(U).nes","Donkey Kong Classics":"https://cors-anywhere.herokuapp.com/http://theromdepot.com/roms/NES/US/Donkey%20Kong%20Classics%20(U).nes","Duck Hunt":"https://cors-anywhere.herokuapp.com/http://www.vertigofx.com/public/games/roms/nes/Duck%20Hunt%20(JUE).nes","Final Fantasy":"https://cors-anywhere.herokuapp.com/http://www.vertigofx.com/public/games/roms/nes/Final%20Fantasy%20(U).nes",Golf:"https://cors-anywhere.herokuapp.com/http://www.vertigofx.com/public/games/roms/nes/Golf%20(JU).nes","Kirby's Adventure":"https://cors-anywhere.herokuapp.com/http://www.vertigofx.com/public/games/roms/nes/Kirby's%20Adventure%20(U).nes","The Legend of Zelda":"https://cors-anywhere.herokuapp.com/http://www.vertigofx.com/public/games/roms/nes/Legend%20of%20Zelda,%20The%20(Rev%201)%20(U).nes",Lemmings:"https://cors-anywhere.herokuapp.com/http://www.vertigofx.com/public/games/roms/nes/Lemmings%20(U).nes",Lifeforce:"https://cors-anywhere.herokuapp.com/http://www.vertigofx.com/public/games/roms/nes/Lifeforce%20(U).nes","Mario Bros.":"https://cors-anywhere.herokuapp.com/http://www.vertigofx.com/public/games/roms/nes/Mario%20Bros%20(JU).nes","Mega Man":"https://cors-anywhere.herokuapp.com/http://www.vertigofx.com/public/games/roms/nes/Mega%20Man%20(U).nes","Metal Gear":"https://cors-anywhere.herokuapp.com/http://www.vertigofx.com/public/games/roms/nes/Metal%20Gear%20(U).nes",Metroid:"https://cors-anywhere.herokuapp.com/http://www.vertigofx.com/public/games/roms/nes/Metroid%20(U).nes","Pac-Man":"https://cors-anywhere.herokuapp.com/http://www.vertigofx.com/public/games/roms/nes/Pac-Man%20(U).nes","Super Mario Bros.":"https://cors-anywhere.herokuapp.com/http://www.vertigofx.com/public/games/roms/nes/Super%20Mario%20Bros%20(Rev%201)%20(JU).nes","Super Mario Bros. 2":"https://cors-anywhere.herokuapp.com/http://www.vertigofx.com/public/games/roms/nes/Super%20Mario%20Bros%202%20(Rev%201)%20(U).nes","Super Mario Bros. 3":"https://cors-anywhere.herokuapp.com/http://www.vertigofx.com/public/games/roms/nes/Super%20Mario%20Bros%203%20(Rev%201)%20(U).nes","Tecmo Super Bowl":"https://cors-anywhere.herokuapp.com/http://www.vertigofx.com/public/games/roms/nes/Tecmo%20Super%20Bowl%20(U).nes","Teenage Mutant Ninja Turtles II":"https://cors-anywhere.herokuapp.com/http://www.vertigofx.com/public/games/roms/nes/Teenage%20Mutant%20Ninja%20Turtles%202%20(U).nes",Tennis:"https://cors-anywhere.herokuapp.com/http://www.vertigofx.com/public/games/roms/nes/Tennis%20(JU).nes",Tetris:"https://cors-anywhere.herokuapp.com/http://www.vertigofx.com/public/games/roms/nes/Tetris%20(U).nes","Tetris 2":"https://cors-anywhere.herokuapp.com/http://www.vertigofx.com/public/games/roms/nes/Tetris%202%20(U).nes","Zelda 2":"https://cors-anywhere.herokuapp.com/http://www.vertigofx.com/public/games/roms/nes/Zelda%202%20-%20The%20Adventure%20of%20Link%20(U).nes"},GOOGLE_ANALYTICS_CODE:"UA-6774621-5",SENTRY_URI:"https://9d90c8089ef1434c8f6fd4a69f223673@sentry.io/533289"},v=function(e){function t(){var e,n;Object(c.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).handleDragOver=function(e){e.preventDefault(),e.dataTransfer.dropEffect="copy"},n.handleDrop=function(e){e.preventDefault();var t=e.dataTransfer.items?e.dataTransfer.items[0].getAsFile():e.dataTransfer.files[0];n.props.history.push({pathname:"/run",state:{file:t}})},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"container ListPage my-4",onDragOver:this.handleDragOver,onDrop:this.handleDrop},s.a.createElement("div",{className:"row justify-content-center"},s.a.createElement("div",{className:"col-md-8"},s.a.createElement("header",{className:"mb-4"},s.a.createElement("h1",{className:"mb-3"},"JSNES"),s.a.createElement("p",null,"A JavaScript NES emulator."),s.a.createElement("p",null,"By ",s.a.createElement("a",{href:"https://twitter.com/bfirsh"},"Ben Firshman"),". Source on ",s.a.createElement("a",{href:"https://github.com/bfirsh/jsnes"},"GitHub"),".")),s.a.createElement(w.b,{className:"mb-4"},Object.keys(b.ROMS).map(function(e){return s.a.createElement(g.a,{key:e,to:"/run/"+encodeURIComponent(e),className:"list-group-item"},e,s.a.createElement("span",{className:"float-right"},"\u203a"))})),s.a.createElement("p",null,"Or, drag and drop a ROM file onto the page."))))}}]),t}(r.Component),k=(n(49),n(17)),C=n(34),T=n(31),E=n(12),O=n(3),N=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={playerOneButton:"",playerTwoButton:"",waitingForKey:0},n.handleClick=n.handleClick.bind(Object(E.a)(Object(E.a)(n))),n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.keys,t=this.props.button,n=[];for(var o in e)1===e[o][0]&&e[o][1]===t?(n[0]=e[o][2],console.log(n[0])):2===e[o][0]&&e[o][1]===t&&(n[1]=e[o][2]);this.setState({playerOneButton:n[0],playerTwoButton:n[1]})}},{key:"componentDidUpdate",value:function(e,t){if(0!==t.waitingForKey){var n=this.props.keys,o=this.props.button,a=[];for(var r in n)1===n[r][0]&&n[r][1]===o?(a[0]=n[r][2],console.log(a[0])):2===n[r][0]&&n[r][1]===o&&(a[1]=n[r][2]);this.setState({playerOneButton:a[0],playerTwoButton:a[1],waitingForKey:0})}}},{key:"handleClick",value:function(e){this.props.handleClick([e,this.props.button]),this.setState({waitingForKey:e})}},{key:"render",value:function(){var e=this;return s.a.createElement("tr",null,s.a.createElement("td",null,this.props.buttonName),s.a.createElement("td",{onClick:function(){return e.handleClick(1)}},1===this.state.waitingForKey?"Press key...":this.state.playerOneButton),s.a.createElement("td",{onClick:function(){return e.handleClick(2)}},2===this.state.waitingForKey?"Press key...":this.state.playerTwoButton))}}]),t}(r.Component),U=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={keys:e.keys,button:void 0,modified:!1},n.handleKeyDown=n.handleKeyDown.bind(Object(E.a)(Object(E.a)(n))),n.listenForKey=n.listenForKey.bind(Object(E.a)(Object(E.a)(n))),n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentWillUnmount",value:function(){this.state.modified&&this.props.setKeys(this.state.keys),this.removeKeyListener("keydown",this.handleKeyDown)}},{key:"listenForKey",value:function(e){this.setState({button:e}),document.addEventListener("keydown",this.handleKeyDown)}},{key:"handleKeyDown",value:function(e){var t=this.state.button,n=this.state.keys,o={};for(var a in n)n[a][0]===t[0]&&n[a][1]===t[1]||(o[a]=n[a]);this.setState({keys:Object(T.a)({},o,Object(k.a)({},e.keyCode,Object(C.a)(t.slice(0,2)).concat([e.key.length>1?e.key:String(e.key).toUpperCase()]))),button:void 0,modified:!0}),document.removeEventListener("keydown",this.handleKeyDown)}},{key:"removeKeyListener",value:function(){document.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return s.a.createElement(w.c,{isOpen:this.props.isOpen,toggle:this.props.toggle,className:"ControlsModal"},s.a.createElement(w.f,{toggle:this.props.toggle},"Controls"),s.a.createElement(w.d,null,s.a.createElement(w.h,null,s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Button"),s.a.createElement("th",null,"Player 1"),s.a.createElement("th",null,"Player 2"))),s.a.createElement("tbody",null,s.a.createElement(N,{buttonName:"Left",button:O.Controller.BUTTON_LEFT,keys:this.state.keys,handleClick:this.listenForKey}),s.a.createElement(N,{buttonName:"Right",button:O.Controller.BUTTON_RIGHT,keys:this.state.keys,handleClick:this.listenForKey}),s.a.createElement(N,{buttonName:"Up",button:O.Controller.BUTTON_UP,keys:this.state.keys,handleClick:this.listenForKey}),s.a.createElement(N,{buttonName:"Down",button:O.Controller.BUTTON_DOWN,keys:this.state.keys,handleClick:this.listenForKey}),s.a.createElement(N,{buttonName:"A",button:O.Controller.BUTTON_A,keys:this.state.keys,handleClick:this.listenForKey}),s.a.createElement(N,{buttonName:"B",button:O.Controller.BUTTON_B,keys:this.state.keys,handleClick:this.listenForKey}),s.a.createElement(N,{buttonName:"Start",button:O.Controller.BUTTON_START,keys:this.state.keys,handleClick:this.listenForKey}),s.a.createElement(N,{buttonName:"Select",button:O.Controller.BUTTON_SELECT,keys:this.state.keys,handleClick:this.listenForKey})))),s.a.createElement(w.e,null,s.a.createElement(w.a,{outline:!0,color:"primary",onClick:this.props.toggle},"Close")))}}]),t}(r.Component),B=function(){function e(t){var n=this;Object(c.a)(this,e),this.onAnimationFrame=function(){if(n.calibrating&&(null===n.calibrationStartTime?(n.calibrationStartTime=(new Date).getTime(),n.calibrationCurrentFrames=0):n.calibrationCurrentFrames+=1,n.calibrationCurrentFrames===n.calibrationFrames)){n.calibrating=!1;var e=1e3/(((new Date).getTime()-n.calibrationStartTime)/n.calibrationFrames);(e<=n.desiredFPS-n.calibrationTolerance||e>=n.desiredFPS+n.calibrationTolerance)&&(console.log("Enabling bodge mode. (Desired FPS is ".concat(n.desiredFPS,", actual FPS is ").concat(e,")")),n.startBodgeMode())}n.requestAnimationFrame(),n.running&&(n.bodgeMode||n.onGenerateFrame(),n.onWriteFrame())},this.startBodgeMode=function(){n.bodgeMode=!0,n.bodgeInterval=setInterval(n.onBodge,1e3/n.desiredFPS)},this.onBodge=function(){n.running&&n.onGenerateFrame()},this.onGenerateFrame=t.onGenerateFrame,this.onWriteFrame=t.onWriteFrame,this.running=!1,this.bodgeMode=!1,this.desiredFPS=60,this.calibrationDelay=200,this.calibrationFrames=10,this.calibrationTolerance=5,this.calibrating=!1,this.calibrationStartTime=null,this.calibrationCurrentFrames=null}return Object(u.a)(e,[{key:"start",value:function(){this.running=!0,this.requestAnimationFrame(),this.bodgeMode&&this.startBodgeMode()}},{key:"stop",value:function(){this.running=!1,this._requestID&&window.cancelAnimationFrame(this._requestID),this.bodgeInterval&&clearInterval(this.bodgeInterval)}},{key:"requestAnimationFrame",value:function(){this._requestID=window.requestAnimationFrame(this.onAnimationFrame)}}]),e}(),S={88:[1,O.Controller.BUTTON_A,"X"],89:[1,O.Controller.BUTTON_B,"Y"],90:[1,O.Controller.BUTTON_B,"Z"],17:[1,O.Controller.BUTTON_SELECT,"Right Ctrl"],13:[1,O.Controller.BUTTON_START,"Enter"],38:[1,O.Controller.BUTTON_UP,"Up"],40:[1,O.Controller.BUTTON_DOWN,"Down"],37:[1,O.Controller.BUTTON_LEFT,"Left"],39:[1,O.Controller.BUTTON_RIGHT,"Right"],103:[2,O.Controller.BUTTON_A,"Num-7"],105:[2,O.Controller.BUTTON_B,"Num-9"],99:[2,O.Controller.BUTTON_SELECT,"Num-3"],97:[2,O.Controller.BUTTON_START,"Num-1"],104:[2,O.Controller.BUTTON_UP,"Num-8"],98:[2,O.Controller.BUTTON_DOWN,"Num-2"],100:[2,O.Controller.BUTTON_LEFT,"Num-4"],102:[2,O.Controller.BUTTON_RIGHT,"Num-6"]},D=function e(t){var n=this;Object(c.a)(this,e),this.loadKeys=function(){var e;try{(e=localStorage.getItem("keys"))&&(e=JSON.parse(e))}catch(t){console.log("Failed to get keys from localStorage.",t)}n.keys=e||S},this.setKeys=function(e){try{localStorage.setItem("keys",JSON.stringify(e)),n.keys=e}catch(t){console.log("Failed to set keys in localStorage")}},this.handleKeyDown=function(e){var t=n.keys[e.keyCode];t&&(n.onButtonDown(t[0],t[1]),e.preventDefault())},this.handleKeyUp=function(e){var t=n.keys[e.keyCode];t&&(n.onButtonUp(t[0],t[1]),e.preventDefault())},this.handleKeyPress=function(e){e.preventDefault()},this.onButtonDown=t.onButtonDown,this.onButtonUp=t.onButtonUp},F=(n(57),256),M=240,x=function(e){function t(){var e,n;Object(c.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).setBuffer=function(e){for(var t=0,o=0;o<M;++o)for(var a=0;a<F;++a)t=256*o+a,n.buf32[t]=4278190080|e[t]},n.writeBuffer=function(){n.imageData.data.set(n.buf8),n.context.putImageData(n.imageData,0,0)},n.fitInParent=function(){var e=n.canvas.parentNode,t=e.clientWidth,o=e.clientHeight,a=F/M;a<t/o?(n.canvas.style.width="".concat(Math.round(o*a),"px"),n.canvas.style.height="".concat(o,"px")):(n.canvas.style.width="".concat(t,"px"),n.canvas.style.height="".concat(Math.round(t/a),"px"))},n.handleMouseDown=function(e){if(n.props.onMouseDown){var t=F/parseFloat(n.canvas.style.width),o=n.canvas.getBoundingClientRect(),a=Math.round((e.clientX-o.left)*t),r=Math.round((e.clientY-o.top)*t);n.props.onMouseDown(a,r)}},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("canvas",{className:"Screen",width:F,height:M,onMouseDown:this.handleMouseDown,onMouseUp:this.props.onMouseUp,ref:function(t){e.canvas=t}})}},{key:"componentDidMount",value:function(){this.initCanvas()}},{key:"componentDidUpdate",value:function(){this.initCanvas()}},{key:"initCanvas",value:function(){this.context=this.canvas.getContext("2d"),this.imageData=this.context.getImageData(0,0,F,M),this.context.fillStyle="black",this.context.fillRect(0,0,F,M),this.buf=new ArrayBuffer(this.imageData.data.length),this.buf8=new Uint8ClampedArray(this.buf),this.buf32=new Uint32Array(this.buf);for(var e=0;e<this.buf32.length;++e)this.buf32[e]=4278190080}},{key:"screenshot",value:function(){var e=new Image;return e.src=this.canvas.toDataURL("image/png"),e}}]),t}(r.Component),j=n(32),K=n.n(j),R=function(e,t){console.error(e),a.a.captureException(e,{extra:t})},L=function(){function e(t){var n=this,o=t.onBufferUnderrun;Object(c.a)(this,e),this.writeSample=function(e,t){n.buffer.size()/2>=n.bufferSize&&console.log("Buffer overrun"),n.buffer.enq(e),n.buffer.enq(t)},this.onaudioprocess=function(e){var t=e.outputBuffer.getChannelData(0),o=e.outputBuffer.getChannelData(1),a=t.length;n.buffer.size()<2*a&&n.onBufferUnderrun&&n.onBufferUnderrun(n.buffer.size(),2*a);try{var r=n.buffer.deqN(2*a)}catch(e){var s=n.buffer.size()/2;s>0&&console.log("Buffer underrun (needed ".concat(a,", got ").concat(s,")"));for(var i=0;i<a;i++)t[i]=0,o[i]=0;return}for(var l=0;l<a;l++)t[l]=r[2*l],o[l]=r[2*l+1]},this.onBufferUnderrun=o,this.bufferSize=8192,this.buffer=new K.a(2*this.bufferSize)}return Object(u.a)(e,[{key:"start",value:function(){window.AudioContext&&(this.audioCtx=new window.AudioContext,this.scriptNode=this.audioCtx.createScriptProcessor(1024,0,2),this.scriptNode.onaudioprocess=this.onaudioprocess,this.scriptNode.connect(this.audioCtx.destination))}},{key:"stop",value:function(){this.scriptNode&&(this.scriptNode.disconnect(this.audioCtx.destination),this.scriptNode.onaudioprocess=null,this.scriptNode=null),this.audioCtx&&(this.audioCtx.close().catch(R),this.audioCtx=null)}}]),e}();var _=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(h.a)(this,Object(p.a)(t).call(this,e))).load=function(){if(n.props.match.params.rom){var e=n.props.match.params.rom,t=b.ROMS[e];if(!t)return void n.setState({error:"No such ROM: ".concat(e)});n.currentRequest=function(e,t,n){var o=new XMLHttpRequest;return o.open("GET",e),o.overrideMimeType("text/plain; charset=x-user-defined"),o.onload=function(){200===this.status?t(null,this.responseText):0===this.status||t(new Error(o.statusText))},o.onerror=function(){t(new Error(o.statusText))},o.onprogress=n,o.send(),o}(t,function(e,t){e?window.alert("Error loading ROM: ".concat(e.toString())):n.handleLoaded(t)},n.handleProgress)}else if(n.props.location.state&&n.props.location.state.file){var o=new FileReader;o.readAsBinaryString(n.props.location.state.file),o.onload=function(e){n.currentRequest=null,n.handleLoaded(e.target.result)}}else window.alert("No ROM provided")},n.handleProgress=function(e){e.lengthComputable&&n.setState({loadedPercent:e.loaded/e.total*100})},n.handleLoaded=function(e){n.setState({uiEnabled:!0,running:!0,loading:!1}),n.nes.loadROM(e),n.start()},n.start=function(){n.frameTimer.start(),n.speakers.start(),n.fpsInterval=setInterval(function(){console.log("FPS: ".concat(n.nes.getFPS()))},1e3)},n.stop=function(){n.frameTimer.stop(),n.speakers.stop(),clearInterval(n.fpsInterval)},n.handlePauseResume=function(){n.state.paused?(n.setState({paused:!1}),n.start()):(n.setState({paused:!0}),n.stop())},n.layout=function(){var e=parseFloat(window.getComputedStyle(n.navbar).height);n.screenContainer.style.height="".concat(window.innerHeight-e,"px"),n.screen.fitInParent()},n.toggleControlsModal=function(){n.setState({controlsModal:!n.state.controlsModal})},n.state={running:!1,paused:!1,controlsModal:!1,loading:!0,loadedPercent:3,error:null},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"RunPage"},s.a.createElement("nav",{className:"navbar navbar-expand",ref:function(t){e.navbar=t}},s.a.createElement("ul",{className:"navbar-nav mr-auto"},s.a.createElement("li",{className:"navitem"},s.a.createElement(g.a,{to:"/",className:"nav-link"},"\u2039 Back"))),s.a.createElement(w.a,{outline:!0,color:"primary",onClick:this.toggleControlsModal,className:"mr-3"},"Controls"),s.a.createElement(w.a,{outline:!0,color:"primary",onClick:this.handlePauseResume,disabled:!this.state.running},this.state.paused?"Resume":"Pause")),this.state.error?this.state.error:s.a.createElement("div",{className:"screen-container",ref:function(t){e.screenContainer=t}},this.state.loading?s.a.createElement(w.g,{value:this.state.loadedPercent,style:{position:"absolute",width:"70%",left:"15%",top:"48%"}}):null,s.a.createElement(x,{ref:function(t){e.screen=t},onGenerateFrame:function(){e.nes.frame()},onMouseDown:function(t,n){e.nes.zapperMove(t,n),e.nes.zapperFireDown()},onMouseUp:function(){e.nes.zapperFireUp()}}),this.state.controlsModal&&s.a.createElement(U,{isOpen:this.state.controlsModal,toggle:this.toggleControlsModal,keys:this.keyboardController.keys,setKeys:this.keyboardController.setKeys})))}},{key:"componentDidMount",value:function(){var e=this;this.speakers=new L({onBufferUnderrun:function(t,n){e.state.running&&!e.state.paused&&(console.log("Buffer underrun, running another frame to try and catch up"),e.nes.frame(),e.speakers.buffer.size()<n&&(console.log("Still buffer underrun, running a second frame"),e.nes.frame()))}}),this.nes=new O.NES({onFrame:this.screen.setBuffer,onStatusUpdate:console.log,onAudioSample:this.speakers.writeSample}),window.nes=this.nes,this.frameTimer=new B({onGenerateFrame:a.a.wrap(this.nes.frame),onWriteFrame:a.a.wrap(this.screen.writeBuffer)}),this.keyboardController=new D({onButtonDown:this.nes.buttonDown,onButtonUp:this.nes.buttonUp}),this.keyboardController.loadKeys(),document.addEventListener("keydown",this.keyboardController.handleKeyDown),document.addEventListener("keyup",this.keyboardController.handleKeyUp),document.addEventListener("keypress",this.keyboardController.handleKeyPress),window.addEventListener("resize",this.layout),this.layout(),this.load()}},{key:"componentWillUnmount",value:function(){this.currentRequest&&this.currentRequest.abort(),this.stop(),document.removeEventListener("keydown",this.keyboardController.handleKeyDown),document.removeEventListener("keyup",this.keyboardController.handleKeyUp),document.removeEventListener("keypress",this.keyboardController.handleKeyPress),window.removeEventListener("resize",this.layout),window.nes=void 0}}]),t}(r.Component),A=(n(59),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(h.a)(this,Object(p.a)(t).call(this,e))).recordPageview=function(e){var t=e.location;return d.a.pageview(t.pathname),null},n.state={error:null},b.GOOGLE_ANALYTICS_CODE&&d.a.initialize(b.GOOGLE_ANALYTICS_CODE),n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return this.state.error?s.a.createElement("div",{className:"container my-4"},s.a.createElement("div",{className:"row justify-content-center"},s.a.createElement("div",{className:"col-md-8"},"Oops - there has been an error. It has been logged to the console."))):s.a.createElement(f.a,null,s.a.createElement("div",{className:"App"},s.a.createElement(y.a,{exact:!0,path:"/",component:v}),s.a.createElement(y.a,{exact:!0,path:"/run",component:_}),s.a.createElement(y.a,{exact:!0,path:"/run/:rom",component:_}),s.a.createElement(y.a,{path:"/",render:this.recordPageview})))}},{key:"componentDidCatch",value:function(e,t){this.setState({error:e}),R(e,t)}}]),t}(r.Component));n(62);b.SENTRY_URI&&a.a.config(b.SENTRY_URI).install(),a.a.context(function(){l.a.render(s.a.createElement(A,null),document.getElementById("root"))})}},[[35,2,1]]]);
//# sourceMappingURL=main.b3419bde.chunk.js.map