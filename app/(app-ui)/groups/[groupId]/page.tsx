const product = {
	name: 'Group Page',
	href: '#',
	breadcrumbs: [{ id: 1, name: 'My Groups', href: '/groups' }],
};

function GroupPage({ params }: { params: { groupId: string } }) {
	return (
		<div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
			<div className="px-4 sm:px-0">
				{/* BreadCrumb component */}
				<ol role="list" className="mb-2 flex items-center space-x-2">
					{product.breadcrumbs.map((breadcrumb) => (
						<li key={breadcrumb.id}>
							<div className="flex items-center">
								<a
									href={breadcrumb.href}
									className="mr-2 text-sm font-medium text-gray-900"
								>
									{breadcrumb.name}
								</a>
								<svg
									width={16}
									height={20}
									viewBox="0 0 16 20"
									fill="currentColor"
									aria-hidden="true"
									className="h-5 w-4 text-gray-300"
								>
									<path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
								</svg>
							</div>
						</li>
					))}

					{/* Stack Header */}
					<li className="text-sm">
						<a
							href={product.href}
							aria-current="page"
							className="font-medium text-gray-500 hover:text-gray-600"
						>
							{product.name}
						</a>
					</li>
				</ol>
				<h1 className="text-2xl font-semibold leading-7 text-gray-900">
					Group Name
				</h1>
				<p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
					Abbr. Group Description
				</p>
			</div>

			{/* Stack Info & Description */}
			<div className="mt-6 border-t border-gray-100"></div>
		</div>
	);
}

export default GroupPage;
