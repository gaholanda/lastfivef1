interface BadgeProps {
  className: string;
  text?: string;
}

export function Badge({ className, text }: BadgeProps) {
  return (
    <div className="d-flex flex-row align-items-center">
      <div
        className={`d-inline-block rounded-circle ${className}`}
        style={{
          width: "20px",
          height: "20px",
        }}
      />
      <p className="m-0 ms-2" style={{ lineHeight: "20px" }}>
        {text || ''}
      </p>
    </div>
  );
}
