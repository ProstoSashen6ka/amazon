import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/laptop">
      <Image 
      src = "/laptop.jpg" 
      width={500}
      height={500}
      alt="Laptop"/>
      </Link>

      <Link href="/smartfon">
      <Image 
      src = "/smartfon.jpg" 
      width={500}
      height={500}
      alt="Laptop"/>
      </Link>
    </div>
  );
}
