import express from 'express';
import {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
  addVideoToCourse,
  removeVideoFromCourse
} from '../controller/courseController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Protect all course routes
router.use(protect);

// Course routes
router.post('/', createCourse);
router.get('/', getAllCourses);
router.get('/:id', getCourseById);
router.put('/:id', updateCourse);
router.delete('/:id', deleteCourse);

// Video routes
router.post('/:id/videos', addVideoToCourse);
router.delete('/:id/videos/:videoId', removeVideoFromCourse);

export default router; 