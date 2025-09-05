"use client";
import Image from "next/image";
import { useRef, useState } from "react";

const logos = [
  { src: "/logos/ohi.png", title: "OHI Group", desc: "Крупная группа компаний. (Заменить на точный текст.)" },
  { src: "/logos/alsaada.png", title: "Alsaada Group", desc: "Оманская группа компаний. (Ваш текст.)" },
  { src: "/logos/bishara.png", title: "Bishara EST", desc: "Поставки и услуги. (Ваш текст.)" },
  { src: "/logos/muscat-municipality.png", title: "Muscat Municipality", desc: "Городское управление Маската." },
  { src: "/logos/gov-om.png", title: "Gov.om", desc: "Правительственный портал Омана.", dark: true },
  { src: "/logos/agi.png", title: "AGI — Al Hosni Group", desc: "Al Hosni Group International." },
  { src: "/logos/ray-energy.png", title: "RAY International Energy", desc: "Энергетические проекты." },
  { src: "/logos/oman-airports.png", title: "Oman Airports", desc: "Аэропорты Омана. (Ваш текст.)", dark: true },
  { src: "/logos/client-9.png", title: "Client", desc: "Описание клиента." },
  { src: "/logos/omanoil.png", title: "Oman Oil Marketing", desc: "Топливо и сопутствующие сервисы.", dark: true },
  { src: "/logos/mec.png", title: "Middle East College (MEC)", desc: "Частный колледж в Маскате.", dark: true },
  { src: "/logos/oq.png", title: "OQ", desc: "Интегрированная энергетическая компания Омана." },
  { src: "/logos/squ.png", title: "Sultan Qaboos University", desc: "Крупнейший государственный университет Омана." },
  { src: "/logos/rop.png", title: "Royal Oman Police (ROP)", desc: "Ведомство по охране правопорядка." },
  { src: "/logos/nizwa.jpg", title: "University of Nizwa", desc: "Независимый университет." },
  { src: "/logos/asharqiyah.png", title: "A' Sharqiyah University", desc: "Университет в Ибре." },
];

export default function LogoCarousel() {
  const modalRef = useRef(null);
  const [modal, setModal] = useState({ title: "", desc: "" });
  const openModal = (l) => { setModal({ title: l.title, desc: l.desc }); setTimeout(() => modalRef.current?.showModal(), 0); };
  const doubled = [...logos, ...logos];

  return (
    <section id="clients" className="py-14">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">They trust us</h2>
            <p className="mt-2 text-slate-600">Карусель логотипов с всплывающими описаниями.</p>
          </div>
        </div>

        <div className="logo-carousel relative mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white py-6">
          <div className="logo-track px-6">
            <ul className="flex items-center gap-12" aria-label="Client logos">
              {doubled.map((l, i) => (
                <li key={i}>
                  <button
                    onClick={() => openModal(l)}
                    className={`inline-flex items-center justify-center rounded-xl border px-4 py-3 shadow-sm hover:shadow transition ${l.dark ? "bg-slate-900 border-slate-700" : "bg-slate-50 border-slate-200"}`}
                  >
                    <Image src={l.src} alt={l.title} width={200} height={80} className="h-10 w-auto object-contain" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-3 text-xs text-slate-500">Наведи мышкой — прокрутка остановится. Клик — описание.</p>
      </div>

      <dialog ref={modalRef} className="logo-modal w-full max-w-xl">
        <form method="dialog" className="p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-semibold">{modal.title}</h3>
            <button className="rounded-lg border border-slate-200 px-3 py-1 text-slate-700 hover:bg-slate-50" aria-label="Close">✕</button>
          </div>
          <p className="mt-3 text-slate-600">{modal.desc}</p>
        </form>
      </dialog>
    </section>
  );
}
