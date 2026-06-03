/** Canonical profile URLs for sample NGO ids (legacy /ngo-detail/:id). */
export function getNGOProfilePathById(id: string): string {
  switch (id) {
    case '2':
      return '/animalcare-ngo-detail';
    case '1':
    case '3':
      return '/jwp-cause-details';
    default:
      return '/ngo-list';
  }
}

/** Legacy /ngo/:slug URLs → canonical cause or directory pages. */
export function getNGOProfilePathBySlug(slug: string): string {
  const normalized = slug.toLowerCase();
  if (normalized.includes('animalcare')) {
    return '/animalcare-ngo-detail';
  }
  if (normalized.includes('jwp')) {
    return '/jwp-cause-details';
  }
  return '/ngo-list';
}
