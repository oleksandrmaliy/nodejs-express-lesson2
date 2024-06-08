// src/routers/students.js

// import { Router } from 'express';
// import { getAllStudents, getStudentById } from '../services/students.js';

// const router = Router();

// router.get('/students', async (req, res) => {
//   const students = await getAllStudents();

//   res.status(200).json({
//     data: students,
//   });
// });

// router.get('/students/:studentId', async (req, res) => {
//   const { studentId } = req.params;
//   const student = await getStudentById(studentId);

//   res.status(200).json({
//     data: student,
//   });
// });

// export default router;

// src/router/students.js

// import { Router } from 'express';

// import {
//   getStudentsController,
//   getStudentByIdController,
// } from '../controllers/students.js';

// const router = Router();

// router.get('/students', getStudentsController);
// router.get('/students/:studentId', getStudentByIdController);

// export default router;

// src/routers/students.js

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
import { createStudentSchema } from '../validation/students.js';
import { updateStudentSchema } from '../validation/students.js';

const router = Router();

router.get('/students', ctrlWrapper(getStudentsController));

router.get('/students/:studentId', ctrlWrapper(getStudentByIdController));

router.post(
  '/',
  validateBody(createStudentSchema),
  ctrlWrapper(createStudentController),
);

router.put(
  '/students/:studentId',
  validateBody(createStudentSchema),
  ctrlWrapper(upsertStudentController),
);

router.patch(
  '/students/:studentId',
  validateBody(updateStudentSchema),
  ctrlWrapper(patchStudentController),
);

router.delete('/students/:studentId', ctrlWrapper(deleteStudentController));

export default router;