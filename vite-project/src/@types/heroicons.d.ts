declare module '@heroicons/react/solid' {
  import { IconProps } from '@heroicons/react/dist/types';
  const SunIcon: (props: IconProps) => JSX.Element;
  const MoonIcon: (props: IconProps) => JSX.Element;
  // Add other solid icons here
  export { SunIcon, MoonIcon };
}

declare module '@heroicons/react/outline' {
  import { IconProps } from '@heroicons/react/dist/types';
  const SunIcon: (props: IconProps) => JSX.Element;
  const MoonIcon: (props: IconProps) => JSX.Element;
  // Add other outline icons here
  export { SunIcon, MoonIcon };
}
