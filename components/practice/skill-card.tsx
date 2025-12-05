import { Card } from "../ui/card";
import { cn } from "@/lib/utils";


interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  isSelected?: boolean;
  onClick?: () => void;
}

export default function SkillCard({ icon, title, subtitle, isSelected, onClick }: SkillCardProps) {
  return (
    <Card
      onClick={onClick}
      className={cn(
        "p-6 cursor-pointer transition-all hover:shadow-md",
        isSelected 
          ? 'border-2 border-emerald-500 bg-emerald-50' 
          : 'border border-gray-200 bg-white'
      )}
    >
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-full ${
          isSelected ? 'bg-emerald-500' : 'bg-gray-100'
        }`}>
          <div className={isSelected ? 'text-white' : 'text-gray-600'}>
            {icon}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-md text-gray-900 mb-1">{title}</h3>
          <p className="text-xs text-gray-500">{subtitle}</p>
        </div>
      </div>
    </Card>
  );
}