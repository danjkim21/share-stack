enum BadgeType {
  DEFAULT = 'default',
  WARN = 'warn',
  INFO = 'info',
}

type Props = { type: BadgeType; label: string };

function Badge({ type, label }: Props) {
  return (
    <span
      className={`inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10`}
    >
      #{label}
    </span>
  );
}

export default Badge;
