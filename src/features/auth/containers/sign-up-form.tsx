"use client";

import { AuthFormLayout } from "@/features/auth/ui/auth-form-layout";
import { AuthFields } from "@/features/auth/ui/fields";
import { SubmitButton } from "@/features/auth/ui/submit-button";
import { BottomLink } from "@/features/auth/ui/bottom-link";
import { useActionState } from "@/shared/lib/react";
import { ErrorMessage } from "@/features/auth/ui/error-message";
import { SignUnFormState, signUpAction } from "../actions/sign-up";
import { routes } from "@/kernel/routes";

export function SignUpForm() {
  const [formState, action, isPending] = useActionState(
    signUpAction,
    {} as SignUnFormState,
  );

  return (
    <AuthFormLayout
      title="Регистрация"
      description="Создайте учетную запись, чтобы начать"
      action={action}
      fields={<AuthFields {...formState} />}
      actions={
        <SubmitButton isPending={isPending}>Зарегистрироваться</SubmitButton>
      }
      error={<ErrorMessage error={formState.errors?._errors} />}
      link={
        <BottomLink
          text="У вас уже есть аккаунт?"
          linkText="Войти"
          url={routes.signIn()}
        />
      }
    />
  );
}
