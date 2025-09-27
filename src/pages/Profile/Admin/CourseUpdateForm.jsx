import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  X,
  Save,
  BookOpen,
  FileText,
  Image,
  VideoIcon,
  Tags,
  Tag,
  Plus,
  Minus,
} from "lucide-react";
import API from "../../../utils/axiosintence";
import { SuccessToster, ErrorToster } from "../../../components/toster";

function CourseUpdateForm({ courseId, onClose }) {
  const [newTag, setNewTag] = useState("");

  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    image: "",
    category: "",
    videoUrl: "",
    tags: [],
    _id: courseId || "",
  });

  const fetchCourseData = async () => {
    try {
      const response = await API.get(`Course/get/${courseId}`);

      console.log("🚀 ~ fetchCourseData ~ response.data.data:", response.data.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching course data:", error);
      throw error;
    }
  };

  const { data: courseDataFromAPI, isLoading } = useQuery({
    queryKey: ["getCourse", courseId],
    queryFn: fetchCourseData,
    enabled: !!courseId,
    retry: 1,
    staleTime: 30000,
    onError: (error) => {
      console.error("Query error:", error);
      ErrorToster("Failed to load course data", 2500);
    },
  });

  const updateMutation = useMutation({
    mutationFn: async (updatedData) => {
      if (!courseId) {
        throw new Error("Course ID is required for update");
      }
      try {
        const response = await API.patch(
          `/Course/update/${courseId}`,
          updatedData
        );
        return response.data;
      } catch (error) {
        console.error("Update error:", error.message);
        throw error;
      }
    },
    onSuccess: () => {
      SuccessToster("Course updated successfully", 2500);
      setTimeout(() => {
        if (onClose) onClose();
      }, 0);
    },
    onError: (error) => {
      ErrorToster(error.message || "Failed to update course", 2500);
    },
  });

  useEffect(() => {
    if (courseDataFromAPI) {
      console.log("Setting course data from API:", courseDataFromAPI);

      const course = courseDataFromAPI.data || courseDataFromAPI;

      setCourseData({
        title: course.title || "",
        description: course.description || "",
        image: course.image || "",
        category: course.category || "",
        videoUrl: course.videoUrl || "",
        tags: course.tags || [],
        _id: course._id || courseId || "",
      });
    }
  }, [courseDataFromAPI, courseId]);

  const handleInputChange = React.useCallback((e) => {
    const { name, value } = e.target;
    setCourseData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const addTag = () => {
    if (!newTag.trim()) return;

    if (courseData.tags.includes(newTag.trim())) {
      ErrorToster("Tag already exists", 2000);
      return;
    }

    if (courseData.tags.length >= 3) {
      ErrorToster("Maximum 3 tags allowed", 2000);
      return;
    }

    setCourseData((prev) => ({
      ...prev,
      tags: [...prev.tags, newTag.trim()],
    }));

    setNewTag("");
  };

  const removeTag = (tagToRemove) => {
    setCourseData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleSubmit = React.useCallback(
    (e) => {
      e.preventDefault();
      if (!courseData._id && !courseId) {
        ErrorToster("Cannot update course: Missing ID", 2500);
        return;
      }
      updateMutation.mutate(courseData);

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    },
    [courseData, courseId, updateMutation]
  );

  if (!courseId) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 ">
        <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full">
          <h2 className="text-xl font-semibold text-red-600 mb-4">Error</h2>
          <p className="text-gray-700">
            Cannot update course: No course ID provided
          </p>
          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full">
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D8A25E] mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading course data...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-lg max-w-3xl w-full max-h-[100vh] overflow-auto h-[90vh] my-10 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        <div className="bg-gradient-to-r from-[#343131] to-[#D8A25E] p-5 text-white rounded-t-xl flex justify-between items-center">
          <h2 className="text-xl font-semibold">Update Course</h2>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 p-2 rounded-full transition-all"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-[#343131] font-medium mb-2">
                Course Title
              </label>
              <div className="relative">
                <BookOpen
                  className="absolute left-3 top-3 text-gray-400"
                  size={18}
                />
                <input
                  type="text"
                  name="title"
                  value={courseData.title}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D8A25E] focus:border-transparent transition-all duration-300"
                  placeholder="Course Title"
                />
              </div>
            </div>

            <div>
              <label className="block text-[#343131] font-medium mb-2">
                Category
              </label>
              <div className="relative">
                <Tags
                  className="absolute left-3 top-3 text-gray-400"
                  size={18}
                />
                <select
                  name="category"
                  value={courseData.category}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D8A25E] focus:border-transparent transition-all duration-300 appearance-none"
                >
                  <option value="">Select Category</option>
                  <option value="Programming">Programming</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile Development">Mobile Development</option>
                  <option value="Design">Design</option>
                  <option value="Business">Business</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Data Science">Data Science</option>
                  <option value="Personal Development">
                    Personal Development
                  </option>
                  <option value="Photography">Photography</option>
                  <option value="Music">Music</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[#343131] font-medium mb-2">
                Image URL
              </label>
              <div className="relative">
                <Image
                  className="absolute left-3 top-3 text-gray-400"
                  size={18}
                />
                <input
                  type="url"
                  name="image"
                  value={courseData.image}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D8A25E] focus:border-transparent transition-all duration-300"
                  placeholder="Image URL (https://...)"
                />
              </div>
            </div>

            <div>
              <label className="block text-[#343131] font-medium mb-2">
                Video URL
              </label>
              <div className="relative">
                <VideoIcon
                  className="absolute left-3 top-3 text-gray-400"
                  size={18}
                />
                <input
                  type="url"
                  name="videoUrl"
                  value={courseData.videoUrl}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D8A25E] focus:border-transparent transition-all duration-300"
                  placeholder="Video URL"
                />
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-[#343131] font-medium mb-2">
              Course Description
            </label>
            <div className="relative">
              <FileText
                className="absolute left-3 top-3 text-gray-400"
                size={18}
              />
              <textarea
                name="description"
                value={courseData.description}
                onChange={handleInputChange}
                rows={4}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D8A25E] focus:border-transparent transition-all duration-300"
                placeholder="Course description..."
              ></textarea>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-[#343131] font-medium mb-2">
              Tags (Max 3)
            </label>

            <div className="flex flex-wrap gap-2 mb-4">
              {courseData.tags.map((tag, index) => (
                <div
                  key={index}
                  className="flex items-center bg-gradient-to-r from-[#343131] to-[#D8A25E] text-white px-3 py-1 rounded-full text-sm"
                >
                  <span>{tag}</span>
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="ml-2 hover:bg-white/20 rounded-full p-1"
                  >
                    <Minus size={12} />
                  </button>
                </div>
              ))}
            </div>

            {courseData.tags.length < 3 && (
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Tag
                    className="absolute left-3 top-3 text-gray-400"
                    size={18}
                  />
                  <input
                    type="text"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    onKeyPress={(e) =>
                      e.key === "Enter" && (e.preventDefault(), addTag())
                    }
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D8A25E] focus:border-transparent transition-all duration-300"
                    placeholder="Enter new tag"
                  />
                </div>
                <button
                  type="button"
                  onClick={addTag}
                  className="px-4 py-2 bg-[#D8A25E] text-white rounded-lg hover:opacity-90 transition-opacity flex items-center"
                >
                  <Plus size={16} />
                  <span className="ml-2">Add</span>
                </button>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-end mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={updateMutation.isLoading}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#343131] to-[#D8A25E] text-white hover:opacity-90 transition-all flex items-center justify-center gap-2"
            >
              {updateMutation.isLoading ? (
                <>
                  <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Updating...</span>
                </>
              ) : (
                <>
                  <Save size={18} />
                  <span>Update Course</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CourseUpdateForm;
