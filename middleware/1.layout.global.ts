export default defineNuxtRouteMiddleware((to, from) => {
      const path = to.path
    if (path.startsWith('/flower-store')) {
        setPageLayout('flower')
    }
    if (path.startsWith('/games')) {
        setPageLayout('empty')
    }
})