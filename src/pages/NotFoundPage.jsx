import React from "react";
import { ArrowRight } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <img
        src="https://eastwinners.com/wp-content/themes/revel/assets/img/bg/error.jpg"
        alt="Error"
        className="mb-8"
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
      Oops... Page Not Found!
      </h1>
      <p className="text-gray-600 mb-8">
        Oops... The page you are looking for does not exist. It might have been
        moved or deleted.
      </p>
      <button
        onClick={() => (window.location.href = "/")}
        className="inline-flex items-center px-8 py-4 bg-[#ff5722] text-white hover:bg-black transition-colors"
      >
        Back To Home
        <ArrowRight className="ml-2 h-5 w-5" />
      </button>
    </div>
  );
};

export default NotFoundPage;
