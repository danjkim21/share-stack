import Link from 'next/link';

interface stackPropsInterface {
	stack: any;
}

function StackCard({ stack }: stackPropsInterface) {
	return (
		<div key={stack.name} className="group relative">
			<div className="sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:h-64">
				<img
					src={stack.imageSrc}
					alt={stack.imageAlt}
					className="h-full w-full object-cover object-center"
				/>
			</div>
			<h3 className="mt-6 text-sm text-gray-500">
				<Link href={`stacks/${stack.id}`}>
					<span className="absolute inset-0" />
					{stack.name}
				</Link>
			</h3>
			<p className="text-base font-semibold text-gray-900">
				{stack.description}
			</p>
		</div>
	);
}

export default StackCard;
