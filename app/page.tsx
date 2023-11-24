import AuthButton from "../components/AuthButton";
import Header from "@/components/Header";
import { cookies } from "next/headers";

export default async function Index() {
  const cookieStore = cookies();

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-end items-center p-3 text-sm">
          <AuthButton />
        </div>
      </nav>

      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
        {/* Update Header/hero section here */}
        <Header />
        <main className="flex-1 flex flex-col gap-6">
          {/* Add home page content */}
        </main>
      </div>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Built and Maintained by{" "}
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
