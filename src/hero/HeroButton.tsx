import { ReactNode } from 'react';

type IHeroButtonProps = {
  title: ReactNode;
  description: string;
  primaryButton: ReactNode;
  secondaryButton: ReactNode;
};

const HeroButton = (props: IHeroButtonProps) => (
  <header className="text-center h-full flex items-center justify-center">
    <div>
      <h1 className="text-3xl md:text-4xl text-gray-900 font-bold whitespace-pre-line md:leading-hero">
        {props.title}
      </h1>
      <div className="text-xl md:text-2xl mt-3 mb-6">{props.description}</div>
      <div className="flex flex-col md:flex-row md:justify-center">
        {props.primaryButton}
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        {props.secondaryButton}
      </div>
    </div>
  </header>
);

export { HeroButton };
