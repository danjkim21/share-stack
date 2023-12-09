'use client';

import { Dialog, Transition } from '@headlessui/react';
import {
  DocumentIcon,
  Square3Stack3DIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import { useEffect, useState, Fragment } from 'react';

interface CommandMenuInterfaceProps {}

const objectType = [
  {
    name: 'Item',
    icon: DocumentIcon,
  },
  {
    name: 'Stack',
    icon: Square3Stack3DIcon,
  },
  {
    name: 'Group',
    icon: UserGroupIcon,
  },
];

function CommandMenu({}: CommandMenuInterfaceProps) {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'j' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-white/25 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg border border-gray-200 bg-white text-left align-middle shadow-xl transition-all">
                <form>
                  <div className="">
                    <input
                      className="focus:shadow-outline w-full appearance-none  border-transparent px-3 py-3 leading-tight text-gray-700 shadow ring-transparent focus:outline-none"
                      id="command"
                      type="text"
                      placeholder="Create a ..."
                    />
                  </div>

                  <div className="my-4">
                    {objectType.map((item) => (
                      <label
                        key={item.name}
                        htmlFor={item.name}
                        className="mr-auto"
                      >
                        <div
                          key={item.name}
                          className="group relative mx-1 flex items-center gap-x-2 rounded-lg p-2 text-sm leading-6 hover:bg-gray-50"
                        >
                          <div className="flex h-6 w-8 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <item.icon
                              className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="flex flex-auto items-center">
                            {item.name}
                            <input
                              type="radio"
                              id={item.name}
                              name={item.name}
                              className="ml-auto h-4
                            w-4 border-gray-300 "
                            />
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default CommandMenu;
