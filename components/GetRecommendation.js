import React from 'react';
import RecommendationForm from './RecommendationForm';

const GetRecommendation = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-slate-700 text-4xl font-bold text-center mb-8">
        Get Skincare Recommendations
      </h1>
      <p className="text-slate-600 text-lg text-center mb-6">
        Fill out the form below to receive personalized skincare advice tailored to your needs.
      </p>
      {/* Form Component */}
      <RecommendationForm />
    </div>
  );
};

export default GetRecommendation;