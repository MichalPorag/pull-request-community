interface Mentor {
  description: string;
}

export function getMentors() {
  const mentorsContext = (require as any).context('../data/mentors', true, /\.json/);
  return mentorsContext.keys().map(mentorsContext) as Mentor[];
}
