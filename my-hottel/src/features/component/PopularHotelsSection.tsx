import { HotelCard } from './HotelCard';
import { usePopularHotels } from '../../shered/hooks';

export function PopularHotelsSection() {
  const { data: hotels, isLoading, error } = usePopularHotels();

  const handleBook = (hotelId: number) => {
    console.log(`Booking hotel ${hotelId}`);
  };

  if (isLoading) {
    return (
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Популярные отели</h2>
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Популярные отели</h2>
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            Ошибка загрузки отелей. Пожалуйста, попробуйте позже.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">Популярные отели</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {hotels?.map((hotel) => (
            <HotelCard
              key={hotel.id}
              id={hotel.id}
              name={hotel.name}
              rating={hotel.rating}
              reviews={hotel.reviews}
              description={hotel.description}
              price={hotel.price}
              onBook={() => handleBook(hotel.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
