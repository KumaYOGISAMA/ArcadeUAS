/*:
 * @target MZ
 * @plugindesc MiniGameBar
 * @author Maxii1996 | Undermax Games
 * @url https://undermax.itch.io/
 * 
 * @command startBar
 * @text Start MiniGameBar
 * @desc Starts the mini-game with the bar and arrow.
 *
 * @arg RangoStart
 * @type number
 * @min 0
 * @max 100
 * @text Range Start
 * @desc Start of the special range in percentage. (0-100)
 * @default 40
 *
 * @arg RangoEnd
 * @type number
 * @min 0
 * @max 100
 * @text Range End
 * @desc End of the special range in percentage. (0-100)
 * @default 60
 *
 * @arg SuccessSwitchID
 * @type switch
 * @text Success Switch
 * @desc Switch that will activate if the arrow is within the range.
 * @default 1
 *
 * @arg FailSwitchID
 * @type switch
 * @text Failure Switch
 * @desc Switch that will activate if the arrow is outside the range.
 * @default 2
 *
 * @arg BarColors
 * @type text[]
 * @text Bar Colors
 * @desc Colores de la barra en formato HEX. Si se elige más de un color, se crea un degradado.
 * @default ["#FF0000"]
 *
 * @arg RangeColor
 * @type text
 * @text Range Color
 * @desc Special range color in HEX format.
 * @default #00FF00
 *
 * @arg ArrowColor
 * @type text
 * @text Arrow Color
 * @desc Arrow color in HEX format.
 * @default #FFFFFF
 *
 * @arg BarX
 * @type number
 * @text Bar X Position
 * @desc X position of the bar.
 * @default 100
 *
 * @arg BarY
 * @type number
 * @text Bar Y Position
 * @desc Y position of the bar.
 * @default 100
 *
 * @arg BarWidth
 * @type number
 * @text Bar Width
 * @desc Width of the bar.
 * @default 400
 *
 * @arg BarHeight
 * @type number
 * @text Bar Height
 * @desc Height of the bar.
 * @default 20
 *
 * @arg ArrowSpeed
 * @type number
 * @text Arrow Speed
 * @desc Speed at which the arrow moves.
 * @default 2
 *
 * @arg ArrowIcon
 * @type combo
 * @text Arrow Icon
 * @desc Unicode character for the arrow icon.
 * @default ↑
 * @option ↑
 *
 * @arg ArrowSize
 * @type number
 * @text Arrow Size
 * @desc Size of the arrow in pixels.
 * @default 16
 *
 * @help
 *
 *
 * ==============================================================
 * IMPORTANT
 * 
 * This is a demo and limited version of the plugin!
 * 
 * Get the Full version to unlock all the features of the plugin!
 * ===============================================================
 * 
 * 
 * 
 * _________________________Ver DEMO_______________________
 * 
 * 
 *  __  __ _       _  _____                      ____             __  __ ______
 * |  \/  (_)     (_)/ ____|                    |  _ \           |  \/  |___  /
 * | \  / |_ _ __  _| |  __  __ _ _ __ ___   ___| |_) | __ _ _ __| \  / |  / / 
 * | |\/| | | '_ \| | | |_ |/ _` | '_ ` _ \ / _ \  _ < / _` | '__| |\/| | / /  
 * | |  | | | | | | | |__| | (_| | | | | | |  __/ |_) | (_| | |  | |  | |/ /__ 
 * |_|  |_|_|_| |_|_|\_____|\__,_|_| |_| |_|\___|____/ \__,_|_|  |_|  |_/_____|
 * 
 * 
 *    _____  ______ __  __  ____  
 *   |  __ \|  ____|  \/  |/ __ \ 
 *   | |  | | |__  | \  / | |  | |
 *   | |  | |  __| | |\/| | |  | |
 *   | |__| | |____| |  | | |__| |
 *   |_____/|______|_|  |_|\____/ 
 *                                                           
 * 
 * ___________________By Undermax Games______________________
 * 
 * This plugin allows you to integrate a mini-game bar with an arrow, 
 * providing a visual challenge for players. The arrow moves back and forth 
 * on the bar, and players must press a button when the arrow is within a 
 * specified range to succeed.
 * 
 * 
 * To start the mini-game, use the plugin command "startBar". 
 * Adjust the parameters as needed to customize the appearance and 
 * behavior of the mini-game bar.
 * 
 * 
*/

