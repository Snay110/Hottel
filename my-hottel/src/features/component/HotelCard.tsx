interface HotelCardProps {
  id: number;
  name: string;
  image?: string;
  rating: number;
  reviews: number;
  description: string;
  price: number;
  onBook?: () => void;
}

export function HotelCard({ name, rating, reviews, description, price, onBook }: HotelCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer">
      <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600"></div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
        <div className="flex items-center mb-3">
          <span className="text-yellow-400">{'★'.repeat(rating)}</span>
          <span className="text-gray-600 ml-2 text-sm">({reviews} отзывов)</span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-600">${price}</span>
          <button
            onClick={onBook}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition"
          >
            Забронировать
          </button>
        </div>
      </div>
    </div>
  );
}
