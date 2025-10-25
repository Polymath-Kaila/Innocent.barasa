export default function MetricGrid({ items }: { items: { label: string; value: string }[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((m) => (
        <div key={m.label} className="card p-4">
          <div className="text-ink/60 text-xs uppercase">{m.label}</div>
          <div className="text-2xl font-bold">{m.value}</div>
        </div>
      ))}
    </div>
  );
}
