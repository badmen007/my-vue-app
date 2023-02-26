import "vue-router"

declare module "vue-router" {
  interface RouteMeta {
    title?: string // 路由标题
    icon?: string, // 路有菜单icon
    hidden?: boolean // 菜单栏是否显示
    noCache?: boolean // 是否缓存
    activeMenu?: string // 当前激活的菜单
    breadcrumb?: boolean // 是否显示面包屑
    affix?: boolean // 是否固定在tags-view中
    alwaysShow?: boolean // 是否一直显示根路由
  }
}