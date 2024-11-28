import React, { useState } from 'react';

const RecommendationForm = () => {
  const [formData, setFormData] = useState({
    skinTone: '',
    skinType: '',
    age: '',
    concerns: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('Recommendations generated! Check the console for details.');
    // Implement recommendation logic here
  };

  return (
    <form className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold text-slate-700 mb-4">Skincare Recommendations Form</h2>

      {/* Skin Tone */}
      <div className="mb-4">
        <label htmlFor="skinTone" className="block text-slate-600 font-medium mb-2">
          Skin Tone
        </label>
        <input
          type="text"
          id="skinTone"
          name="skinTone"
          value={formData.skinTone}
          onChange={handleChange}
          placeholder="e.g., Fair, Medium, Dark"
          className="w-full border border-slate-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200"
          required
        />
      </div>

      {/* Skin Type */}
      <div className="mb-4">
        <label htmlFor="skinType" className="block text-slate-600 font-medium mb-2">
          Skin Type
        </label>
        <select
          id="skinType"
          name="skinType"
          value={formData.skinType}
          onChange={handleChange}
          className="w-full border border-slate-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200"
          required
        >
          <option value="" disabled>Select your skin type</option>
          <option value="Dry">Dry</option>
          <option value="Oily">Oily</option>
          <option value="Combination">Combination</option>
          <option value="Normal">Normal</option>
        </select>
      </div>

      {/* Age */}
      <div className="mb-4">
        <label htmlFor="age" className="block text-slate-600 font-medium mb-2">
          Age
        </label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Enter your age"
          className="w-full border border-slate-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200"
          required
        />
      </div>

      {/* Concerns */}
      <div className="mb-4">
        <label htmlFor="concerns" className="block text-slate-600 font-medium mb-2">
          Skincare Concerns
        </label>
        <textarea
          id="concerns"
          name="concerns"
          value={formData.concerns}
          onChange={handleChange}
          placeholder="e.g., Acne, Dark Spots, Wrinkles"
          className="w-full border border-slate-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200"
          rows="3"
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 transition"
      >
        Get Recommendation
      </button>
    </form>
  );
};

export default RecommendationForm;