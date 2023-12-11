function HeroSection() {
  return (
    <div className="flex flex-col items-center gap-16">
      <div className="flex items-center justify-center gap-8">
        {/* App Icons or Hero Image */}
      </div>
      <h1 className="text mx-auto max-w-xl text-center text-4xl tracking-tighter lg:text-5xl">
        shareStack
      </h1>
      <p className="mx-auto max-w-xl text-center text-3xl !leading-tight lg:text-4xl">
        {/* Hero Section Text */}
        Your <span className="font-bold">preferred</span> digital content
        sharing app
      </p>
      <div className="my-8 w-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent p-[1px]" />
    </div>
  );
}

export default HeroSection;
