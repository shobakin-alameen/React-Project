import "./navbar.css"
'use client'
import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
  { name: 'Home 1', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Home 2', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Home 3', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Home 4', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Home 5', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  // { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  // { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
    <div className="whole">
    <div className="contanier absolute">
      <div className="dot">
        <span className="circle-1"></span>
        <span className="circle-2"><div className="edu">Educax</div></span>
      </div>
    </div>
    <header className="relative">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 0">
        <div className="flex lg:flex-1">
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 my-1 bugger"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12 ">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
              Homes +
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-32 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                  <div                 >
                    <div className="flex-auto homey">
                      <p className="mt-1 text-black"><a href="#">Home 1</a></p>
                      <p className="mt-2 text-black"><a href="#">Home 2</a></p>
                      <p className="mt-2 text-black"><a href="#">Home 3</a></p>
                      <p className="mt-2 text-black"><a href="#">Home 4</a></p>
                      <p className="mt-2 text-black"><a href="#">Home 5</a></p>
                    </div>
                  </div>
              </div>
            </PopoverPanel>
          </Popover>

          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
              Courses +
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-32 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                  <div                 >
                    <div className="flex-auto homey">
                      <p className="mt-1 text-black"><a href="#">Courses</a></p>
                      <p className="mt-2 text-black"><a href="#">Course Details</a></p>
                      <p className="mt-2 text-black"><a href="#">Mentors</a></p>
                      <p className="mt-2 text-black"><a href="#">Mentor Details</a></p>
                    </div>
                  </div>
              </div>
            </PopoverPanel>
          </Popover>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
              Blogs +
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-32 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                  <div                 >
                    <div className="flex-auto homey">
                      <p className="mt-1 text-black"><a href="#">Blogs</a></p>
                      <p className="mt-2 text-black"><a href="#">Blogs 2</a></p>
                      <p className="mt-2 text-black"><a href="#">Blogs Details</a></p>
                    </div>
                  </div>
              </div>
            </PopoverPanel>
          </Popover>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
              Pages +
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-32 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                  <div                 >
                    <div className="flex-auto homey">
                      <p className="mt-1 text-black"><a href="#">About Us</a></p>
                      <p className="mt-2 text-black"><a href="#">Gallery</a></p>
                      <p className="mt-2 text-black"><a href="#">cart</a></p>
                      <p className="mt-2 text-black"><a href="#">Checkout</a></p>
                      <p className="mt-2 text-black"><a href="#">Sign Up</a></p>
                      <p className="mt-2 text-black"><a href="#">Sign In</a></p>
                      <p className="mt-2 text-black"><a href="#">Reset Password</a></p>
                      <p className="mt-2 text-black"><a href="#">404 Error</a></p>
                    </div>
                  </div>
              </div>
            </PopoverPanel>
          </Popover>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Contact us
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button className="sign p-4">Sign Up</button>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 mx-80 text-black"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Homes <span className="plus">+</span>
                    {/* <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" /> */}
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Course <span className="plus1">+</span>
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Blogs <span className="plus1">+</span>
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Pages <span className="plus1">+</span>
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact Us
                </a>
              </div>  
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
         
    </div>
    </>
  )
}
