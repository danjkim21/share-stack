import Badge, { BadgeType } from '@/components/badge';
import { PaperClipIcon } from '@heroicons/react/24/outline';

const product = {
	name: 'Stack Page',
	href: '#',
	breadcrumbs: [{ id: 1, name: 'My Stacks', href: '/stacks' }],
};
export default function StackPage({ params }: { params: { stackId: string } }) {
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
					Stack Name
				</h1>
				<p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
					Abbr. Stack Description
				</p>
			</div>

			{/* Stack Info & Description */}
			<div className="mt-6 border-t border-gray-100">
				<dl className="divide-y divide-gray-100">
					<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-sm font-medium leading-6 text-gray-900">
							Description
						</dt>
						<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
							Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
							incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
							consequat sint. Sit id mollit nulla mollit nostrud in ea officia
							proident. Irure nostrud pariatur mollit ad adipisicing
							reprehenderit deserunt qui eu.
						</dd>
					</div>
					<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-sm font-medium leading-6 text-gray-900">
							Tags
						</dt>
						<dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">
							<Badge type={BadgeType.INFO} label="Tag 1" />
						</dd>
					</div>
					<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-sm font-medium leading-6 text-gray-900">
							Attachments
						</dt>
						<dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
							<ul
								role="list"
								className="divide-y divide-gray-100 rounded-md border border-gray-200"
							>
								<li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
									<div className="flex w-0 flex-1 items-center">
										<PaperClipIcon
											className="h-5 w-5 flex-shrink-0 text-gray-400"
											aria-hidden="true"
										/>
										<div className="ml-4 flex min-w-0 flex-1 gap-2">
											<span className="truncate font-medium">
												resume_back_end_developer.pdf
											</span>
											<span className="flex-shrink-0 text-gray-400">2.4mb</span>
										</div>
									</div>
									<div className="ml-4 flex-shrink-0">
										<a
											href="#"
											className="font-medium text-indigo-600 hover:text-indigo-500"
										>
											Download
										</a>
									</div>
								</li>
								<li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
									<div className="flex w-0 flex-1 items-center">
										<PaperClipIcon
											className="h-5 w-5 flex-shrink-0 text-gray-400"
											aria-hidden="true"
										/>
										<div className="ml-4 flex min-w-0 flex-1 gap-2">
											<span className="truncate font-medium">
												coverletter_back_end_developer.pdf
											</span>
											<span className="flex-shrink-0 text-gray-400">4.5mb</span>
										</div>
									</div>
									<div className="ml-4 flex-shrink-0">
										<a
											href="#"
											className="font-medium text-indigo-600 hover:text-indigo-500"
										>
											Download
										</a>
									</div>
								</li>
							</ul>
						</dd>
					</div>
				</dl>
			</div>
		</div>
	);
}
