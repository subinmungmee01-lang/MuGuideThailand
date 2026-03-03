// สร้าง slug อังกฤษแบบ SEO friendly จากชื่อไทย
export function provinceToSlug(name: string) {
  return name
    .trim()
    .toLowerCase()
    .replace("แม่ฮ่องสอน", "mae-hong-son")
    .replace("เชียงใหม่", "chiang-mai")
    .replace("เชียงราย", "chiang-rai")
    .replace("ลำปาง", "lampang")
    .replace("ลำพูน", "lamphun")
    .replace("น่าน", "nan")
    .replace("พะเยา", "phayao")
    .replace("แพร่", "phrae")
    .replace("สุโขทัย", "sukhothai")
    .replace("ตาก", "tak")
    .replace("พิษณุโลก", "phitsanulok")
    .replace("พิจิตร", "phichit")
    .replace("กำแพงเพชร", "kamphaeng-phet")
    .replace(/\s+/g, "-");
}

// หา "ชื่อจังหวัดไทย" จาก slug
export function slugToProvince(
  slug: string,
  provinces: string[]
) {
  return provinces.find(
    (p) => provinceToSlug(p) === slug
  );
}