(function(_0x568ce1,_0xd385a7){const _0xaa1c2c=_0x477c,_0x4ff99d=_0x568ce1();while(!![]){try{const _0x1fccf8=-parseInt(_0xaa1c2c(0x188))/0x1+-parseInt(_0xaa1c2c(0x1b8))/0x2+parseInt(_0xaa1c2c(0x18d))/0x3*(-parseInt(_0xaa1c2c(0x19b))/0x4)+parseInt(_0xaa1c2c(0x162))/0x5+parseInt(_0xaa1c2c(0x1df))/0x6*(parseInt(_0xaa1c2c(0x1ad))/0x7)+-parseInt(_0xaa1c2c(0x196))/0x8+parseInt(_0xaa1c2c(0x180))/0x9;if(_0x1fccf8===_0xd385a7)break;else _0x4ff99d['push'](_0x4ff99d['shift']());}catch(_0x4ba3a4){_0x4ff99d['push'](_0x4ff99d['shift']());}}}(_0x13bd,0xa8e16),((()=>{const _0x426c34=_0x477c,_0x2abffc=0x64;let _0x122184;class _0x392108{constructor(_0x2b274b){const _0x420cd0=_0x477c;this[_0x420cd0(0x194)]=Number(_0x2b274b['RangoStart']),this[_0x420cd0(0x1a6)]=Number(_0x2b274b['RangoEnd']),this['coyoteTime']=Number(_0x2b274b[_0x420cd0(0x1ae)]),this[_0x420cd0(0x192)]=Number(_0x2b274b['SuccessSwitchID']),this[_0x420cd0(0x19a)]=Number(_0x2b274b['FailSwitchID']),this[_0x420cd0(0x183)]=JSON[_0x420cd0(0x178)](_0x2b274b['BarColors']),this[_0x420cd0(0x1bc)]=_0x2b274b['RangeColor'],this[_0x420cd0(0x16d)]=_0x2b274b[_0x420cd0(0x1db)],this[_0x420cd0(0x1ab)]=Number(_0x2b274b['BarX']),this[_0x420cd0(0x1b3)]=Number(_0x2b274b[_0x420cd0(0x18e)]),this[_0x420cd0(0x195)]=Number(_0x2b274b['BarWidth']),this[_0x420cd0(0x1dc)]=Number(_0x2b274b[_0x420cd0(0x184)]),this['arrowSpeed']=Number(_0x2b274b[_0x420cd0(0x1b6)]),this[_0x420cd0(0x1e0)]=_0x2b274b[_0x420cd0(0x1ce)],this[_0x420cd0(0x1e2)]=Number(_0x2b274b[_0x420cd0(0x165)]),this[_0x420cd0(0x1be)]=0x0,this[_0x420cd0(0x1b5)]=0x1,this[_0x420cd0(0x187)]=![],this['positionMode']=_0x2b274b[_0x420cd0(0x1d3)],this[_0x420cd0(0x174)]=_0x2b274b[_0x420cd0(0x193)]||'',this['textOffsetX']=Number(_0x2b274b[_0x420cd0(0x1d5)]||0x0),this[_0x420cd0(0x1bd)]=Number(_0x2b274b[_0x420cd0(0x177)]||0x0),this[_0x420cd0(0x1a0)]=Number(_0x2b274b[_0x420cd0(0x167)]||0x1c),this[_0x420cd0(0x16f)]=_0x2b274b[_0x420cd0(0x1d6)]||_0x420cd0(0x179),this[_0x420cd0(0x16a)]=_0x2b274b['ShowWindowBackground']===_0x420cd0(0x19c)||_0x2b274b['ShowWindowBackground']===!![],this[_0x420cd0(0x199)]=Number(_0x2b274b[_0x420cd0(0x199)]||0x0),this[_0x420cd0(0x17c)]=Number(_0x2b274b[_0x420cd0(0x17c)]||0x0),this['enableShadow']=_0x2b274b['EnableShadow']===_0x420cd0(0x19c)||_0x2b274b[_0x420cd0(0x1c1)]===!![],this['shadowColor']=_0x2b274b[_0x420cd0(0x185)],this[_0x420cd0(0x1ba)]=Number(_0x2b274b['ShadowOffsetX']),this[_0x420cd0(0x19e)]=Number(_0x2b274b[_0x420cd0(0x1c8)]),this[_0x420cd0(0x1d1)]=_0x2b274b[_0x420cd0(0x1b0)]==='true'||_0x2b274b['DarkenScreen']===!![],this[_0x420cd0(0x16b)]=Number(_0x2b274b[_0x420cd0(0x1d0)]||0x0),this[_0x420cd0(0x170)]=_0x2b274b['ScreenDarknessColor']||_0x420cd0(0x1a7),SceneManager[_0x420cd0(0x172)]['createBarArrowGame'](this);}['updateArrow'](){const _0x59d0a1=_0x477c;this[_0x59d0a1(0x1be)]+=this[_0x59d0a1(0x1b5)]*this['arrowSpeed'],(this[_0x59d0a1(0x1be)]<=0x0||this[_0x59d0a1(0x1be)]>=_0x2abffc)&&(this[_0x59d0a1(0x1b5)]*=-0x1),SceneManager['_scene']['drawArrow'](this),Input[_0x59d0a1(0x18b)]('ok')&&this[_0x59d0a1(0x1af)]();}[_0x426c34(0x1af)](){const _0x5a796b=_0x426c34,_0x4e9c29=this[_0x5a796b(0x194)]-this[_0x5a796b(0x1c3)],_0x371820=this[_0x5a796b(0x1a6)]+this[_0x5a796b(0x1c3)];this['arrowPosition']>=_0x4e9c29&&this[_0x5a796b(0x1be)]<=_0x371820?($gameSwitches[_0x5a796b(0x175)](this[_0x5a796b(0x192)],!![]),$gameSwitches[_0x5a796b(0x175)](this[_0x5a796b(0x19a)],![])):($gameSwitches[_0x5a796b(0x175)](this[_0x5a796b(0x192)],![]),$gameSwitches[_0x5a796b(0x175)](this[_0x5a796b(0x19a)],!![])),SceneManager[_0x5a796b(0x172)][_0x5a796b(0x168)]();}}PluginManager[_0x426c34(0x1b9)](_0x426c34(0x1c4),_0x426c34(0x1aa),_0x22909c=>{const _0x108dc1=_0x426c34;_0x122184=new _0x392108(_0x22909c),$gameMap[_0x108dc1(0x1e3)][_0x108dc1(0x1c2)](_0x108dc1(0x1a5));});const _0x388279=Game_Interpreter[_0x426c34(0x1ac)][_0x426c34(0x198)];Game_Interpreter[_0x426c34(0x1ac)][_0x426c34(0x198)]=function(){const _0x3e6250=_0x426c34;!_0x122184&&_0x388279[_0x3e6250(0x1c0)](this);};const _0x503ed2=Scene_Map[_0x426c34(0x1ac)][_0x426c34(0x198)];Scene_Map[_0x426c34(0x1ac)][_0x426c34(0x198)]=function(){const _0x3b6cf5=_0x426c34;_0x503ed2['call'](this),_0x122184&&_0x122184[_0x3b6cf5(0x1bf)]();};class _0x551101 extends Window_Base{constructor(_0x126ed8,_0x3b3ccf,_0x376495,_0x85a5cc,_0x3f079e){const _0x2637c3=_0x426c34;super(_0x126ed8),this['_text']=this[_0x2637c3(0x176)](_0x3b3ccf),this[_0x2637c3(0x1b7)]=_0x376495,this[_0x2637c3(0x182)]=_0x85a5cc,this[_0x2637c3(0x17e)]=_0x3f079e,this[_0x2637c3(0x1cf)](),this['refresh']();}[_0x426c34(0x1da)](){const _0x34b44f=_0x426c34;this[_0x34b44f(0x1a2)][_0x34b44f(0x19f)](),this[_0x34b44f(0x18a)](this[_0x34b44f(0x182)]),this['contents'][_0x34b44f(0x17b)]=this[_0x34b44f(0x17e)];const _0x18b94d=this[_0x34b44f(0x1a4)](this[_0x34b44f(0x1a1)]),_0x16600b=this[_0x34b44f(0x163)]({'text':this[_0x34b44f(0x1a1)],'index':0x0},![]),_0x40092f=(this[_0x34b44f(0x16c)]()-_0x18b94d)/0x2,_0x1e8278=(this[_0x34b44f(0x19d)]()-_0x16600b)/0x2;this[_0x34b44f(0x1c9)](this[_0x34b44f(0x1a1)],_0x40092f,_0x1e8278);}[_0x426c34(0x176)](_0x3aed2e){const _0xb05993=_0x426c34;return _0x3aed2e[_0xb05993(0x1d7)](/\\v\[(\d+)\]/g,(_0x3c100a,_0x9bbc15)=>{return $gameVariables['value'](Number(_0x9bbc15));});}['updateBackOpacity'](){const _0x5b1f52=_0x426c34;this[_0x5b1f52(0x18f)]=this[_0x5b1f52(0x1b7)]?0xff:0x0;}[_0x426c34(0x16e)](){const _0x298d1a=_0x426c34;this[_0x298d1a(0x1b7)]?super['_refreshFrame']():this[_0x298d1a(0x1de)]&&(this[_0x298d1a(0x1de)][_0x298d1a(0x1c7)]=![]);}[_0x426c34(0x1cd)](){const _0x2d92a5=_0x426c34;this['hide'](),this['contents'][_0x2d92a5(0x19f)]();}}Scene_Map[_0x426c34(0x1ac)][_0x426c34(0x1d8)]=function(_0x564ad2){const _0x3d2ea3=_0x426c34,_0x36d328=this[_0x3d2ea3(0x1d1)],_0x107303=this[_0x3d2ea3(0x16b)],_0x970e9a=this[_0x3d2ea3(0x170)];_0x564ad2['_darkenScreen']&&(this['_darkenSprite']=new Sprite(),this[_0x3d2ea3(0x17d)][_0x3d2ea3(0x1d9)]=new Bitmap(Graphics[_0x3d2ea3(0x1c5)],Graphics['height']),this[_0x3d2ea3(0x17d)][_0x3d2ea3(0x1d9)][_0x3d2ea3(0x1dd)](_0x564ad2[_0x3d2ea3(0x170)]),this[_0x3d2ea3(0x17d)]['opacity']=_0x564ad2[_0x3d2ea3(0x16b)],this[_0x3d2ea3(0x1bb)](this['_darkenSprite'],0x1));if(_0x564ad2[_0x3d2ea3(0x18c)]===_0x3d2ea3(0x169)){const _0xc2f833=$gameMap['tileWidth'](),_0xe70964=$gameMap[_0x3d2ea3(0x161)]();_0x564ad2[_0x3d2ea3(0x1ab)]=$gamePlayer['screenX']()-_0x564ad2[_0x3d2ea3(0x195)]/0x2+_0x564ad2[_0x3d2ea3(0x199)],_0x564ad2[_0x3d2ea3(0x1b3)]=$gamePlayer[_0x3d2ea3(0x197)]()-_0xe70964-_0x564ad2[_0x3d2ea3(0x1dc)]+_0x564ad2[_0x3d2ea3(0x17c)];}if(_0x564ad2[_0x3d2ea3(0x174)]&&_0x564ad2[_0x3d2ea3(0x174)]!==''){const _0x247953=new Window_Base(new Rectangle(0x0,0x0,0x0,0x0));_0x247953['contents'][_0x3d2ea3(0x17b)]=_0x564ad2[_0x3d2ea3(0x1a0)];const _0x53bce8=_0x247953[_0x3d2ea3(0x1a4)](_0x564ad2[_0x3d2ea3(0x174)])+_0x247953[_0x3d2ea3(0x1cb)]*0x2,_0x5937f7=_0x247953['calcTextHeight']({'text':_0x564ad2[_0x3d2ea3(0x174)],'index':0x0},![])+_0x247953[_0x3d2ea3(0x1cb)]*0x2,_0x43bcca=_0x564ad2[_0x3d2ea3(0x1ab)]+_0x564ad2[_0x3d2ea3(0x189)],_0x2aa680=_0x564ad2[_0x3d2ea3(0x1b3)]-_0x5937f7+_0x564ad2['textOffsetY'];this[_0x3d2ea3(0x1e6)]=new _0x551101(new Rectangle(_0x43bcca,_0x2aa680,_0x53bce8,_0x5937f7),_0x564ad2[_0x3d2ea3(0x174)],_0x564ad2[_0x3d2ea3(0x16a)],_0x564ad2['textColor'],_0x564ad2[_0x3d2ea3(0x1a0)]),this[_0x3d2ea3(0x166)](this[_0x3d2ea3(0x1e6)]),this[_0x3d2ea3(0x1bb)](this[_0x3d2ea3(0x1e6)],0x2);}else{}this[_0x3d2ea3(0x171)]=new PIXI['Graphics'](),this[_0x3d2ea3(0x1b4)]=new PIXI[(_0x3d2ea3(0x1a3))](_0x564ad2[_0x3d2ea3(0x1e0)],{'fontSize':_0x564ad2[_0x3d2ea3(0x1e2)],'fill':_0x564ad2[_0x3d2ea3(0x16d)]}),this[_0x3d2ea3(0x173)](this[_0x3d2ea3(0x171)]),this['_barSprite']['clear']();_0x564ad2['enableShadow']?(this[_0x3d2ea3(0x1ca)]=new PIXI[(_0x3d2ea3(0x1b2))](),this['_barShadowSprite'][_0x3d2ea3(0x1e5)](parseInt(_0x564ad2['shadowColor'][_0x3d2ea3(0x164)](0x1),0x10)),this[_0x3d2ea3(0x1ca)][_0x3d2ea3(0x1cc)](_0x564ad2[_0x3d2ea3(0x1ab)]+_0x564ad2['shadowOffsetX'],_0x564ad2['barY']+_0x564ad2[_0x3d2ea3(0x19e)],_0x564ad2[_0x3d2ea3(0x195)],_0x564ad2[_0x3d2ea3(0x1dc)]),this[_0x3d2ea3(0x1ca)][_0x3d2ea3(0x1a8)](),this['addChild'](this[_0x3d2ea3(0x1ca)])):this[_0x3d2ea3(0x1ca)]&&(this[_0x3d2ea3(0x1a9)](this['_barShadowSprite']),this['_barShadowSprite']=null);this[_0x3d2ea3(0x171)]=new PIXI['Graphics'](),this[_0x3d2ea3(0x173)](this[_0x3d2ea3(0x171)]);if(_0x564ad2[_0x3d2ea3(0x183)]['length']>0x1){let _0xf71296=_0x564ad2[_0x3d2ea3(0x195)]/_0x564ad2[_0x3d2ea3(0x183)][_0x3d2ea3(0x17a)];for(let _0x33d391=0x0;_0x33d391<_0x564ad2[_0x3d2ea3(0x183)][_0x3d2ea3(0x17a)];_0x33d391++){this['_barSprite'][_0x3d2ea3(0x1e5)](parseInt(_0x564ad2[_0x3d2ea3(0x183)][_0x33d391]['slice'](0x1),0x10)),this[_0x3d2ea3(0x171)]['drawRect'](_0x564ad2[_0x3d2ea3(0x1ab)]+_0x33d391*_0xf71296,_0x564ad2['barY'],_0xf71296,_0x564ad2[_0x3d2ea3(0x1dc)]),this[_0x3d2ea3(0x171)][_0x3d2ea3(0x1a8)]();}}else this[_0x3d2ea3(0x171)][_0x3d2ea3(0x1e5)](parseInt(_0x564ad2[_0x3d2ea3(0x183)][0x0][_0x3d2ea3(0x164)](0x1),0x10)),this[_0x3d2ea3(0x171)]['drawRect'](_0x564ad2[_0x3d2ea3(0x1ab)],_0x564ad2[_0x3d2ea3(0x1b3)],_0x564ad2[_0x3d2ea3(0x195)],_0x564ad2[_0x3d2ea3(0x1dc)]),this[_0x3d2ea3(0x171)][_0x3d2ea3(0x1a8)]();const _0x2d42a6=_0x564ad2['barX']+_0x564ad2[_0x3d2ea3(0x195)]*(_0x564ad2['rangoStart']/0x64),_0x5800a3=_0x564ad2[_0x3d2ea3(0x195)]*((_0x564ad2[_0x3d2ea3(0x1a6)]-_0x564ad2['rangoStart'])/0x64);this['_barSprite'][_0x3d2ea3(0x1e5)](parseInt(_0x564ad2[_0x3d2ea3(0x1bc)]['slice'](0x1),0x10)),this[_0x3d2ea3(0x171)][_0x3d2ea3(0x1cc)](_0x2d42a6,_0x564ad2[_0x3d2ea3(0x1b3)],_0x5800a3,_0x564ad2['barHeight']),this[_0x3d2ea3(0x171)][_0x3d2ea3(0x1a8)](),_0x564ad2['enableShadow']&&(this['_arrowShadowSprite']=new PIXI[(_0x3d2ea3(0x1a3))](_0x564ad2[_0x3d2ea3(0x1e0)],{'fontSize':_0x564ad2[_0x3d2ea3(0x1e2)],'fill':_0x564ad2[_0x3d2ea3(0x1c6)]}),this[_0x3d2ea3(0x173)](this[_0x3d2ea3(0x1e1)])),this[_0x3d2ea3(0x1b4)]=new PIXI['Text'](_0x564ad2[_0x3d2ea3(0x1e0)],{'fontSize':_0x564ad2[_0x3d2ea3(0x1e2)],'fill':_0x564ad2[_0x3d2ea3(0x16d)]}),this[_0x3d2ea3(0x173)](this[_0x3d2ea3(0x1b4)]);},Scene_Map[_0x426c34(0x1ac)][_0x426c34(0x1d4)]=function(_0x598501){const _0x27c9fe=_0x426c34;if(!this[_0x27c9fe(0x1b4)])return;const _0x127331=_0x598501[_0x27c9fe(0x1ab)]+_0x598501[_0x27c9fe(0x195)]*(_0x598501[_0x27c9fe(0x1be)]/0x64);this[_0x27c9fe(0x1b4)]['x']=_0x127331,this[_0x27c9fe(0x1b4)]['y']=_0x598501[_0x27c9fe(0x1b3)]+_0x598501[_0x27c9fe(0x1dc)],_0x598501[_0x27c9fe(0x1e4)]&&this['_arrowShadowSprite']?(this['_arrowShadowSprite']['x']=_0x127331+_0x598501[_0x27c9fe(0x1ba)],this[_0x27c9fe(0x1e1)]['y']=_0x598501[_0x27c9fe(0x1b3)]+_0x598501[_0x27c9fe(0x1dc)]+_0x598501[_0x27c9fe(0x19e)]):this[_0x27c9fe(0x1e1)]&&(this[_0x27c9fe(0x1e1)]['visible']=![]);},Scene_Map['prototype'][_0x426c34(0x168)]=function(){const _0x5db9ec=_0x426c34;this[_0x5db9ec(0x17d)]&&(this[_0x5db9ec(0x1a9)](this[_0x5db9ec(0x17d)]),this['_darkenSprite']=null),this[_0x5db9ec(0x1a9)](this[_0x5db9ec(0x171)]),this[_0x5db9ec(0x1a9)](this['_arrowSprite']),this[_0x5db9ec(0x1ca)]&&this[_0x5db9ec(0x1a9)](this['_barShadowSprite']),this['_arrowShadowSprite']&&this[_0x5db9ec(0x1a9)](this[_0x5db9ec(0x1e1)]),this[_0x5db9ec(0x1e6)]&&(this[_0x5db9ec(0x1e6)][_0x5db9ec(0x1cd)](),this[_0x5db9ec(0x1a9)](this[_0x5db9ec(0x1e6)]),this[_0x5db9ec(0x1e6)][_0x5db9ec(0x17f)](),this[_0x5db9ec(0x1e6)]=null),_0x122184=null,$gameMap['_interpreter'][_0x5db9ec(0x1c2)]('');};const _0x48b55b=Game_Player[_0x426c34(0x1ac)][_0x426c34(0x1b1)];Game_Player[_0x426c34(0x1ac)][_0x426c34(0x1b1)]=function(){const _0x46cdbd=_0x426c34;if(_0x122184)return![];return _0x48b55b[_0x46cdbd(0x1c0)](this);};const _0x378b64=Scene_Map[_0x426c34(0x1ac)][_0x426c34(0x1d2)];Scene_Map[_0x426c34(0x1ac)][_0x426c34(0x1d2)]=function(){const _0x29db4e=_0x426c34;if(_0x122184)return![];return _0x378b64[_0x29db4e(0x1c0)](this);};const _0x30e71c=Scene_Map['prototype'][_0x426c34(0x186)];Scene_Map[_0x426c34(0x1ac)]['terminate']=function(){const _0x18197d=_0x426c34;_0x122184&&this[_0x18197d(0x168)](),_0x30e71c[_0x18197d(0x1c0)](this);};const _0x3ab5e6=Game_Map[_0x426c34(0x1ac)]['updateInterpreter'];Game_Map[_0x426c34(0x1ac)][_0x426c34(0x181)]=function(){!_0x122184&&_0x3ab5e6['call'](this);};const _0x23ed30=Game_Interpreter[_0x426c34(0x1ac)][_0x426c34(0x190)];Game_Interpreter[_0x426c34(0x1ac)][_0x426c34(0x190)]=function(){const _0x4f2a7c=_0x426c34;if(this[_0x4f2a7c(0x191)]===_0x4f2a7c(0x1a5))return!!_0x122184;return _0x23ed30[_0x4f2a7c(0x1c0)](this);};})()));function _0x477c(_0x75a673,_0x4924be){const _0x13bd85=_0x13bd();return _0x477c=function(_0x477c80,_0x452f6d){_0x477c80=_0x477c80-0x161;let _0x3d0912=_0x13bd85[_0x477c80];return _0x3d0912;},_0x477c(_0x75a673,_0x4924be);}function _0x13bd(){const _0x4e2057=['addChild','customText','setValue','parseVariables','TextOffsetY','parse','#FFFFFF','length','fontSize','AutoBarOffsetY','_darkenSprite','_textSize','destroy','16814124lhArIm','updateInterpreter','_textColor','barColors','BarHeight','ShadowColor','terminate','_canMove','995659AkltQd','textOffsetX','changeTextColor','isTriggered','positionMode','87qeaiHy','BarY','backOpacity','updateWaitMode','_waitMode','successSwitchId','CustomText','rangoStart','barWidth','10191848oelPWg','screenY','update','AutoBarOffsetX','failSwitchId','133004URHoyf','true','contentsHeight','shadowOffsetY','clear','textSize','_text','contents','Text','textWidth','minigame','rangoEnd','#000000','endFill','removeChild','startBar','barX','prototype','63UleQwh','CoyoteTime','checkArrowPosition','DarkenScreen','canMove','Graphics','barY','_arrowSprite','arrowDirection','ArrowSpeed','_showBackground','861900HyJsAB','registerCommand','shadowOffsetX','addChildAt','rangeColor','textOffsetY','arrowPosition','updateArrow','call','EnableShadow','setWaitMode','coyoteTime','MiniGameBar','width','shadowColor','visible','ShadowOffsetY','drawText','_barShadowSprite','padding','drawRect','hideWindow','ArrowIcon','updateBackOpacity','ScreenDarknessOpacity','_darkenScreen','isMenuEnabled','PositionMode','drawArrow','TextOffsetX','TextColor','replace','createBarArrowGame','bitmap','refresh','ArrowColor','barHeight','fillAll','_windowFrameSprite','772440gKNkVa','arrowIcon','_arrowShadowSprite','arrowSize','_interpreter','enableShadow','beginFill','_customTextWindow','tileHeight','6648535ftigIi','calcTextHeight','slice','ArrowSize','addWindow','TextSize','endBarArrowGame','Automatic','showWindowBackground','_screenDarknessOpacity','contentsWidth','arrowColor','_refreshFrame','textColor','_screenDarknessColor','_barSprite','_scene'];_0x13bd=function(){return _0x4e2057;};return _0x13bd();}