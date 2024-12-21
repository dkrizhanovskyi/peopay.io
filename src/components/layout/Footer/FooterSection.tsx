interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

export function FooterSection({ title, children }: FooterSectionProps) {
  return (
    <div>
      <h3 className="font-semibold mb-4 text-primary/80 tracking-wide">{title}</h3>
      {children}
    </div>
  );
}