
import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  value: string;
  label: string;
  color?: string;
}

export function StatCard({ value, label, color = "pharmacy" }: StatCardProps) {
  const colorClasses = {
    pharmacy: "bg-pharmacy-50 border-pharmacy-100 text-pharmacy-700",
    secondary: "bg-secondary-50 border-secondary-100 text-secondary-700",
    purple: "bg-purple-50 border-purple-100 text-purple-700",
    amber: "bg-amber-50 border-amber-100 text-amber-700",
  };

  const selectedColor = colorClasses[color as keyof typeof colorClasses] || colorClasses.pharmacy;

  return (
    <Card className={`${selectedColor} border`}>
      <CardContent className="pt-6">
        <div className="text-center">
          <p className="text-3xl font-bold">{value}</p>
          <p className="text-sm mt-1">{label}</p>
        </div>
      </CardContent>
    </Card>
  );
}
