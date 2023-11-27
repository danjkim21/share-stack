import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import HeaderStacked from '@/components/header-stacked';

export default async function Explorer() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <HeaderStacked title="Explorer" />
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">test</div>
      </main>
    </>
  );
}
