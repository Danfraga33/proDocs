import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import SignUpForm from '../lib/components/SignUpForm';

export default function Home() {
	return (
		<div>
			<SignUpForm />
		</div>
	);
}
