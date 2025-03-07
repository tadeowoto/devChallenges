import "./Layout.css";

type LayoutMainProps = {
  children: React.ReactNode;
};

export function LayoutMain({ children }: LayoutMainProps) {
  return (
    <main>
      <header className="relative">
        <div className="bg-mobile md:bg-desktop h-64 w-full bg-cover bg-center"></div>
        <div className="absolute inset-0 flex  items-center justify-center gap-3">
          <h1 className="text-white text-4xl font-bold">Checkout</h1>
          <span className="text-white">3 items</span>
        </div>
      </header>
      {children}
    </main>
  );
}
