<template>
  <div>
    <hy-header></hy-header>
    <div id="hy-events-container">
      <div class="hy-section"
           :class="currentSectionClass">
        <div class="hy-section-bg">
          <div class="hy-bg">
            <div class="hy-bg_main"
                 :style="getCurrentSectionBg(currentSectionInfo?.year || currentSectionInfo?.num)"></div>
          </div>
        </div>
        <div class="hy-nav_shadow"></div>
        <div class="hy-section-container">
          <div class="hy-info">
            <div class="hy-section_time">
              <h1 class="hy-time">
                <div class="hy-time-ne_start"
                     v-if="currentSectionInfo?.year == '3501'">AD.3501</div>
                <div class="relative z-10">
                  <span class="hy-time--suffix"
                        v-if="currentSectionInfo.earBefore">{{ currentSectionInfo.earBefore }}</span>
                  <span class="hy-time--year">{{ currentSectionInfo.num }}</span>
                  <span class="hy-time--suffix"
                        v-if="currentSectionInfo.ear">{{ currentSectionInfo.ear }}</span>
                </div>
              </h1>
            </div>
            <div class="hy-section_content">
              <div class="hy-section_title">
                <div class="hy-title--icon"
                     v-if="!currentSectionInfo.layoutRight">
                  <div class="hy-icon--inner"></div>
                </div>
                <div class="hy-title--detail">
                  <h2 class="hy-title--cn">{{ currentSectionInfo.title }}</h2>
                  <h2 class="hy-title--en">{{ currentSectionInfo.titleEn }}</h2>
                </div>
                <div class="hy-title--icon"
                     v-if="currentSectionInfo.layoutRight">
                  <div class="hy-icon--inner"></div>
                </div>
              </div>
              <div class="hy-desribe-container">
                <div class="hy-section_describe"
                     v-if="sectionStatus('138')">
                  <p><el-tooltip popper-class="hy-keywords-tooltip"
                                content="*现代人类宇宙学依然无法很好解释大爆炸之前的状态，有科学家认为那里“没有时间和空间的存在”。"
                                :trigger=tooltipTarget
                                placement="top-start">
                      <span class="hy-keywords">138亿年前*</span>
                    </el-tooltip>，一场温度极高、尺度极小的大爆炸启动了新一轮<el-tooltip popper-class="hy-keywords-tooltip"
                                content="*有观点认为宇宙处于一种膨胀-坍缩的循环态中，在坍缩阶段，宇宙的进程将会呈现出反演的形态，生命将表现出自老向幼逆生长的奇特形式。"
                                :trigger=tooltipTarget
                                placement="top-start">
                      <span class="hy-keywords">宇宙呼吸的进程*</span>
                    </el-tooltip>。 伴随着持续的膨胀，宇宙的温度和密度迅速下降，使宇宙得以完成原初核合成。在随后的漫长岁月中, 原子和分子们逐渐复合成为各种气体和尘埃，在分裂、坍缩、聚拢中形成了古老星云的雏形，逐渐开始了对恒星的孕育。</p>
                </div>
                <div class="hy-section_describe"
                     v-if="sectionStatus('57')">
                  <p>这片大尺度宇宙结构空窗区如迷一般突然诞生于大犬座与天兔座方向的深空之中，在人类有史以来的数万年内都不曾有能力察觉到它的存在。但随着新纪元（New.Era)之后对图兰神迹的出现，一些有关史前高等文明的科考成果陆续解密，这片强烈冲击人类宇宙认知的宇宙<el-tooltip popper-class="hy-keywords-tooltip"
                                content="*空洞：*在天文学里，指纤维状结构之间的空间，空洞与纤维状结构一起是宇宙组成中最大尺度的结构。空洞中只包含很少或完全不包含任何星系。"
                                :trigger=tooltipTarget
                                placement="top-start">
                      <span class="hy-keywords">空洞*</span>
                    </el-tooltip>才第一次进入了我们的视野。</p>
                </div>
                <div class="hy-section_describe"
                     v-if="sectionStatus('52')">
                  <p>一个距离银河系约52亿光年的古老星系中发生了一场巨大的天体群爆炸，这场爆炸的烈度之高使得整个星系被几乎摧毁。在后世的科学推断中，有人认为这是空间撕裂导致的天文自然灾难，有人则认为这是高等文明的战争结果。</p>
                </div>
                <div class="hy-section_describe"
                     v-if="sectionStatus('46')">
                  <p>46亿年前，在银河系的猎户臂上，一团巨型原始<el-tooltip popper-class="hy-keywords-tooltip"
                                content="*星云：大爆炸形成的原子、原子核及分子复合成气体，再由气体逐渐凝聚形成星云。"
                                :trigger=tooltipTarget
                                placement="top-start">
                      <span class="hy-keywords">星云*</span>
                    </el-tooltip>物质在引力的作用下逐渐旋转聚拢、坍缩、直到温度高到触发了核聚变反应。最终，高温辐射所产生的热膨胀与引力的坍缩达成了稳定的平衡态，一颗中等质量恒星逐渐成型，正式步入了主序星阶段。而它周围的尘埃物质在辐射、太阳风、引力的多重影响下不断聚合、碰撞形成了一颗颗行星，其中之一便是我们的地球。
                  </p>
                </div>
                <div class="hy-section_describe"
                     v-if="sectionStatus('385')">
                  <p>在宇宙基本环境参数和一系列粒子运动的共同作用下，在本只有无机物的死寂星球上，化合出了最原始的有机物质，而在漫长的时间和浩瀚的海洋里，最终诞生了第一个细胞，它是我们所有生物的先祖。</p>
                </div>
                <div class="hy-section_describe"
                     v-if="sectionStatus('53')">
                  <p>"5亿年前，一个困扰人类历史学家至今的时期——<el-tooltip popper-class="hy-keywords-tooltip"
                                content="*寒武纪：约开始于5.43亿年前，结束于4.9亿年前。为古生代第一个纪。"
                                :trigger=tooltipTarget
                                placement="top-start">
                      <span class="hy-keywords">寒武纪*</span>
                    </el-tooltip>。
                    虽然地球上早在40亿年前就存在了生命，但是绝大部分都以单细胞存在，并且几乎没有留下肉眼可见的痕迹。而寒武纪时期，突然出现了几乎地球动物的祖先（各种节肢动物、软体动物、腕足动物、环节动物、脊柱动物等）。以至于地球人类一度认为所谓的寒武纪生命大爆发不过是一场假象。然而越来越多的化石出土，似乎又印证了它的真实存在，那么寒武纪的真相到底是什么呢？"</p>
                </div>
                <div class="hy-section_describe"
                     v-if="sectionStatus('320')">
                  <p>在经历漫长的演化后，灵长类在这颗生机勃勃的星球上占据了自己的一席之地。当他们开始抬起身子，用双腿在草原和森林中奔跑觅食时，他们正悄无声息地迎接自己种族童年的终结。那奔跑的已经成为历史，在数百万年的时光后被人们重新发掘，并命以“露西”的始祖之名。</p>
                </div>
                <div class="hy-section_describe"
                     v-if="sectionStatus('8000')">
                  <p>人类在330万年前便已开始制作工具，在5万年前学会了人工取火，但直到1万年前才在一种名为小麦的作物上找到了进入农耕时代的钥匙，自此人类开始拥有了“发展”的概念，成为了后世政治、战争、艺术和哲学的先决基础。</p>
                </div>
                <div class="hy-section_describe"
                     v-if="sectionStatus('3500')">
                  <p>楔形文字、灌溉技术、太阳历、苏美尔王表、六十进制，城市...幼发拉底河畔在短时间内所涌现出的这一切显得那么伟大且不可思议，人类似乎在那片土地、那段时间内迅速从“智慧生命”步入了“<el-tooltip popper-class="hy-keywords-tooltip"
                                content="*苏美尔文明：指的是苏美尔地区以苏美尔语文献为主要标志的文明，古代地名苏美尔，位于今伊拉克东南部幼发拉底河和底格里斯河下游，是当代人类史一致认同的最早的文明中心。"
                                :trigger=tooltipTarget
                                placement="top-start">
                      <span class="hy-keywords">文明*</span>
                    </el-tooltip>”的阶段。但从更大的时代尺度来看，这段转瞬即逝的文明时代却给与了后人无限的质疑和遐想。</p>
                </div>
                <div class="hy-section_describe"
                     v-if="sectionStatus('18')">
                  <p>AD1765年，一台“<el-tooltip popper-class="hy-keywords-tooltip"
                                content="*珍妮机：1764年，一位名叫詹姆斯·哈格里夫斯的纺织工，制造了一台以他女儿珍妮命名的纺纱机。相比旧式纺车效率提高了8倍，也由此开启了工业革命。"
                                :trigger=tooltipTarget
                                placement="top-start">
                      <span class="hy-keywords">珍妮机*</span>
                    </el-tooltip>”的出现，标志着人类正式开启了“工业革命“。生产力飞跃式发展，生产方式的根本性改变，为社会、文化和政治带来了巨大变革，人类从传统农业社会快步进入现代工业社会。200年来，人类社会科技水平飞速提升，财富快速累积，人类的平均寿命也近乎翻倍。
                  </p>
                </div>
                <div class="hy-section_describe"
                     v-if="sectionStatus('1961')">
                  <p>1961年4月12日，<el-tooltip popper-class="hy-keywords-tooltip"
                                content="*尤里·加加林：全名——尤里·阿列克谢耶维奇·加加林，是第一个进入太空的地球宇航员。"
                                :trigger=tooltipTarget
                                placement="top-start">
                      <span class="hy-keywords">尤里·加加林*</span>
                    </el-tooltip>乘坐东方1号宇宙飞船从拜克努尔发射场起航，在轨道上绕地球一周，历时1小时48分，于10点55分安全返回，完成了世界上首次载人宇宙飞行。这一历史性的事件标志着人类进入了太空时代，成为了太空探索的重要里程碑，人类终于向那梦寐以求的星空踏出了坚实的一步。
                  </p>
                </div>
                <div class="hy-section_describe"
                     v-if="sectionStatus('1969')">
                  <p>1969年7月21日，美国的“阿波罗11号”宇宙飞船载着三名宇航员成功登上月球，“<el-tooltip popper-class="hy-keywords-tooltip"
                                content="*美国宇航员尼尔·阿姆斯特朗在踏上月球表面这一历史时刻时，道出的被后人奉为经典的话。"
                                :trigger=tooltipTarget
                                placement="top-start">
                      <span class="hy-keywords">这只是一个人的一小步，但却是整个人类的一大步。*</span>
                    </el-tooltip>”人类的登月成就在世界范围内引起了巨大的反响，它成为了人类科学、技术和勇气的象征。登月不仅改变了人们对太空的看法，也促进了太空科学的发展，为后续的太空探索和国际合作铺平了道路。
                  </p>
                </div>
                <div class="hy-section_describe"
                     v-if="sectionStatus('1971')">
                  <p>礼炮—1号空间站是苏联首个太空站，也是人类历史上首个太空站，于1971年4月19日发射升空，之后苏联太空船联盟十一号与空间站成功对接，三位宇航员在太空站内逗留了二十三天，但在返航过程中不幸牺牲。而后，国际合作形式的国际空间站，为人类在太空中进行生命科学研究、宇宙观测、物质研究、技术实验等多种活动提供了宝贵的平台。</p>
                </div>
                <div class="hy-section_describe"
                     v-if="sectionStatus('2015')">
                  <p>首次被人类确定出精确距离的<el-tooltip popper-class="hy-keywords-tooltip"
                                content="*快速射电暴：一种只持续几毫秒的无线电波，是宇宙中极为强烈的能量释放事件。通常认为它们源于遥远的星系，但关于它们是如何生成的，目前尚缺乏被普遍接受的解释。"
                                :trigger=tooltipTarget
                                placement="top-start">
                      <span class="hy-keywords">快速射电暴*</span>
                    </el-tooltip>，其射电余辉经历6天之后才完全不可探测到。研究人员认为这个快速射电暴来自一次毁灭性的天体物理爆发事件，它促使科学家们更加努力地寻找这些宇宙中的神秘信号的来源，并进一步推动了对宇宙中未知现象的理解。</p>
                </div>
                <div class="hy-section_describe"
                     v-if="sectionStatus('2035')">
                  <p>2035年，国际太空探索委员ISEC（International Space Exploration Council），致力于推动太空探索技术革新、推进并监督太阳系资源的和平利用和可持续发展。有关深空探索、人类登陆任务、高精尖航天技术验证、宇宙环境监测等工作，均由ISEC负责方案评审与执行监督。</p>
                </div>
                <div class="hy-section_describe"
                     v-if="sectionStatus('2083')">
                  <p>2083年1月12日起，由ISEC主导开始执行的谷神星联合勘探考察行动。在约一个月后，黎明号抵达谷神星。在本次行动中，人类首次发现<el-tooltip popper-class="hy-keywords-tooltip"
                                content="*落日晶：最早被发现的星尘矿物，含有大量偏固态物质及星尘，经由某些极强的作用力形成的复合相矿物。因行星上地形特质的不同，存在有多种相组。"
                                :trigger=tooltipTarget
                                placement="top-start">
                      <span class="hy-keywords">落日晶*</span>
                    </el-tooltip>，并带回了少量样本。同期，地球异常气候变化、地质现象增多，岩层中开始探测到类似落日晶的矿物。</p>
                </div>
                <div class="hy-section_describe"
                     v-if="sectionStatus('2089')">
                  <p>人类对于落日晶的形成与性质都毫无头绪，但其潜在的科研价值与经济价值都让世界各国无法忽视。无数先驱为了落日晶的研究<el-tooltip popper-class="hy-keywords-tooltip"
                                content="*梅兹洛纳亚事件：2089年11月15日，雅库茨克市梅兹洛纳亚街区发生剧烈爆炸，是人类首次因星尘研究产生的重大事故，但太空地质研究所留下的大量研究成果为人类日后对星尘技术的发展奠定了坚实的基础。"
                                :trigger=tooltipTarget
                                placement="top-start">
                      <span class="hy-keywords">献出了生命*</span>
                    </el-tooltip>，但仍有人冒着危险，在历经无数艰辛于困苦，最终从落日晶中提炼出了颠覆时代的物质——星尘。</p>
                </div>
                <div class="hy-section_describe"
                     v-if="sectionStatus('2101')">
                  <p>以雅库茨克事件留下的研究资料为基础，<el-tooltip popper-class="hy-keywords-tooltip"
                                content="*稳相皿：为了保存高纯度的星尘所研发的复杂结构容器。"
                                :trigger=tooltipTarget
                                placement="top-start">
                      <span class="hy-keywords">稳相皿*</span>
                    </el-tooltip>（Steady Phase Utensil）诞生，解决了星尘存储的问题。而后<el-tooltip popper-class="hy-keywords-tooltip"
                                content="*雅库茨克引擎：NPO-RD809型“星尘-反物质引擎”，是人类历史上第一台达到2%光速的航天引擎，标志着人类已初步具有远程星际航行的能力。"
                                :trigger=tooltipTarget
                                placement="top-start">
                      <span class="hy-keywords">雅库茨克引擎*</span>
                    </el-tooltip>的诞生，标志着人类初步掌握了星尘相变的规律，由星尘带来的技术革命在各个领域不断爆发。
                  </p>
                </div>
                <div class="hy-section_describe"
                     v-if="sectionStatus('2144')">
                  <p>星尘的存在和其不可控的巨大影响使得人类重新认识到自己的幼稚和无知，地球恒星化趋势被众多科研机构证实。《联合国大会决议第199届》决议，巡礼者计划通过议案并启动，由ISEC主导，多国联合参与执行，破晓2号空间站、巡礼者计划T001-T003开始筹建。</p>
                </div>
                <div class="hy-section_describe"
                     v-if="sectionStatus('2195')">
                  <p>巡礼者计划测试船团T003组/巡礼者1号船团，在破晓4号空间站组装、试发射成功，并开始进行生态循环、远航心理影响、长久居住适应性等多项实验，最终顺利完成了长达20年的测试任务后回归地球，为巡礼者计划的后续船团修改、优化设计提供了大量的宝贵资料。</p>
                </div>
                <div class="hy-section_describe"
                     v-if="sectionStatus('3501')">
                  <p>巡礼者计划第二船团抵达索尔托斯星系图兰星，先民建立了旧资本主义形态的国家，而后被蓬勃发展的圣瞳会取代，最终形成了政教合一的大阵营。</p>
                </div>
                <div class="hy-section_describe"
                     v-if="sectionStatus('160')">
                  <p>巡礼者计划第四船团抵达海娜星系龙藻星，先民以松散的部族联合机制为约定，在各自经历了差异化发展后，最终成立民族部落合众国——赛琳娜之耀。</p>
                </div>
                <div class="hy-section_describe"
                     v-if="sectionStatus('242')">
                  <p>巡礼者计划第四船团与第七船团重新建立了远程通信，并建立了定期通信机制，双方交换了大量技术与已知星图，至此，太阳系之子们在经历了上千年的漂泊离散后，终于重逢。</p>
                </div>
                <div class="hy-section_describe"
                     v-if="sectionStatus('275')">
                  <p>巡礼者计划第八船团抵达维德伯特星系塞维利星，围绕着统合政府和各大族群各自进行开拓，在经历了无数的摩擦冲突与领土吞并后，最终发展为沙顿穆恩帝国。</p>
                </div>
                <div class="hy-section_describe"
                     v-if="sectionStatus('307')">
                  <p>巡礼者计划第七船团抵达佛格星系卡萨伊罗娜星，以各经济体代表为核心开始开拓，在商业争端乃至暴力冲突的洗礼下，围绕商业利益的社会规范逐步建立，最终发芒廷帕斯联合会成立。</p>
                </div>
                <div class="hy-section_describe"
                     v-if="sectionStatus('630')">
                  <p>巡礼者计划第十船团抵达双宜居行星系辉夙，并在辉星及夙星展开殖民，而后迅速展开了同胞搜寻计划，并吸纳了众多来自其他阵营的移民，最终发展为一体汉和。</p>
                </div>
                <div class="hy-section_describe"
                     v-if="sectionStatus('767')">
                  <p>圣瞳会科研机构“圣典部”基于三百余年的科研资料，初步完善了有关异能人类的科学体系，将其定名为“<el-tooltip popper-class="hy-keywords-tooltip"
                                content="*染山霞血脉：普通人类中极其稀少的特殊个体，对星尘的耐受度极高，血液颜色会显示出橘红与藏青的混和趋势，在经过星语者学院的训练和改造后可能成为星语者。"
                                :trigger=tooltipTarget
                                placement="top-start">
                      <span class="hy-keywords">染山霞血脉*</span>
                    </el-tooltip>”，并发表了第一份官方研究报告《燃烧的血脉》（Burning Blood）。</p>
                </div>
                <div class="hy-section_describe"
                     v-if="sectionStatus('862')">
                  <p>沙顿穆恩帝国策划了矿船撞击事件“瑞普克事件”（Repuk Attack），帝国对赛琳娜宣战，而后芒廷帕斯联合会、一体汉和直接参战，圣瞳会也在一定程度被卷入战争，解离战争持续将近一百年，战火一度蔓延到所有人类已知的世界。</p>
                </div>
                <div class="hy-section_describe"
                     v-if="sectionStatus('949')">
                  <p>星语者衍刻技术实验成功，<el-tooltip popper-class="hy-keywords-tooltip"
                                content="*埃卡妮亚：星语者学院现任院长，被誉为“解理战争的英雄”。"
                                :trigger=tooltipTarget
                                placement="top-start">
                      <span class="hy-keywords">埃卡妮亚*</span>
                    </el-tooltip>成为了第一个星语者，在完成最初级的衍刻与星语网络通讯设备建设后，星语者学院成立。这个在当时并未受到关注的组织，用历史上第一艘星舰和第一支染山霞舰队，以压倒性的力量终止了战争。</p>
                </div>
                <div class="hy-section_describe"
                     v-if="sectionStatus('958')">
                  <p>埃卡妮亚率领的染山霞舰队在逼停解理战争参战双方后，于次年组织签订了《波江座协定》，即《解理战争终止及星际各方合作协定》。会议期间，埃卡妮亚发布关于染山霞血脉的报告《最初的聆听者》（The Origin Listener），介绍染山霞血脉高级形态，正式命名其为<el-tooltip popper-class="hy-keywords-tooltip"
                                content="*星语者：由染山霞血脉训练而来，当前星际社会的中坚力量。"
                                :trigger=tooltipTarget
                                placement="top-start">
                      <span class="hy-keywords">星语者*</span>
                    </el-tooltip>，同时提出了<el-tooltip popper-class="hy-keywords-tooltip"
                                content="*伞形社会：在这种社会结构下，普通人类就像伞架——不是伞的核心功能提供者，但支撑着伞面，决定伞面是否展开，且依赖于伞面的保护，是人类文明的基本构成和关键决策者；星语者就像伞面——作为伞的核心功能构成，保护着伞架，且需要伞架支撑，是人类文明生存与发展的主力操盘手和驱动者。"
                                :trigger=tooltipTarget
                                placement="top-start">
                      <span class="hy-keywords">伞形社会*</span>
                    </el-tooltip>的理念。</p>
                </div>
                <div class="hy-section_describe"
                     v-if="sectionStatus('992')">
                  <p>在星语者与星语技术走向星际舞台后并被广泛认可后，埃卡妮亚以学院院长、伞形社会持伞人的身份，发表《<el-tooltip popper-class="hy-keywords-tooltip"
                                content="光海声明纪念碑让人类忘记那一段杀戮的历史，共同迈向历史的新纪元"
                                :trigger=tooltipTarget
                                placement="top-start">
                      <span class="hy-keywords">光海声明</span>
                    </el-tooltip>》，正式呼吁星际各界应勇于开发新领域，将人类的足迹遍布各个角落，由此正式开启了人类朝银河深处的大开拓运动。</p>
                </div>
                <div class="hy-section_describe"
                     v-if="sectionStatus('1012')">
                  <p>现在，你将面对幽邃的未知，准备迎接下一个掩藏在迷雾中的相逢......</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hy-nav @updateSection="updateSection"
            :autoPlayStop="autoPlayStop"
            :appOpened="appOpened"></hy-nav>
  </div>
