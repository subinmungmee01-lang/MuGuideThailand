const provinceSlugMap: Record<string, string> = {
  กรุงเทพมหานคร: "bangkok",
  กาญจนบุรี: "kanchanaburi",
  กำแพงเพชร: "kamphaeng-phet",
  เชียงใหม่: "chiang-mai",
  เชียงราย: "chiang-rai",
  ตาก: "tak",
  นครสวรรค์: "nakhon-sawan",
  นนทบุรี: "nonthaburi",
  น่าน: "nan",
  ปทุมธานี: "pathum-thani",
  ประจวบคีรีขันธ์: "prachuap-khiri-khan",
  พะเยา: "phayao",
  พิจิตร: "phichit",
  พิษณุโลก: "phitsanulok",
  แพร่: "phrae",
  แม่ฮ่องสอน: "mae-hong-son",
  ลำปาง: "lampang",
  ลำพูน: "lamphun",
  สุโขทัย: "sukhothai",
};

export function provinceToSlug(name: string) {
  const normalized = name.trim();

  return (
    provinceSlugMap[normalized] ??
    normalized
      .toLowerCase()
      .normalize("NFC")
      .replace(/\s+/g, "-")
      .replace(/[()]/g, "")
  );
}

export function slugToProvince(slug: string, provinces: string[]) {
  const normalizedSlug = slug.trim().toLowerCase();

  return provinces.find(
    (province) => provinceToSlug(province).toLowerCase() === normalizedSlug
  );
}
