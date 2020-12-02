export interface IPerson {
  name: string;
  github: string;
  description: string;
  twitter?: string;
  facebook?: string;
  website?: string;
  linkedin?: string;
  stackoverflow?: string;
}

export function getPeople() {
  const peopleContext = (require as any).context('../people', true, /\.json/);
  return peopleContext.keys().map(peopleContext) as IPerson[];
}
