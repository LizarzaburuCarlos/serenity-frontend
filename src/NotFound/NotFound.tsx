const NotFound = () => {
  return (
    <section className="h-screen w-full flex flex-col gap-4 justify-center items-center">
      <h3 className="text-9xl font-black text-slate-300">Oops</h3>
      <p className="text-xl mt-6">La página que buscaste no se encontró.</p>
      <a className="text-lg font-semibold" href="/home">Regresa a serenity.</a>
    </section>
  );
};
export default NotFound;
