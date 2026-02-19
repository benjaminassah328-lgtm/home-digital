import { Software } from "./types";
import SoftwareCard from "./SoftwareCard";

interface Props {
  softwares: Software[];
  selectedSoftwares: number[];
  onToggle: (id: number) => void;
}

export default function SoftwareGrid({
  softwares,
  selectedSoftwares,
  onToggle,
}: Props) {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
      {softwares.map((software, index) => (
        <SoftwareCard
          key={software.id}
          software={software}
          isSelected={selectedSoftwares.includes(software.id)}
          index={index}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}
