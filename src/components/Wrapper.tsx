export default function Wrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto md:w-3/4 w-full px-8 md:px-0 py-8">
      {children}
    </div>
  );
}
