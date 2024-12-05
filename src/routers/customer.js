import IndexPage from "../pages/customer/IndexPage.vue";
import CustomerListPage from "../pages/customer/CustomerListPage.vue";


const customerRouter = {
    path:"/customer",
    component:IndexPage,
    meta:{title:"사용자(customer)"},
    children:[
        {path:"",  redirect:'/customer/list'},
        {path:"list", component: CustomerListPage, meta:{back: "none"} },

    ],
} ;

export default  customerRouter;