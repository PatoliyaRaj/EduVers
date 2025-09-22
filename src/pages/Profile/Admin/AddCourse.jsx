// import React from 'react'
// import AdminLayout from '../../../utils/Adminlayoute'
// function AddCourse() {
//   return (
//     <React.Fragment>
//       <AdminLayout pageTitle='AddCourse'>
//           <div>this is the add course page</div>
//       </AdminLayout>
//     </React.Fragment>
//   )
// }

// export default AddCourse



import React, { useState } from 'react';
import AdminLayout from '../../../utils/Adminlayoute';
import {
  Save,
  Upload,
  X,
  Star,
  Image,
  Video,
  FileText,
  Tag,
  Grid3X3,
  Hash,
  Eye,
  Plus,
  Minus
} from 'lucide-react';

function AddCourse() {
  const [courseData, setCourseData] = useState({
    title: '',
    image: '',
    description: '',
    category: '',
    rating: 0,
    reviewCount: 0,
    videoUrl: '',
    tags: ['Popular']
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [newTag, setNewTag] = useState('');

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
        setCourseData(prev => ({
          ...prev,
          image: e.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle tag operations
  const addTag = () => {
    if (newTag.trim() && courseData.tags.length < 3 && !courseData.tags.includes(newTag.trim())) {
      setCourseData(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }));
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove) => {
    if (courseData.tags.length > 1) {
      setCourseData(prev => ({
        ...prev,
        tags: prev.tags.filter(tag => tag !== tagToRemove)
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Course Data:', courseData);
    // Add your form submission logic here
  };

  const categories = [
    'Programming',
    'Web Development',
    'Mobile Development',
    'Data Science',
    'Machine Learning',
    'UI/UX Design',
    'Digital Marketing',
    'Business',
    'Photography',
    'Music'
  ];

  return (
    <AdminLayout pageTitle="Add New Course" showSearch={false} givespace={true}>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Glass Effect Container */}
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-lg bg-white/30 rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#343131] to-[#D8A25E] p-8 text-white">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <Plus size={24} />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">Create New Course</h1>
                  <p className="text-white/90 mt-1">Fill in the details to add a new course</p>
                </div>
              </div>
            </div>

            {/* Form Content */}
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Course Title & Category Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Course Title */}
                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-semibold text-[#343131] mb-3">
                      <FileText size={18} className="mr-2 text-[#D8A25E]" />
                      Course Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={courseData.title}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#D8A25E] focus:border-transparent transition-all duration-300 text-[#343131] placeholder-gray-400"
                      placeholder="Enter course title"
                      required
                    />
                  </div>

                  {/* Category */}
                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-semibold text-[#343131] mb-3">
                      <Grid3X3 size={18} className="mr-2 text-[#D8A25E]" />
                      Category
                    </label>
                    <select
                      name="category"
                      value={courseData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#D8A25E] focus:border-transparent transition-all duration-300 text-[#343131]"
                      required
                    >
                      <option value="">Select a category</option>
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Course Image Upload */}
                <div className="space-y-4">
                  <label className="flex items-center text-sm font-semibold text-[#343131] mb-3">
                    <Image size={18} className="mr-2 text-[#D8A25E]" />
                    Course Image
                  </label>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Upload Area */}
                    <div className="relative">
                      <input
                        type="file"
                        id="imageUpload"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                      <label
                        htmlFor="imageUpload"
                        className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-[#D8A25E]/50 rounded-xl cursor-pointer bg-white/30 hover:bg-white/40 transition-all duration-300"
                      >
                        <Upload size={32} className="text-[#D8A25E] mb-2" />
                        <span className="text-sm font-medium text-[#343131]">Click to upload image</span>
                        <span className="text-xs text-gray-500 mt-1">PNG, JPG, GIF up to 10MB</span>
                      </label>
                    </div>

                    {/* Image Preview */}
                    {imagePreview && (
                      <div className="relative">
                        <img
                          src={imagePreview}
                          alt="Course preview"
                          className="w-full h-48 object-cover rounded-xl border border-gray-200"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            setImagePreview(null);
                            setCourseData(prev => ({ ...prev, image: '' }));
                          }}
                          className="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-semibold text-[#343131] mb-3">
                    <FileText size={18} className="mr-2 text-[#D8A25E]" />
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={courseData.description}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#D8A25E] focus:border-transparent transition-all duration-300 text-[#343131] placeholder-gray-400 resize-none"
                    placeholder="Enter detailed course description..."
                    required
                  />
                </div>

                {/* Video URL */}
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-semibold text-[#343131] mb-3">
                    <Video size={18} className="mr-2 text-[#D8A25E]" />
                    Video URL
                  </label>
                  <input
                    type="url"
                    name="videoUrl"
                    value={courseData.videoUrl}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#D8A25E] focus:border-transparent transition-all duration-300 text-[#343131] placeholder-gray-400"
                    placeholder="https://youtube.com/watch?v=..."
                    required
                  />
                </div>

                {/* Rating & Review Count Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Rating */}
                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-semibold text-[#343131] mb-3">
                      <Star size={18} className="mr-2 text-[#D8A25E]" />
                      Initial Rating (0-5)
                    </label>
                    <input
                      type="number"
                      name="rating"
                      value={courseData.rating}
                      onChange={handleInputChange}
                      min="0"
                      max="5"
                      step="0.1"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#D8A25E] focus:border-transparent transition-all duration-300 text-[#343131]"
                    />
                  </div>

                  {/* Review Count */}
                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-semibold text-[#343131] mb-3">
                      <Hash size={18} className="mr-2 text-[#D8A25E]" />
                      Initial Review Count
                    </label>
                    <input
                      type="number"
                      name="reviewCount"
                      value={courseData.reviewCount}
                      onChange={handleInputChange}
                      min="0"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#D8A25E] focus:border-transparent transition-all duration-300 text-[#343131]"
                    />
                  </div>
                </div>

                {/* Tags Section */}
                <div className="space-y-4">
                  <label className="flex items-center text-sm font-semibold text-[#343131] mb-3">
                    <Tag size={18} className="mr-2 text-[#D8A25E]" />
                    Tags (Max 3)
                  </label>
                  
                  {/* Current Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {courseData.tags.map((tag, index) => (
                      <div
                        key={index}
                        className="flex items-center bg-gradient-to-r from-[#343131] to-[#D8A25E] text-white px-3 py-1 rounded-full text-sm"
                      >
                        <span>{tag}</span>
                        {courseData.tags.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeTag(tag)}
                            className="ml-2 hover:bg-white/20 rounded-full p-1"
                          >
                            <Minus size={12} />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Add New Tag */}
                  {courseData.tags.length < 3 && (
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                        className="flex-1 px-4 py-2 rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#D8A25E] focus:border-transparent transition-all duration-300 text-[#343131] placeholder-gray-400"
                        placeholder="Enter new tag"
                      />
                      <button
                        type="button"
                        onClick={addTag}
                        className="px-4 py-2 bg-[#D8A25E] text-white rounded-xl hover:opacity-90 transition-opacity"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row justify-end gap-4 pt-6 border-t border-gray-200">
                  <button
                    type="button"
                    className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-all duration-300 flex items-center justify-center"
                  >
                    <X size={16} className="mr-2" />
                    Cancel
                  </button>
                  
                  <button
                    type="button"
                    className="px-8 py-3 border-2 border-[#D8A25E] text-[#D8A25E] rounded-xl font-medium hover:bg-[#D8A25E]/10 transition-all duration-300 flex items-center justify-center"
                  >
                    <Eye size={16} className="mr-2" />
                    Preview
                  </button>
                  
                  <button
                    type="submit"
                    className="px-8 py-3 bg-gradient-to-r from-[#343131] to-[#D8A25E] text-white rounded-xl font-medium hover:shadow-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center"
                  >
                    <Save size={16} className="mr-2" />
                    Save Course
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default AddCourse;