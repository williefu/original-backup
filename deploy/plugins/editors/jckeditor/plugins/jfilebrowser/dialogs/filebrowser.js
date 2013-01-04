/*
Copyright (c) 2003-2010, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
Modified by Andrew W @webxsolution Ltd
*/

(function()
{CKEDITOR.dialog.add('filebrowser',function(editor)
{var dialog,editor,initialized=false,imagesDirectory=CKEDITOR.plugins.getPath('jfilebrowser')+'images/',regexFolderUp=/[^\/]+\/$/,regexInvalidChars=/[\\\/:\*\?"<>\|]/,regexIconExt=new RegExp('^(?:'+editor.config.filebrowser_icons.replace(/,/g,'|')+')$','i'),Images=[];this.OnUploadCompleted=function(errorNumber,fileName,customErrorMsg)
{if(errorNumber==editor.plugins.jfilebrowser.ERROR_NONE||errorNumber==editor.plugins.jfilebrowser.ERROR_UPLOADEDFILERENAMED)
loadFoldersAndFiles(dialog.type,dialog.path);dialog.getContentElement('tab1','inputFile').reset();dialog.getContentElement('tab1','uploadFile').enable();dialog.getContentElement('tab1','inputFile').setLabel(editor.lang.filebrowser.uploadTip);editor.plugins.jfilebrowser._detectError(editor,errorNumber,customErrorMsg,fileName);};var createFolderButton={id:'createFolder',label:editor.lang.filebrowser.folderCreate,title:editor.lang.filebrowser.folderCreateTip,accessKey:'C',type:'button',disabled:false,onClick:function()
{var folderName;while(true)
{folderName=prompt(editor.lang.filebrowser.folderNew,'');if(folderName==null)
return;else if(folderName.length==0)
alert(editor.lang.filebrowser.folderEmpty);else if(regexInvalidChars.test(folderName))
alert(editor.lang.filebrowser.folderInvalidChar);else
break;}
createFolder(dialog.type,dialog.path,folderName);}};var resourceType=function(name,url,allowedExtensions,deniedExtensions)
{this.name=name;this.url=url;this.allowedExtensions=allowedExtensions.toLowerCase().split(',');this.deniedExtensions=deniedExtensions.toLowerCase().split(',');this.isExtensionAllowed=function(extension)
{extension=extension.toLowerCase();return((!this.deniedExtensions.length||CKEDITOR.tools.indexOf(this.deniedExtensions,extension)==-1)&&(!this.allowedExtensions.length||CKEDITOR.tools.indexOf(this.allowedExtensions,extension)!==-1));};};var getExtension=function(fileName)
{return fileName.substr(fileName.lastIndexOf('.')+1).toLowerCase();};var getIcon=function(fileName)
{var extension=getExtension(fileName);if(regexIconExt.test(extension))
return extension;else
return'default.icon';};var clearFoldersPane=function()
{dialog.getContentElement('tab1','folders').getElement().setHtml("");};var clearResourcesList=function()
{dialog.getContentElement('tab1','resourceslist').getElement().setHtml("");};var updateFoldersPane=function(folders,selectedFolderIndex)
{var td,tr,table=new CKEDITOR.dom.element('table'),tbody=new CKEDITOR.dom.element('tbody');tr=new CKEDITOR.dom.element('tr');td=new CKEDITOR.dom.element('td');td.appendText("..");td.addClass('cke_folderUp');td.on('click',function(evt)
{var folderUp=this.path.replace(regexFolderUp,'');if(folderUp!="/")
loadFolders(this.type,folderUp.replace(regexFolderUp,''));else
clearFoldersPane();loadFoldersAndFiles(this.type,folderUp);},dialog,{});tr.append(td);tbody.append(tr);for(var i=0;i<folders.length;i++)
{tr=new CKEDITOR.dom.element('tr');td=new CKEDITOR.dom.element('td');td.appendText(folders[i]);td.addClass(i==selectedFolderIndex?'cke_folderOpened':'cke_folder');td.on('click',function(evt)
{updateFoldersPane(evt.listenerData.folders,evt.listenerData.folder);loadFoldersAndFiles(this.type,this.path.replace(regexFolderUp,'')
+evt.listenerData.folders[evt.listenerData.folder]+"/");},dialog,{folders:folders,folder:i});tr.append(td);tbody.append(tr);}
clearFoldersPane();table.setStyle('width','100%');table.append(tbody);dialog.getContentElement('tab1','folders').getElement().append(table);};var getErrorNumber=function(xml)
{return parseInt(xml.selectSingleNode('Connector/Error/@number').value);};var getErrorMessage=function(xml)
{var node=xml.selectSingleNode('Connector/Error/@text');if(!node)
return'';return node.value;};var onInit=function(xml)
{if(editor.plugins.jfilebrowser._detectError(editor,getErrorNumber(xml),getErrorMessage(xml)))
return;var name,select=dialog.getContentElement('tab1','cmbResourceType'),nodes=xml.selectNodes('Connector/ResourceTypes/ResourceType');select.clear();dialog.resourceTypes={};for(var i=0;i<nodes.length;i++)
{name=nodes[i].attributes.getNamedItem('name').value;dialog.resourceTypes[name]=new resourceType(name,nodes[i].attributes.getNamedItem('url').value,nodes[i].attributes.getNamedItem('allowedExtensions').value,nodes[i].attributes.getNamedItem('deniedExtensions').value);select.add(name);}
initialized=true;loadFoldersAndFiles(nodes[0].attributes.getNamedItem('name').value,"/");};var onCreateFolder=function(xml)
{if(editor.plugins.jfilebrowser._detectError(editor,getErrorNumber(xml),getErrorMessage(xml)))
return;loadFoldersAndFiles(dialog.type,dialog.path);};var onGetFolders=function(xml)
{if(editor.plugins.jfilebrowser._detectError(editor,getErrorNumber(xml),getErrorMessage(xml)))
return;var currentFolder=xml.selectSingleNode('Connector/CurrentFolder'),nodes=xml.selectNodes('Connector/Folders/Folder'),folders=[];for(var i=0;i<nodes.length;i++)
folders.push(nodes[i].attributes.getNamedItem('name').value);updateFoldersPane(folders,currentFolder);};var onGetFoldersAndFiles=function(xml)
{if(editor.plugins.jfilebrowser._detectError(editor,getErrorNumber(xml),getErrorMessage(xml)))
return;var img,td,tr,span,imgpreview,ap,table=new CKEDITOR.dom.element('table'),tbody=new CKEDITOR.dom.element('tbody'),nodes=xml.selectNodes('Connector/Folders/Folder'),currentFolder=xml.selectSingleNode('Connector/CurrentFolder'),connector=xml.selectSingleNode('//Connector'),files=[],folders=[];dialog.type=connector.attributes.getNamedItem('resourceType').value;dialog.url=currentFolder.attributes.getNamedItem('url').value;dialog.path=currentFolder.attributes.getNamedItem('path').value;if(CKEDITOR.env.ie)
{Images.clear();dialog.getContentElement('tab1','resourceslist').getElement().setStyle('overflow-y','scroll');}
else
{table.setStyle('display','table-cell');table.setStyle('height','280px');table.setStyle('width','100%');table.setStyle('float','left');}
table.setStyle('overflow','auto');dialog.getContentElement('tab1','resourceslist').getElement().setStyle('border','1px solid #0E3460');dialog.getContentElement('tab1','resourceslist').getElement().setStyle('background-color','#FFFFFF');dialog.getContentElement('tab1','resourceslist').getElement().setStyle('padding','10px');CKEDITOR.document.getById('cke_actualFolder').setHtml(dialog.path);table.setAttribute('id','tableFiles');for(var i=0;i<nodes.length;i++)
{folders.push(nodes[i].attributes.getNamedItem('name').value);tr=new CKEDITOR.dom.element('tr');td=new CKEDITOR.dom.element('td');td.appendText(folders[i]);td.setAttribute('colSpan',3);td.addClass('cke_folder');tr.append(td);tr.on('click',function(evt)
{updateFoldersPane(evt.listenerData.folders,evt.listenerData.folder);loadFoldersAndFiles(this.type,this.path+evt.listenerData.folders[evt.listenerData.folder]+"/");},dialog,{folder:i,folders:folders});tbody.append(tr);}
nodes=xml.selectNodes('Connector/Files/File');for(var i=0;i<nodes.length;i++)
{files.push(nodes[i].attributes.getNamedItem('name').value);tr=new CKEDITOR.dom.element('tr');td=new CKEDITOR.dom.element('td');img=new CKEDITOR.dom.element('img');img.setAttribute("src",CKEDITOR.getUrl(imagesDirectory+'icons/'+getIcon(files[i])+'.gif'));ap=new CKEDITOR.dom.element('a');ap.setAttribute('href','javascript:void();')
var fileUrl=dialog.resourceTypes[dialog.type].url+dialog.path.substr(1)+files[i];var addPreview=fileUrl.match(/.+\.(gif|jpg|png)$/i)?true:false;if(addPreview)
{span=new CKEDITOR.dom.element('span');imgpreview=new CKEDITOR.dom.element('img');imgpreview.setAttributes({id:files[i].replace(/(\.gif|\.jpg|\.png)$/i,''),alt:'',title:'',src:editor.config.baseHref+fileUrl,border:'0'});span.setAttribute('id','previewImg');span.append(imgpreview);}
td.setStyle('width','20px');td.setStyle('text-align','center');ap.append(img);if(addPreview)
ap.append(span);td.append(ap);tr.append(td);td=new CKEDITOR.dom.element('td');td.appendText(files[i]);td.setStyle('vertical-align','middle');td.setStyle('width','450px');tr.append(td);td=new CKEDITOR.dom.element('td');td.appendText(nodes[i].attributes.getNamedItem('size').value+'KB');td.setStyle('vertical-align','middle');td.setStyle('width','50px');tr.append(td);tr.on('click',function(evt)
{var fileUrl=this.resourceTypes[this.type].url+this.path.substr(1)+evt.listenerData.file;editor.fire('fileSelected',{url:fileUrl},editor);dialog.hide();},dialog,{file:files[i]});tbody.append(tr);}
clearResourcesList();table.append(tbody);dialog.getContentElement('tab1','resourceslist').getElement().append(table);if(CKEDITOR.env.ie)
Images.process(50);dialog.getContentElement('tab1','inputFile').getInputElement().getParent().setAttribute("action",editor.plugins.jfilebrowser._commandUrl(editor,'FileUpload',{type:dialog.type,currentFolder:dialog.path}));};var loadFoldersAndFiles=function(type,path)
{CKEDITOR.ajax.loadXml(editor.plugins.jfilebrowser._commandUrl(editor,'GetFoldersAndFiles',{type:type,currentFolder:path}),onGetFoldersAndFiles);};var loadFolders=function(type,path)
{CKEDITOR.ajax.loadXml(editor.plugins.jfilebrowser._commandUrl(editor,'GetFolders',{type:type,currentFolder:path}),onGetFolders);};var createFolder=function(type,path,folderName)
{CKEDITOR.ajax.loadXml(editor.plugins.jfilebrowser._commandUrl(editor,'CreateFolder',{type:type,currentFolder:path,newFolderName:folderName}),onCreateFolder);};return{title:editor.lang.filebrowser.title,minWidth:'730',minHeight:'480',onLoad:function()
{dialog=this;editor=this.getParentEditor();var head=CKEDITOR.document.getHead();head.append(CKEDITOR.document.createElement('link',{attributes:{type:'text/css',rel:'stylesheet',href:editor.config.baseHref+'plugins/editors/jckeditor/plugins/jfilebrowser/dialogs/filebrowser.css'}}));if(CKEDITOR.env.ie)
{CKEDITOR.tools.extend(Images,{process:function(size)
{var TBElement=CKEDITOR.document.getById("tableFiles");var SPANElements=TBElement.getElementsByTag("span");var process=0;if(CKEDITOR.env.ie){process=1;};var spanelem=null;var imgelem=null;var newImg=null;for(var i=0;i<SPANElements.count();i++){spanelem=SPANElements.getItem(i);newImg=new Image();spanelem=spanelem.$;imgelem=spanelem.childNodes.item(0);newImg.name=imgelem.id;newImg.src=imgelem.src;var height=newImg.height;var width=newImg.width;this.push(newImg);if(process&&height&&width){spanelem.style.height=(height<(size))?(size)+"px":"auto";spanelem.style.width=(width<(size))?(size)+"px":"auto";if(imgelem&&imgelem.tagName=='IMG'&&imgelem.src.match(/.+\.(gif|jpg|png)$/i)){imgelem.style.height=(height>(2*size))?(2*size)+"px":"auto";imgelem.style.width=(width>(2*size))?(2*size)+"px":"auto";imgelem.height=height;imgelem.width=width;}}}},clear:function()
{this.length=0;}});}},onHide:function()
{initialized=false;},onShow:function()
{var params={};if(editor.plugins.jfilebrowser.params.type)
params.type=editor.plugins.jfilebrowser.params.type;if(!dialog.type||!dialog.path||(typeof params.type=='undefined'||!!params.type&&dialog.type!=params.type)||(!!params.path&&dialog.path!=params.path))
{clearFoldersPane();clearResourcesList();CKEDITOR.ajax.loadXml(editor.plugins.jfilebrowser._commandUrl(editor,'Init',params),onInit);}},contents:[{id:'tab1',label:editor.lang.filebrowser.title,accessKey:'B',elements:[{type:'html',html:'<style type="text/css">'+'.cke_folder { background: url("'+CKEDITOR.getUrl(imagesDirectory+'folder.gif')+'"); }'+'.cke_folderOpened{ background: url("'+CKEDITOR.getUrl(imagesDirectory+'folderOpened.gif')+'"); }'+'.cke_folderUp { background: url("'+CKEDITOR.getUrl(imagesDirectory+'folderUp.gif')+'"); }'+'.cke_filebrowser .cke_dialog_ui_hbox_first {vertical-align:top;}'+'.cke_folder, .cke_folderOpened, .cke_folderUp {'+'padding-left:20px;'+'height:16px;'+'background-repeat:no-repeat;'+'}'+'#cke_actualFolder {'+'font-weight:bold;'+'font-size:120%;'+'}'+'</style>'},{type:'hbox',widths:['140px','540px'],align:'left',padding:0,className:'cke_filebrowser',children:[{type:'vbox',children:[{type:'select',id:'cmbResourceType',accessKey:'R',labelLayout:'vertical',label:editor.lang.filebrowser.resourceType,items:[[editor.lang.common.notSet,'']],onChange:function()
{if(this.isChanged()||initialized)
{this.resetInitValue()
loadFoldersAndFiles(this.getValue(),"/");clearFoldersPane();}}},{type:'vbox',id:'folders',style:'display:table-cell;',children:[]}]},{type:'vbox',heights:['36px','280px'],children:[{type:'hbox',widths:['36px',''],children:[{type:'html',align:'left',style:'vertical-align:middle',html:'<img width="32" height="32" src="'+CKEDITOR.getUrl(imagesDirectory+'folderOpened32.gif')+'" alt=""/>'},{type:'html',style:'vertical-align:middle',html:'<div id="cke_actualFolder"></div>'},]},{type:'vbox',id:'resourceslist',style:'height:280px;white-space: nowrap;',children:[]},{type:'hbox',style:'height:35px;',children:[{type:'file',label:editor.lang.filebrowser.uploadTip,labelLayout:'vertical',action:editor.plugins.jfilebrowser._commandUrl(editor,'FileUpload',{type:'Files',currentFolder:'/'}),id:'inputFile'},{type:'fileButton',label:editor.lang.common.uploadSubmit,id:'uploadFile',accessKey:'S',onClick:function(evt)
{var dialog=this.getDialog(),file=dialog.getContentElement('tab1','inputFile').getInputElement().$.value;if(!file)
{alert(editor.lang.filebrowser.fileNotSelected);return false;}
else
{if(!dialog.resourceTypes[dialog.type].isExtensionAllowed(getExtension(file)))
{alert(editor.lang.filebrowser.errors[editor.plugins.jfilebrowser.ERROR_INVALID_EXTENSION]);return false;}
dialog.getContentElement('tab1','inputFile').setLabel(editor.lang.filebrowser.uploadProgressLbl);}},'for':['tab1','inputFile']}]}]}]}]}],buttons:[createFolderButton,CKEDITOR.dialog.cancelButton]};});})();