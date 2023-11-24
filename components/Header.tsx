export default function Header() {
  return (
    <div className="flex flex-col gap-16 items-center">
      <div className="flex gap-8 justify-center items-center">
        {/* App Icons or Hero Image */}
      </div>
      <h1 className="sr-only">shareStack Home</h1>
      <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
        {/* Hero Section Text */}
        Your <span className="font-bold">preferred</span> digital content
        sharing app
      </p>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  );
}
