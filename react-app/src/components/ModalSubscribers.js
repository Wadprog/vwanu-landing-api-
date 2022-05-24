import React, { useState, Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { success, error, errorExist } from '../components/notification'
import { Toaster } from 'react-hot-toast'
import axios from 'axios'

const ModalSubscribers = () => {
  const [showModal, setShowModal] = useState(false)
  const [firstEmail, setFirstEmail] = useState('')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: firstEmail || '',
  })

  const cancelButtonRef = useRef(null)
  const submitButtonRef = useRef(null)

  const handleClick = (e) => {
    e.preventDefault()

    submitButtonRef.current.click()
  }

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    if (formData.firstName && formData.lastName && formData.email) {
      try {
        axios
          .post(
            'http://159.223.144.200:4004/tester',
            JSON.stringify(formData),
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          )
          .then((data) => {
            success()
            setFormData({ firstName: '', lastName: '', email: '' })
          })
          .catch((err) => {
            if (err?.response?.status === 401) {
              errorExist()
            } else {
              error()
            }
          })
      } catch (e) {
        error()
        console.log(e)
      } finally {
        setShowModal(false)
        e.preventDefault()
      }
    }
  }

  return (
    <>
      <div className="">
        <form className="relative h-24 w-full">
          <input
            className=" w-full items-center rounded-full py-4 px-2 align-middle text-xl font-medium text-vwanu-secondary placeholder:text-xl hover:text-xl focus:text-xl active:text-xl lg:py-6 lg:pl-6"
            type="email"
            name="firstEmail"
            onChange={(e) => {
              setFirstEmail(e.target.value)
            }}
            placeholder="Email Address"
            required
          />
          <button
            onClick={(e) => {
              e.preventDefault()
              if (firstEmail) {
                setFormData({ ...formData, email: firstEmail })
                setShowModal(true)
              } else {
                alert('Fill your email address first to continue.')
              }
            }}
            className="absolute top-[0.5rem] right-[0.5rem] z-10 w-1/3 items-center rounded-full bg-vwanu-primary py-2 text-lg text-white lg:py-4 lg:text-xl  "
          >
            Send Now!
          </button>
        </form>
        <Toaster />
      </div>
      <Transition.Root show={showModal} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={setShowModal}
        >
          <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:h-screen sm:align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Fill the form to be a Vwanu Beta Tester
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          By submitting your email address, you confirm that you
                          accept to be a beta tester for Vwanu and to receive
                          any informations about via your email.
                        </p>
                      </div>
                      <div className="mt-4">
                        <form className="">
                          <div className="block">
                            {' '}
                            <input
                              type="text"
                              name="firstName"
                              className="my-4 block w-full items-center rounded-full bg-sky-100 py-2 px-4 align-middle text-lg font-light text-blue-600 placeholder:text-lg hover:text-lg focus:text-lg active:text-lg"
                              placeholder="First Name"
                              value={formData.firstName}
                              onChange={onChange}
                              required
                            />
                            <input
                              type="text"
                              name="lastName"
                              className="my-4 block w-full items-center rounded-full bg-sky-100 py-2 px-4 align-middle text-lg font-light text-blue-600 placeholder:text-lg hover:text-lg focus:text-lg active:text-lg"
                              placeholder="Last Name"
                              value={formData.lastName}
                              onChange={onChange}
                              required
                            />
                            <input
                              type="email"
                              name="email"
                              className="my-4 block w-full items-center rounded-full bg-sky-100 py-2 px-4 align-middle text-lg font-light text-blue-600 placeholder:text-lg hover:text-lg focus:text-lg active:text-lg"
                              placeholder="Email"
                              value={formData.email}
                              onChange={onChange}
                              required
                            />
                            <button
                              onClick={handleSubmit}
                              ref={submitButtonRef}
                              hidden
                            >
                              Send Email
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-full border border-transparent bg-vwanu-primary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={handleClick}
                  >
                    Send Email
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-full border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setShowModal(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

export default ModalSubscribers
