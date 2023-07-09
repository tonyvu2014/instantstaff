import { ReactNode } from 'react';

type IHeroButtonProps = {
  title: ReactNode;
  description: string;
  primaryButton: ReactNode;
  secondaryButton: ReactNode;
};

const HeroButton = (props: IHeroButtonProps) => (
  <header className="text-center">
    <h1 className="text-4xl md:text-5xl text-gray-900 font-bold whitespace-pre-line md:leading-hero">
      {props.title}
    </h1>
    <div className="text-xl md:text-2xl mt-4 mb-12">{props.description}</div>
    <div className="flex flex-col md:flex-row md:justify-center">
      {props.primaryButton}
      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      {props.secondaryButton}
    </div>
  </header>
);

export { HeroButton };
