"use client";

import { AuthFormLayout } from "@/features/auth/ui/auth-form-layout";
import { AuthFields } from "@/features/auth/ui/fields";
import { SubmitButton } from "@/features/auth/ui/submit-button";
import { BottomLink } from "@/features/auth/ui/bottom-link";
import { ErrorMessage } from "@/features/auth/ui/error-message";
import { signInAction, SignInFormState } from "../actions/sing-in";
import { useActionState } from "@/shared/lib/react";
import { routes } from "@/kernel/routes";

export function SignInForm() {
  const [formState, action, isPending] = useActionState(
    signInAction,
    {} as SignInFormState,
  );

  return (
    <AuthFormLayout
      title="Войти"
      description="Добро пожаловать! Войдите в свою учётную запись."
      action={action}
      fields={<AuthFields {...formState} />}
      actions={<SubmitButton isPending={isPending}>Войти</SubmitButton>}
      error={<ErrorMessage error={formState.errors?._errors} />}
      link={
        <BottomLink
          text="У вас нет учетной записи?"
          linkText="Зарегистрироваться"
          url={routes.signUp()}
        />
      }
    />
  );
}
