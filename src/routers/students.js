// src/routers/contacts.js

import { Router } from 'express';

import {
  getStudentsController,
  getStudentByIdController,
  createStudentController,
  deleteStudentController,
  upsertStudentController,
  patchStudentController,
} from '../controllers/students.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createStudentSchema,
  updateStudentSchema,
} from '../validation/students.js';
import { authenticate } from '../middlewares/authenticate.js';
import { checkRoles } from '../middlewares/checkRoles.js';
import { ROLES } from '../constants/index.js';
// import { upload } from '../middlewares/multer.js';

const router = Router();

router.use(authenticate);

router.get('/', checkRoles(ROLES.TEACHER), ctrlWrapper(getStudentsController));

router.get(
  '/:studentId',
  checkRoles(ROLES.TEACHER, ROLES.PARENT),
  ctrlWrapper(getStudentByIdController),
);

router.post(
  '/',
  checkRoles(ROLES.TEACHER),
  validateBody(createStudentSchema),
  // upload.single('photo'), // додаємо цю middleware
  ctrlWrapper(createStudentController),
);

router.put(
  '/:studentId',
  checkRoles(ROLES.TEACHER),
  validateBody(createStudentSchema),
  // upload.single('photo'), // додаємо цю middleware
  ctrlWrapper(upsertStudentController),
);

router.patch(
  '/:studentId',
  checkRoles(ROLES.TEACHER, ROLES.PARENT),
  validateBody(updateStudentSchema),
  // upload.single('photo'), // додаємо цю middleware
  ctrlWrapper(patchStudentController),
);

router.delete(
  '/:studentId',
  checkRoles(ROLES.TEACHER),
  ctrlWrapper(deleteStudentController),
);

export default router;
