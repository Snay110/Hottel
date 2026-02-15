import { HotelCard } from "../component/HotelCard";
import { usePopularHotels } from "../../shered/hooks";

function RoomsPage() {
  const { data: hotels, isLoading, error } = usePopularHotels();

  if (isLoading) {
    return (
      <section className="min-h-screen bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-2 text-3xl font-bold text-gray-900">Rooms</h1>
          <p className="mb-8 text-gray-600">Loading available hotels...</p>
          <div className="h-32 animate-pulse rounded-lg bg-white" />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-2 text-3xl font-bold text-gray-900">Rooms</h1>
          <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-700">
            Failed to load rooms. Try again later.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">Rooms</h1>
        <p className="mb-8 text-gray-600">
          Basic layout with mock hotels for UI development.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hotels?.map((hotel) => (
            <HotelCard
              key={hotel.id}
              id={hotel.id}
              name={hotel.name}
              rating={hotel.rating}
              reviews={hotel.reviews}
              description={hotel.description}
              price={hotel.price}
              onBook={() => {}}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export const Component = RoomsPage;
