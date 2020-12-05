import Icon from '@mdi/react';

export interface IIconLinked {
  icon: string;
  href: string;
  color?: string;
}

export function IconLinked({ icon, href, color }: IIconLinked) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon path={icon} size={1.5} color={color} />
    </a>
  );
}
