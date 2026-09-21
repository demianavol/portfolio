interface Metric {
  value: string;
  label: string;
  detail?: string;
}

interface MetricStripProps {
  metrics: readonly Metric[];
  className?: string;
}

export function MetricStrip({ metrics, className = "" }: MetricStripProps) {
  return (
    <div className={`metric-strip ${className}`} role="region" aria-label="Key Proof Metrics">
      {metrics.map((m, idx) => (
        <div className="metric-strip-item" key={idx}>
          <strong className="metric-strip-value">{m.value}</strong>
          <span className="metric-strip-label">{m.label}</span>
          {m.detail && <p className="metric-strip-detail">{m.detail}</p>}
        </div>
      ))}
    </div>
  );
}
