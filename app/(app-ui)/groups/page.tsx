import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import HeaderStacked from '@/components/header-stacked';
import GroupList from '@/components/group-list';

const people = [
  {
    groupName: 'Group Name Test name goes here please 1',
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
  },
  {
    groupName: 'Group Name Test name goes here please 2',
    name: 'Michael Foster',
    email: 'michael.foster@example.com',
  },
  {
    groupName: 'Group Name Test name goes here please 3',
    name: 'Dries Vincent',
    email: 'dries.vincent@example.com',
  },
  {
    groupName: 'Group Name Test name goes here please 4',
    name: 'Lindsay Walton',
    email: 'lindsay.walton@example.com',
  },
  {
    groupName: 'Group Name Test name goes here please 5',
    name: 'Courtney Henry',
    email: 'courtney.henry@example.com',
  },
  {
    groupName: 'Group Name Test name goes here please 6',
    name: 'Tom Cook',
    email: 'tom.cook@example.com',
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
          <GroupList groups={people} />
        </div>
      </main>
    </>
  );
}
