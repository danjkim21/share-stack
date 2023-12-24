import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import HeaderStacked from '@/components/header-stacked';
import GroupList from '@/components/group-list';

const groups = [
	{
		id: '12',
		groupName: 'Group Name Test name goes here please 1',
		name: 'Leslie Alexander',
		email: 'leslie.alexander@example.com',
		members: [
			{
				name: 'Bobby',
				avatarSrc:
					'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			},
			{
				name: 'Nelly',
				avatarSrc:
					'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			},
			{
				name: 'Joe',
				avatarSrc:
					'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
			},
			{
				name: 'Shmo',
				avatarSrc:
					'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			},
		],
	},
	{
		id: '13',
		groupName: 'Group Name Test name goes here please 2',
		name: 'Michael Foster',
		email: 'michael.foster@example.com',
		members: [
			{
				name: 'Bobby',
				avatarSrc:
					'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			},
			{
				name: 'Nelly',
				avatarSrc:
					'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			},
			{
				name: 'Joe',
				avatarSrc:
					'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
			},
			{
				name: 'Shmo',
				avatarSrc:
					'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			},
		],
	},
	{
		id: '11',
		groupName: 'Group Name Test name goes here please 3',
		name: 'Dries Vincent',
		email: 'dries.vincent@example.com',
		members: [
			{
				name: 'Bobby',
				avatarSrc:
					'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			},
			{
				name: 'Nelly',
				avatarSrc:
					'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			},
			{
				name: 'Joe',
				avatarSrc:
					'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
			},
			{
				name: 'Shmo',
				avatarSrc:
					'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			},
		],
	},
	{
		id: '15',
		groupName: 'Group Name Test name goes here please 4',
		name: 'Lindsay Walton',
		email: 'lindsay.walton@example.com',
		members: [
			{
				name: 'Bobby',
				avatarSrc:
					'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			},
			{
				name: 'Nelly',
				avatarSrc:
					'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			},
			{
				name: 'Joe',
				avatarSrc:
					'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
			},
			{
				name: 'Shmo',
				avatarSrc:
					'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			},
		],
	},
	{
		id: '17',
		groupName: 'Group Name Test name goes here please 5',
		name: 'Courtney Henry',
		email: 'courtney.henry@example.com',
		members: [
			{
				name: 'Bobby',
				avatarSrc:
					'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			},
			{
				name: 'Nelly',
				avatarSrc:
					'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			},
			{
				name: 'Joe',
				avatarSrc:
					'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
			},
			{
				name: 'Shmo',
				avatarSrc:
					'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			},
		],
	},
	{
		id: '18',
		groupName: 'Group Name Test name goes here please 6',
		name: 'Tom Cook',
		email: 'tom.cook@example.com',
		members: [
			{
				name: 'Bobby',
				avatarSrc:
					'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			},
			{
				name: 'Nelly',
				avatarSrc:
					'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			},
			{
				name: 'Joe',
				avatarSrc:
					'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
			},
			{
				name: 'Shmo',
				avatarSrc:
					'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			},
		],
	},
];

export default async function Groups() {
	const cookieStore = cookies();
	const supabase = createClient(cookieStore);

	const {
		data: { user },
	} = await supabase.auth.getUser();

	return (
		<>
			<HeaderStacked title="Groups" />
			<main>
				<div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
					<GroupList groups={groups} />
				</div>
			</main>
		</>
	);
}
