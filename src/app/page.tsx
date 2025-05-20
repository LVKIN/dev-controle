import Image from "next/image";
import HomeImage from "@/assets/img/home-image.svg"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col gap-1.5 text-center items-center mb-8">
        <h2 className="font-medium text-2xl text-gray-700">Gerencie sua empresa</h2> 
        <h2 className="font-bold text-3xl text-blue-600">Atendimentos, Clientes</h2>
      </div>
      <Image
        src={HomeImage}
        alt="home-image"
        className="max-w-md md:max-w-xl"
      />
    </main>
  );
}
