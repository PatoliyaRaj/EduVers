import React from "react";
import AdminLayout from "../../../utils/Adminlayoute";
import API from "../../../utils/axiosintence";
import { useQuery } from "@tanstack/react-query";
import { Mail, Phone, Calendar, MessageCircle, Flag } from "lucide-react";
function UserComments() {
  const GetComments = async () => {
    const response = await API.get("/Contact/getComments");
    console.log("🚀 ~ GetComments ~ response:", response);
    return response.data;
  };
  const { data, isLoading, error } = useQuery({
    queryKey: ["comments"],
    queryFn: GetComments,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching comments</div>;
  }

  return (
    <React.Fragment>
      <AdminLayout pageTitle="User Comments" givespace={true}>
        <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-6">
          {data.contacts.map((comment) => (
            <div
              key={comment._id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 relative pb-14"
            >
              <div className="bg-[#343131] text-white px-4 py-2 flex justify-between items-center">
                <h3 className="font-medium text-sm">Feedback</h3>
                {comment.subject && (
                  <span className="inline-block px-3 py-1 bg-[#D8A25E] text-white rounded-full text-xs font-medium capitalize">
                    {comment.subject}
                  </span>
                )}
              </div>

              <div className="p-5 border-b border-gray-100">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#343131] to-[#D8A25E] flex items-center justify-center text-white text-xl font-bold">
                    {comment.fullname.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-[#343131]">
                      {comment.fullname}
                    </h3>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-1 text-sm text-gray-600">
                      <a
                        href={`mailto:${comment.email}`}
                        className="flex items-center gap-1 hover:text-[#D8A25E] transition-colors"
                      >
                        <Mail size={14} />
                        <span className="truncate max-w-[200px]">
                          {comment.email}
                        </span>
                      </a>

                      {comment.phone && (
                        <a
                          href={`tel:${comment.phone}`}
                          className="flex items-center gap-1 hover:text-[#D8A25E] transition-colors"
                        >
                          <Phone size={14} />
                          <span>{comment.phone}</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start gap-2 mb-2">
                  <MessageCircle size={18} className="text-[#D8A25E] mt-1" />
                  <h4 className="font-medium text-[#343131]">Message</h4>
                </div>
                <div className="pl-6">
                  <p className="text-gray-700 whitespace-pre-line bg-gray-50 p-4 rounded-lg border border-gray-100">
                    {comment.message}
                  </p>
                </div>
              </div>
              {/* footer section  */}
              <div className="bg-gray-50 px-5 py-3 flex flex-wrap justify-between items-center gap-2 absolute bottom-0 left-0 right-0 border-t border-gray-100">
                <div className="flex items-center text-xs text-gray-500 ">
                  <Calendar size={14} className="mr-1" />
                  <span>
                    {comment.createdAt
                      ? new Date(comment.createdAt).toLocaleString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                          hour: "numeric",
                          minute: "numeric",
                          hour12: true,
                        })
                      : ""}
                  </span>
                </div>

                <div className="flex gap-2">
                  <button className="px-3 py-1.5 text-sm font-medium rounded-md bg-white border border-[#D8A25E] text-[#D8A25E] hover:bg-[#D8A25E] hover:text-white transition-colors duration-200">
                    Reply
                  </button>
                  <button className="px-3 py-1.5 text-sm font-medium rounded-md bg-white border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-200">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {data.contacts.length === 0 && (
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <Flag className="w-16 h-16 mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              No Comments Yet
            </h3>
            <p className="text-gray-500">
              When users send comments or feedback, they will appear here.
            </p>
          </div>
        )}
      </AdminLayout>
    </React.Fragment>
  );
}

export default UserComments;
