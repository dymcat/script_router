function back(){
	var path=$_FILE_PATH_$.substring(new java.io.File($.srcroot).getCanonicalPath().length+1);
	path+="<br/>"+Tool.strify($.args);
	path+="<br/>"+Tool.strify($.pars);
	print(path);
	return Tool.readString($.srcroot+"/@.html").replace("{path}",path);
}