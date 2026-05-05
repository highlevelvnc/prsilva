export const COMPANY = {
  name: "P.R. Silva",
  tagline: "Pinturas e Remodelações",
  fullName: "P.R. Silva — Pinturas e Remodelações",
  region: "Lisboa e arredores",
  email: "geral@prsilva.pt",
  phone: "+351 XXX XXX XXX",
} as const;

// SUBSTITUIR pelo número de WhatsApp real (formato internacional sem + e sem espaços).
export const WHATSAPP_URL =
  "https://wa.me/351XXXXXXXXX?text=Ol%C3%A1%2C%20gostaria%20de%20pedir%20um%20or%C3%A7amento%20para%20pinturas%20e%20remodela%C3%A7%C3%B5es.";

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#trabalhos", label: "Trabalhos" },
  { href: "#processo", label: "Processo" },
  { href: "#contacto", label: "Contacto" },
] as const;
