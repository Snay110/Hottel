import { FeatureCard } from './FeatureCard';

interface FeaturesData {
  icon: string;
  title: string;
  desc: string;
}

const FEATURES: FeaturesData[] = [
  { icon: '⭐', title: 'Лучшие цены', desc: 'Гарантированно самые низкие цены на рынке' },
  { icon: '🔒', title: 'Безопасность', desc: 'Защита ваших данных и гарантия возврата' },
  { icon: '🚀', title: 'Быстрое бронирование', desc: 'Забронируйте отель за несколько минут' }
];

export function FeaturesSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Почему выбирают нас?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, i) => (
            <FeatureCard key={i} icon={feature.icon} title={feature.title} description={feature.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}
