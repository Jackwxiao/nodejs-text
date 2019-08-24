button.addEventListener('click', (e) => {
  let request = new XMLHttpRequest()
  request.open('get','/xxx') //配置request
  request.send()
  request.onreadystatechange = () => {
    if(request.readyState===4){
      console.log('请求和响应都完毕了')
      console.log('request.status')
     if(request.status >=200 && request.status < 300){
        let string = request.responseText
        // 把符合 JSON 语法的字符串转换成 JS 对应的值
        let object = window.JSON.parse(string)
        //JSON。parse 是浏览器提供的
     }else if(request.status >=400){
       console.log('请求失败')
     }
   }
  }
})