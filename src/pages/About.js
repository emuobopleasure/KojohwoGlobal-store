import React from 'react'

const AboutPage = () => {
  // window.scrollTo(0, 0)
  return (
    <div>
      {/* <div className="container my-24 px-6 mx-auto"> */}
      {/* Section: Design Block */}
      <section className="mb-32 mt-24 text-gray-800 text-center lg:text-left">
        <style dangerouslySetInnerHTML={{ __html: "\n      @media (min-width: 992px) {\n        .rotate-lg-6 {\n          transform: rotate(6deg);\n        }\n      }\n\n      /* These are the KEY styles - you can add them directly to any object you want in your project */\n      .fancy-border-radius {\n        border-radius: 53% 47% 52% 48% / 36% 41% 59% 64%;\n      }\n    " }} />
        {/* Jumbotron */}
        <div className="container mx-auto xl:px-32 text-center lg:text-left">
          <div className="grid lg:grid-cols-2 items-center">
            <div className="mb-12 lg:mb-0">
              <div className="relative block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14" style={{ background: 'hsla(0, 0%, 100%, 0.55)', backdropFilter: 'blur(30px)', zIndex: 1 }}>
                <h2 className="text-3xl font-bold mb-4 display-5">
                  About us
                </h2>
                <ul className="text-gray-500 mb-12 list-disc">
                  <li className='font-bold'>
                    Distributor of Norland Health & Beauty Products, Electronic Gadgets.
                  </li>
                  <li>
                    <span className='font-bold'>A Sub-Distributor of Diapers</span>: Molfix, Bebem, Huggies, Virony, Kisskid, FinRosy, Softrust, Dr Brown.
                  </li>
                  <li>
                    <span className='font-bold'>Sub-Distributor of Toilet Tissues</span>: Rose Carla, Belle, Plus, Softwave, Finetex, Familia, Familia Pampia, Familia.
                  </li>
                  <li>
                    <span className='font-bold'>PADS</span>: Norland Sanitary Napkin, Virony, My Girl, Always, Molped, Kotex, Dry Love, Lady Care. Serviettes, Pocket Tissue Towels, Baby Wipes, Facial Wipes, All Purpose etc...
                  </li>
                  <li className='font-bold'>
                    Wholesale/Retail of Sacramentals.<br />
                    General Contracts.
                  </li>

                </ul>
                <div className="grid md:grid-cols-3 gap-x-6">
                  <div className="mb-12 md:mb-0">
                    <h2 className="text-3xl font-bold text-dark mb-4">95%</h2>
                    <h5 className="text-lg font-medium text-gray-500 mb-0">Customer Satisfaction</h5>
                  </div>
                  <div className="mb-12 md:mb-0">
                    <h2 className="text-3xl font-bold text-dark mb-4">100%</h2>
                    <h5 className="text-lg font-medium text-gray-500 mb-0">Quality Products</h5>
                  </div>
                  <div className>
                    <h2 className="text-3xl font-bold text-dark mb-4">0%</h2>
                    <h5 className="text-lg font-medium text-gray-500 mb-0"></h5>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img src="https://images.unsplash.com/flagged/photo-1568004614679-c938da0922fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" className="w-full shadow-lg fancy-border-radius rotate-lg-6" alt="" />
            </div>
          </div>
        </div>
        {/* Jumbotron */}
      </section>
      {/* Section: Design Block */}
      {/* </div> */}
    </div>
  )
}

export default AboutPage