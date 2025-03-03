import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function CommentSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    comment: "",
    saveInfo: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle comment submission
    console.log("Comment submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      website: "",
      comment: "",
      saveInfo: false,
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="mt-16">
      <div className=" pb-4 mb-8">
        <h3 className="text-2xl font-bold">Leave a Comment</h3>
        <p className="text-gray-500 mt-2">
          Your email address will not be published. Required fields are marked *
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Comment textarea */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F94D1C] focus:border-transparent"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F94D1C] focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="website"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Website
          </label>
          <input
            type="url"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F94D1C] focus:border-transparent"
          />
        </div>

        <div>
          <label
            htmlFor="comment"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Comment *
          </label>
          <textarea
            id="comment"
            name="comment"
            rows={6}
            required
            value={formData.comment}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F94D1C] focus:border-transparent resize-none"
            placeholder="Write your comment here..."
          />
        </div>

        {/* Submit button */}
        <div>
          <button
            type="submit"
           className="inline-flex items-center px-8 py-4 bg-[#ff5722] text-white hover:bg-black transition-colors"
          >
            Post Comment
            <ArrowRight className="ml-2 h-5 w-5" />

          </button>
        </div>
      </form>

      {/* Comments list */}
      {/* <div className="mt-12">
        <h3 className="text-xl font-bold mb-6">
          Comments <span className="text-gray-500">(0)</span>
        </h3>
        <div className="text-gray-500 italic">
          No comments yet. Be the first to comment.
        </div>
      </div> */}
    </div>
  );
}
