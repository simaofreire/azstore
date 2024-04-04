'use client';
import { useEffect, useState } from 'react';

export default function SwitchThemeBtn() {
	const [isActive, setIsActive] = useState(false);
	const [theme, setTheme] = useState('dark');

	const toggleSwitch = () => {
		setIsActive(!isActive);
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	useEffect(() => {
		theme === 'light'
			? document.querySelector('html')!.classList.remove('dark')
			: document.querySelector('html')!.classList.add('dark');
	}, [theme]);

	return (
		<button
			onClick={toggleSwitch}
			className={`relative inline-block w-10 align-middle select-none transition duration-200 ease-in rounded-2xl border-solid ${
				isActive ? 'bg-black' : 'bg-white'
			}`}
		>
			<span
				className={`block h-6 w-6 rounded-full shadow-inner transform transition ${
					isActive ? 'translate-x-4 bg-white' : 'translate-x-0 bg-black'
				}`}
			></span>
		</button>
	);
}
