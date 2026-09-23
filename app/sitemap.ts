import type { MetadataRoute } from "next";
import { ALIRAN_LIST } from "@/data/aliran";
import { SITE } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.domain;
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/konfigurator`, lastModified: new Date() },
    { url: `${base}/galeri`, lastModified: new Date() },
    { url: `${base}/booking`, lastModified: new Date() },
    { url: `${base}/hasil/vixion-bobcafe-hybrid`, lastModified: new Date() },
    ...ALIRAN_LIST.map((a) => ({
      url: `${base}/edukasi/aliran/${a.id}`,
      lastModified: new Date(),
    })),
  ];
}
