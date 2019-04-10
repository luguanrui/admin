/**
 * 路由懒加载
 * @param file
 * @returns {function()}
 */
export let lazyLoadPage = file => () => import(`@/pages/${file}.vue`)
