import Vue from 'vue'
import Router from 'vue-router'
import Main from './components/Main.vue'
import App from './App.vue'
import Socket from './components/Socket.vue'
import Socketlna from './components/Socketlna.vue'
import Socketvue from './components/Socketvue.vue'
import Mainsocke from './components/Mainsocke.vue'

Vue.use(Router)

export default new Router({

  // mode: 'history',
  routes: [
    {path:'/mainsocke',component:Mainsocke},


   {path:'/main',component:Main},
    {path:'/app',component:App},
    {path:'/socket',component:Socket,
    children:[
        {path:'',components:{
          socketlna:Socketlna,
          socketvue:Socketvue
        }},
       
    ]
}

  ]
})
