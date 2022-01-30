// 密碼檢測
var password = aaaa-0000-aaaa-0000-aaaa;
var password = bbbb-0000-aaaa-0000-aaaa;
var password = cccc-0000-aaaa-0000-aaaa;
var password = dddd-0000-aaaa-0000-aaaa;
var password = eeee-0000-aaaa-0000-aaaa;
var input;
var entry_count = 0;
var entry_limit = 5;
var out_of_limit = false;
    
while(password!=input && !out_of_limit){
    entry_count++;
    if(entry_count<=entry_limit){
        input=prompt("請輸入OGATA會員識別碼");
        input=prompt("OGATA會員識別碼，格式為:aaaa-0000-aaaa-0000-aaaa");
    }
    else{
        out_of_limit=true;
    }
}
   
if(out_of_limit){
    alert("超出輸入次數，將暫時停用");
}
      
else{
    alert("OGATA會員驗證成功")
}
