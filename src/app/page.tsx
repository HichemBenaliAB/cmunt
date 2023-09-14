export default function Home() {
  return (
    <>
      <div className="relative h-full w-[100vw]">
        <img
          src="https://ethereum.org/static/28214bb68eb5445dcb063a72535bc90c/9019e/hero.webp"
          alt="Hero"
          className="absolute top-0 left-0 w-full h-full object-fill select-none "
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-white text-4xl"></h1>
          <p className="text-white mt-2"></p>
        </div>
      </div>
    </>
  );
}
