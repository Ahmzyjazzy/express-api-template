import express from 'express';
import { modifyMessage, performAsyncAction } from '../middleware';
import { indexPage, messagesPage, addMessage } from '../controllers';

const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/messages', messagesPage);
indexRouter.post('/messages', modifyMessage, performAsyncAction, addMessage);

export default indexRouter;
