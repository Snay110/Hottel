import { useState } from 'react';
import { SearchInput } from './SearchInput';
import { Button } from './Button';

export function SearchForm() {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const handleSearch = () => {
    console.log({ location, checkIn, checkOut });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <SearchInput
          label="Место"
          placeholder="Город или отель"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <SearchInput
          label="Заезд"
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
        />
        <SearchInput
          label="Выезд"
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
        />
        <div className="flex items-end">
          <Button className="w-full" onClick={handleSearch}>
            Поиск
          </Button>
        </div>
      </div>
    </div>
  );
}
