interface Props {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full transition ${
            activeCategory === category
              ? "bg-purple-600 text-white"
              : "bg-purple-900/40 border border-purple-700 hover:border-purple-500 text-gray-300"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
