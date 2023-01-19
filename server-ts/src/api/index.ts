import router from 'koa-router'
import announcement from './announcement'
import userResult from './user_result'
import { authMiddleware } from '../auth'


const apiRouter = new router()

apiRouter.use('/api/announcement',authMiddleware,announcement.routes())
apiRouter.use('/api/userResult',authMiddleware,userResult.routes())

export default apiRouter