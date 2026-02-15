import { SearchForm } from './SearchForm';

export function HeroSection() {
  return (
    <section className="relative h-96 bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)'}}>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-5xl font-bold mb-4">Найдите идеальный отель</h1>
        <p className="text-xl mb-8">Лучшие предложения для вашего отпуска</p>
        <SearchForm />
      </div>
    </section>
  );
}
