import router from 'koa-router'


const apiRouter = new router()

apiRouter.get('/api/greet', (ctx, next) => {
    ctx.body = {msg: 'Server test' }
})

export default apiRouter