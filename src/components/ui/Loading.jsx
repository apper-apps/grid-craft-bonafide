const Loading = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-6">
      {/* Header Skeleton */}
      <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full animate-pulse"></div>
          <div className="space-y-2 flex-1">
            <div className="h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg animate-pulse w-1/2"></div>
            <div className="h-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg animate-pulse w-1/3"></div>
          </div>
        </div>
      </div>

      {/* Content Skeletons */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          {/* Left Column Skeletons */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm p-6 space-y-4">
              <div className="h-5 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg animate-pulse w-1/4"></div>
              <div className="space-y-3">
                <div className="h-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg animate-pulse"></div>
                <div className="h-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg animate-pulse w-5/6"></div>
                <div className="h-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg animate-pulse w-4/6"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          {/* Right Column Skeletons */}
          {[1, 2].map((i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm p-6 space-y-4">
              <div className="h-5 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg animate-pulse w-1/3"></div>
              <div className="space-y-3">
                {[1, 2, 3, 4].map((j) => (
                  <div key={j} className="space-y-2">
                    <div className="h-3 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg animate-pulse w-3/4"></div>
                    <div className="h-2 bg-gradient-to-r from-gray-50 to-gray-100 rounded-full animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;