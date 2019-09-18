(window["webpackJsonpimpact-frontend-app"]=window["webpackJsonpimpact-frontend-app"]||[]).push([[0],{208:function(e,t){e.exports=function(e){return{menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}},210:function(e,t){e.exports=function(e){return{menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}},216:function(e,t){e.exports=function(e){return{menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}},217:function(e,t){e.exports=function(e){return{root:{margin:e.spacing(1.5),display:"flex",height:"calc(100% - ".concat(e.spacing(3),"px)"),boxSizing:"border-box",overflow:"auto"},tabMenu:{margin:e.spacing(1.5),minWidth:"160px"},tabContent:{minHeight:"100%",maxHeight:"100%",overflow:"auto"},card:{margin:e.spacing(1.5)},SelectedCard:{backgroundColor:e.palette.action.selected}}}},225:function(e,t,a){e.exports=a(284)},230:function(e,t,a){},282:function(e,t,a){},284:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(13),o=a.n(r),i=(a(230),a(14)),s=a(12),c=a(15),u=a(16),m=a(17),d=a(218),h=a(57),b=a(67),f=a(211),g=a.n(f),E=a(212),p=a.n(E),y=a(215),v=a.n(y),w=a(213),k=a.n(w),O=a(214),j=a.n(O),C=a(163),R=a(2),S=a(96),T=a.n(S),x=a(159),I=a(162),N=a(161),A=a(160),M=a(158),H=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).emailEl=l.a.createRef(),a.passwordEl=l.a.createRef(),a.handleSubmit=function(e){var t=a.props,n=t.handleClose,l=t.handleLogin;e.preventDefault();var r=a.emailEl.current.value,o=a.passwordEl.current.value;0!==r.trim().length&&0!==o.trim().length&&fetch("http://localhost:8000/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:'{ login(email: "'.concat(r,'", password: "').concat(o,'") { token, userId, tokenExpiration } }')})}).then(function(e){if(200!==e.status&&201!==e.status)throw new Error("Failed!");return e.json()}).then(function(e){e.data.login.token&&(l({token:e.data.login.token,userId:e.data.login.userId,tokenExpiration:e.data.login.tokenExpiration}),n())}).catch(function(e){console.log(e)})},a.renderInput=function(e){var t=e.field,a=Object(R.a)(e,["field"]);return l.a.createElement("div",null,l.a.createElement(M.a,Object.assign({id:t,name:t,label:T()(t)},a)))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.open,a=e.handleClose,n=this.renderInput;return l.a.createElement(x.a,{open:t,onClose:a},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement(A.a,null,"Login"),l.a.createElement(N.a,null,l.a.createElement(n,{field:"email",inputRef:this.emailEl,type:"text"}),l.a.createElement(n,{field:"password",inputRef:this.passwordEl,type:"password"})),l.a.createElement(I.a,null,l.a.createElement(C.a,{onClick:a,color:"primary"},"Cancel"),l.a.createElement(C.a,{type:"submit",color:"primary"},"Login"))))}}]),t}(n.PureComponent),B=a(208),P=a.n(B),D=Object(b.withStyles)(P.a)(H),L=a(174),W=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).handleLogout=function(){var e=a.props,t=e.handleClose;(0,e.handleLogout)(),t()},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.open,a=e.handleClose;return l.a.createElement(x.a,{open:t,onClose:a},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement(A.a,null,"Logout"),l.a.createElement(N.a,null,l.a.createElement(L.a,null,"Confirm logout.")),l.a.createElement(I.a,null,l.a.createElement(C.a,{onClick:a,color:"primary"},"Cancel"),l.a.createElement(C.a,{onClick:this.handleLogout,type:"submit",color:"primary"},"Logout"))))}}]),t}(n.PureComponent),G=a(210),V=a.n(G),J=Object(b.withStyles)(V.a)(W),q=a(169),F=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).emailEl=l.a.createRef(),a.passwordEl=l.a.createRef(),a.state={loading:!1,emailError:null},a.handleSubmit=function(e){var t=a.props.handleRegister;e.preventDefault();var n=a.emailEl.current.value,l=a.passwordEl.current.value;0!==n.trim().length&&0!==l.trim().length&&(a.setState({loading:!0}),fetch("http://localhost:8000/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:'mutation { createUser(userInput: { \n                        email: "'.concat(n,'", \n                        password: "').concat(l,'" \n                    }) { _id, email, errors } }')})}).then(function(e){return e.json()}).then(function(e){if(console.log(e),e.errors)throw e.errors[0].message;e.data.createUser.email&&t(),a.setState({emailError:null,loading:!1})}).catch(function(e){a.setState({loading:!1,emailError:e})}))},a.renderInput=function(e){var t=e.field,a=Object(R.a)(e,["field"]);return l.a.createElement("div",null,l.a.createElement(M.a,Object.assign({required:!0,id:t,name:t,label:T()(t),helperText:" "},a)))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.open,a=e.handleClose,n=this.state,r=n.loading,o=n.emailError,i=this.renderInput;return l.a.createElement(x.a,{open:t,onClose:a},r&&l.a.createElement(q.a,null),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement(A.a,null,"Register"),l.a.createElement(N.a,null,l.a.createElement(i,{autoFocus:!0,field:"email",inputRef:this.emailEl,type:"text",error:Boolean(o),helperText:o||" "}),l.a.createElement(i,{field:"password",inputRef:this.passwordEl,type:"password"})),l.a.createElement(I.a,null,l.a.createElement(C.a,{onClick:a,color:"primary"},"Cancel"),l.a.createElement(C.a,{type:"submit",color:"primary"},"Register"))))}}]),t}(n.PureComponent),K=l.a.createContext({token:null,userId:null,login:function(e){e.token,e.userId,e.tokenExpiration},logout:function(){}}),z=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).context=a.props.context||{},a.state={registerModalOpen:!1,modalOpen:!1},a.handleRegister=function(){a.setState({registerModalOpen:!1,modalOpen:!0})},a.toggleRegisterModal=function(){var e=a.state.registerModalOpen;a.setState({registerModalOpen:!e})},a.toggleModal=function(){var e=a.state.modalOpen;a.setState({modalOpen:!e})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.modalOpen,a=e.registerModalOpen,n=this.context,r=n.token,o=n.login,i=n.logout;return r?[l.a.createElement(C.a,{key:"button",onClick:this.toggleModal,color:"inherit"},"Logout"),l.a.createElement(J,{key:"modal",open:t,handleLogout:i,handleClose:this.toggleModal})]:[l.a.createElement(C.a,{key:"login-button",onClick:this.toggleModal,color:"inherit"},"Login"),l.a.createElement(C.a,{key:"register-button",onClick:this.toggleRegisterModal,color:"inherit"},"Register"),l.a.createElement(D,{key:"login-modal",open:t,handleLogin:o,handleClose:this.toggleModal}),l.a.createElement(F,{key:"register-modal",open:a,handleRegister:this.handleRegister,handleClose:this.toggleRegisterModal})]}}]),t}(n.PureComponent);z.contextType=K;var U=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return l.a.createElement(g.a,{position:"static"},l.a.createElement(p.a,null,l.a.createElement(k.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},l.a.createElement(j.a,null)),l.a.createElement(v.a,{align:"left",variant:"h6",className:e.title},"Impact"),l.a.createElement(z,null)))}}]),t}(n.PureComponent),Z=a(216),Y=a.n(Z),$=Object(b.withStyles)(Y.a)(U),_=a(69),Q=a(129),X=a(166),ee=a(207),te=a(200),ae=a(167);function ne(e){var t=e.children;return l.a.createElement(_.a,{align:"left",variant:"body2"},"\u25cf \xa0 \xa0 ",t)}var le=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).renderChapter=function(e){var t=e.children,n=e.title,r=a.props.classes;return l.a.createElement(X.a,{elevation:2,className:r.card},l.a.createElement(ae.a,null,l.a.createElement(_.a,{align:"left",variant:"h6"},n),t))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.renderChapter;return[l.a.createElement(e,{key:"main",title:"Base informations"},l.a.createElement(_.a,{align:"left",variant:"body2"},l.a.createElement("b",null,"Name:")," Roland Marston ",l.a.createElement("br",null),l.a.createElement("b",null,"Race:")," Human ",l.a.createElement("br",null),l.a.createElement("b",null,"Background:")," Mercenary ",l.a.createElement("br",null),l.a.createElement("b",null,"Alignment:")," Neutral (Evil? Probably, not sure yet..)  ",l.a.createElement("br",null),l.a.createElement("b",null,"Eyes:")," Gray/Blue ",l.a.createElement("br",null),l.a.createElement("b",null,"Hair:")," Short, mixture of gray and sparse black. ",l.a.createElement("br",null),l.a.createElement("b",null,"Height:")," 1,88 m ",l.a.createElement("br",null),l.a.createElement("b",null,"Age:")," 58 years ",l.a.createElement("br",null))),l.a.createElement(e,{key:"highConcept",title:"Who is Roland?"},l.a.createElement(ne,null,"Old adventurer that saw a lot, but his prime times are past him. He knows that, nevertheless life on a road is the one that he loves."),l.a.createElement(ne,null,"Roland was known as an genis inventor. That was main reason to stage his own death."),l.a.createElement(ne,null,"In young days Roland was neutral evil, but last several years changed that a little. His wife and daughter softened his heart and made him a little bit better person. Will Roland descend into his old, very amoral, behavior now, when his family is dead?"),l.a.createElement(ne,null,"Long term goal: find a way to resurrect his family."),l.a.createElement(ne,null,"Short term goal: find who from his old party sold him out."))]}}]),t}(n.PureComponent);function re(e){var t=e.children;return l.a.createElement(_.a,{align:"left",variant:"body2"},"\u25cf \xa0 \xa0 ",t)}var oe=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).renderChapter=function(e){var t=e.children,n=e.title,r=a.props.classes;return l.a.createElement(X.a,{elevation:2,className:r.card},l.a.createElement(ae.a,null,l.a.createElement(_.a,{align:"left",variant:"h6"},n),t))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.renderChapter;return[l.a.createElement(e,{key:"0",title:"Early days in Thay"},l.a.createElement(re,null,"Roland and his younger brother Tommy are born into a merchant family at the outskirts of Thay. Their early days are filled with joy and family love."),l.a.createElement(re,null,"Their father lost a lot of money because of several wrong investitions."),l.a.createElement(re,null,"Family is selling both young brothers into slavery. Specifically into a red mage\u2019s household."),l.a.createElement(re,null,"Two brothers are working in Karssus\u2019s house. Cleaning, helping the cooks, etc."),l.a.createElement(re,null,"Tom is contacted by otherworldly entity, a devil that calls himself The One That Ends All Time. He and Tom form a pact."),l.a.createElement(re,null,"Both brothers escape slavery, and are hunted by Darius\u2019s group."),l.a.createElement(re,null,"After several weeks they are captured, but because they impressed Darius he decide to buy them out and recruit to his group.")),l.a.createElement(e,{key:"1",title:"Full time adventurer"},l.a.createElement(re,null,"Many adventures with Darius and his group."),l.a.createElement(re,null,"They do some bad things like hunt for slaves, kill innocents, steal, etc."),l.a.createElement(re,null,"Roland meets Diana, young, red headed nurse in an Ilmater\u2019s infirmary. They fall in love and marry."),l.a.createElement(re,null,"Roland decides to leave adventuring, fake his death (with Darius\u2019s party\u2019s help) and settle down with Diana.")),l.a.createElement(e,{key:"2",title:"Settling with family life"},l.a.createElement(re,null,"Roland\u2019s and Diana\u2019s daughter is born, Annie."),l.a.createElement(re,null,"Roland is working as a craftsman at the edge of Phandelver. Making simple tools, toys, working with leather etc."),l.a.createElement(re,null,"Diana gets pregnant again."),l.a.createElement(re,null,"Roland\u2019s house gets raided, Annie and Diana are killed and home is burned. Roland\u2019s son\u2019s soul that Diana was pregnant with is transferred into only Soul prison that Roland poses, his watch.")),l.a.createElement(e,{key:"3",title:"Old dog\u2019s coming back"},l.a.createElement(re,null,"Roland digs out his gear, go after the attackers and kills them all."),l.a.createElement(re,null,"Raiders attacked because they wonted Roland's inventions and blueprints. Which they got and send somewhere before they died."),l.a.createElement(re,null,"Roland comes to Waterdeep to find Valetta."))]}}]),t}(n.PureComponent),ie=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).renderChapter=function(e){var t=e.children,n=e.title,r=a.props.classes;return l.a.createElement(X.a,{elevation:2,className:r.card},l.a.createElement(ae.a,null,l.a.createElement(_.a,{align:"left",variant:"h6"},n),l.a.createElement(_.a,{align:"justify",variant:"body2"},t)))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.renderChapter;return[l.a.createElement(e,{key:"0",title:"Librarian job"},"Early in Marston brothers\u2019 history their group was tasked with finding special, magic book from an ancient Lost Library in a middle of desert. They found that place, and convinced library guardian, a paverfull fay ghost, to let them in. While inside Iliya\u2019s curiosity took better of him and he started taking books forbidden by the guardian, with lead to fight.  Every time guardian died he immediately reincarnated, the team almost lost, bu at the end Ender, with his knowledge and guidance, helped them bound undying\u2019s fey soul into a statue. With his last words guardian cursed adventures: \u201cYou will never be truly peaceful! Every peace of knowledge you obtain will cause you pain and suffering!\u201d.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("em",null,"Aftermath: Tom, Roland and Iliya reverse engineered soul binding spell and together they made Soul Prisons.")),l.a.createElement(e,{key:"1",title:"Hunting Robin Hood"},"John Lock, some minor nobleman bastard was robbing rich nobles in outskirts of Calimshan. Problem was that most local population was in favor of John\u2019s banditism so Darius\u2019s team was hired to end that problem by all means necessary. Tracking John turned out to be impossible even for Zed, so he found people close to John\u2019s men, their wifes, children and parents, and together with Tom, Roland and Grom they burned villages and killed many, many innocent. Plan worked and John had to come out, for his doom. Battle was quick and brutal. For that they all of the villagers that survived this were talking about Blood Riders (name they gave Darius\u2019s group).",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("em",null,"Aftermath: \u201cBlood Riders\u201d name stick. It helped them by rising prices for their work and causing fear in their enemies harts, but also make them targets of many vangences of their victims. In one of them several years latter Iliya died.")),l.a.createElement(e,{key:"the attack",title:"End of a good life"},"They came at night, seven of them. Roland felt something, but he was in no position to fight them off. One handed, off shape, no weapons. It wasn't even hard to restrain him and his family. They tortured Annie, so it didnt took much to break Roland to give the attackers all old blueprints of Rolands inventions, many of them not made at all. At the end Roland was left bleeding besides his dying wife and child in a burning house.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("em",null,"Aftermath:"))]}}]),t}(n.PureComponent),se=a(10),ce=a(112),ue=a.n(ce),me=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).renderCharacter=function(e){var t=e.children,n=e.name,r=e.selected,o=a.props.classes,i=ue()(o.card,Object(se.a)({},o.SelectedCard,r));return l.a.createElement(X.a,{className:i},l.a.createElement(ae.a,null,l.a.createElement(_.a,{align:"left",variant:"h6"},n),l.a.createElement(_.a,{align:"justify",variant:"body2"},t)))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.renderCharacter;return[l.a.createElement(e,{key:"pistol1",name:"Last whisper - pistol"},"Crown jewel of Roland's work. Advanced pistol that is an extension of Roland's soul, it works only when Artificer Infusion \"Repeating Shot\"is used on it.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"STATS"),l.a.createElement("br",null),"Base firearms pistol stats with Repeating Shot. Except:",l.a.createElement("br",null),"It does not use one of the artificer's infusions. (It would be nice, but if you wont to nerf that item that's the place to start)",l.a.createElement("br",null),"Magical bonus is +2 instead of +1.",l.a.createElement("br",null),"Wielder has an advantage on initiative rolls.",l.a.createElement("br",null),"Require atonement."),l.a.createElement(e,{key:"pistol2",name:"Agony / Eternity / Remorse (one of those) - pistol"},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"STATS"),l.a.createElement("br",null),"Base firearms palm pistol stats with a Hellfire bonus (Uncommon weapons in dnd-beyound): ",l.a.createElement("br",null),"This weapon is fashioned from infernal iron and traced with veins of hellfire that shed dim light in a 5-foot-radius. Any humanoid killed by an attack made with this weapon has its soul funneled into the River Styx, where it\u2019s reborn instantly as a lemure devil (described in the Monster Manual)."),l.a.createElement(e,{key:"shotgun",name:"Lullaby - sawed-off shotgun"},"Weapon designed to fire only special ammunition made just for it. Its a two-barrel short shotgun that can hold one bullet per barrel.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"STATS"),l.a.createElement("br",null),"Range: 30/60 Ammunition: ",l.a.createElement("br",null),"(It's more or less 1-2 lvl spells in a form of bullets rather then scrolls, materials to make them cost 100gp per round)",l.a.createElement("br",null),l.a.createElement("b",null,"Positive energy shell")," - creature hit by it heals for 2d8 + 4.",l.a.createElement("br",null),l.a.createElement("b",null,"Negative energy shell")," - creature hit must make a Constitution saving throw. If it fails, the target is blinded for 120s. At the end of each of its turns, the target can make a Constitution saving throw. On a success, the effect ends.",l.a.createElement("br",null),l.a.createElement("b",null,"Explosive shell")," - every creature in a 10ft. radius sphere must make a ST14 Dex saving roll or take 4d8 fire damage (or half as that on a saved roll).",l.a.createElement("br",null),l.a.createElement("b",null,"Shock shell")," - the attack deals an extra 2d6 lighting damage to the target, which becomes visible if it is invisible, and the target sheds dim light in a 5-foot radius and can\u2019t become invisible for the next 60s.",l.a.createElement("br",null),l.a.createElement("b",null,"Sun shell")," - Roland need to shoot it straight up. Small ball of light shots out and hovers 10 ft above a ground. For the next 60s, the the ball bright light in a 20-foot radius and dim light for an additional 20 feet. Every creature that start its turn in a bright light range takes 1d4 radiant damage (everyone, Roland too).",l.a.createElement("br",null)),l.a.createElement(e,{key:"rifle",name:"Heavy asset - rifle"},"Heavy long range rifle made for beasts and creatures bigger then humans.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"STATS"),l.a.createElement("br",null),"Base firearms musket stats. Except: ",l.a.createElement("br",null),"When hitting creature larger then medium size it does extra 1d12 damage. (2d12 total)",l.a.createElement("br",null),"During short rest Roland can change damage type that this weapon deals (Piercing, Fire, Cold, Acid, Necrotic, Radiant). ",l.a.createElement("br",null),"It has magical enhancement +1 do attack and damage rolls. ",l.a.createElement("br",null),"Missfire is increased to 4. (from 2) ",l.a.createElement("br",null)),l.a.createElement(e,{key:"leftArm",name:"Claw - left arm"},"In a fight with Lord\u2019s Alliance\u2019s bounty hunters Roland lost left arm. After 2 years without second hand Roland and Tom went to City of Brass on an elemental Plane of Fire. Once in a city they made a bargain with Gar\u2019tu\u2019zad, a fire Ifrit smith: he will help them craft a left arm for Roland, but he will take one favor from them both, that he will use in a future. The result is Claw, left arm made from black devil iron, hardened in a blood of a hundreds demons.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"STATS"),l.a.createElement("br",null),"It's mainly for visual reasons. No real great powers in a hand or anything. Some of the tools are integrated to this hand."),l.a.createElement(e,{key:"defender",name:"Omen - steel hound"},"One of Tom\u2019s and Roland\u2019s earliest work. Summoned Hell Hound that was Roland\u2019s companion for many years. After one of the worst battles the hound was heavily wounded defending Roland. In return Marstorn made a mechanical construct and, with Toms and Ender, transferred soul and mind of Hound into a new body. Omen is an old dog, an emissary of Devil and a friend to Roland. He is calm and very protective for anyone he consider his flock.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"STATS"),l.a.createElement("br",null),"Base Iron Defender from Battle Smith stats."),l.a.createElement(e,{key:"souls",name:"Soul prison"},"Items design to trap and contain a soul of a living being. They are always mechanical contraptions enchanted with high level magic. When the soul is inside cogs and parts of those items start to move with can by used to power small items. They were only 17 Soul prisons created."),l.a.createElement(e,{key:"watch",name:"Soul watch"},"Only Soul prison that remain in Roland\u2019s possession. It\u2019s in an mechanical watch and it\u2019s full with Roland\u2019s unborn son\u2019s soul.")]}}]),t}(n.PureComponent),de=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).renderCharacter=function(e){var t=e.children,n=e.name,r=e.selected,o=a.props.classes,i=ue()(o.card,Object(se.a)({},o.SelectedCard,r));return l.a.createElement(X.a,{className:i},l.a.createElement(ae.a,null,l.a.createElement(_.a,{align:"left",variant:"h6"},n),l.a.createElement(_.a,{align:"justify",variant:"body2"},t)))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.renderCharacter;return[l.a.createElement(e,{key:"0",name:"Kurt Marston"},"Roland\u2019s father, middle-tier merchant, usually dealing with spices, fabrics and mechanical tools (and toys) imported from the east. Likes his children, but not as much as his dream of becoming great and rich merchant. He died poor and in dept in his 60\u2019s leaving his wife and newborn daughter.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("em",null,"Currently: dead.")),l.a.createElement(e,{key:"1",name:"Elisabeth Marston"},"Roland\u2019s mother, housewife. Her beauty as a young girl stunned most men, but she was getting old fast. She become mother full of hypocrisy, loving outside but cold and selfish inside. After her husband died leaving her with a lot of debts she is sold into slavery with her young daughter.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("em",null,"Currently: dead.")),l.a.createElement(e,{key:"2",name:"Tom Marston"},"Roland\u2019s younger brother and middle Marston sibling. The loudest and wordy of all Marstons, he always knew what to say and when to get what he wanted. During his time as a slave he found himself in a middle of attention of some powerful entity from Nine Hells. Tom forget a pact with that entity and with its help he, and Roland, escaped the slavery. Over many years Tom\u2019s pact with a devil started to reflect negatively on his mental health. Slowly he become more sadistic, cold hearted and cruel. Nevertheless Tom always stayed loyal to his few, real friends but his changing personality was a center of few big fights between Darius\u2019s group. With Enders help Tom become very powerful warlock and demonologist.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("em",null,"Currently: 52 years, location unknown.")),l.a.createElement(e,{key:"3",name:"Alice Marston"},"Roland\u2019s youngest sibling. Sister that was burn after he and his brother was sold out as slaves. She never knew truth about her brothers (she heard stories they died). She had best traits of her brothers, Roland\u2019s unusual and brilliant intellect and resourcefulness together with Tom\u2019s charismatic smile and smooth talk. She even was as beautiful as her mother when she was young. She was sold into slavery when she was 14, but in a place when magic talent and court intrigues rule her unusual intelligence and charisma could have helped her get out of slavery.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("em",null,"Currently: 43 years, location unknown, probably somewhere in Thay.")),l.a.createElement(e,{key:"4",name:"Ender"},"The One That Ends All Time, Tom\u2019s devil. While Marston brothers were \u201cplaying\u201d at night in Karssus laboratory (they were actually trying to figure out what Karssus was doing in there) this devil found Toms out and reach out to him. After making a pact in Tom\u2019s dream he become his patron. Enders true name is not known to others, and if Tom knows it he doesn't tell. Besides that Ender is really talkative and curious about a world. Some of Roland\u2019s inventions are directly inspired by Ender\u2019s knowledge and lessons."),l.a.createElement(e,{key:"5",name:"Karssus Thorn"},"Prominent noble and Red Mage of Thay. Cruel but fair lord. He was one of the scientists responsible for researching other planes.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("em",null,"Currently: unknown, if alive he should be around 140 years old.")),l.a.createElement(e,{key:"6",name:"Diana Marston"},"Half-elf woman, nurse in a service of Ilmater. Maybe the only pure and truly good person in a world. Always was trying to help others. She wasn't blind to reality of the world, for example she knew exactly what was Roland doing before he met her, but she always try to do her best. She died in Roland\u2019s hands, whispering that she loves him to the very end.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("em",null,"Currently: dead.")),l.a.createElement(e,{key:"7",name:"Annie Marston"},"Child of Roland and Diana. Brilliant, happy and loving fun and games. Best of trait from both her parents.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("em",null,"Currently: dead.")),l.a.createElement(e,{key:"8",name:"Gar\u2019tu\u2019zad"},"One of the best smiths in City of Brass. Working mostly for a powerful devils making intelligent weapons for killing demons.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("em",null,"Currently: unknown.")),l.a.createElement(e,{key:"9",name:"Darius's party"},l.a.createElement("em",null,"Valetta")," - Brass dragornborn priest of Gond. ",l.a.createElement("br",null),l.a.createElement("em",null,"Currently: priest in a House of Inspired Hands, Gond\u2019s church in Waterdeep."),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("em",null,"Zed")," - One-eyed firbolg ranger. ",l.a.createElement("br",null),l.a.createElement("em",null,"Currently: unknown."),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("em",null,"Iliya")," - Rock gnome illusionist. ",l.a.createElement("br",null),l.a.createElement("em",null,"Currently: unknown."),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("em",null,"Grom`a`gar")," - Half-ork barbarian woman from north. ",l.a.createElement("br",null),l.a.createElement("em",null,"Currently: unknown."),l.a.createElement("br",null),l.a.createElement("br",null),"WORK IN PROGRESS")]}}]),t}(n.PureComponent);function he(e){var t=e.children;return l.a.createElement(_.a,{align:"left",variant:"body2"},"\u25cf \xa0 \xa0 ",t)}var be=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).renderChapter=function(e){var t=e.children,n=e.title,r=a.props.classes;return l.a.createElement(X.a,{elevation:2,className:r.card},l.a.createElement(ae.a,null,l.a.createElement(_.a,{align:"left",variant:"h6"},n),t))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.renderChapter;return[l.a.createElement(e,{key:"magicItems",title:"Magic Items"},"Weapons ",l.a.createElement("br",null),l.a.createElement(he,null,"Last whisper +2 (x1) (INVENTION)"),l.a.createElement(he,null,"Heavy asset +1 (x1) (INVENTION)"),l.a.createElement(he,null,"Handaxe +1 (x1)"),l.a.createElement(he,null,"Agony (x1) (INVENTION)"),l.a.createElement(he,null,"Lullaby (x1) (INVENTION)"),l.a.createElement("br",null),"Ammunition fo Lullaby ",l.a.createElement("br",null),l.a.createElement(he,null,"Positive energy shell (x4) (INVENTION)"),l.a.createElement(he,null,"Negative energy shell (x2) (INVENTION)"),l.a.createElement(he,null,"Shock shell (x2) (INVENTION)"),l.a.createElement(he,null,"Explosive shell (x1) (INVENTION)"),l.a.createElement(he,null,"Sun shell (x1) (INVENTION)"),l.a.createElement("br",null),"Armor ",l.a.createElement("br",null),l.a.createElement(he,null,"Breastplate +1 (or +2? :) )"),l.a.createElement(he,null,"Shield"),l.a.createElement("br",null),"Misc ",l.a.createElement("br",null),l.a.createElement(he,null,"Soul watch (x1) (INVENTION)"),l.a.createElement(he,null,"Bag of holding"),l.a.createElement(he,null,"Horse"),l.a.createElement(he,null,"Tools Roland is proficient with"),l.a.createElement(he,null,"Some adventuring gear (line, bedrolls etc)"),l.a.createElement(he,null,"Some gold, mostly in gems (from old days)"))]}}]),t}(n.PureComponent);var fe=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).renderChapter=function(e){var t=e.children,n=e.title,r=a.props.classes;return l.a.createElement(X.a,{elevation:2,className:r.card},l.a.createElement(ae.a,null,l.a.createElement(_.a,{align:"left",variant:"h6"},n),t))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.renderChapter;return[l.a.createElement(e,{key:"main",title:"Roland's story hooks."},l.a.createElement(_.a,{align:"center",variant:"body2"},"COMING SOON"))]}}]),t}(n.PureComponent);function ge(e){var t=e.children,a=e.value,n=e.index,r=Object(R.a)(e,["children","value","index"]);return l.a.createElement(_.a,Object.assign({component:"div",role:"tabpanel",hidden:a!==n,id:"vertical-tabpanel-".concat(n)},r),l.a.createElement(Q.a,{p:0},t))}function Ee(e){return{id:"vertical-tab-".concat(e)}}var pe=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).ContentRef=l.a.createRef(),a.state={tab:0},a.setTab=function(e,t){a.ContentRef.current.scrollTop=0,a.setState({tab:t})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state.tab;return l.a.createElement("div",{className:e.root},l.a.createElement(X.a,{className:e.tabMenu},l.a.createElement(ee.a,{orientation:"vertical",variant:"scrollable",value:t,onChange:this.setTab},l.a.createElement(te.a,Object.assign({label:"Base informations"},Ee(0))),l.a.createElement(te.a,Object.assign({label:"History"},Ee(1))),l.a.createElement(te.a,Object.assign({label:"Events"},Ee(2))),l.a.createElement(te.a,Object.assign({label:"Characters"},Ee(3))),l.a.createElement(te.a,Object.assign({label:"Inventions"},Ee(4))),l.a.createElement(te.a,Object.assign({label:"Equipment"},Ee(5))),l.a.createElement(te.a,Object.assign({label:"Notes to GM"},Ee(6))))),l.a.createElement("div",{className:e.tabContent,ref:this.ContentRef},l.a.createElement(ge,{value:t,index:0},l.a.createElement(le,{classes:e})),l.a.createElement(ge,{value:t,index:1},l.a.createElement(oe,{classes:e})),l.a.createElement(ge,{value:t,index:2},l.a.createElement(ie,{classes:e})),l.a.createElement(ge,{value:t,index:3},l.a.createElement(de,{classes:e})),l.a.createElement(ge,{value:t,index:4},l.a.createElement(me,{classes:e})),l.a.createElement(ge,{value:t,index:5},l.a.createElement(be,{classes:e})),l.a.createElement(ge,{value:t,index:6},l.a.createElement(fe,{classes:e}))))}}]),t}(n.PureComponent),ye=a(4),ve=a(217),we=a.n(ve),ke=Object(ye.a)(we.a)(pe),Oe=(a(282),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={token:null,userId:null},a.login=function(e){var t=e.token,n=e.userId;e.tokenExpiration;a.setState({token:t,userId:n})},a.logout=function(){a.setState({token:null,userId:null})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.token,a=e.userId;return l.a.createElement("div",{className:"App",style:{position:"fixed",top:0,left:0,right:0,bottom:0,display:"flex",flexDirection:"column"}},l.a.createElement(K.Provider,{value:{token:this.state.token,userId:this.state.userId,login:this.login,logout:this.logout}},l.a.createElement($,null),l.a.createElement("div",{style:{flexGrow:"1",overflow:"auto"}},l.a.createElement(d.a,{basename:"/"},l.a.createElement(h.c,null,t&&l.a.createElement(h.a,{exact:!0,path:"/"},"Home logged in: ",a),l.a.createElement(h.a,{exact:!0,path:"/roland"},l.a.createElement(ke,null)),!t&&l.a.createElement(h.a,{exact:!0,path:"/"},"Not logged in"))))))}}]),t}(n.PureComponent));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(Oe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[225,1,2]]]);
//# sourceMappingURL=main.c20588bb.chunk.js.map