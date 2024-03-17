import Kvartira from "./Kvartira";
import Header from "./Header";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="flex flex-wrap gap-[30px] w-[1170px] mx-auto mt-10">
        <Kvartira />
        <Kvartira />
        <Kvartira />
        <Kvartira />
        <Kvartira />
        <Kvartira />
        <Kvartira />
        <Kvartira />
        <Kvartira />
      </div>
    </main>
  );
}
