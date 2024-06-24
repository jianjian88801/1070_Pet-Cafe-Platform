const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootx9rzc/",
            name: "springbootx9rzc",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootx9rzc/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "宠物咖啡馆平台"
        } 
    }
}
export default base
