"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { createAdminClient } from "@/lib/appwrite";
import { OAuthProvider } from "node-appwrite";

export async function signUpWithGithub() {
	const { account } = await createAdminClient();

  const origin = headers().get("origin");
  
	const redirectUrl = await account.createOAuth2Token(
		OAuthProvider.Github,
		`${origin}/oauth`,
		`${origin}/sign-up`,
	);

	return redirect(redirectUrl);
};
