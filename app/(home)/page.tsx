import AuthButton from '../../components/auth-button';
import HeroSection from '@/components/hero-section';

export default async function Index() {
	return (
		<div className="flex w-full flex-1 flex-col items-center gap-20">
			<nav className="flex h-16 w-full justify-center border-b border-b-foreground/10">
				<div className="flex w-full max-w-4xl items-center justify-end p-3 text-sm">
					<AuthButton />
				</div>
			</nav>

			<div className="animate-in flex max-w-4xl flex-1 flex-col gap-20 px-3 opacity-0">
				{/* Update Header/hero section here */}
				<HeroSection />
				<main className="flex flex-1 flex-col gap-6">
					{/* Add home page content */}
				</main>
			</div>

			<footer className="flex w-full justify-center border-t border-t-foreground/10 p-8 text-center text-xs">
				<p>
					Built and Maintained by{' '}
					<a
						href="https://www.github.com/danjkim21"
						target="_blank"
						className="font-bold hover:underline"
						rel="noreferrer"
					>
						danjkim21
					</a>
				</p>
			</footer>
		</div>
	);
}
