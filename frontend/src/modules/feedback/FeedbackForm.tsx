import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const FeedbackForm: React.FC<{ userId?: string }> = ({ userId }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);
      const apiUrl =
        "https://teic3anj6l.execute-api.ap-southeast-1.amazonaws.com/dev/api/feedback/AddFeedback";

      await axios.post(apiUrl, {
        userId: userId,
        title,
        description,
      });

      // Handle successful submission (e.g., show a success message)
      toast.success("Feedback created successfully!");
      setTitle("");
      setDescription("");
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error("Error submitting feedback:", error);
      toast.error("Feedback submission failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-600"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="mt-1 p-2 w-full border rounded-md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-600"
          >
            Content
          </label>
          <textarea
            id="content"
            className="mt-1 p-2 w-full border rounded-md"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200 disabled:opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Feedback"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
