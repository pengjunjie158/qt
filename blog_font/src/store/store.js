import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);
var store = new Vuex.Store({
    state:{
        articleData:null,
        dataNav:null,
        state:false,
        statea:false

    },
    actions:{
        getAllData({commit}){
            var getArticleAll=function(){
               return new Promise((resolve,reject)=>{
                
                this.axios.get("/api/front_article/getArticleAll").then((data)=>{
                   
                    commit("articledata_m",data.data.data)
                    resolve()
                })
                
                })
            }
        //   var dataNav=function(){
        //     return  new Promise((resolve,reject)=>{
              
        //         this.axios.get("/api/front_article/getNav").then((data)=>{
        //                 commit("navdata_m",data.data.data)
        //                 resolve()
        //             })
        //     })
        //   }


        return {
                axios:this.axios,
                getArticleAll
            }

          
            // return {
            //     axios:this.axios,
            //     dataNav,
            //     getArticleAll
            // }
        },
        get({commit}){
                var dataNav=function(){
                return  new Promise((resolve,reject)=>{
                
                    this.axios.get("/api/front_article/getNav").then((data)=>{
                            commit("navdata_m",data.data.data)
                            resolve()
                        })
                })
            }
            return {
                axios:this.axios,
                dataNav
            }
        },
        defaultdata({dispatch,commit},fn){
            dispatch("getAllData").then((data)=>[
                // Promise.all([data.dataNav(),data.getArticleAll()]).then((data)=>{
                //         commit("state_m",true)
                //         //fn();

                //         console.log(this.state)
                //     })

                Promise.all([data.getArticleAll()]).then((data)=>{
                        commit("state_m",true)
                //fn();
                        console.log(this.state)
                    })

            ])
            
        },
        all({dispatch,commit}){

             dispatch("get").then((data)=>[
                Promise.all([data.dataNav()]).then((data)=>{
                        commit("statea_m",true)
                        //fn();
                        console.log(1111)

                        console.log(this.state)
                    })
            ])
        }
    },
    mutations:{
        navdata_m(state,data){
            state.dataNav=data
        },
        articledata_m(state,data){
            state.articleData=data
        }
        ,
        state_m(state,data){
            state.state=data
        }
        ,
        statea_m(state,data){
            state.statea=data
        }
    }
})
export default store