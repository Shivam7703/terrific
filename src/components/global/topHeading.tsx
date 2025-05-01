import React from "react";

interface TopHeadingProps {
  title?: string; // Optional string
  para?: string;  // Optional string
}

const TopHeading: React.FC<TopHeadingProps> = ({ title, para }) => {
  return (
    <>
      {title && (
        <h2 className="text-color1 w-full text-4xl md:text-6xl mb-3 font-medium">
          {title}
        </h2>
      )}
      {para && (
        <p className="text-zinc-600 text-base md:text-lg max-w-4xl mx-auto">
          {para}
        </p>
      )}
    </>
  );
};

export default TopHeading;
