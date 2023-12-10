'use client';

import React, { useState } from 'react';
import { FunnelIcon } from '@heroicons/react/20/solid';
import StackCard from '../stack-card';
import FilterDialogMobile from '../filter-dialog-mobile';
import FilterSidePanel from '../filter-side-panel';

const subCategories = [
  { name: 'Totes', href: '#' },
  { name: 'Backpacks', href: '#' },
  { name: 'Travel Bags', href: '#' },
  { name: 'Hip Bags', href: '#' },
  { name: 'Laptop Sleeves', href: '#' },
];
const filters = [
  {
    id: 'tags',
    name: 'Tags',
    options: [
      { value: 'new-arrivals', label: 'New Arrivals', checked: false },
      { value: 'sale', label: 'Sale', checked: false },
      { value: 'travel', label: 'Travel', checked: true },
      { value: 'organization', label: 'Organization', checked: false },
      { value: 'accessories', label: 'Accessories', checked: false },
    ],
  },
];

const stacks = [
  {
    id: '12',
    name: 'Tech & Gadgets',
    description: 'Work from home accessories',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
    imageAlt:
      'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
    tags: ['tag 1', 'tag 2'],
  },
  {
    id: '13',
    name: 'Books',
    description: 'Sci-fi and Fantasty',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
    imageAlt:
      'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
    tags: ['tag 2', 'tag 3'],
  },
  {
    id: '14',
    name: 'Travel',
    description: 'Daily commute essentials',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
    tags: ['tag 14'],
  },
];

function StackList() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <div>
      <FilterDialogMobile
        subCategories={subCategories}
        filters={filters}
        mobileFiltersOpen={mobileFiltersOpen}
        setMobileFiltersOpen={setMobileFiltersOpen}
      />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-end pb-6 pt-6">
          <div className="flex items-center">
            <button
              type="button"
              className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <span className="sr-only">Filters</span>
              <FunnelIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <section aria-labelledby="products-heading" className="pb-24 pt-6">
          <h2 id="products-heading" className="sr-only">
            Stacks
          </h2>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            <FilterSidePanel subCategories={subCategories} filters={filters} />

            {/* Product grid */}
            <div className="lg:col-span-3">
              <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-2xl lg:max-w-none ">
                  <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                    {stacks.map((stack) => (
                      <StackCard key={stack.name} stack={stack} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default StackList;
