import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { AcademicCapIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";

const navigation = [
    {name: 'Work Experience', href: '/work-experience', current: false},
    {name: 'Resume', href: 'https://drive.google.com/file/d/1hfwKzKaKp6TC0DmOht3iw_pLocNCQjWw/view?usp=drive_link', current: false},
    {name: 'Projects', href: '/projects', current: false},
    {name: 'Contact', href: '/contact', current: false}
]

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar(){
    return (
        <Disclosure as="nav" className="bg-gray-500">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">


                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile Menu Button */}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ">
                            <span className="absolute -inset-0.5"/>
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden"/>
                            <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block"/>
                        </DisclosureButton>
                    </div>

                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <a href="/" className="hover:animate-spin">
                                <AcademicCapIcon className="h-12 w-12 fill-black" />
                            </a>
                        </div>
                        {/* TODO: Fix navbar to go to right side */}
                        <div className="hidden sm:ml-6 sm:block absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:pr-0">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white' : 'text-white bg-gradient-to-r from-cyan-500 to-teal-500 hover:text-gray-900',
                                            'rounded-xl px-3 py-2 text-sm font-medium',
                                        )}
                                    >
                                            {item.name}
                                    </a>
                                ))}                             
                            </div>
                        </div>
                    </div>
                </div> 
        <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white' : 'text-white bg-gradient-to-r from-cyan-500 to-teal-500 hover:text-gray-900',
                                'block rounded-xl px-3 py-2 text-base font-medium',
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>

            </div>
        </Disclosure>
    )
}