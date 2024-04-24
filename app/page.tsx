import Image from 'next/image';
import coffie from '@/public/images/A_cup_of_coffee wide.png';

export default async function Home() {
  return (
      <main className={"relative h-screen"}>
        <Image src="https://picsum.photos/id/280/500/700.jpg"
               alt="Pebbles"
               fill
               className="object-cover"
               sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
               quality={75}
               priority
        />
      </main>
  )
}
