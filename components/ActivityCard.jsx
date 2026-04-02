export const ActivityCard = ({ item }) => {
  return (
    <div className="border border-gray-300 p-4 bg-white shadow-sm hover:shadow-md transition">

      <div className="space-y-1 text-sm text-gray-800">
        <p><span className="font-medium">Manager Name:</span> {item.name}</p>
        <p><span className="font-medium">Market:</span> {item.market}</p>
        <p><span className="font-medium">Visit:</span> {item.visit}</p>
        <p><span className="font-medium">Date:</span> {item.date}</p>
      </div>

    </div>
  );
};