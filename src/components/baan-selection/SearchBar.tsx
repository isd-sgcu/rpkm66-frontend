import { HomeIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { ChangeEvent } from 'react';

const SearchBar = (props: any) => {
    return (
        <form className="relative w-full text-purple-400">
            <label htmlFor="search">
                <MagnifyingGlassIcon className="absolute left-2 top-1/2 h-5 w-5 -translate-y-1/2 lg:h-6 lg:w-6" />
            </label>
            <input
                type="text"
                name="search"
                id="search"
                placeholder="ค้นหาบ้าน"
                value={props.input}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    props.setInput(e.target.value);
                }}
                className="w-full rounded-3xl bg-white py-1 pl-11 text-sm ring-8 ring-white/20 lg:text-lg"
            />
            <HomeIcon className="absolute right-4 top-1/2 w-5 -translate-y-1/2 text-pink-400 lg:w-6" />
        </form>
    );
};
export default SearchBar;
