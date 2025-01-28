import Review from "./Review";

interface ReviewData {
  rating: number;
  title?: string;
  content: string;
  author: string;
  designation?: string;
}

interface ReviewsProps {
  reviews?: ReviewData[];
}

const defaultReviews: ReviewData[] = [
  {
    rating: 5,
    content: "Great app, real time feedback about your posture!",
    author: "Atif Dastgir",
    designation: "Founder @ Mindcusp",
  },
  {
    rating: 5,
    content: "Very good use of AI and wellbeing.",
    author: "Saad Tahir",
    designation: "CEO @ Velocity Studios",
  },
  {
    rating: 5,
    content: "This is genius!",
    author: "Kashif Shabbir",
    designation: "CEO @ Lykhari",
  },
  {
    rating: 5,
    content: "This extension helped me keep my posture in check. I'm so glad I found it!",
    author: "Bren Edwards",
    designation: "Engineer Manager",
  },
];

const Reviews: React.FC<ReviewsProps> = ({ reviews = defaultReviews }) => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8 text-gray-900 dark:text-white">
          Reviews from real users
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
          {reviews.map((review, index) => (
            <Review key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
