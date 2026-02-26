interface IconProps extends Omit<React.ComponentProps<"svg">, "size"> {
  svg: React.FC<React.ComponentProps<"svg">>;
}

export default function Icon({ svg: IconComponent, ...props }: IconProps) {
  return <IconComponent {...props} />;
}
