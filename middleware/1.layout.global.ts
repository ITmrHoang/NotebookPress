export default defineNuxtRouteMiddleware((to, from) => {
      const path = to.path
    if (path.startsWith('/flower-store')) {
        definePageMeta({
            layout: false
        })
        setPageLayout('flower')
    }
})