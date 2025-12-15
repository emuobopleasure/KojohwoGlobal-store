import React from 'react'
import Button from '../components/Button'

const ContactPage = () => {
  window.scrollTo(0, 0)

  return (
    <section>
      <div className="container my-12 px-0 md:px-6 mx-auto">
        {/* Section: Design Block */}
        <section className="mb-32 text-gray-800">
          
          <div className="relative overflow-hidden bg-no-repeat bg-cover rounded-lg" style={{ backgroundPosition: '50%', backgroundImage: 'url("https://images.unsplash.com/photo-1587560699334-bea93391dcef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")', height: '300px' }}>
          </div>
          <div className="container text-gray-800 px-4 md:px-12">
            <div className="contact-card block rounded-xl shadow-lg py-10 md:py-12 px-2 md:px-6" style={{ marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)' }}>
              <div className="flex flex-wrap lg:items-center">
                <div className="grow-0 shrink-0 basis-auto w-full xl:w-6/12 px-3 lg:px-6 mb-12 xl:mb-0">
                  <form>
                    <div className="form-group mb-6">
                      <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-2xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-500 focus:outline-none" id="exampleInput7" placeholder="Name" />
                    </div>
                    <div className="form-group mb-6">
                      <input type="email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-2xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-500 focus:outline-none" id="exampleInput8" placeholder="Email address" />
                    </div>
                    <div className="form-group mb-6">
                      <textarea className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-2xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-500 focus:outline-none" id="exampleFormControlTextarea13" rows={3} placeholder="Message" defaultValue={""} />
                    </div>
                    <Button
                      text='SEND' styling='rounded py-3 w-full'
                    />
                  </form>
                </div>
                <div className="grow-0 shrink-0 basis-auto w-full xl:w-6/12">
                  <div className="flex flex-wrap gap-4">
                    <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                      <div className="flex items-start">
                        <div className="shrink-0">
                          <div className="p-4 bg-neutral rounded-2xl w-14 h-14 flex items-center justify-center">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="headset" className="w-5 text-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                              <path fill="currentColor" d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z">
                              </path>
                            </svg>
                          </div>
                        </div>
                        <div className="grow ml-6">
                          <p className="font-bold mb-1">Technical support</p>
                          <p className="text-gray-500">support@Kojohwobusiness</p>
                          <p className="text-gray-500">+1 234-567-89</p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                      <div className="flex items-start">
                        <div className="shrink-0">
                          <div className="p-4 bg-neutral rounded-2xl w-14 h-14 flex items-center justify-center">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dollar-sign" className="w-3 text-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 512">
                              <path fill="currentColor" d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z">
                              </path>
                            </svg>
                          </div>
                        </div>
                        <div className="grow ml-6">
                          <p className="font-bold mb-1">Sales questions</p>
                          <p className="text-gray-500">sales@Kojohwobusiness</p>
                          <p className="text-gray-500">+1 234-567-89</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section: Design Block */}
      </div>
    </section>
  )
}

export default ContactPage