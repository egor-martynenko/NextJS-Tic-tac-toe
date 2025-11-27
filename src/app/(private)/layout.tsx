import { ReactNode } from "react";
import { Button } from "@/shared/ui/button";
import { sessionService } from "@/entities/user/server";
import { redirect } from "next/navigation";
import { routes } from "@/kernel/routes";
import { cookies } from "next/headers";

export default async function PrivateLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { session } = await sessionService.verifySession();

  return (
    <div>
      <header className="flex w-full justify-between items-center px-6 py-4 border-b border-gray-200">
        <span className="text-lg font-semibold">Tik-Tak-Toe</span>
        <div className="flex items-center justify-center gap-6">
          <div className="text-lg border-r border-r-primary pr-6">
            {session.login}
          </div>
          <form
            action={async () => {
              "use server";
              console.log("server");

              // Получаем данные для удаления куки
              const deleteAction =
                await sessionService.getDeleteSessionAction();

              // Удаляем куки непосредственно в Server Action
              const cookieStore = await cookies();
              cookieStore.delete(deleteAction.name);

              redirect(routes.signIn());
            }}
          >
            <Button>Выйти</Button>
          </form>
        </div>
      </header>
      {children}
    </div>
  );
}
