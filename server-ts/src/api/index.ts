import router from 'koa-router'
import announcement from './announcement'
import userResult from './user_result'


const apiRouter = new router()

apiRouter.use('/api/announcement',announcement.routes())
apiRouter.use('/api/userResult', userResult.routes())

export default apiRouter