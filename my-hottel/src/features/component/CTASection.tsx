import { Button } from './Button';

export function CTASection() {
  return (
    <section className="py-16 px-4 bg-blue-600 text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Готовы начать путешествие?</h2>
        <p className="text-lg mb-8">Найдите и забронируйте идеальный отель прямо сейчас</p>
        <Button variant="white" size="lg">Начать поиск</Button>
      </div>
    </section>
  );
}
