import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = total > 0 ? (current / total) * 100 : 0;

  return (
    <div className="bg-slate-200 h-2.5 rounded-full overflow-hidden my-5">
      <div
        className="bg-emerald-500 h-full rounded-full transition-all duration-500 ease-out"
        style={{ width: `${percentage}%` }}
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
        role="progressbar"
        aria-label="Progresso nello studio delle macro-aree"
      ></div>
    </div>
  );
};

export default ProgressBar;