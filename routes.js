import { Router } from 'express'
import  numberRouter  from "./src/routes/MobileNo.routes.js"
import  nameRouter  from './src/routes/Name.routes.js'

import  imageRouter  from './src/routes/image.routes.js';

const router = Router()

router.use("/api", imageRouter);
router.use("/number",numberRouter)
router.use("/name", nameRouter);

export default router;