import mongoose from 'mongoose';

const courseVideoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  url: {
    type: String,
    required: true,
    trim: true
  },
  thumbnail: {
    type: String,
    required: true,
    trim: true
  }
}, { timestamps: true });

const courseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  courseVideos: [courseVideoSchema],

}, { timestamps: true });

const Course = mongoose.model('Course', courseSchema);

export default Course; 