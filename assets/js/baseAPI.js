// 注意：每次调用$.get()或者$.post()或者$.ajax()的时候
// 都会先调用ajaxPrefilter这个函数
$.ajaxPrefilter(function(options){
    options.url = 'http://api-breakingnews-web.itheima.net'+options.url
    console.log(options.url);
})