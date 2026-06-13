import { Link } from "react-router-dom";

const variants = {
  primary: "bg-[#C8A45D] text-[#111827] hover:bg-[#b79248]",
  secondary: "border border-[#C8A45D]/50 bg-white/80 text-[#111827] hover:bg-[#F7F0DF]",
  dark: "bg-[#111827] text-white hover:bg-[#243047]",
  ghost: "text-[#111827] hover:bg-[#F7F0DF]",
};

export default function Button({
  children,
  to,
  type = "button",
  variant = "primary",
  fullWidth = false,
  className = "",
  icon: Icon,
  ...props
}) {
  const classes = [
    "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition",
    variants[variant] || variants.primary,
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {Icon ? <Icon aria-hidden="true" className="h-4 w-4 shrink-0" /> : null}
      <span className="truncate">{children}</span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {content}
    </button>
  );
}
