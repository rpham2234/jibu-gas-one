export const jibuRw: {
  name: string;
  address: string;
  position: [number, number];
}[] = [
  // ——— Kigali (precise street/area where possible)
  { name: "Jibu Kimironko I", address: "KG 11 Ave & KG 184 St, Kimironko (Gasabo)", position: [-1.946528, 30.128222] as [number, number] }, // KG 11
  { name: "Jibu Kicukiro", address: "KK 15 Rd & KK 488 St, Kicukiro", position: [-1.9815, 30.1044] as [number, number] },
  { name: "Jibu Kimihurura", address: "KN 7 Rd & KN 10 St, Kimihurura", position: [-1.95981, 30.0812] as [number, number] },
  { name: "Jibu Gikondo", address: "Gikondo (near KK 4 Ave / KK 686 St)", position: [-1.969499, 30.077716] as [number, number] },
  { name: "Jibu Sonatube", address: "Sonatubes commercial area, Kicukiro", position: [-1.96869, 30.10221] as [number, number] },
  { name: "Jibu Nyabugogo", address: "KN 1 Rd, Nyabugogo (Muhima)", position: [-1.941753, 30.044911] as [number, number] },
  { name: "Jibu Busanza", address: "Busanza (KK 152 St area), Kanombe sector", position: [-2.009, 30.1398] as [number, number] },
  { name: "Jibu Gahanga", address: "Gahanga Center, KK 15 Rd", position: [-2.030255, 30.106606] as [number, number] },
  { name: "Jibu Kagarama", address: "KK 395 St, Kagarama (Kicukiro)", position: [-1.99345, 30.114276] as [number, number] },
  { name: "Jibu Kanombe I", address: "Kanombe (near Military Hospital)", position: [-1.969511, 30.145689] as [number, number] },
  { name: "Jibu Kanombe II", address: "Kanombe sector (east side)", position: [-1.9784, 30.1771] as [number, number] },
  { name: "Jibu Gatenga", address: "Gatenga sector center", position: [-1.9710, 30.1013] as [number, number] },
  { name: "Jibu Kibagabaga", address: "Kibagabaga (Kimironko sector)", position: [-1.928, 30.1101] as [number, number] },
  { name: "Jibu Kimisagara", address: "Kimisagara sector center", position: [-1.95253, 30.04048] as [number, number] },
  { name: "Jibu Kabuye", address: "Kabuye (Jabana area, Gasabo)", position: [-1.87531, 30.05078] as [number, number] },
  { name: "Jibu Kagugu", address: "Kagugu (Kinyinya sector)", position: [-1.9099, 30.0849] as [number, number] },
  { name: "Jibu Gasogi", address: "Gasogi (Ndera sector)", position: [-1.94947, 30.1954] as [number, number] },
  { name: "Jibu Gatsata", address: "Gatsata sector center", position: [-1.9214, 30.0429] as [number, number] },
  { name: "Jibu Nyamirambo I", address: "Nyamirambo sector (central)", position: [-1.963856, 30.059931] as [number, number] },
  { name: "Jibu Nyamirambo II", address: "Nyamirambo (Cyivugiza/Gasharu side)", position: [-1.9804, 30.0489] as [number, number] },

  // ——— Up-country (town/district centers)
  { name: "Jibu Nyamata", address: "Nyamata town, Bugesera", position: [-2.20723, 30.144496] as [number, number] },
  { name: "Jibu Huye (Butare)", address: "Huye city center", position: [-2.569094, 29.719438] as [number, number] },
  { name: "Jibu Muhanga I", address: "Muhanga (Gitarama) town", position: [-1.896797, 29.742604] as [number, number] },
  { name: "Jibu Muhanga II", address: "Muhanga (second outlet area)", position: [-1.9391, 29.7181] as [number, number] },
  { name: "Jibu Rusizi (Kamembe)", address: "Rusizi town", position: [-2.4846, 28.9073] as [number, number] }, // typical Rusizi center
  { name: "Jibu Musanze I", address: "Musanze town", position: [-1.4741392, 29.5681739] as [number, number] },
  { name: "Jibu Musanze II", address: "Musanze (second outlet area)", position: [-1.5076, 29.6066] as [number, number] },
  { name: "Jibu Kayonza", address: "Kayonza town", position: [-1.902265, 30.509198] as [number, number] },
  { name: "Jibu Mahoko", address: "Mahoko (Rubavu District)", position: [-1.70225, 29.3543] as [number, number] },
  { name: "Jibu Karongi (Kibuye)", address: "Karongi/Kibuye town", position: [-2.171328, 29.44125] as [number, number] },
  { name: "Jibu Kirehe", address: "Kirehe town", position: [-2.263273, 30.641561] as [number, number] },
  { name: "Jibu Nyanza", address: "Nyanza town", position: [-2.35167, 29.75083] as [number, number] },
  { name: "Jibu Kibungo (Ngoma)", address: "Kibungo town", position: [-2.155312, 30.546101] as [number, number] },
  { name: "Jibu Nyagatare", address: "Nyagatare town", position: [-1.298632, 30.329535] as [number, number] },
  { name: "Jibu Gisenyi I", address: "Gisenyi (Rubavu) town", position: [-1.693545, 29.259855] as [number, number] },
  { name: "Jibu Gisenyi II", address: "Gisenyi (second outlet area)", position: [-1.70225, 29.3543] as [number, number] },
  { name: "Jibu Nyamagabe", address: "Nyamagabe town", position: [-2.399765, 29.481929] as [number, number] },
  { name: "Jibu Bugarama", address: "Bugarama town", position: [-2.606, 29.02] as [number, number] }, // rounded from sources
  { name: "Jibu Kabarore", address: "Kabarore (Gatsibo)", position: [-1.6306, 30.3787] as [number, number] },
  { name: "Jibu Gicumbi (Byumba)", address: "Gicumbi town", position: [-1.6165, 30.1210] as [number, number] },
  { name: "Jibu Ruhango", address: "Ruhango town", position: [-2.234722, 29.785374] as [number, number] },
  { name: "Jibu Mayange", address: "Mayange, Bugesera", position: [-2.20654, 30.14141] as [number, number] },
  { name: "Jibu Nyagasambu", address: "Nyagasambu (Fumbwe, Rwamagana)", position: [-1.8855, 30.2881] as [number, number] },
  { name: "Jibu Ngororero", address: "Ngororero town", position: [-1.8528, 29.6325] as [number, number] },
  { name: "Jibu Nyamasheke", address: "Nyamasheke town", position: [-2.34287, 29.09917] as [number, number] }, // typical district center
  { name: "Jibu Gisagara", address: "Gisagara (district center)", position: [-2.585431, 29.843911] as [number, number] },
  { name: "Jibu Musambira", address: "Musambira (Kamonyi)", position: [-2.043, 29.8427] as [number, number] },
];
