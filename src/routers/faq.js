const IndexPage = () => import("../pages/faq/IndexPage.vue");
const FAQListPage = () => import("../pages/faq/FAQListPage.vue");
const FAQRegisterPage = () => import("../pages/faq/FAQRegisterPage.vue");
const FAQReadPage = () => import("../pages/faq/FAQReadPage.vue");
const FAQEditPage = () => import("../pages/faq/FAQEditPage.vue");

const faqRouters = {
    path: "/faq",
    component: IndexPage,
    meta: { title: "자주 묻는 질문(FAQ)" },
    children: [
        {path: "", redirect: '/faq/list'},
        {path: "list", component: FAQListPage, meta:{back: "none"} },
        {path: "register", component: FAQRegisterPage },
        {path: "read/:fno", component: FAQReadPage },
        {path: "edit/:fno", component: FAQEditPage }
    ],
};

export default faqRouters;