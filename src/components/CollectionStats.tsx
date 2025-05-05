
interface StatItemProps {
  number: number;
  label: string;
  icon: string;
}

const StatItem = ({ number, label, icon }: StatItemProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-3xl mb-4">{icon}</div>
      <div className="text-4xl font-bold text-yummi-red">{number}</div>
      <div className="text-lg font-medium">{label}</div>
    </div>
  );
};

export const CollectionStats = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatItem number={200} label="Menu Types" icon="☕" />
          <StatItem number={50} label="Different Origin" icon="🍝" />
          <StatItem number={850} label="Pasta & Noodles" icon="🧁" />
          <StatItem number={580} label="Meals To Go" icon="🍽️" />
        </div>
      </div>
    </div>
  );
};
