import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import HeaderStacked from '@/components/header-stacked';
import StatsCard from '@/components/stats-card';

const stats = [
	{ id: 1, name: 'Transactions every 24 hours', value: '44 million' },
	{ id: 2, name: 'Assets under holding', value: '$119 trillion' },
	{ id: 3, name: 'New users annually', value: '46,000' },
];

export default async function Dashboard() {
	const cookieStore = cookies();
	const supabase = createClient(cookieStore);

	const {
		data: { user },
	} = await supabase.auth.getUser();

	return (
		<>
			<HeaderStacked title="Welcome back!" />
			<main>
				<div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
					{/* Action Prompt */}
					<div className="fixed bottom-6 right-6">
						<p className="text-muted-foreground text-sm">
							Press{' '}
							<kbd className="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100">
								<span className="text-xs">⌘</span>J
							</kbd>
						</p>
					</div>

					{/* Stats */}
					<div className="bg-white sm:py-4">
						<div className="mx-auto max-w-7xl px-6 lg:px-8">
							<dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
								<StatsCard data={stats} />
							</dl>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
