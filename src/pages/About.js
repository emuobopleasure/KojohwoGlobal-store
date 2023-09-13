import React from 'react'

const AboutPage = () => {
  // window.scrollTo(0, 0)
  return (
    <div>
      {/* <div className="container my-24 px-6 mx-auto"> */}
      {/* Section: Design Block */}
      <section className="mb-32 mt-[2rem] md:mt-[8rem] lg:mt-[8rem] text-gray-800 text-center lg:text-left">
        <style dangerouslySetInnerHTML={{ __html: "\n      @media (min-width: 992px) {\n        .rotate-lg-6 {\n          transform: rotate(6deg);\n        }\n      }\n\n      /* These are the KEY styles - you can add them directly to any object you want in your project */\n      .fancy-border-radius {\n        border-radius: 53% 47% 52% 48% / 36% 41% 59% 64%;\n      }\n    " }} />
        {/* Jumbotron */}
        <div className="container mx-auto xl:px-32 text-center lg:text-left">
          <div className="grid lg:grid-cols-2 items-center">
            <div className="mb-12 lg:mb-0">
              <div className="relative block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14" style={{ background: 'hsla(0, 0%, 100%, 0.55)', backdropFilter: 'blur(30px)', zIndex: 1 }}>
                <h2 className="text-3xl font-bold mb-4 display-5">
                  About Kojohwo Global Services
                </h2>
                <div className='about-des text-left'>


                  At Kojohwo Global Services, we're more than just a distributor – we're your trusted partner in procuring top-quality products and services. With our headquarters located at 60 Otovwodo Road, Ughelli, Otovowodo Market, we've been proudly serving the needs of our valued customers for years. Our commitment to excellence and customer satisfaction sets us apart in the industry.
                  <p className='font-bold my-3'>

                    Our Range of Products and Services
                  </p>

                  We take pride in offering a diverse range of products and services designed to meet your everyday needs:
                  <ul className='services my-4 flex flex-col gap-[1rem]'>
                    <li>
                      <span className='font-bold'>Health & Beauty Products:</span> Discover the best in health and beauty with our selection of Norland products, ensuring you look and feel your best.
                    </li>
                    <li>
                      <span className='font-bold'>Cutting-Edge Electronics:</span> Stay ahead in the tech game with our collection of electronic gadgets that cater to your evolving digital lifestyle.

                    </li>
                    <li>

                      <span className='font-bold'>Diapers for All Ages:</span> As a sub-distributor, we bring you trusted diaper brands like Molfix, Bebem, Huggies, Virony, Kisskid, FinRosy, Softrust, and Dr. Brown, ensuring comfort and convenience for your little ones.
                    </li>
                    <li>

                      <span className='font-bold'>Premium Toilet Tissues:</span> Choose from a variety of toilet tissue brands such as Rose Carla, Belle, Plus, Softwave, Finetex, Familia, and Familia Pampia to add a touch of luxury to your daily essentials.
                    </li>
                    <li>

                      <span className='font-bold'>Feminine Hygiene:</span> Our selection of sanitary napkins includes brands like Norland, Virony, My Girl, Always, Molped, Kotex, Dry Love, and Lady Care, offering you reliable protection and comfort.
                    </li>
                    <li>

                      <span className='font-bold'>Essential Hygiene Products:</span> From serviettes and pocket tissue towels to baby wipes, facial wipes, and more, we have your hygiene needs covered.
                    </li>
                    <li>

                      <span className='font-bold'>Sacramentals:</span> Explore our range of sacramentals for your spiritual well-being and personal growth.
                    </li>
                    <li>

                      <span className='font-bold'>General Contracts:</span> We offer general contract services to meet your project needs, ensuring quality and professionalism in every endeavor.
                    </li>
                  </ul>

                  <span className='font-bold'>Our Commitment to You</span>

                  We are dedicated to delivering quality products and services to both wholesale and retail customers. Our aim is to achieve 95% customer satisfaction while upholding the highest standards of product quality. Your trust in us drives our passion for excellence.

                  Kojohwo Global Services is not just a distributor; we are your dependable partner for all your needs. Join us in shaping a better future through quality products and services.

                  Thank you for choosing Kojohwo Global Services. We look forward to serving you.


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