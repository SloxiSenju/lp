import { type SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2Z" />
      <path d="M15.5 8.5c-.5-1-1.5-1-2-1h-3c-1.1 0-2 .9-2 2v1c0 1.1.9 2 2 2h2c1.1 0 2 .9 2 2v1c0 1.1-.9 2-2 2h-4" />
      <path d="M8 12h8" />
    </svg>
  );
}
