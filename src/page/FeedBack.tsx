const FeedBack: React.FC = () => {
  const feedbacks = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "The best coffee I've ever had! The atmosphere is perfect for both work and relaxation.",
      image: "/customer1.jpg"
    },
    {
      name: "Michael Chen",
      rating: 5,
      comment: "Exceptional service and the coffee quality is consistently outstanding.",
      image: "/customer2.jpg"
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      comment: "A hidden gem! Their specialty drinks are absolutely amazing.",
      image: "/customer3.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFF9F5] py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center space-y-4 md:space-y-8 mb-12">
          <h1 className="font-playfair font-bold text-3xl md:text-4xl text-[#4e2b10] text-center">
            Our Coffee Perfection Feedback
          </h1>
          <p className="font-playfair text-base md:text-lg leading-relaxed text-[#707070] text-center max-w-[32rem]">
            Our customers have amazing things to say about us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {feedbacks.map((feedback, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105"
            >
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                  <img 
                    src={feedback.image} 
                    alt={feedback.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-playfair font-semibold text-xl text-[#4e2b10] mb-2">
                  {feedback.name}
                </h3>
                <div className="flex space-x-1 mb-4">
                  {[...Array(feedback.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#707070] text-center italic">"{feedback.comment}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
