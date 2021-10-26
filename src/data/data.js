const mapel = {
  presensi: {
    name: "presensi bk",
    link: "https://forms.office.com/pages/responsepage.aspx?id=YXAGTB9a2ESFSVMvb47UUQ9oh_6Cf2FEp1tkh8thEOpUOVhQWFREN042VlVUOTJCWDZNWElGSDlHNS4u",
  },
  bin: {
    name: "Bindo",
    link: "https://forms.office.com/Pages/ResponsePage.aspx?id=YXAGTB9a2ESFSVMvb47UURkuQF3CUt9PlYtdfRwhbVpUNEZHNDRFUEdZVFpDSVNRSEFNQ0I0MjNISy4u",
  },
  mawa: {
    name: "Mawa",
    link: "https://forms.office.com/Pages/ResponsePage.aspx?id=YXAGTB9a2ESFSVMvb47UUTGW2Utr8YdKqVHzc0kJ6A9UMEJWUTBCSzI1MkJET1BIUTI2WUFTSkNaOS4u",
  },
  big: {
    name: "Big",
    link: "https://forms.office.com/r/SFHgUBBYt3",
  },
  fis: {
    name: "Fisika",
    link: "https://forms.office.com/Pages/ResponsePage.aspx?id=YXAGTB9a2ESFSVMvb47UUXwhucTgsrZFniLnNICmtq5UMFVTUDVKQ0dYNlI1WkozMk1XSFBNVUtKVS4u",
  },

  mapi: {
    name: "Mapi",
    link: "https://forms.office.com/Pages/ResponsePage.aspx?id=YXAGTB9a2ESFSVMvb47UUQu_OonOPgdEn3YoTWF6AAlUQ1RRTVg3RTNLVzlOWTJENkY5U1pSODJWQi4u",
  },
  kim: {
    name: "Kimia",
    link: "https://forms.office.com/Pages/ResponsePage.aspx?id=YXAGTB9a2ESFSVMvb47UUcHWp_krWchLngLC8cGp0L1UOVhWUVBPUFFKTFlKTlFBTTFNS1FXREpTVy4u",
  },
  geolin: {
    name: "Geolin",
    link: "https://forms.office.com/Pages/ResponsePage.aspx?id=YXAGTB9a2ESFSVMvb47UUZBYpPMOddNIhSXVNjVcpYZUMjRHQVlPM0pQMDY2OEtRMkw0OTJOWEo4Mi4u",
  },
  bio: {
    name: "Bio",
    link: "https://forms.office.com/Pages/ResponsePage.aspx?id=YXAGTB9a2ESFSVMvb47UUTtnarI0X1ZOvVTRBGRxcthUME9EUUczR0tESExaU1dLTU5CUUoxVEpMTC4u",
  },
  jawa: {
    name: "Basa jawa",
    link: "https://forms.office.com/Pages/ResponsePage.aspx?id=YXAGTB9a2ESFSVMvb47UUa-Z-UZrZURDkb4pvMzJShJUQzE2VUpFNDNYMzNRU0g1TFpHTDM0RkxZVS4u",
  },
  prakarya: {
    name: "Prakarya",
    link: "https://forms.office.com/Pages/ResponsePage.aspx?id=YXAGTB9a2ESFSVMvb47UUZv2x3Emw2lLqhZYVrwNiIdUMjRSVENaVUsyOTM0TUc1RkxSSDNZODY5Ui4u",
  },
  pai: {
    name: "Agama Islam",
    link: "https://forms.office.com/Pages/ResponsePage.aspx?id=YXAGTB9a2ESFSVMvb47UUbPYfhMrqMBJsO6EAc3WsyZUMzVMNjJMSThPWE1RT0o3NlZZSTdTTEwwQi4u",
  },
  seji: {
    name: "Seji",
    link: "https://forms.office.com/Pages/ResponsePage.aspx?id=YXAGTB9a2ESFSVMvb47UUW-SofwoILdHh12KaBJWwsNUMkxLUDZFMFJKUTk0TjJRWlA3RDVHRTlRNS4u",
  },

  ppkn: {
    name: "Ppkn",
    link: "https://forms.office.com/Pages/ResponsePage.aspx?id=YXAGTB9a2ESFSVMvb47UUZnKwpRam-9MnFS91sqyypNURjA0SDdJWkFKRVlUR0hJTU9aSTZUME9CUy4u",
  },
  penjas: {
    name: "Penjas",
    link: "https://forms.office.com/Pages/ResponsePage.aspx?id=YXAGTB9a2ESFSVMvb47UUV65X4-8g0JEkzXdBpr-KSJUREdVTUpBTTNSRllJMUhFNjVRRTRCSFBMSi4u",
  },
  sebu: {
    name: "Sebu",
    link: "#",
  },
};

export const data = {
  kelas: "11 MIPA 6 <br>(auto update every day)",
  senin: { hari: "Senin <br>(minggu 1 dan 2)", jadwal: [mapel.presensi, mapel.big, mapel.mawa, mapel.pai] },
  selasa: { hari: "Selasa <br>(minggu 1 dan 2)", jadwal: [mapel.presensi, mapel.bin, mapel.fis, mapel.seji] },
  rabu: { hari: "Rabu <br>(minggu 1 dan 2)", jadwal: [mapel.presensi, mapel.mapi, mapel.kim, mapel.fis, mapel.ppkn] },
  kamis: { hari: "Kamis <br>(minggu 1 dan 2)", jadwal: [mapel.presensi, mapel.geolin, mapel.bio, mapel.kim] },
  jumat: { hari: "Jumat <br>(minggu 1 dan 2)", jadwal: [mapel.jawa, mapel.presensi, mapel.mapi, mapel.prakarya, mapel.penjas, mapel.bio, mapel.sebu] },
};
