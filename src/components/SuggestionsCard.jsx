import React from "react";

function SuggestionsCard({ suggestions = [] }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-2">Suggestions</h2>
      {suggestions.length === 0 ? (
        <p className="text-gray-500">No suggestions available.</p>
      ) : (
        <ul className="list-disc pl-5">
          {suggestions.map((suggestion, index) => (
            <li key={index} className="text-gray-700">{suggestion}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SuggestionsCard;
