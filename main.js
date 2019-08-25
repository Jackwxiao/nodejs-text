window.jQuery = function(nodeOrSelector){
  let nodes = {}
  nodes.addClass = function(){}
  nodes.html = function(){}
  return nodes
}
window.$ =  window.jQuery

window.promise = function(fn){
  return {
    then: function(){}
  }
}
window.jQuery.ajax = function({url,method,successFn,failFn,headers}){
  return new Promise(function(resolve,reject){
    let request = new XMLHttpRequest()
    request.open(method, url)
    for (let key in headers) {//?
      let value = headers[key]
      request.setRequestHeader(key, value)//?
    }
    request.onreadystatechange = () => {
      if (request.readyState === 4) {
        if (request.status >= 200 && request.status < 300) {
          resolve.call(undefined, request.responseText)
        }else if (request.status >= 400) {
          reject.call(undefined, request)
        }
      }
    }
    request.send()
  })
}


myButton.addEventListener('click', (e) => {
   let promise = window.jQuery.ajax({
     url: '/xxx',
     method: 'get',
     headers: {
       'content-type': 'application/x-www-form-urlencoded',
       'wx':'18'
     }
   })
    promise.then(
      (text)=>{console.log(text)},
      (request)=>{console.log(request)}
    )
})