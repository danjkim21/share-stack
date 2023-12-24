import Link from 'next/link';
import AvatarGroup from '../../../../../components/avatar-group';

interface GroupListPropsInterface {
	groups: any;
}

function GroupList({ groups }: GroupListPropsInterface) {
	return (
		<ul role="list" className="divide-y divide-gray-100">
			{groups.map((group: any) => (
				<li key={group.email} className="flex justify-between gap-x-6 py-5">
					<div className="flex min-w-0 gap-x-4">
						<div className="min-w-0 flex-auto">
							<Link
								// Add groups backend
								href={`/groups/${group.id}`}
								className="text-sm font-semibold leading-6 text-gray-900 hover:underline"
							>
								{group.groupName}
							</Link>
							<p className="mt-1 truncate text-xs leading-5 text-gray-500">
								{group.name}
							</p>
						</div>
					</div>
					<div className="shrink-0 sm:flex sm:flex-col sm:items-end sm:justify-center">
						<AvatarGroup avatars={group.members} />
					</div>
				</li>
			))}
		</ul>
	);
}

export default GroupList;
