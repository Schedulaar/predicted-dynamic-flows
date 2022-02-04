/*! For license information please see poster.js.LICENSE.txt */
              \begin{cases}
              = u_i(\theta), & \text{if $v = s_i$}, \\
              = 0, & \text{if $v \notin \{s_i, t_i \}$}, \\
              \leq 0, & \text{if $v = t_i$}.
              \end{cases}`}),t.createElement(ef,{text:"Queues operate at capacity:",formula:om`f_e^-(\theta) = \begin{cases}
            \nu_e,&\text{if $q_e(\theta - \tau_e) > 0$,} \\
            \min\{ f_e^+(\theta- \tau_e), \nu_e \}, &\text{otherwise.}
          \end{cases}`}),t.createElement(ef,{text:"Capacity is split fairly:",formula:om`
                f_{i,e}^-(\theta) = f_e^-(\theta) \cdot \frac{f_{i,e}^+(\xi)}{f_e^+(\xi)}
                \quad\text{for $\xi\coloneqq \min\{\xi\leq\theta \mid \xi + \tau_e + \frac{q_e(\xi)}{\nu_e} = \theta \}$ with $f_e^+(\xi) > 0$}.`}))))),t.createElement("div",{style:{position:"absolute",right:"16px ",top:"100px",width:"337.5px"}},t.createElement("div",{style:{transformOrigin:"left top",transform:"scale(0.75)",height:250}},t.createElement(rm,{overrideT:1450})),t.createElement(Ts,{style:{textAlign:"center",margin:"0",padding:"0"}},"The queueing model."))),qm=()=>t.createElement(Gm,{width:1075},t.createElement(Hm,null,"The Behavioral Model"),t.createElement(Ba,null,t.createElement(ks,{margin:"0 32px"},t.createElement(Um,null,"The ",t.createElement("i",null,"exit time")," when entering edge ",im`e`," at time ",im`\theta`," is given by ",im`T_e(\theta)\coloneqq \theta + \tau_e + \frac{q_e(\theta)}{\nu_e}`),t.createElement(Um,null,"Each commodity ",im`i\in I`," is equipped with a set of ",t.createElement("i",null,"predictors")," ",om`
                    \hat q_{i,e} : \mathbb R_{\geq0} \times \mathbb R_{\geq 0} \times C(\mathbb R_{\geq0}, \mathbb R_{\geq0})^{E} \to \mathbb R_{\geq 0},
                    \quad
                    (\theta, \bar\theta, q)\mapsto\hat q_{i,e}(\theta; \bar\theta; q),`,"where ",im`\hat q_{i,e}(\theta; \bar\theta; q)`," describes the ",t.createElement("i",null,"predicted queue length "),"of edge ",im`e`," at time ",im`\theta`," as predicted at time ",im`\bar\theta`," using the historical queue functions ",im`q`,"."),t.createElement(Um,null,"The ",t.createElement("i",null,"predicted exit time")," when entering an edge ",im`e`," at time ",im`\theta`," is given by ",im`\hat T_{i,e}(\theta; \bar\theta; q)\coloneqq \theta + \tau_e + \frac{\hat q_{i,e}(\theta; \bar\theta, q)}{\nu_e}`,"."),t.createElement(Um,null,"The ",t.createElement("i",null,"predicted exit time")," when entering a path ",im`P=(e_1, \dots, e_k)`," at time ",im`\theta`," is given by",om`\hat T_{i,P}(\theta; \bar\theta; q)
                    \coloneqq \left(\hat T_{e_k}(\,\boldsymbol{\cdot}\,;\bar\theta;q) \circ \cdots \circ \hat T_{e_1}(\,\boldsymbol{\cdot}\,;\bar\theta;q)\right)(\theta).
                    `),t.createElement(Um,null,"The ",t.createElement("i",null,"predicted earliest arrival")," at ",im`t_i`," when starting at time ",im`\theta`," at ",im`v`," is given by",om`\hat l_{i,v}(\theta; \bar\theta; q)
                    \coloneqq \min_{P\text{ simple } v\text{-}t_i\text{-path}} \hat T_{i,P}(\theta;\bar\theta;q).
                    `)),t.createElement(nf,null,"A pair ",im`(\hat q, f)`," of predictors ",im`\hat q = (\hat q_{i,e})_{i\in I, e\in E}`," and a feasible dynamic flow ",im`f`," is a ",t.createElement("i",null,"dynamic prediction equilibrium (DPE)"),", if for all edges ",im`e=vw`," and all ",im`\theta \geq 0`," it holds that",om`
                    f^+_{i,e}(\theta) > 0 \implies \hat l_{i,v}(\theta;\theta; q) = \hat l_{i,w}(\hat T_{i,e}( \theta;\theta; q ); \theta; q).
                    `))),Vm=()=>t.createElement(Gm,{width:1075},t.createElement(Hm,null,"Sufficient Conditions for the Existence of DPE"),t.createElement(nf,null,"A predictor ",im`\hat q_{i,e}`," is ",t.createElement("i",null,"continuous"),", if ",om`
            \hat q_{i,e} : \mathbb R_{\geq0} \times \mathbb R_{\geq 0} \times C(\mathbb R_{\geq0}, \mathbb R_{\geq0})^{E} \to \mathbb R_{\geq 0},
            `," is continuous from the product topology, where all ",im` C(\mathbb R_{\geq0}, \mathbb R_{\geq0})`," are equipped with the topology induced by the uniform norm, to ",im`\R_{\geq 0}`,"."),t.createElement(nf,null,"A predictor ",im`\hat q_{i,e}`," is ",t.createElement("i",null,"oblivious"),", if for all ",im`\bar\theta \in\mathbb R_{\geq0}`," it holds ",om`
            \quad\forall q,q'\colon\quad
            q_{\hspace{.07em}\vert\hspace{.07em}[0, \bar\theta]^E} = q'_{\hspace{.07em}\vert\hspace{.07em}[0, \bar\theta]^E}
            \implies
            \hat q_{i,e}(\,\boldsymbol{\cdot}\,;\bar\theta;q)=\hat q_{i,e}(\,\boldsymbol{\cdot}\,;\bar\theta;q').
            `),t.createElement(nf,null,"A predictor ",im`\hat q_{i,e}`," ",t.createElement("i",null,"respects FIFO"),", if ",im`\hat T_{i,e}(\,\boldsymbol{\cdot}\,;\bar\theta, q)`," is non-decreasing for all ",im`\bar\theta\in \R_{\geq0}`," and ",im` q\in C(\mathbb R_{\geq0},\mathbb R_{\geq0})^{E}`,"."),t.createElement(rf,null,"If all network inflow rates ",im`u_i`," are bounded and all predictors ",im`\hat q_{i, e}`," are continuous, oblivious, and respect FIFO, then there exists a dynamic prediction equilibrium ",im`(\hat q, f)`,".")),Km=()=>t.createElement(Gm,{width:1075},t.createElement(Hm,null,"The Analyzed Predictors"),t.createElement("div",{style:{marginLeft:"875px",width:"200px",textAlign:"center",fontFamily:"'Open Sans'",fontSize:zm.fontSizes.text}},"Compatible with Existence-Theorem"),t.createElement(ks,null,t.createElement(Qm,{text:t.createElement(t.Fragment,null,t.createElement("i",null,"The Zero-Predictor "),im`\hat q^{\text{Z}}_{i,e}(\theta;\bar\theta;q) \coloneqq 0`,".",t.createElement("br",null),t.createElement("p",{style:{marginTop:"5px"}},"Predicted shortest paths always remain the same.")),figure:e=>t.createElement(hm,{minimize:e}),compatible:!0}),t.createElement(Qm,{text:t.createElement(t.Fragment,null,t.createElement("i",null,"The constant predictor "),im`\hat q^{\text{C}}_{i,e}(\theta;\bar\theta;q) \coloneqq q_e(\bar\theta)`,".",t.createElement("p",{style:{marginTop:"5px"}},"Assumes the current conditions for the future. If all commodities use this predictor, a DPE corresponds to an Instantaneous Dynamic Equilibrium.")),figure:e=>t.createElement(fm,{minimize:e}),compatible:!0}),t.createElement(Qm,{text:t.createElement(t.Fragment,null,t.createElement("i",null,"The linear predictor "),im`\hat q^{\text{L}}_{i,e}(\theta;\bar\theta;q) \coloneqq 
                \left( q_e(\bar \theta)+\partial_-q_e(\bar \theta)\cdot \min\{ \theta-\bar\theta, H \} \right)^+
                `,".",t.createElement("p",{style:{marginTop:"5px"}},"Not continuous in ",im`\bar\theta`," whenever ",im`\partial_-q_e`," jumps.")),figure:e=>t.createElement(Em,{minimize:e}),compatible:!1}),t.createElement(Qm,{text:t.createElement(t.Fragment,null,t.createElement("i",null,"The regularized linear predictor "),t.createElement("br",null),t.createElement("div",{style:{textAlign:"center"}},im`\hat q_{i,e}^{\text{RL}}(\theta;\bar\theta; q) \coloneqq
        \Big( q_e(\bar\theta) + \frac{q_e(\bar\theta) - q_e(\bar\theta - \delta)}{\delta} \cdot \min\{ \theta - \bar\theta, H \} \Big)^+
       .`)),figure:e=>t.createElement(ym,{minimize:e}),compatible:!0}),t.createElement(Qm,{text:t.createElement(t.Fragment,null,t.createElement("i",null,"The linear regression predictor ")," ",im`\hat q_{i,e}^{\text{ML}}`," linearly interpolates the points ",t.createElement("br",null),t.createElement("div",{style:{textAlign:"center"}},im`
            \left(
                \bar\theta + j\delta,
                \left(  
                \sum_{e' \in N(e)} 
                    \sum_{i=0}^k a_{i,j}^{e'}\cdot q_{e'}(\bar\theta-i\delta)
                \right)^+
            \right)
        .`)),figure:e=>t.createElement(vm,{minimize:e}),compatible:!0}),t.createElement(Qm,{text:t.createElement(t.Fragment,null,t.createElement("i",null,"The perfect predictor ")," ",im`\hat q^{\text{P}}_{i,e}(\theta;\bar\theta;q) \coloneqq q_e(\theta)`,".",t.createElement("p",{style:{marginTop:"5px"}},"Will always predict the future correctly and is thus not oblivious. If all commodities use this predictor, a DPE corresponds to a dynamic equilibrium in the full-information model.")),figure:e=>t.createElement(Tm,{minimize:e}),compatible:!1}))),$m=()=>t.createElement(Gm,{width:1075},t.createElement(Hm,null,"Extension-based Simulation"),t.createElement(ks,null,t.createElement(Um,null,"Approximate a DPE by rerouting agents in discrete time intervals ",im`\bar\theta_k = k\cdot \varepsilon`,"."),t.createElement(Um,null,"We assume that the network inflow rates are piecewise constant with finite jumps"),t.createElement(Um,null,"The extension procedure for one routing interval ",im`(\bar\theta_k,\bar\theta_{k+1})`," given an equilibrium flow up to time ",im`H = \bar\theta_k`,":",t.createElement("div",{style:{width:"900px"}},t.createElement(it,{theme:{size:{width:"900px"}}},t.createElement(ws,{style:{backgroundColor:"white",border:"1px solid lightgray",fontFamily:""}},t.createElement(Um,null,"Gather predictions ",im`(\hat q_{i,e}(\,\boldsymbol\cdot\,;\bar\theta_k; q))_{i,e}`," for ",im`\bar\theta_k`),t.createElement(Um,null,"Compute all shortest ",im`v`,"-",im`t_i`,"-paths at time ",im`\bar\theta_k`," predicted at time ",im`\bar\theta_k`),t.createElement(Um,null,t.createElement(Zm,null,"while "),im`H < \bar\theta_{k+1}`,t.createElement(Zm,null," do:")),t.createElement(Um,null,t.createElement(Zm,null,"    "),t.createElement("div",{style:{display:"inline-block",verticalAlign:"text-top"}},"Compute maximal ",im`H'\leq\bar\theta_{k+1}`," such that ",im`b_{i,v}^-(\theta)\coloneqq \sum_{e\in\delta_{v}^-} f_{i,e}^-(\theta) + u_i(\theta)\cdot\mathbf{1}_{v=s_i}`,t.createElement("br",null)," is constant on ",im`(H, H')`," for all ",im`v\in V, i\in I`)),t.createElement(Um,null,t.createElement(Zm,null,"    "),"Equally distribute ",im`b_{i,v}^-(\theta)`," to the outgoing edges lying on shortest paths during ",im`(H, H')`),t.createElement(Um,null,t.createElement(Zm,null,"    "),im`H \leftarrow H'`))))),t.createElement(Um,null,"This simulation enables us to generate training data for the linear regression predictor ",im`\hat q^{\text{ML}}_{i,e}`,":",t.createElement(ks,null,t.createElement(Um,null,"We use the constant predictor to create sample DPEs."),t.createElement(Um,null,"This allows the model to estimate the progression of queues when agents follow our behavioral model."),t.createElement(Um,null,"In small networks, the weights have been trained seperately on each edge."),t.createElement(Um,null,"In larger networks, a single weight matrix has been learned using the collective data of all edges."))))),Wm=()=>t.createElement(Gm,{width:1075},t.createElement(Hm,null,"Comparing the Performance of Predictors"),t.createElement(ks,null,t.createElement(Um,null,"We monitor the average travel time of particles over multiple DPE simulations with varying inflow rates."),t.createElement(Um,null,"For a sample network, the linear regression already performs best:",t.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-evenly",marginTop:"20px"}},t.createElement("div",{style:{transform:"translateY(100px)",textAlign:"center"}},t.createElement("img",{src:js,width:"200px"}),t.createElement(Ts,{style:{margin:0}},"Edges are labeled with ",im`(\tau_e, \nu_e)`)),t.createElement("div",null,t.createElement("img",{style:{transform:"scale(1)",transformOrigin:"top",width:"500px"},src:Gs})))),t.createElement(Um,null,"Simulations in real-world road traffic networks (centre of Tokyo, Sioux Falls) show",t.createElement(ks,null,t.createElement(Um,null,"the linear regression predictor is amongst the best predictors analyzed,"),t.createElement(Um,null,"the Zero-Predictor performs worst most of the time,"),t.createElement(Um,null,"the simulation is capable of computing DPEs in large-scale networks."))))),Ym=()=>t.createElement("div",{style:{position:"relative",height:1975,left:"20px"}},[0,100,200,300,400,500,600,700].map(((e,n)=>{const r=200*n-80+(n>=2?10:0)+(n>=3?25:0)+(n>=4?55:0)+(n>=5?95:0)+(n>=6?55:0)+(n>=7?25:0);return t.createElement("div",{key:e,style:{height:300,width:350,overflow:"hidden",position:"absolute",top:r}},t.createElement(Mm,{demo:!0,svgIdPrefix:"example3-t",overrideT:e+100,height:300,width:350}))})),t.createElement(Ts,{style:{position:"absolute",bottom:0,left:0,right:0,textAlign:"center"}},"A DPE using predictor ",im`\hat q_{i,e}^L`,".")),Xm=()=>t.createElement(jo,{theme:zm},t.createElement(Io,{padding:0,backgroundColor:"white",textColor:zm.colors.primary},t.createElement(Ss,{fontSize:"64px",color:"white",backgroundColor:zm.colors.secondary,style:{margin:"-16px -16px 10px -16px",padding:"32px"}},"Machine-Learned Prediction Equilibrium for Dynamic Traffic Assignment"),t.createElement("div",{style:{display:"flex",flexDirection:"row"}},t.createElement("div",{style:{width:"90%",height:1975,display:"flex",flexDirection:"column"}},t.createElement(Ts,{className:"authors",textAlign:"center",fontSize:"h2",style:{margin:"0.5em",padding:"0px"}},"Lukas Graf",t.createElement("sup",null,"1"),", Tobias Harks",t.createElement("sup",null,"1"),", Kostas Kollias",t.createElement("sup",null,"2"),", and Michael Markl",t.createElement("sup",null,"1"),t.createElement("div",{style:{fontSize:"0.8em",margin:"0.625em",display:"flex",justifyContent:"center"}},t.createElement("span",{style:{width:"300px"}},t.createElement("b",null,"1"),": University of Augsburg"),t.createElement("span",{style:{width:"300px"}},t.createElement("b",null,"2"),": Google"))),t.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gridTemplateRows:"1fr 1fr",justifyContent:"space-evenly",alignItems:"stretch",flex:1}},t.createElement(jm,null),t.createElement(qm,null),t.createElement(Vm,null),t.createElement(Km,null),t.createElement($m,null),t.createElement(Wm,null))),t.createElement("div",{style:{width:"10%"}},t.createElement(Ym,null))))),Zm=(ft(Ns)`
  border-collapse: collapse;
& td {
  border: 2px solid ${zm.colors.secondary}; 
}
& tr:first-child td {
  border-top: 0;
}
& tr td, th {
  border-left: 0;
}
& tr:last-child td {
  border-bottom: 0;
}
& tr td, th {
  border-right: 0;
}

& li {
  padding: 20px;
}
`,e=>t.createElement("span",Bm({style:{whiteSpace:"pre"}},e))),Qm=({text:e,figure:n,compatible:r})=>t.createElement(Um,null,t.createElement("div",{style:{display:"flex",flexDirection:"row"}},t.createElement("div",{style:{width:"625px",height:"100px"}},e),t.createElement("div",{style:{height:"90px"}},n(!0)),t.createElement("div",{style:{height:"100px",display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"60px"}},r?"✔️":"❌"))),Jm=ft("div")`
    & .katex-display {
        margin: 8px 0;
    }
`,ef=({formula:e,text:n})=>t.createElement(Um,{style:{margin:0,padding:0}},t.createElement(Jm,{style:{display:"flex",flexDirection:"row",alignItems:"center"}},t.createElement("div",null,n),t.createElement("div",{style:{padding:"0 10px"}},e))),tf=({children:e})=>t.createElement(Ba,{margin:"32px",style:{fontSize:zm.fontSizes.text,fontFamily:"Open Sans"}},t.createElement("span",null,t.createElement("i",null,"Notation. ")),e),nf=({children:e})=>t.createElement(Ba,{margin:"32px",style:{fontSize:zm.fontSizes.text,fontFamily:"Open Sans"}},t.createElement("span",{style:{color:zm.colors.secondary}},t.createElement("b",null,"Definition. ")),e),rf=({children:e})=>t.createElement(Ba,{margin:"32px",style:{fontSize:zm.fontSizes.text,fontFamily:"Open Sans"}},t.createElement("span",{style:{color:zm.colors.secondary}},t.createElement("b",null,"Theorem. ")),t.createElement("i",null,e)),af=ft.div`
    & > div {
        overflow: auto !important;
    }

    & > div > div {
        background: black;
    }
`;document.documentElement.style.background="black",r.render(t.createElement(af,null,t.createElement(Xm,null)),document.getElementById("root"))})()})();
//# sourceMappingURL=poster.js.map