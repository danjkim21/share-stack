import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import HeaderStacked from '@/components/header-stacked';
import StackList from '@/components/stack-list';

export default async function Stacks() {
	const cookieStore = cookies();
	const supabase = createClient(cookieStore);

	const {
		data: { user },
	} = await supabase.auth.getUser();

	return (
		<>
			<HeaderStacked title="Stacks" />
			<div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
				<StackList />
			</div>
		</>
	);
}
