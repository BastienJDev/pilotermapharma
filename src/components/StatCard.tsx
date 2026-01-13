interface StatCardProps {
  value: string;
  label: string;
  suffix?: string;
}

export function StatCard({ value, label, suffix }: StatCardProps) {
  return (
    <div className="text-center">
      <div className="mb-2">
        <span className="text-4xl md:text-5xl font-bold text-gradient">
          {value}
        </span>
        {suffix && (
          <span className="text-2xl md:text-3xl font-bold text-primary ml-1">
            {suffix}
          </span>
        )}
      </div>
      <p className="text-muted-foreground font-medium">
        {label}
      </p>
    </div>
  );
}
