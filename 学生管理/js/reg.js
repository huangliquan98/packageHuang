window.addEventListener("load",function(){
	//添加学生信息的正则表达式
	checkAll("stuId1",/^\d{10}$/);
	checkAll("name1",/^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/);
	checkAll("colg1",/^[\u4e00-\u9fa5]{4,20}$/);
	checkAll("profession1",/^[\u4e00-\u9fa5]{2,20}$/);
	checkAll("grade1",/^.{4,5}$/);
	checkAll("stuClass1",/^.{2,10}$/);
	checkAll("age1",/^\d{2}$/);
	//修改学生信息的正则表达式
	checkAll("stuId2",/^\d{10}$/);
	checkAll("name2",/^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/);
	checkAll("colg2",/^[\u4e00-\u9fa5]{4,20}$/);
	checkAll("profession2",/^[\u4e00-\u9fa5]{2,20}$/);
	checkAll("grade2",/^.{4,5}$/);
	checkAll("stuClass2",/^.{2,10}$/);
	checkAll("age2",/^\d{2}$/);
	function checkAll(eleId,reg){
				var ele=document.getElementById(eleId);
				ele.onblur=function(){
					if(!reg.test(this.value)){
						this.style.borderColor="red";						
					}else{
						this.style.borderColor="green";
					}
				}
			}
	
	
})