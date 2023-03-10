import className from 'classnames';

type IButtonProps = {
  xl?: boolean;
  primary?: boolean;
  children: string;
};

const Button = (props: IButtonProps) => {
  const btnClass = className({
    btn: true,
    'btn-xl': props.xl,
    'btn-base': !props.xl,
    'btn-primary': props.primary,
    'btn-gray': !props.primary,
  });

  return (
    <div className={btnClass}>
      {props.children}

      <style jsx>
        {`
          .btn {
            @apply inline-block rounded-md text-center;
          }

          .btn-base {
            @apply text-lg font-semibold py-2 px-4;
          }

          .btn-xl {
            @apply font-extrabold text-xl py-4 px-6;
          }

          .btn-primary {
            @apply text-white bg-primary-500;
          }

          .btn-primary:hover {
            @apply bg-primary-600;
          }

          .btn-gray {
            @apply text-white bg-gray-500;
          }

          .btn-gray:hover {
            @apply bg-gray-600;
          }
        `}
      </style>
    </div>
  );
};

export { Button };
