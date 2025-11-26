import { ReactNode } from "react";

export function Layout({
  children,
  actions,
}: {
  children: ReactNode;
  actions: ReactNode;
}) {
  return (
    <div className="flex flex-col items-start justify-start w-full">
      <div className="flex justify-end w-full gap-4">{actions}</div>
      <div className="grid grid-cols-4 gap-4 w-full mt-4">{children}</div>
    </div>
  );
}
