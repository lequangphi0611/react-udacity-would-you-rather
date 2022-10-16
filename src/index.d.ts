declare interface CommonProps {
  className?: string;
  ariaLabel?: string;
}

declare interface SelectOption {
  label: string;
  value: string;
}

declare type SelectOptions = SelectOption[];