</template>

<script>
// import '@/assets/css/pages/events.scss'
import { Power3, TimelineLite, TweenMax } from "gsap"
// import HyHeader from './components/Header.vue'
// import HyNav from './components/Nav.vue'

const years = ['138', "57", "52", "46", "385", "53", "320", "8000", "3500", "18", "1961", "1969", "1971", "2015", "2035", "2083", "2089", "2101", "2144", "2195", "3501", "160", "242", "275", "307", "630", "767", "862", "949", "958", "992", "1012"]


export default {
  props: {
    appOpened: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      year: '138',
      timeLine: {
        year_138: {
          id: 1,
          num: 138,
          ear: "亿年前",
          title: "宇宙大爆炸",
          titleEn: "The Big Bang",
          earBefore: false,
          layoutRight: true,
        },
        year_57: {
          id: 2,
          num: 57,
          ear: "亿年前",
          title: "宇普西隆空洞诞生",
          titleEn: "Upsilon Cosmic Voids",
          earBefore: false,
          layoutRight: false
        },
        year_52: {
          id: 3,
          num: 52,
          ear: "亿年前",
          title: "普拉帕特洛星系大爆炸",
          titleEn: "Praptro Disaster",
          earBefore: false,
          layoutRight: true
        },
        year_46: {
          id: 4,
          num: 46,
          ear: "亿年前",
          title: "太阳系诞生",
          titleEn: "The solar system was born",
          earBefore: false,
          layoutRight: false
        },
        year_385: {
          id: 5,
          num: 38.5,
          year: "385",
          ear: "亿年前",
          title: "地球生物始祖诞生",
          titleEn: "The Begining of Life",
          earBefore: false,
          layoutRight: true
        },
        year_53: {
          id: 6,
          num: 5.3,
          year: "53",
          ear: "亿年前",
          title: "寒武纪生命大爆发",
          titleEn: "Cambrian life explosion",
          earBefore: false,
          layoutRight: false
        },
        year_320: {
          id: 7,
          num: 320,
          ear: "万年前",
          title: "“露西”的直立行走",
          titleEn: "LUCY Walk",
          earBefore: false,
          layoutRight: true
        },
        year_8000: {
          id: 8,
          num: 8000,
          ear: "年",
          title: "人类农业革命",
          titleEn: "Primitive Agricultural Society",
          earBefore: "AD.前",
          layoutRight: false
        },
        year_3500: {
          id: 9,
          num: 3500,
          ear: "年",
          title: "文明初现",
          titleEn: "The Birth of Civilization",
          earBefore: "AD.前",
          layoutRight: true
        },
        year_18: {
          id: 10,
          num: 18,
          ear: "世纪",
          title: "工业革命爆发",
          titleEn: "The Industrial Revolution",
          earBefore: "AD.",
          layoutRight: false
        },
        year_1961: {
          id: 11,
          num: 1961,
          ear: "年",
          title: "人类向太空进发",
          titleEn: "Humans march into space",
          earBefore: "AD.",
          layoutRight: true
        },
        year_1969: {
          id: 12,
          num: 1969,
          ear: "年",
          title: "人类首次登陆地外天体",
          titleEn: "First Step on Outerworld",
          earBefore: "AD.",
          layoutRight: false
        },
        year_1971: {
          id: 13,
          num: 1971,
          ear: "年",
          title: "人类的第一座空间站",
          titleEn: "First Spacestation",
          earBefore: "AD.",
          layoutRight: true
        },
        year_2015: {
          id: 14,
          num: 2015,
          ear: "年",
          title: "FRB150418",
          titleEn: "Fast Radio Bursts 150418",
          earBefore: "AD.",
          layoutRight: false
        },
        year_2035: {
          id: 15,
          num: 2035,
          ear: "年",
          title: "国际太空探索委员会成立",
          titleEn: "ISEC Established",
          earBefore: "AD.",
          layoutRight: true
        },
        year_2083: {
          id: 16,
          num: 2083,
          ear: "年",
          title: "人类首次发现落日晶",
          titleEn: "First view of Sunset Crystal",
          earBefore: "AD.",
          layoutRight: false
        },
        year_2089: {
          id: 17,
          num: 2089,
          ear: "年",
          title: "人类首次提炼出星尘",
          titleEn: "Pure Stardust Refined",
          earBefore: "AD.",
          layoutRight: true
        },
        year_2101: {
          id: 19,
          num: 2101,
          ear: "年",
          title: "相际革命爆发",
          titleEn: "The Interphase Revolution",
          earBefore: "AD.",
          layoutRight: false
        },
        year_2144: {
          id: 20,
          num: 2144,
          ear: "年",
          title: "巡礼者计划实施",
          titleEn: "Project Pilgrim Implementation",
          earBefore: "AD.",
          layoutRight: true
        },
        year_2195: {
          id: 21,
          num: 2195,
          ear: "年",
          title: "船团首次成功试航",
          titleEn: "First Successful Trial",
          earBefore: "AD.",
          layoutRight: false
        },
        year_3501: {
          id: 22,
          num: "元年",
          year: "3501",
          ear: "",
          title: "第二船团抵达图兰星",
          titleEn: "New Home - Turan",
          earBefore: "N.E.",
          layoutRight: true
        },
        year_160: {
          id: 23,
          num: "160",
          ear: "年",
          title: "第四船团抵达龙藻星",
          titleEn: "New Home - Longalgae",
          earBefore: "N.E.",
          layoutRight: false
        },
        year_242: {
          id: 24,
          num: "242",
          ear: "年",
          title: "人类重建联络",
          titleEn: "Reunion",
          earBefore: "N.E.",
          layoutRight: true
        },
        year_275: {
          id: 25,
          num: "275",
          ear: "年",
          title: "第八船团抵达塞维利星",
          titleEn: "New Home - Seville",
          earBefore: "N.E.",
          layoutRight: false
        },
        year_307: {
          id: 26,
          num: "307",
          ear: "年",
          title: "第七船团抵达卡萨伊罗娜星",
          titleEn: "New Home - Kassairona",
          earBefore: "N.E.",
          layoutRight: true
        },
        year_630: {
          id: 27,
          num: "630",
          ear: "年",
          title: "第十船团抵达辉夙",
          titleEn: "New Home - Destined Bright",
          earBefore: "N.E.",
          layoutRight: false
        },
        year_767: {
          id: 28,
          num: "767",
          ear: "年",
          title: "染山霞血脉的定名",
          titleEn: "Alpenglow Blood Named",
          earBefore: "N.E.",
          layoutRight: true
        },
        year_862: {
          id: 29,
          num: "862",
          ear: "年",
          title: "解理战争爆发",
          titleEn: "War of Cleavage Broke out",
          earBefore: "N.E.",
          layoutRight: false
        },
        year_949: {
          id: 30,
          num: "949",
          ear: "年",
          title: "星语者学院成立",
          titleEn: "Starwhisperd College Established",
          earBefore: "N.E.",
          layoutRight: true
        },
        year_958: {
          id: 31,
          num: "958",
          ear: "年",
          title: "波江座协定签署",
          titleEn: "Eridanus Agreement Signed",
          earBefore: "N.E.",
          layoutRight: false
        },
        year_992: {
          id: 32,
          num: "992",
          ear: "年",
          title: "光海声明发表",
          titleEn: "Sea of Light Declared",
          earBefore: "N.E.",
          layoutRight: true
        },
        year_1012: {
          id: 33,
          num: "1012",
          ear: "年",
          title: "你的时代",
          titleEn: "YOUR TIMES",
          earBefore: "N.E.",
          layoutRight: false
        },
      },
      // 是否停止导航的自动播放
      autoPlayStop: false,
      // 页面是否过渡完毕
      appLoaded: false,
      isMobile: false,
      // 屏幕是否发生变化
      resizeStatus: false,
      tooltipTarget: ['hover', 'click', 'focus']
    }
  },
  watch: {
    appOpened (newVal) {
      if (newVal) {
        this.loaded()
      }
    }
  },
  created () {
    // 1、解析链接参数
    // let query = this.$route.query
    // if (query.year) {
    //   this.year = query.year
    // }

    // 2、 判断当前是移动端还是PC端
    this.isMobileByScreen()
  },
  components: {
    // HyHeader,
    // HyNav,
  },
  computed: {

    /**
     * 返回当前时间线的信息
     */
    currentSectionInfo () {
      return this.timeLine[`year_${this.year}`]
    },
    /**
     * 返回当前时间线的类
     */
    currentSectionClass () {
      let classArr = [`hy-year-${this.year}`]
      if (this.timeLine[`year_${this.year}`].layoutRight) {
        classArr.push('hy-section-right')
      }
      return classArr
    }
  },
  methods: {
    getCurrentSectionBg (year) {
      return `background-image:url('/images/events/${year}.jpg')`
    },
    /**
     * 根据屏幕尺寸判断是否输出效果为移动端
     */
    isMobileByScreen () {
      return false
      // if (window.innerWidth < 576.5) {
      //   this.isMobile = true
      //   return true
      // } else {
      //   this.isMobile = false
      //   return false
      // }
    },
    loaded () {
      // 先隐藏 Section 内容，防止去掉加载层时与 Section 开始动画冲突
      let textEl = document.querySelector(`#hy-events-container .hy-section .hy-info`)
      let bgEl = document.querySelector(`#hy-events-container .hy-section .hy-bg`)
      textEl.style.opacity = 0
      bgEl.style.opacity = 0

      this.toolStartAnimate()
    },
    /**
     * 工具栏入场动画
     */
    toolStartAnimate () {
      let headerEl = document.querySelector('#hy-header')
      let navEl = document.querySelector('#hy-nav')
      let audioEl = document.querySelector('#hy-audio_control')
      let timeline = new TimelineLite()
      timeline.add(TweenMax.fromTo(headerEl, 1.2, { y: '-20vh', opacity: 0, ease: Power3.easeIn, immediateRender: true, }, { y: 0, opacity: 1 }), 0)
      timeline.add(TweenMax.fromTo(navEl, 1.2, { y: '20vh', opacity: 0, ease: Power3.easeIn, immediateRender: true, }, { y: 0, opacity: 1 }), 0)
      timeline.add(TweenMax.fromTo(audioEl, 1.2, { x: '-20vw', opacity: 0, ease: Power3.easeIn, immediateRender: true, }, { x: 0, opacity: 1 }), 0)

      timeline.add(() => this.sectionBeforeStart(this.year), 0.6)
    },
    /**
     * 当前选中状态
     */
    sectionStatus (year) {
      if (year === this.year) {
        return true
      }
      return false
    },
    /**
     * 导航栏子组件发生切换时调用的函数
     */
    updateSection (newYear, oldYear) {
      this.timeTransitionDirection(newYear, oldYear)
    },
    /**
     * 判断时间线走向
     * @param newYear
     * @param oldYear
     */
    timeTransitionDirection (newYear, oldYear) {
      let prev = this.timeLine[`year_${oldYear}`]
      let next = this.timeLine[`year_${newYear}`]
      if (!prev || !next) return

      if ((next.id - prev.id) > 0) {
        // 时间线向未来移动
        this.sectionForwardTransition(newYear, oldYear)
      } else {
        // 时间线向远古移动
        this.sectionBeforeTransition(newYear, oldYear)
      }
    },
    /**
     * 时间线走向未来-未来开始
     * @param newYear
     */
    sectionForwardStart (newYear) {
      this.year = newYear

      this.$nextTick(() => {
        let textEl = document.querySelector(`#hy-events-container .hy-info`)
        let bgEl = document.querySelector(`#hy-events-container .hy-bg`)

        // 移除原有动画遗留的样式
        textEl.removeAttribute('style')
        bgEl.removeAttribute('style')

        let time = 0.3
        let timeline = new TimelineLite()

        // 时间线配置
        timeline.set([textEl, bgEl], {
          // 初始化视距
          transformPerspective: 1000
        })

        timeline.add(TweenMax.fromTo(bgEl, time, {
          immediateRender: true,
          z: '-2vh',
          opacity: 0,
          ease: Power3.easeOut
        }, {
          z: "0vh",
          opacity: 1,
        }), 0)
        timeline.add(TweenMax.fromTo(textEl, time, {
          immediateRender: true,
          z: '-7vh',
          opacity: 0
        }, {
          z: "0vh",
          opacity: 1,
        }), 0)
      })
    },
    /**
     * 时间线走向未来-当前结束
     * @param newYear
     * @param oldYear
     */
    sectionForwardTransition (newYear, oldYear) {
      let vm = this
      let textEl = document.querySelector(`#hy-events-container .hy-info`)
      let bgEl = document.querySelector(`#hy-events-container .hy-bg`)
      // 两者其一未查询到时，退出动画执行
      if (!textEl || !bgEl) return

      let easeType = Power3.easeIn

      let timeline = new TimelineLite()

      // 时间线配置
      timeline.set([textEl, bgEl], {
        // 初始化视距
        transformPerspective: 1000
      })
      timeline.add('begin')

      // 文字放大
      timeline.add(TweenMax.fromTo(textEl, 1.3, {
        immediateRender: true,
        z: "0vh",
      }, {
        z: "100vh",
        ease: easeType
      }), 0)
      // 背景放大
      timeline.add(TweenMax.fromTo(bgEl, 1.3, {
        immediateRender: true,
        z: "0vh",
      }, {
        'webkitFilter': 'blur(5px)',
        'filter': 'blur(5px)',
        z: "60vh",
        ease: easeType,
      }), 0)
      // 背景在动画快结束时，变成透明状态
      timeline.add(TweenMax.fromTo(bgEl, 0.8, {
        immediateRender: true,
        opacity: 1
      }, {
        opacity: 0.2,
        ease: easeType,
        onComplete () {
          vm.sectionForwardStart(newYear)
        }
      }), '-=0.8')
    },
    /**
     * 时间线走向远古-远古开始（缩放）
     * @param newYear
     */
    sectionBeforeStart (newYear) {
      this.year = newYear

      this.$nextTick(() => {
        let textEl = document.querySelector(`#hy-events-container .hy-info`)
        let bgEl = document.querySelector(`#hy-events-container .hy-bg`)

        textEl.removeAttribute('style')
        bgEl.removeAttribute('style')

        let time = 0.3

        let timeline = new TimelineLite()

        // 时间线配置
        timeline.set([textEl, bgEl], {
          // 初始化视距
          transformPerspective: 1000
        })
        timeline.add(TweenMax.fromTo(bgEl, time, {
          immediateRender: true,
          z: '4vh',
          opacity: 0,
          ease: Power3.easeOut
        }, {
          z: "0vh",
          opacity: 1,
        }), 0)
        timeline.add(TweenMax.fromTo(textEl, time, {
          immediateRender: true,
          z: '7vh',
          opacity: 0
        }, {
          z: "0vh",
          opacity: 1,
        }), 0)
      })
    },
    /**
     * 时间线走向远古-当前结束（缩放）
     * @param newYear
     * @param oldYear
     */
    sectionBeforeTransition (newYear, oldYear) {
      let vm = this
      let textEl = document.querySelector(`#hy-events-container .hy-info`)
      let bgEl = document.querySelector(`#hy-events-container .hy-bg`)
      // 两者其一未查询到时，退出动画执行
      if (!textEl || !bgEl) return

      let easeType = Power3.easeIn

      let timeline = new TimelineLite()

      // 时间线配置
      timeline.set([textEl, bgEl], {
        // 初始化视距
        transformPerspective: 1000
      })
      timeline.add('begin')

      // 文字缩小
      timeline.add(TweenMax.fromTo(textEl, 1.3, {
        immediateRender: true,
        z: "0vh",
        opacity: 1
      }, {
        z: "-100vh",
        opacity: 0,
        ease: easeType,
        onComplete () {
          vm.sectionBeforeStart(newYear)
        }
      }), 0)
      // 背景缩小
      timeline.add(TweenMax.fromTo(bgEl, 1.3, {
        immediateRender: true,
        z: "0vh",
      }, {
        'webkitFilter': 'blur(8px)',
        'filter': 'blur(8px)',
        z: "-2vh",
        ease: easeType,
      }), 0)
      // 背景在动画快结束时，变成透明状态
      timeline.add(TweenMax.fromTo(bgEl, 1.2, {
        immediateRender: true,
        opacity: 1
      }, {
        opacity: 0,
        ease: easeType,
      }), '-=1.2')
    },
    /**
     * 关键字被查阅
     * @param event
     */
    keywordsActive (event) {

    },
    /**
     * 关闭关键词的查阅状态
     * @param event
     */
    keywordsUnactive (event) {
    },
  }
}
</script>
