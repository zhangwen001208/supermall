//创建这个js目的是当有多个组件需要使用axios网络请求时 ，就可以直接调这个文件 而不是去每个组件都去导入axios框架 也可以更加方便日后的维护
import axios from "axios"

export function request(config,success,failure){
  //1 创建axios的实例
	const instance1 = axios.create({
		baseURL: "http://152.136.185.210:7878/api/hy66",
		timeout: 5000
	})
	//2 axios的拦截器
  //请求拦截
	/* instance1.interceptors.request.use(config =>{

	}.err => {

	}); */
  //拦截请求
  instance1.interceptors.response.use( res => {
    return res
  },err => {
    console.log(err)
  })

	//3.发送真正的请求
/* 	instance1(config)
	.then(res => {
		success(res)
	}).catch( err => {
		failure(err)
	}) */
	//这里调instance时 它本身自己的返回值时promises 所以我们不需要去包装一个promises
		return instance1(config)
}
