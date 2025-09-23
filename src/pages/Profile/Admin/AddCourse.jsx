import React, { useState } from "react";
import AdminLayout from "../../../utils/Adminlayoute";
import {
  Save,
  X,
  Star,
  Image,
  Video,
  FileText,
  Tag,
  Grid3X3,
  Hash,
  Plus,
  Minus,
} from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import API from "./../../../utils/axiosintence";

function AddCourse() {
  const [courseData, setCourseData] = useState({
    title: "",
    image: "",
    description: "",
    category: "",
    rating: 0,
    reviewCount: 0,
    videoUrl: "",
    tags: [],
  });

  const [newTag, setNewTag] = useState("");

  const { mutateAsync, isSuccess, isPending, isLoading, error } = useMutation({
    mutationFn: async (courseData) => {
      const response = await API.post("/course/create", courseData);
      return response.data;
    },
    onSuccess: (data) => {
      console.log("Course created successfully:", data);
    },
    onError: (error) => {
      console.error("Error creating course:", error);
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addTag = () => {
    if (
      newTag.trim() &&
      courseData.tags.length < 3 &&
      !courseData.tags.includes(newTag.trim())
    ) {
      setCourseData((prev) => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()],
      }));
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove) => {
    if (courseData.tags.length > 1) {
      setCourseData((prev) => ({
        ...prev,
        tags: prev.tags.filter((tag) => tag !== tagToRemove),
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Course Data:", courseData);
    mutateAsync(courseData);
  };

  const categories = [
    "Programming",
    "Web Development",
    "Mobile Development",
    "Data Science",
    "Machine Learning",
    "UI/UX Design",
    "Digital Marketing",
    "Business",
    "Photography",
    "Music",
  ];

  if (isLoading) {
    return (
      <AdminLayout
        pageTitle="Profile"
        showSearch={false}
        className="p-0"
        subheader="shadow-none"
      >
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#D8A25E] mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading profile...</p>
          </div>
        </div>
      </AdminLayout>
    );
  }
  if (error) {
    return (
      <AdminLayout pageTitle="Profile" showSearch={false}>
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <p className="text-red-600 mb-4">Error: {error.message}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-[#D8A25E] text-white rounded-md hover:opacity-90"
            >
              Retry
            </button>
          </div>
        </div>
      </AdminLayout>
    );
  }

  if (isSuccess) {
    return (
      <AdminLayout pageTitle="Profile" showSearch={false}>
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <p className="text-green-600 mb-4">Course created successfully!</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-[#D8A25E] text-white rounded-md hover:opacity-90"
            >
              Add Another Course
            </button>
          </div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout
      pageTitle="Add New Course"
      showSearch={false}
      givespace={true}
      className="py-4"
    >
      <div className="">
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-lg bg-white/30 rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
            <div className="bg-gradient-to-r from-[#343131] to-[#D8A25E] p-8 text-white">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <Plus size={24} />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">Create New Course</h1>
                  <p className="text-white/90 mt-1">
                    Fill in the details to add a new course
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="flex items-center text-sm font-semibold text-[#343131] mb-3">
                    <Image size={18} className="mr-2 text-[#D8A25E]" />
                    Image URL
                  </label>
                  <input
                    type="url"
                    name="image"
                    value={courseData.image}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#D8A25E] focus:border-transparent transition-all duration-300 text-[#343131] placeholder-gray-400"
                    placeholder="Image URL (https://...)"
                    required
                  />
                </div>

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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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

                <div className="space-y-4">
                  <label className="flex items-center text-sm font-semibold text-[#343131] mb-3">
                    <Tag size={18} className="mr-2 text-[#D8A25E]" />
                    Tags (Max 3)
                  </label>

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

                  {courseData.tags.length < 3 && (
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        onKeyPress={(e) =>
                          e.key === "Enter" && (e.preventDefault(), addTag())
                        }
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

                <div className="flex flex-col sm:flex-row justify-end gap-4 pt-6 border-t border-gray-200">
                  <button
                    type="button"
                    className="px-8 py-3 border-2 border-[#D8A25E] text-[#D8A25E] rounded-xl font-medium hover:bg-[#D8A25E]/10 transition-all duration-300 flex items-center justify-center"
                  >
                    <X size={16} className="mr-2" />
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="px-8 py-3 bg-gradient-to-r from-[#343131] to-[#D8A25E] text-white rounded-xl font-medium hover:shadow-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center"
                  >
                    <Save size={16} className="mr-2" />
                    {isPending ? "Saving..." : "Save Course"}
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
