import { HomeIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { ChangeEvent } from 'react';

const SearchBar = (props: any) => {
    return (
        <form className="w-full text-black lg:w-full">
            <label htmlFor="search">
                <MagnifyingGlassIcon className="absolute h-5 w-5 translate-x-3 translate-y-[0.22rem] object-contain lg:h-6 lg:w-6 lg:translate-y-[0.35rem]" />
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
                className="w-full rounded-3xl bg-white py-1 pl-11 pr-4 text-sm ring-8 ring-white/20 max-[400px]:placeholder-white lg:text-lg"
            />
            <button>
                <HomeIcon
                    color="#E95682D6"
                    className="absolute -translate-x-8 -translate-y-[0.90rem] object-contain max-lg:h-5 max-lg:w-5 lg:-translate-x-11 lg:-translate-y-[1.3rem]"
                />
            </button>
        </form>
    );
};
export default SearchBar;
