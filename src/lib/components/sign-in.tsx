import { signIn } from '@/utils/auth';

export function SignIn() {
	return (
		<form
			action={async () => {
				await signIn('github', { redirectTo: '/dashboard' });
			}}
		>
			<button type="submit">Signin with GasddasitHub</button>
		</form>
	);
}
