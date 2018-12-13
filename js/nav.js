//function $(str){//#box .cls  p
//	if(str.charAt(0)=="#"){
//		return document.getElementById(str.substring(1));
//	}else if(str.charAt(0)=="."){
//		return document.getElementsByClassName(str.substring(1));
//	}else{
//		return document.getElementsByTagName(str);
//	}
//}

//定义一个菜单项类（DOM节点）
function  MenuItem(title,href,className,subUlClassName) {
	this.domObj = null;
	this.title = title;
	this.href = href;
	this.className = className;
	this.subUlClassName = subUlClassName;//子菜单容器的class
	this.subMenus=[];
}	

//方法：
MenuItem.prototype.appendChildMenu = function(menuItemObj) {
	this.subMenus.push(menuItemObj);
};

MenuItem.prototype.removeChildMenu = function(menuItemObj) {
	let index = this.subMenus.indexOf(menuItemObj);
	this.subMenus.splice(index,1);
};

MenuItem.prototype.createUI = function(parentDom){
	this.domObj = document.createElement("li");
	this.domObj.className = this.className;
	parentDom.appendChild(this.domObj);
	
	let aDom = document.createElement("a");
	aDom.href = this.href;
	aDom.innerHTML = this.title;
	this.domObj.appendChild(aDom);
	
	//子一级菜单的处理
	if(this.subMenus.length>0){
		//1、给子菜单创建容器
		let ulDom = document.createElement("ul");
		ulDom.className = this.subUlClassName;
		this.domObj.appendChild(ulDom);
		//2、循环所有的子菜单对象，调用它们的createUI函数，让它们自己创建自己的外观。
		for(let i=0;i<this.subMenus.length;i++){
			this.subMenus[i].createUI(ulDom);
		}
	}
}

//根
function RootMenu(subUlClassName){
	this.subUlClassName = subUlClassName;
	this.subMenus=[];
}	

//方法：
RootMenu.prototype.appendChildMenu = function(menuItemObj) {
	this.subMenus.push(menuItemObj);
};

RootMenu.prototype.createUI = function(parentDom){
	//子一级菜单的处理
	if(this.subMenus.length>0){
		//1、给子菜单创建容器
		let ulDom = document.createElement("ul");
		ulDom.className = this.subUlClassName;
		parentDom.appendChild(ulDom);
		//2、循环所有的子菜单对象，调用它们的createUI函数，让它们自己创建自己的外观。
		for(let i=0;i<this.subMenus.length;i++){
			this.subMenus[i].createUI(ulDom);
		}
	}
}

window.onload = function(){
	let rootMenu = new RootMenu("one");

	//1、创建一级菜单
	let menu01 = new MenuItem('所有商品',"#","oneli","two");
	rootMenu.appendChildMenu(menu01);
	

	//2、创建二级菜单
	//2.1
	let menu0101 = new MenuItem('套件系列',"#","twoli","three threeIndex1");
	menu01.appendChildMenu(menu0101);
	let menu0102 = new MenuItem('芯类系列',"#","twoli","three threeIndex2");
	menu01.appendChildMenu(menu0102);
	let menu0103 = new MenuItem('毯类系列',"#","twoli","three threeIndex3");
	menu01.appendChildMenu(menu0103);
	let menu0104 = new MenuItem('夏令系列',"#","twoli","three threeIndex4");
	menu01.appendChildMenu(menu0104);
	let menu0105 = new MenuItem('定制系列',"#","twoli","three threeIndex5");
	menu01.appendChildMenu(menu0105);
	let menu0106 = new MenuItem('家居系列',"#","twoli","three threeIndex6");
	menu01.appendChildMenu(menu0106);


	//3、创建三级菜单
	//3.1
	let menu010101 = new MenuItem('浪漫婚庆系列',"#","threeli","");
	menu0101.appendChildMenu(menu010101);
	let menu010102 = new MenuItem('优雅田园系列',"#","threeli","");
	menu0101.appendChildMenu(menu010102);	
	let menu010103 = new MenuItem('美式时尚系列',"#","threeli","");
	menu0101.appendChildMenu(menu010103);
	let menu010104 = new MenuItem('高档奢华系列',"#","threeli","");
	menu0101.appendChildMenu(menu010104);
	let menu010105 = new MenuItem('儿童卡通系列',"#","threeli","");
	menu0101.appendChildMenu(menu010105);
	let menu010106 = new MenuItem('单拆件',"#","threeli","");
	menu0101.appendChildMenu(menu010106);
	
	let menu010201 = new MenuItem('被芯系列',"#","threeli","");
	menu0102.appendChildMenu(menu010201);
	let menu010202 = new MenuItem('枕芯系列',"#","threeli","");
	menu0102.appendChildMenu(menu010202);	
	let menu010203 = new MenuItem('床垫系列',"#","threeli","");
	menu0102.appendChildMenu(menu010203);
	
	let menu010301 = new MenuItem('珊瑚绒毯',"#","threeli","");
	menu0103.appendChildMenu(menu010301);
	let menu010302 = new MenuItem('珊瑚绒毯',"#","threeli","");
	menu0103.appendChildMenu(menu010302);	
	let menu010303 = new MenuItem('珊瑚绒毯',"#","threeli","");
	menu0103.appendChildMenu(menu010303);
	let menu010304 = new MenuItem('珊瑚绒毯',"#","threeli","");
	menu0103.appendChildMenu(menu010304);
	
	let menu010401 = new MenuItem('夏被',"#","threeli","");
	menu0104.appendChildMenu(menu010401);
	let menu010402 = new MenuItem('夏被',"#","threeli","");
	menu0104.appendChildMenu(menu010402);	
	let menu010403 = new MenuItem('夏被',"#","threeli","");
	menu0104.appendChildMenu(menu010403);
	let menu010404 = new MenuItem('夏被',"#","threeli","");
	menu0104.appendChildMenu(menu010404);
	let menu010405 = new MenuItem('夏被',"#","threeli","");
	menu0104.appendChildMenu(menu010405);
	
	let menu010601 = new MenuItem('毛浴巾',"#","threeli","");
	menu0106.appendChildMenu(menu010601);
	let menu010602 = new MenuItem('毛浴巾',"#","threeli","");
	menu0106.appendChildMenu(menu010602);	
	let menu010603 = new MenuItem('毛浴巾',"#","threeli","");
	menu0106.appendChildMenu(menu010603);
	let menu010604 = new MenuItem('毛浴巾',"#","threeli","");
	menu0106.appendChildMenu(menu010604);
	let menu010605 = new MenuItem('毛浴巾',"#","threeli","");
	menu0106.appendChildMenu(menu010605);
	let menu010606 = new MenuItem('毛浴巾',"#","threeli","");
	menu0106.appendChildMenu(menu010606);
	let menu010607 = new MenuItem('毛浴巾',"#","threeli","");
	menu0106.appendChildMenu(menu010607);
	let menu010608 = new MenuItem('毛浴巾',"#","threeli","");
	menu0106.appendChildMenu(menu010608);
	
	//二、创建界面
	rootMenu.createUI($("#nLeft"));	

}

