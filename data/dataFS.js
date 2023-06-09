const dataFS = {
	"佛山": [{
		"key": "A47J",
		"num": 2,
		"desc": "厨房用具；咖啡磨；香料磨；饮料制备装置"
	}, {
		"key": "B01D",
		"num": 3,
		"desc": "分离（用湿法从固体中分离固体入 B03B、B03D，用风力跳汰机或摇床入 B03B，用其他干法入 B07；固体物料从固体物料或流体中的磁或静电分离，利用高压电场的分离入 B03C；离心机、涡旋装置入 B04B；涡旋装置入 B04C；用于从含液物料中挤出液体的压力机本身入 B30B  9/02）"
	}, {
		"key": "B01F",
		"num": 4,
		"desc": "混合，例如，溶解、乳化、分散（混合颜料入 B44D3/06）"
	}, {
		"key": "B01J",
		"num": 5,
		"desc": "化学或物理方法，例如，催化作用，胶体化学；其有关设备"
	}, {
		"key": "B02C",
		"num": 6,
		"desc": "B02C一般破碎、研磨或粉碎；碾磨谷物（用破碎、磨碎或碾磨方法制取金属粉末入B22F 9/04）"
	}, {
		"key": "B05B",
		"num": 7,
		"desc": "喷射装置；雾化装置；喷嘴（有喷嘴的喷射混合机入 B01F25/72)(用喷射使液体或其他流体涂布于表面的方法入 B05D）"
	}, {
		"key": "B07C",
		"num": 8,
		"desc": "B07C邮件分拣；单件物品的分选，或适于一件一件地分选的散装材料的分选，如拣选（专门适用于特定用途的并已包含在其他类的，参看有关的类，如A43D 33/06、B23Q 7/12）"
	}, {
		"key": "B08B",
		"num": 9,
		"desc": "一般清洁；一般污垢的防除（刷子入A46；家庭或类似清洁装置入A47L；颗粒从液体或气体中分离入B01D；固体分离入B03，B07；一般对表面喷射或涂敷液体或其他流体材料入B05；用于输送机的清洗装置入B65G 45/10；对瓶子同时进行清洗、灌注和封装的入B67C 7/00；一般腐蚀或积垢的防止入C23；街道、永久性道路、海滨或陆地的清洗入E01H；专门用于游泳池或仿海滨浴场浅水池或池子的部件、零件或辅助设备清洁的入E04H 4/16；防止或清除静电荷入H05F）"
	}, {
		"key": "B21C",
		"num": 10,
		"desc": "用非轧制的方式生产金属板、线、棒、管、型材或类似半成品；与基本无切削金属加工有关的辅助加工"
	}, {
		"key": "B21D",
		"num": 11,
		"desc": "金属板或管、棒或型材的基本无切削加工或处理；冲压金属（线材的加工或处理入 B21F）"
	}, {
		"key": "B21F",
		"num": 12,
		"desc": "线材的加工或处理（金属轧制入B21B；用拉拔和用有关基本无切削加工的辅助加工方法入B21C；捆扎物件入B65B13/00）"
	}, {
		"key": "B22D",
		"num": 13,
		"desc": "金属铸造；用相同工艺或设备的其他物质的铸造（塑料或塑性状态物质的成型入B29C；冶金工艺，添加到金属中物质的选择入C21，C22）"
	}, {
		"key": "B23B",
		"num": 14,
		"desc": "车削；镗削（用电极代替工具入B23H，例如加工孔入B23H9/14；用激光束加工入B23K26/00；仿形或控制装置入B23Q）"
	}, {
		"key": "B23D",
		"num": 15,
		"desc": "刨削；插削；剪切；拉削；锯；锉削；刮削；其他类目不包括的用切除材料方式对金属加工的类似操作"
	}, {
		"key": "B23K",
		"num": 16,
		"desc": "钎焊或脱焊；焊接；用钎焊或焊接方法包覆或镀敷；局部加热切割，如火焰切割；用激光束加工（用金属的挤压来制造金属包覆产品入B21C23/22；用铸造方法制造衬套或包覆层入B22D19/08；用浸入方式的铸造入B22D23/04；用烧结金属粉末制造复合层入B22F7/00；机床上的仿形加工或控制装置入B23Q；不包含在其他类目中的包覆金属或金属包覆材料入C23C；燃烧器入F23D）"
	}, {
		"key": "B23P",
		"num": 17,
		"desc": "未包含在其他位置的金属加工；组合加工；万能机床（仿形加工或控制装置入B23Q）"
	}, {
		"key": "B23Q",
		"num": 18,
		"desc": "机床的零件、部件或附件，如仿形装置或控制装置（在车床或镗床上使用的各类刀具入B23B27/00）；以特殊零件或部件的结构为特征的通用机床；不针对某一特殊金属加工用途的金属加工机床的组合或联合"
	}, {
		"key": "B24B",
		"num": 19,
		"desc": "用于磨削或抛光的机床、装置或工艺（用电蚀入B23H；磨料或有关喷射入B24C；电解浸蚀或电解抛光入C25F3/00）；磨具磨损表面的修理或调节；磨削，抛光剂或研磨剂的进给"
	}, {
		"key": "B25J",
		"num": 20,
		"desc": "机械手；装有操纵装置的容器（单独采摘水果、蔬菜、啤酒花或类似作物的自动装置入A01D46/30；外科用的针头操纵器入A61B17/062；与滚轧机有关的机械手入B21B39/20；与锻压机有关的机械手入B21J13/10；夹持轮子或其部件的装置入B60B30/00；起重机入B66C；用于核反应堆中所用的燃料或其他材料的处理设备入G21C19/00；机械手与加有防辐射的小室或房间的组合结构入G21F7/06）"
	}, {
		"key": "B26D",
		"num": 21,
		"desc": "切割；用于打孔、冲孔、切割、冲裁或切断的机器的通用零件（用刀或其他切割或扯裂机件来把物料分裂成碎片入B02C18/00；用磨料流体喷射切割入B24C5/02；手持切割工具入B26B）"
	}, {
		"key": "B28B",
		"num": 22,
		"desc": "黏土或其他陶瓷成分、熔渣或含有水泥材料的混合物，例如灰浆的成型（铸模入B22C；石头或类似石料的加工入B28D；一般在塑性状态中材料的成型入B29C；制造并非完全由这些材料组成的层状制品入B32B；现场成型见E部有关的类）"
	}, {
		"key": "B28D",
		"num": 23,
		"desc": "加工石头或类似石头的材料（采矿或采石用的机械或方法入E21C）"
	}, {
		"key": "B29C",
		"num": 24,
		"desc": "塑料的成型或连接；塑性状态物质的一般成型；已成型产品的后处理，例如修整（以金属形式加工的入B23；磨削、抛光入B24；切割入B26D，B26F；制作预型件入B29B11/00；通过将原本不相连接的层结合成为各层连在一起的产品来制造层状产品入B32B7/00至B32B41/00）"
	}, {
		"key": "B30B",
		"num": 25,
		"desc": "一般压力机；不包含在其他类目中的压力机（生产超高压或超高压与高温结合引起物理变形，例如用于制造人造金刚石入B01J3/00）"
	}, {
		"key": "B32B",
		"num": 26,
		"desc": "层状产品，即由扁平的或非扁平的薄层，例如泡沫状的、蜂窝状的薄层构成的产品"
	}, {
		"key": "B33Y",
		"num": 27,
		"desc": "附加制造，即三维〔3D〕物品制造，通过附加沉积，附加凝聚或附加分层，如3D打印，立体照片或选择性激光烧结"
	}, {
		"key": "B41F",
		"num": 28,
		"desc": "印刷机械或印刷机（复印装置或办公印刷机械入B41L）"
	}, {
		"key": "B41J",
		"num": 29,
		"desc": "打字机；选择性印刷机构，即不用印版的印刷机构；排版错误的修正（排版入 B41B；特殊表面上的印刷入 B41F；作洗衣标记入 B41K；消字器，擦具或消字装置入 B43L19/00；通过涂覆来改正排字错误的液体介质入 C09D10/00；测量结果的记录入 G01；数据的识别或显示，以数字方式（如用穿孔法的）标记的记录载体入 G06K；免费证或票券印刷及发行设 备 入 G07B ； 电 键 式 开 关 一 般 入H01H13/70 ，H03K17/94；与键盘或类似装置相关的编码一般入H03M11/00；传递数字信息的接收或发送机入H04L；文 件 或 类 似 物 的 传 输 或 重 现，例 如 传 真 传 输 入H04N1/00；专门适用于某些设备，如现款登记器、称量机械及能对其作业作出记录的设备的印刷机构见有关小类）"
	}, {
		"key": "B65B",
		"num": 30,
		"desc": "包装物件或物料的机械，装置或设备，或方法；启封（雪茄烟的捆扎和压紧装置入 A24C1/44；适合于由物品或要包扎物件支承的包扎带的固定和拉紧装置入 B25B25/00；将瓶子、罐或相似容器的封闭件入 B67B1/00-B67B6/00；对瓶子同时进行清洗，灌注和封装入 B67C7/00；瓶子，罐，罐头，木桶，桶或类似容器的排空入 B67C9/00）"
	}, {
		"key": "B65D",
		"num": 31,
		"desc": "用于物件或物料贮存或运输的容器，如袋、桶、瓶子、箱盒、罐头、纸板箱、板条箱、圆桶、广口瓶、槽、料仓、运输容器；所用的附件、封口或配件；包装元件；包装件"
	}, {
		"key": "B65G",
		"num": 32,
		"desc": "运输或贮存装置，例如装载或倾卸用输送机、车间输送机系统或气动管道输送机（包装用的入 B65B；搬运薄的或细丝状材料如纸张或细丝入 B65H；起重机入 B66C；便携式或可移动的举升或牵引器具，如升降机入 B66D；用于装载或卸载目的的升降货物的装置，如叉车，入 B66F9/00；不包括在其他类目中的瓶子、罐、罐头、木桶、桶或类似容器的排空入B67C9/00；液体分配或转移入 B67D；将压缩的、液化的或固体化的气体灌入容器或从容器内排出入F17C；流体用管道系统入 F17D）"
	}, {
		"key": "B65H",
		"num": 33,
		"desc": "搬运薄的或细丝状材料，如薄板、条材、缆索"
	}, {
		"key": "B66B",
		"num": 34,
		"desc": "升降机；自动扶梯或移动人行道（用作替代正常出口的救生装置，如支撑在大楼或者其他结构上的楼梯、用于降下人员的营救笼、袋或具有类似功能的设备入A62B 1/02；与飞机配合或装在飞机上用于装卸货物或便于乘客乘降或具有类似功能的设备入B64D 9/00；以用于提升或卷扬机构为特点的制动或停止装置入B66D 5/00）"
	}, {
		"key": "B66C",
		"num": 35,
		"desc": "起重机；用于起重机、绞盘、绞车或滑车的载荷吊挂元件或装置（钢绳、钢缆或链条卷扬机构，及其制动或停止装置入B66D；核反应堆专用的入G21）"
	}, {
		"key": "B66F",
		"num": 36,
		"desc": "不包含在其他类目中的卷扬、提升、牵引或推动，如把提升力或推动力直接作用于载荷表面的装置（支撑在柱基或类似支承物上的人工岛入E02B 17/00；与提升装置结合的脚手架入E04G 1/22，E04G 3/28；滑行提升装置入E04G 11/24；建筑物的提升入E04G 23/06；支柱或支撑入E04G 25/00；在电梯上的提升或其他卷扬装置入E06C 7/12；矿用顶柱入E21D 15/00）"
	}, {
		"key": "C02F",
		"num": 37,
		"desc": "水、废水、污水或污泥的处理（通过在物质中产生化学变化使有害的化学物质无害或降低危害的方法入A62D 3/00；分离、沉淀箱或过滤设备入B01D；有关处理水、废水或污水生产装置的水运容器的特殊设备，例如用于制备淡水入B63J；为防止水的腐蚀用的添加物质入C23F；放射性废液的处理入G21F 9/04）"
	}, {
		"key": "C03C",
		"num": 38,
		"desc": "玻璃、釉或搪瓷釉的化学成分；玻璃的表面处理；由玻璃、矿物或矿渣制成的纤维或细丝的表面处理；玻璃与玻璃或与其他材料的接合"
	}, {
		"key": "C04B",
		"num": 39,
		"desc": "石灰；氧化镁；矿渣；水泥；其组合物，例如：砂浆、混凝土或类似的建筑材料；人造石；陶瓷（微晶玻璃陶瓷入C03C10/00）；耐火材料（难熔金属的合金入C22C）；天然石的处理"
	}, {
		"key": "C08J",
		"num": 40,
		"desc": "加工；配料的一般工艺过程；不包括在C08B，C08C，C08F，C08G或C08H小类中的后处理"
	}, {
		"key": "C08L",
		"num": 41,
		"desc": "高分子化合物的组合物（基于可聚合单体的组成成分入C08F、C08G；人造丝或纤维入D01F；织物处理的配方入D06）"
	}, {
		"key": "C09D",
		"num": 42,
		"desc": "涂料组合物，例如色漆、清漆或天然漆；填充浆料；化学涂料或油墨的去除剂；油墨；改正液；木材着色剂；用于着色或印刷的浆料或固体；原料为此的应用（化妆品入A61K，一般将液体或其他流动物料涂到表面上的方法入B05D；木材着色入B27K5/02；釉料或搪瓷釉入C03C；天然树脂、虫胶清漆、干性油、催干剂、松节油本身入C09F；除虫胶清漆外的抛光组合物、滑雪屐蜡入C09G；黏合剂或用作黏合剂的物质入C09J；用于接头或盖的密封或包装材料入C09K3/10；用于防止泄漏的材料入C09K3/12；电解或电泳生成镀层的方法入C25D）"
	}, {
		"key": "D05B",
		"num": 43,
		"desc": "缝纫（成衣业用的入A41H；缝纫台板入A47B29/00；装订用缝制入B42B2/00；改用作针织的缝纫机入D04B39/08）"
	}, {
		"key": "D06B",
		"num": 44,
		"desc": "纺织材料的液相、气相或蒸汽处理（为生产纤维或长丝而对天然纤维或长丝原料进行的机械处理入D01B)"
	}, {
		"key": "E04B",
		"num": 45,
		"desc": "一般建筑物构造；墙，例如，间壁墙；屋顶；楼板；顶棚；建筑物的隔绝或其他防护（墙、楼板、或顶棚上的开口的边沿构造入E06B1/00）"
	}, {
		"key": "E04F",
		"num": 46,
		"desc": "建筑物的装修工程，例如，楼梯，楼面（窗、门入E06B）"
	}, {
		"key": "E04G",
		"num": 47,
		"desc": "脚手架、模壳；模板；施工用具或其他建筑辅助设备，或其应用；建筑材料的现场处理；原有建筑物的修理，拆除或其他工作"
	}, {
		"key": "E04H",
		"num": 48,
		"desc": "专门用途的建筑物或类似的构筑物；游泳或喷水浴槽或池；桅杆；围栏；一般帐篷或天篷（基础入E02D）"
	}, {
		"key": "E05B",
		"num": 49,
		"desc": "锁；其附件；手铐"
	}, {
		"key": "E05D",
		"num": 50,
		"desc": "门、窗或翼扇的铰链或其他悬挂装置"
	}, {
		"key": "E06B",
		"num": 51,
		"desc": "在建筑物、车辆、围栏或类似围绕物的开口处用的固定式或移动式闭合装置，例如，门、窗、遮帘、栅门（暖房用的遮阳板或百叶窗入A01G9/22；窗帘入A47H；汽车行李箱或保护罩的盖入B62D25/10；天窗入E04B7/18；遮阳、凉篷入E04F10/00）"
	}, {
		"key": "F04B",
		"num": 52,
		"desc": "液体变容式机械；泵（旋转活塞式或摆动活塞式液体机械或泵入 F04C；非变容式泵入 F04D；通过其他流体直接接触或利用被泵送流体的惯性的流体泵送入 F04F）"
	}, {
		"key": "F04C",
		"num": 53,
		"desc": "旋转活塞或摆动活塞的液体变容式机械（液体驱动的发动机入F03C）；旋转活塞或摆动活塞的变容式泵（发动机燃料喷射泵入F02M）"
	}, {
		"key": "F04D",
		"num": 54,
		"desc": "非变容式泵（发动机燃料喷射泵入F02M；离子泵入H01J 41/12；电动泵入H02K 44/02）"
	}, {
		"key": "F16K",
		"num": 55,
		"desc": "阀；龙头；旋塞；致动浮子；通风或充气装置"
	}, {
		"key": "F16L",
		"num": 56,
		"desc": "管子；管接头或管件；管子、电缆或护管的支撑；一般的绝热方法"
	}, {
		"key": "F21V",
		"num": 57,
		"desc": "照明装置或其系统的功能特征或零部件；不包含在其他类目中的照明装置和其他物品的结构组合物"
	}, {
		"key": "F23D",
		"num": 58,
		"desc": "燃烧器"
	}, {
		"key": "F24C",
		"num": 59,
		"desc": "家用炉或灶；一般用途家用炉或灶的零部件"
	}, {
		"key": "F25B",
		"num": 60,
		"desc": "制冷机，制冷设备或系统；加热和制冷的联合系统；热泵系统"
	}, {
		"key": "F26B",
		"num": 61,
		"desc": "从固体材料或制品中消除液体的干燥（联合收割机的干燥装置入A01D41/133；干燥果实或疏菜用的框架入A01F25/12；干燥食品入A23；干燥头发入A45D20/00；干燥身体的器具入A47K10/00；干燥家庭物品入A47L；干燥气体或蒸汽入B01D；脱水或类似的从固体分离出液体的化学或物理方法入B01D43/00；离心设备入B04；干燥陶瓷器入C04B33/30；与其他处理方式结合的干燥纱线或纤维入D06C；没有加热或正向空气循环的洗衣用干燥框架，家用洗衣干燥机或旋转式脱水机，拧干或热压洗衣入D06F；炉、窑、烘烤炉入F27）"
	}, {
		"key": "F27B",
		"num": 62,
		"desc": "一般馏炉、窑、烘烤炉或蒸馏炉；开式烧结设备或类似设备（燃烧设备入F23；电加热入H05B）"
	}, {
		"key": "F27D",
		"num": 63,
		"desc": "一种以上的炉通用的炉、窑、烘烤炉或蒸馏炉的零部件或附件（燃烧设备入F23；电加热入H05B）"
	}, {
		"key": "F28F",
		"num": 64,
		"desc": "通用热交换或传热设备的零部件"
	}, {
		"key": "G01M",
		"num": 65,
		"desc": "机器或结构部件的静或动平衡的测试；未列入其它类组的结构部件或设备的测试"
	}, {
		"key": "G01N",
		"num": 66,
		"desc": "借助于测定材料的化学或物理性质来测试或分析材料（除免疫测定法以外包括酶或微生物的测量或试验入C12M，C12Q）"
	}, {
		"key": "G01R",
		"num": 67,
		"desc": "测量电变量；测量磁变量（指示谐振电路的正确调谐入H03J 3/12）"
	}, {
		"key": "G05B",
		"num": 68,
		"desc": "一般的控制或调节系统；这种系统的功能单元；用于这种系统或单元的监视或测试装置（应用流体作用的一般流体压力执行器或系统入F15B；阀门本身入F16K；仅按机械特征区分的入G05G；传感元件见相应小类，例如G12B，G01、H01的小类；校正单元见相应的小类，例如H02K）"
	}, {
		"key": "G06F",
		"num": 69,
		"desc": "电数字数据处理（基于特定计算模型的计算机系统入 G06N）"
	}, {
		"key": "G06K",
		"num": 70,
		"desc": "图形数据读取（图像或视频识别或理解 G06V）；数据的呈现；记录载体；处理记录载体"
	}, {
		"key": "G06Q",
		"num": 71,
		"desc": "专门适用于行政、商业、金融、管理、监督或预测目的的数据处理系统或方法；其他类目不包含的专门适用于行政、商业、金融、管理、监督或预测目的的处理系统或方法"
	}, {
		"key": "H01F",
		"num": 72,
		"desc": "磁体；电感；变压器；磁性材料的选择"
	}, {
		"key": "H01H",
		"num": 73,
		"desc": "电开关；继电器；选择器；紧急保护装置（接触电缆入H01B7/10；电解式自断续器入H01G9/18；紧急保护电路装置入H02H；无触点电子开关入H03K17/00）"
	}, {
		"key": "H01L",
		"num": 74,
		"desc": "半导体器件；其他类目中不包括的电固体器件（使用半导体器件的测量入G01；一般电阻器入H01C；磁体、电感器、变压器入H01F；一般电容器入H01G；电解型器件入H01G 9/00；电池组、蓄电池入H01M；波导管、谐振器或波导型线路入H01P；线路连接器、汇流器入H01R；受激发射器件入H01S；机电谐振器入H03H；扬声器、送话器、留声机拾音器或类似的声机电传感器入H04R；一般电光源入H05B；印刷电路、混合电路、电设备的外壳或结构零部件、电气元件的组件的制造入H05K；在具有特殊应用的电路中半导体器件的使用见该应用的小类）"
	}, {
		"key": "H02G",
		"num": 75,
		"desc": "电缆或电线的安装，或光电组合电缆或电线的安装"
	}, {
		"key": "H02J",
		"num": 76,
		"desc": "供电或配电的电路装置或系统；电能存储系统"
	}, {
		"key": "H02K",
		"num": 77,
		"desc": "电机（电动继电器入H01H53/00；直流或交流电力输入变换为浪涌电力输出入H02M9/00）"
	}, {
		"key": "H02M",
		"num": 78,
		"desc": "用于交流和交流之间、交流和直流之间、或直流和直流之间的转换以及用于与电源或类似的供电系统一起使用的设备；直流或交流输入功率至浪涌输出功率的转换；以及它们的控制或调节（变压器入H01F；机电变换器入 H02K47/00；控制变压器、电抗器或扼流圈，电动机、发电机或机电变换器的控制调节入 H02P)"
	}, {
		"key": "H04L",
		"num": 79,
		"desc": "数字信息的传输，例如电报通信（电报和电话通信的公用设备入H04M）"
	}, {
		"key": "H05B",
		"num": 80,
		"desc": "电热；其他类目不包含的电照明光源；一般的用于电照明光源的电路"
	}]
}
export default dataFS