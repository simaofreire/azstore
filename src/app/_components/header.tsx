import ClearFilterAndSearch from './clearFilterAndSearch';
import FilterInput from './filterInput';
import SearchInput from './searchInput';
import SwitchThemeBtn from './switchThemeBtn';

export default function Header() {
	const date = new Date().toLocaleDateString('pt-BR', {
		weekday: 'long',
		day: 'numeric',
		month: 'long'
	});

	return (
		<div className="grid grid-cols-3 w-full before:content-[''] md:before:content-none md:grid-cols-1 md:grid-rows-1 p-2">
			<div className="flex items-end justify-center flex-col w-full">
				<SearchInput />
				<FilterInput />
				<ClearFilterAndSearch />
			</div>

			<div className="flex flex-row justify-end">
				<div className="p-5 justify-between items-center flex flex-row md:flex-col md:items-end">
					<SwitchThemeBtn />
					<p className="capitalize text-sm ml-3  dark:text-white">{date}</p>
				</div>
			</div>
		</div>
	);
}
