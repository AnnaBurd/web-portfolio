type Props = {
  className?: string;
};

const ChevronDownIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      aria-hidden="true"
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="square"
        stroke-miterlimit="10"
        stroke-width="48"
        d="M112 184l144 144 144-144"
      />
    </svg>
  );
};

export default ChevronDownIcon;
