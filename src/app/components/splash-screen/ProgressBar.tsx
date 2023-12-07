type Props = {
  loadingProgress: number;
};

const ProgressBar: React.FC<Props> = ({ loadingProgress }) => {
  return (
    <svg className="h-full w-full rotate-[-90deg]" viewBox="0 0 150 150">
      <circle
        className="loader-progress-bg opacity-20"
        stroke="var(--color-btn)"
        fill="none"
        strokeWidth={4}
        strokeDasharray={2 * Math.PI * 70} // perimeter = 2*Math.PI * r
        cx="75"
        cy="75"
        r="70"
      ></circle>

      <circle
        className="loader-progress-bar "
        stroke="var(--color-btn-active)"
        fill="none"
        strokeWidth={3}
        strokeDasharray={2 * Math.PI * 70} // perimeter = 2*Math.PI * r
        strokeDashoffset={(1 - loadingProgress / 100) * 2 * Math.PI * 70}
        cx="75"
        cy="75"
        r="70"
      ></circle>
    </svg>
  );
};

export default ProgressBar;
