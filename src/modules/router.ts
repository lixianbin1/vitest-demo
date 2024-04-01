import { App } from 'vue'
import { createRouter,createWebHashHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from '~pages'

export const routes = setupLayouts(generatedRoutes)
export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export const install = (app:App) => {
  app.use(router)
}
export default install