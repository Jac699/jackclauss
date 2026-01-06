import Image from "next/image";

export default function HomePage() {
  return (
    <section className="stage">
      <div className="hero">
        <Image
          src="/home.jpeg"
          alt=""
          fill
          priority
          sizes="(max-width: 900px) 92vw, 820px"
          className="img"
          draggable={false}
        />
      </div>
    </section>
  );
}
