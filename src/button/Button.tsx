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
    'btn-yellow': !props.primary,
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
            @apply text-white bg-primary-700;
          }

          .btn-primary:hover {
            @apply bg-primary-500;
          }

          .btn-yellow {
            @apply text-white bg-yellow-600;
          }

          .btn-yellow:hover {
            @apply bg-yellow-500;
          }
        `}
      </style>
    </div>
  );
};

export { Button };
