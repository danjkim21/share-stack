interface StatsCardInterfaceProps {
  data: any[];
}

function StatsCard({ data }: StatsCardInterfaceProps) {
  return (
    <>
      {data.map((data) => (
        <div key={data.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
          <dt className="text-base leading-7 text-gray-600">{data.name}</dt>
          <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            {data.value}
          </dd>
        </div>
      ))}
    </>
  );
}

export default StatsCard;
