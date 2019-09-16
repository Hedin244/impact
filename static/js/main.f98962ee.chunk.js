(window["webpackJsonpimpact-frontend-app"]=window["webpackJsonpimpact-frontend-app"]||[]).push([[0],{208:function(e,t){e.exports=function(e){return{menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}},210:function(e,t){e.exports=function(e){return{menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}},216:function(e,t){e.exports=function(e){return{menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}},217:function(e,t){e.exports=function(e){return{root:{margin:e.spacing(1.5),display:"flex",height:"calc(100% - ".concat(e.spacing(3),"px)"),boxSizing:"border-box",overflow:"auto"},tabMenu:{margin:e.spacing(1.5),minWidth:"160px"},tabContent:{minHeight:"100%",maxHeight:"100%",overflow:"auto"},card:{margin:e.spacing(1.5)},SelectedCard:{backgroundColor:e.palette.action.selected}}}},225:function(e,t,a){e.exports=a(284)},230:function(e,t,a){},282:function(e,t,a){},284:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),o=a.n(l),i=(a(230),a(14)),s=a(13),c=a(19),d=a(20),u=a(22),h=a(218),m=a(55),f=a(67),p=a(211),g=a.n(p),b=a(212),y=a.n(b),E=a(215),v=a.n(E),w=a(213),k=a.n(w),O=a(214),j=a.n(O),R=a(163),C=a(2),S=a(96),T=a.n(S),x=a(159),I=a(162),M=a(161),A=a(160),P=a(158),N=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).emailEl=r.a.createRef(),a.passwordEl=r.a.createRef(),a.handleSubmit=function(e){var t=a.props,n=t.handleClose,r=t.handleLogin;e.preventDefault();var l=a.emailEl.current.value,o=a.passwordEl.current.value;0!==l.trim().length&&0!==o.trim().length&&fetch("http://localhost:8000/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:'{ login(email: "'.concat(l,'", password: "').concat(o,'") { token, userId, tokenExpiration } }')})}).then(function(e){if(200!==e.status&&201!==e.status)throw new Error("Failed!");return e.json()}).then(function(e){e.data.login.token&&(r({token:e.data.login.token,userId:e.data.login.userId,tokenExpiration:e.data.login.tokenExpiration}),n())}).catch(function(e){console.log(e)})},a.renderInput=function(e){var t=e.field,a=Object(C.a)(e,["field"]);return r.a.createElement("div",null,r.a.createElement(P.a,Object.assign({id:t,name:t,label:T()(t)},a)))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.open,a=e.handleClose,n=this.renderInput;return r.a.createElement(x.a,{open:t,onClose:a},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(A.a,null,"Login"),r.a.createElement(M.a,null,r.a.createElement(n,{field:"email",inputRef:this.emailEl,type:"text"}),r.a.createElement(n,{field:"password",inputRef:this.passwordEl,type:"password"})),r.a.createElement(I.a,null,r.a.createElement(R.a,{onClick:a,color:"primary"},"Cancel"),r.a.createElement(R.a,{type:"submit",color:"primary"},"Login"))))}}]),t}(n.PureComponent),D=a(208),H=a.n(D),L=Object(f.withStyles)(H.a)(N),B=a(174),W=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).handleLogout=function(){var e=a.props,t=e.handleClose;(0,e.handleLogout)(),t()},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.open,a=e.handleClose;return r.a.createElement(x.a,{open:t,onClose:a},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(A.a,null,"Logout"),r.a.createElement(M.a,null,r.a.createElement(B.a,null,"Confirm logout.")),r.a.createElement(I.a,null,r.a.createElement(R.a,{onClick:a,color:"primary"},"Cancel"),r.a.createElement(R.a,{onClick:this.handleLogout,type:"submit",color:"primary"},"Logout"))))}}]),t}(n.PureComponent),G=a(210),K=a.n(G),J=Object(f.withStyles)(K.a)(W),q=a(169),F=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).emailEl=r.a.createRef(),a.passwordEl=r.a.createRef(),a.state={loading:!1,emailError:null},a.handleSubmit=function(e){var t=a.props.handleRegister;e.preventDefault();var n=a.emailEl.current.value,r=a.passwordEl.current.value;0!==n.trim().length&&0!==r.trim().length&&(a.setState({loading:!0}),fetch("http://localhost:8000/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:'mutation { createUser(userInput: { \n                        email: "'.concat(n,'", \n                        password: "').concat(r,'" \n                    }) { _id, email, errors } }')})}).then(function(e){return e.json()}).then(function(e){if(console.log(e),e.errors)throw e.errors[0].message;e.data.createUser.email&&t(),a.setState({emailError:null,loading:!1})}).catch(function(e){a.setState({loading:!1,emailError:e})}))},a.renderInput=function(e){var t=e.field,a=Object(C.a)(e,["field"]);return r.a.createElement("div",null,r.a.createElement(P.a,Object.assign({required:!0,id:t,name:t,label:T()(t),helperText:" "},a)))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.open,a=e.handleClose,n=this.state,l=n.loading,o=n.emailError,i=this.renderInput;return r.a.createElement(x.a,{open:t,onClose:a},l&&r.a.createElement(q.a,null),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(A.a,null,"Register"),r.a.createElement(M.a,null,r.a.createElement(i,{autoFocus:!0,field:"email",inputRef:this.emailEl,type:"text",error:Boolean(o),helperText:o||" "}),r.a.createElement(i,{field:"password",inputRef:this.passwordEl,type:"password"})),r.a.createElement(I.a,null,r.a.createElement(R.a,{onClick:a,color:"primary"},"Cancel"),r.a.createElement(R.a,{type:"submit",color:"primary"},"Register"))))}}]),t}(n.PureComponent),X=r.a.createContext({token:null,userId:null,login:function(e){e.token,e.userId,e.tokenExpiration},logout:function(){}}),z=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).context=a.props.context||{},a.state={registerModalOpen:!1,modalOpen:!1},a.handleRegister=function(){a.setState({registerModalOpen:!1,modalOpen:!0})},a.toggleRegisterModal=function(){var e=a.state.registerModalOpen;a.setState({registerModalOpen:!e})},a.toggleModal=function(){var e=a.state.modalOpen;a.setState({modalOpen:!e})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.modalOpen,a=e.registerModalOpen,n=this.context,l=n.token,o=n.login,i=n.logout;return l?[r.a.createElement(R.a,{key:"button",onClick:this.toggleModal,color:"inherit"},"Logout"),r.a.createElement(J,{key:"modal",open:t,handleLogout:i,handleClose:this.toggleModal})]:[r.a.createElement(R.a,{key:"login-button",onClick:this.toggleModal,color:"inherit"},"Login"),r.a.createElement(R.a,{key:"register-button",onClick:this.toggleRegisterModal,color:"inherit"},"Register"),r.a.createElement(L,{key:"login-modal",open:t,handleLogin:o,handleClose:this.toggleModal}),r.a.createElement(F,{key:"register-modal",open:a,handleRegister:this.handleRegister,handleClose:this.toggleRegisterModal})]}}]),t}(n.PureComponent);z.contextType=X;var U=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(g.a,{position:"static"},r.a.createElement(y.a,null,r.a.createElement(k.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(j.a,null)),r.a.createElement(v.a,{align:"left",variant:"h6",className:e.title},"Impact"),r.a.createElement(z,null)))}}]),t}(n.PureComponent),V=a(216),Z=a.n(V),Y=Object(f.withStyles)(Z.a)(U),$=a(69),_=a(129),Q=a(166),ee=a(207),te=a(200),ae=a(143),ne=a(138),re=a(167);function le(e){var t=e.children;return r.a.createElement(ae.a,null,"\u25cf \xa0 \xa0 ",t)}var oe=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).renderChapter=function(e){var t=e.list,n=e.children,l=e.title,o=a.props.classes;return r.a.createElement(Q.a,{elevation:2,className:o.card},r.a.createElement(re.a,null,r.a.createElement($.a,{variant:"h6"},l),t?r.a.createElement(ne.a,null,n):n))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.renderChapter;return[r.a.createElement(e,{key:"main",title:"Base informations"},r.a.createElement($.a,{align:"left",variant:"body2"},"\xa0 \xa0",r.a.createElement("b",null,"Name:")," Roland Marston ",r.a.createElement("br",null),"\xa0 \xa0",r.a.createElement("b",null,"Race:")," Human ",r.a.createElement("br",null))),r.a.createElement(e,{list:!0,key:"highConcept",title:"Who is Roland?"},r.a.createElement(le,null,"Old adventurer that saw a lot, but his prime times are past him. He knows that, nevertheless life on a road is the one that he loves."),r.a.createElement(le,null,"Roland was known as an genis inventor. That was main reason to stage his own death."),r.a.createElement(le,null,"In young days Roland was neutral evil, but last several years changed that a little. His wife and daughter softened his heart and made him a little bit better person. Will Roland descend into his old, very amoral, behavior now, when his family is dead?"))]}}]),t}(n.PureComponent);function ie(e){var t=e.children;return r.a.createElement(ae.a,null,"\u25cf \xa0 \xa0 ",t)}var se=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).renderChapter=function(e){var t=e.children,n=e.title,l=a.props.classes;return r.a.createElement(Q.a,{elevation:2,className:l.card},r.a.createElement(re.a,null,r.a.createElement($.a,{variant:"h6"},n),r.a.createElement(ne.a,null,t)))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.renderChapter;return[r.a.createElement(e,{key:"0",title:"Early days in Thay"},r.a.createElement(ie,null,"Roland and his younger brother Tommy are born into a merchant family at the outskirts of Thay. Their early days are filled with joy and family love."),r.a.createElement(ie,null,"Their father lost a lot of money because of several wrong investitions."),r.a.createElement(ie,null,"Family is selling both young brothers into slavery. Specifically into a red mage\u2019s household."),r.a.createElement(ie,null,"Two brothers are working in Karssus\u2019s house. Cleaning, helping the cooks, etc."),r.a.createElement(ie,null,"Tom is contacted by otherworldly entity, a devil that calls himself The One That Ends All Time. He and Tom form a pact."),r.a.createElement(ie,null,"Both brothers escape slavery, and are hunted by Darius\u2019s group."),r.a.createElement(ie,null,"After several weeks they are captured, but because they impressed Darius he decide to buy them out and recruit to his group.")),r.a.createElement(e,{key:"1",title:"Full time adventurer"},r.a.createElement(ie,null,"Many adventures with Darius and his group."),r.a.createElement(ie,null,"They do some bad things like hunt for slaves, kill innocents, steal, etc."),r.a.createElement(ie,null,"Roland meets Diana, young, red headed nurse in an Ilmater\u2019s infirmary. They fall in love and marry."),r.a.createElement(ie,null,"Roland decides to leave adventuring, fake his death (with Darius\u2019s party\u2019s help) and settle down with Diana.")),r.a.createElement(e,{key:"2",title:"Settling with family life"},r.a.createElement(ie,null,"Roland\u2019s and Diana\u2019s daughter is born, Annie."),r.a.createElement(ie,null,"Roland is working as a craftsman at the edge of Phandelver. Making simple tools, toys, working with leather etc."),r.a.createElement(ie,null,"Diana gets pregnant again."),r.a.createElement(ie,null,"Roland\u2019s house gets raided, Annie and Diana are killed and home is burned. Roland\u2019s son\u2019s soul that Diana was pregnant with is transferred into only Soul prison that Roland poses, his watch.")),r.a.createElement(e,{key:"3",title:"Old dog\u2019s coming back"},r.a.createElement(ie,null,"Roland digs out his gear, and kills all attackers."),r.a.createElement(ie,null,"Roland comes to Waterdeep to find Valetta."))]}}]),t}(n.PureComponent),ce=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).renderChapter=function(e){var t=e.children,n=e.title,l=a.props.classes;return r.a.createElement(Q.a,{elevation:2,className:l.card},r.a.createElement(re.a,null,r.a.createElement($.a,{variant:"h6"},n),r.a.createElement($.a,{variant:"body2"},t)))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.renderChapter;return[r.a.createElement(e,{key:"0",title:"Librarian job"},"Early in Marston brothers\u2019 history their group was tasked with finding special, magic book from an ancient Lost Library in a middle of desert. They found that place, and convinced library guardian, a paverfull fay ghost, to let them in. While inside Iliya\u2019s curiosity took better of him and he started taking books forbidden by the guardian, with lead to fight.  Every time guardian died he immediately reincarnated, the team almost lost, bu at the end Ender, with his knowledge and guidance, helped them bound undying\u2019s fey soul into a statue. With his last words guardian cursed adventures: \u201cYou will never be truly peaceful! Every peace of knowledge you obtain will cause you pain and suffering!\u201d.",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("em",null,"Aftermath: Tom, Roland and Iliya reverse engineered soul binding spell and together they made Soul Prisons.")),r.a.createElement(e,{key:"1",title:"Hunting Robin Hood"},"John Lock, some minor nobleman bastard was robbing rich nobles in outskirts of Calimshan. Problem was that most local population was in favor of John\u2019s banditism so Darius\u2019s team was hired to end that problem by all means necessary. Tracking John turned out to be impossible even for Zed, so he found people close to John\u2019s men, their wifes, children and parents, and together with Tom, Roland and Grom they burned villages and killed many, many innocent. Plan worked and John had to come out, for his doom. Battle was quick and brutal. For that they all of the villagers that survived this were talking about Blood Riders (name they gave Darius\u2019s group).",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("em",null,"Aftermath: \u201cBlood Riders\u201d name stick. It helped them by rising prices for their work and causing fear in their enemies harts, but also make them targets of many vangences of their victims. In one of them several years latter Iliya died."))]}}]),t}(n.PureComponent),de=a(10),ue=a(112),he=a.n(ue),me=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).renderCharacter=function(e){var t=e.children,n=e.name,l=e.selected,o=a.props.classes,i=he()(o.card,Object(de.a)({},o.SelectedCard,l));return r.a.createElement(Q.a,{className:i},r.a.createElement(re.a,null,r.a.createElement($.a,{variant:"h6"},n),r.a.createElement($.a,{variant:"body2"},t)))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.renderCharacter;return[r.a.createElement(e,{key:"pistol1",name:"Last whisper - pistol"},"WORK IN PROGRESS"),r.a.createElement(e,{key:"pistol2",name:"XXX - pistol"},"WORK IN PROGRESS"),r.a.createElement(e,{key:"rifle",name:"XXX - rifle"},"WORK IN PROGRESS"),r.a.createElement(e,{key:"leftArm",name:"Claw - left arm"},"In a fight with Lord\u2019s Allience\u2019s bounty hunters Roland lost left arm. After 2 years without second hand Roland and Tom went to City of Brass on an elemental Plane of Fire. Once in a city they made a bargain with Gar\u2019tu\u2019zad, a fire Ifrit smith: he will help them craft a left arm for Roland, but he will take one favor from them both, that he will use in a future. The result is Claw, left arm made from black devil iron, hardened in a blood of a tousents demons."),r.a.createElement(e,{key:"defender",name:"Omen - steel hound"},"One of Tom\u2019s and Roland\u2019s earliest work. Summoned Hell Hound that was Roland\u2019s companion for many years. After one of the worst battles the hound was heavily wounded defending Roland. In return Marstorn made a mechanical construct and, with Toms and Ender, transferred soul and mind of Hound into a new body. Omen is an old dog, an emissary of Devil and a friend to Roland. He is calm and very protective for anyone he consider his flock."),r.a.createElement(e,{key:"souls",name:"Soul prison"},"Items design to trap and contain a soul of a living being. They are always mechanical contraptions enchanted with high level magic. When the soul is inside cogs and parts of those items start to move with can by used to power small items. They were only 17 Soul prisons created."),r.a.createElement(e,{key:"watch",name:"Soul watch"},"Only Soul prison that remain in Roland\u2019s posesion. It\u2019s in an mechanical watch and it\u2019s full with Roland\u2019s unborn son\u2019s soul.")]}}]),t}(n.PureComponent),fe=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).renderCharacter=function(e){var t=e.children,n=e.name,l=e.selected,o=a.props.classes,i=he()(o.card,Object(de.a)({},o.SelectedCard,l));return r.a.createElement(Q.a,{className:i},r.a.createElement(re.a,null,r.a.createElement($.a,{variant:"h6"},n),r.a.createElement($.a,{variant:"body2"},t)))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.renderCharacter;return[r.a.createElement(e,{key:"0",name:"Kurt Marston"},"Roland\u2019s father, middle-tier merchant, usually dealing with spices, fabrics and mechanical tools (and toys) imported from the east. Likes his children, but not as much as his dream of becoming great and rich merchant. He died poor and in dept in his 60\u2019s leaving his wife and newborn daughter."),r.a.createElement(e,{key:"1",name:"Elisabeth Marston"},"Roland\u2019s mother, housewife. Her beauty as a young girl stunned most men, but she was getting old fast. She become mother full of hypocrisy, loving outside but cold and selfish inside. After her husband died leaving her with a lot of debts she is sold into slavery with her young daughter."),r.a.createElement(e,{key:"2",name:"Tom Marston"},"Roland\u2019s younger brother and middle Marston sibling. The loudest and wordy of all Marstons, he always knew what to say and when to get what he wanted. During his time as a slave he found himself in a middle of attention of some powerful entity from Nine Hells. Tom forget a pact with that entity and with its help he, and Roland, escaped the slavery. Over many years Tom\u2019s pact with a devil started to reflect negatively on his mental health. Slowly he become more sadistic, cold hearted and cruel. Nevertheless Tom always stayed loyal to his few, real friends but his changing personality was a center of few big fights between Darius\u2019s group. With Enders help Tom become very powerful warlock and demonologist."),r.a.createElement(e,{key:"3",name:"Alice Marston"},"Roland\u2019s youngests sibling. Sister that was burn after he and his brother was sold out as slaves. She never knew truth about her brothers (she heard stories they died). She had best traits of her brothers, Roland\u2019s unusual and brilliant intellect and resourcefulness together with Tom\u2019s charismatic smile and smooth talk. She even was as beautiful as her mother when she was young. She was sold into slavery when she was 14, but in a place when magic talent and court intrigues rule her unusual intelligence and charisma could have helped her get out of slavery."),r.a.createElement(e,{key:"4",name:"Ender"},"The One That Ends All Time, Tom\u2019s devil. While Marston brothers were \u201cplaying\u201d at night in Karssus laboratory (they were actually trying to figure out what Karssus was doing in there) this devil found Toms out and reach out to him. After making a pact in Tom\u2019s dream he become his patron. Enders true name is not known to others, and if Tom knows it he doesn't tell. Besides that Ender is really talkative and curious about a world. Some of Roland\u2019s inventions are directly inspired by Ender\u2019s knowledge and lessons."),r.a.createElement(e,{key:"5",name:"Karssus Thorn"},"Prominent noble and Red Mage of Thay. Cruel but fair lord. He was one of the scientists responsible for researching other planes."),r.a.createElement(e,{key:"6",name:"Diana Marston"},"Half-elf woman, nurse in a service of Ilmater. Maybe the only pure and truly good person in a world. Always was trying to help others. She wasn't blind to reality of the world, for example she knew exactly what was Roland doing before he met her, but she always try to do her best. She died in Roland\u2019s hands, whispering that she loves him to the very end."),r.a.createElement(e,{key:"7",name:"Annie Marston"},"WORK IN PROGRESS"),r.a.createElement(e,{key:"8",name:"Gar\u2019tu\u2019zad"},"One of the best smiths in City of Brass. Working mostly for a powerful devils making intelligent weapons for killing demons."),r.a.createElement(e,{key:"9",name:"Darius's party"},r.a.createElement("em",null,"Valetta")," - Brass dragornborn priest of Gond. ",r.a.createElement("br",null),r.a.createElement("em",null,"Zed")," - One-eyed firbolg ranger. ",r.a.createElement("br",null),r.a.createElement("em",null,"Iliya")," - Rock gnome illusionist. ",r.a.createElement("br",null),r.a.createElement("em",null,"Grom`a`gar")," - Half-ork barbarian woman from north. ",r.a.createElement("br",null),"WORK IN PROGRESS")]}}]),t}(n.PureComponent);function pe(e){var t=e.children,a=e.value,n=e.index,l=Object(C.a)(e,["children","value","index"]);return r.a.createElement($.a,Object.assign({component:"div",role:"tabpanel",hidden:a!==n,id:"vertical-tabpanel-".concat(n)},l),r.a.createElement(_.a,{p:0},t))}function ge(e){return{id:"vertical-tab-".concat(e)}}var be=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={tab:0},a.setTab=function(e,t){a.setState({tab:t})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state.tab;return r.a.createElement("div",{className:e.root},r.a.createElement(Q.a,{className:e.tabMenu},r.a.createElement(ee.a,{orientation:"vertical",variant:"scrollable",value:t,onChange:this.setTab},r.a.createElement(te.a,Object.assign({label:"Base informations"},ge(0))),r.a.createElement(te.a,Object.assign({label:"History"},ge(1))),r.a.createElement(te.a,Object.assign({label:"Events"},ge(2))),r.a.createElement(te.a,Object.assign({label:"Characters"},ge(3))),r.a.createElement(te.a,Object.assign({label:"Inventions"},ge(4))))),r.a.createElement("div",{className:e.tabContent},r.a.createElement(pe,{value:t,index:0},r.a.createElement(oe,{classes:e})),r.a.createElement(pe,{value:t,index:1},r.a.createElement(se,{classes:e})),r.a.createElement(pe,{value:t,index:2},r.a.createElement(ce,{classes:e})),r.a.createElement(pe,{value:t,index:3},r.a.createElement(fe,{classes:e})),r.a.createElement(pe,{value:t,index:4},r.a.createElement(me,{classes:e}))))}}]),t}(n.PureComponent),ye=a(4),Ee=a(217),ve=a.n(Ee),we=Object(ye.a)(ve.a)(be),ke=(a(282),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={token:null,userId:null},a.login=function(e){var t=e.token,n=e.userId;e.tokenExpiration;a.setState({token:t,userId:n})},a.logout=function(){a.setState({token:null,userId:null})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.token,a=e.userId;return r.a.createElement("div",{className:"App",style:{position:"fixed",top:0,left:0,right:0,bottom:0,display:"flex",flexDirection:"column"}},r.a.createElement(X.Provider,{value:{token:this.state.token,userId:this.state.userId,login:this.login,logout:this.logout}},r.a.createElement(Y,null),r.a.createElement("div",{style:{flexGrow:"1",overflow:"auto"}},r.a.createElement(h.a,null,r.a.createElement(m.c,null,t&&r.a.createElement(m.a,{exact:!0,path:"/"},"Home logged in: ",a),r.a.createElement(m.a,{exact:!0,path:"/roland"},r.a.createElement(we,null)),!t&&r.a.createElement(m.a,{exact:!0,path:"/"},"Not logged in"))))))}}]),t}(n.PureComponent));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ke,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[225,1,2]]]);
//# sourceMappingURL=main.f98962ee.chunk.js.map