export enum BadgeType {
  DEFAULT = 'default', // grey
  WARN = 'warn', // red
  INFO = 'info', // blue
}

type Props = { type: BadgeType; label: string };

function Badge({ type, label }: Props) {
  return (
    <span
      className={`inline-flex items-center rounded-md  px-2 py-1 text-xs font-medium  ring-1 ring-inset 
      ${
        type === BadgeType.DEFAULT
          ? 'bg-gray-50 text-gray-600 ring-gray-500/10'
          : ''
      }
      ${type === BadgeType.WARN ? 'bg-red-50 text-red-700 ring-red-600/10' : ''}
      ${
        type === BadgeType.INFO
          ? 'bg-blue-50 text-blue-700 ring-blue-700/10'
          : ''
      }
      `}
    >
      #{label}
    </span>
  );
}

export default Badge;
