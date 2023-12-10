'use client';

import { Dialog, RadioGroup, Transition } from '@headlessui/react';
import {
  DocumentIcon,
  Square3Stack3DIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import { useEffect, useState, Fragment } from 'react';
import CheckIcon from '../icons';

interface CommandMenuInterfaceProps {}

const commandType = [
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
  const [selected, setSelected] = useState(commandType[0]);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const handleCommand = async (formData: FormData) => {
    console.log(formData.get('command'));
    console.log(formData.get('selected[name]'));

    closeModal();
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
                <form action={handleCommand}>
                  <div className="">
                    <input
                      className="focus:shadow-outline w-full appearance-none  border-transparent px-3 py-3 leading-tight text-gray-700 shadow ring-transparent focus:outline-none"
                      id="command"
                      name="command"
                      type="text"
                      placeholder="Create a..."
                    />
                  </div>

                  <div className="mx-1 my-2">
                    <RadioGroup
                      value={selected}
                      onChange={setSelected}
                      name="selected"
                    >
                      <RadioGroup.Label
                        className={
                          'mb-2 block px-2 text-sm font-medium text-gray-700'
                        }
                      >
                        Suggestions
                      </RadioGroup.Label>
                      {commandType.map((type) => (
                        <RadioGroup.Option
                          key={type.name}
                          value={type}
                          className={({ active, checked }) =>
                            `
                            ${active ? '' : ''}
                  ${
                    checked
                      ? 'bg-sky-900/75 text-white hover:bg-sky-900/80'
                      : 'bg-white'
                  }
                    relative flex cursor-pointer rounded-md px-2 py-2 hover:bg-gray-50 focus:outline-none`
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <div className="flex w-full items-center justify-between">
                                <div className="flex items-center gap-x-2">
                                  <div
                                    className={`flex h-6 w-8 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white`}
                                  >
                                    <type.icon
                                      className="h-5 w-5 text-gray-600 group-hover:text-indigo-600"
                                      aria-hidden="true"
                                    />
                                  </div>
                                  <div className="text-sm">
                                    <RadioGroup.Label
                                      as="p"
                                      className={`font-medium  ${
                                        checked ? 'text-white' : 'text-gray-900'
                                      }`}
                                    >
                                      {type.name}
                                    </RadioGroup.Label>
                                  </div>
                                </div>
                                {checked && (
                                  <div className="shrink-0 text-white">
                                    <CheckIcon className="h-6 w-6" />
                                  </div>
                                )}
                              </div>
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </RadioGroup>
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
