import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faArrowLeft, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation, useParams } from 'react-router-dom'

function OpenBlog() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();
  const blog = location.state?.blog || {
    id: 1,
    Date: "# DATE: 25/09/25",
    subtitle: "M_001",
    description: "",
    image: "https://images.unsplash.com/photo-1655669357124-394d107b3aaf?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <section className={`w-full min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        {/* Navigation bar...*/}
        <nav className={`flex justify-between items-center px-6 py-4 shadow-sm border-b transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <div className='flex items-center gap-4'>

            <h1 className={`font-sans font-medium text-base transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>BLOG PAGE</h1>
          </div>
          <div className='flex items-center gap-4'>
            <button
              onClick={toggleDarkMode}
              className={` px-3 py-1 rounded-full transition-all duration-300 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400' : 'bg-gray-200 hover:bg-gray-200 text-gray-700'}`}
            >
              <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} size="base" />
            </button>
            <h1 className={`font-sans font-medium text-base ${isDarkMode ? 'text-gray-50' : 'text-gray-900'}`}>	&#9679; Menu</h1>
          </div>
        </nav>

        <div className='max-w-[1450px] mx-auto px-4 py-6'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>

            {/* Main Content Area */}
            <div className='lg:col-span-2'>
              <div className={`w-full relative overflow-hidden  mb-4 transition-colors duration-300 h-[60vh] lg:h-[65vh] sm:h-[35vh] md:h-[25vh]  object-cover ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>

                <Link to="/">
                  <h2 className="text-black absolute right-5 top-3 font-bold font-mono text-xl ">Close</h2>
                </Link>
                <img
                  src={blog.image}
                  alt={blog.Date}
                  className='w-full h-full object-cover'
                />
              </div>

              <div className='mb-4 px-1 relative'>
                <h1 className={`text-2xl   font-bold mb-2 transition-colors font-mono duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{blog.subtitle}</h1>
                <FontAwesomeIcon icon={faArrowRight}  size="xl" className={`absolute right-2 top-1/3 transform -translate-y-1/2 ${isDarkMode ? 'text-gray-50':'text-gray-900'}  `} /> 
               <FontAwesomeIcon icon={faArrowRight} style={{ transform: "rotate(180deg)"}} size="xl" className={`absolute right-10 top-1/3 transform -translate-y-1/2 ${isDarkMode ? 'text-gray-50':'text-gray-900'} `}/>
                <div className='flex items-center justify-between text-sm mb-4'>
                  <div className='flex items-center gap-[40vw] '>
                    <span className={`transition-colors duration-300 text-[12px] font-bold ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{blog.Date}</span>

                    <span className={`transition-colors duration-300 font-bold ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>5 min ago</span>
                  </div>
                </div>
              </div>
              <hr className={`py-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
              {/* Blog Content */}
              <div className=''>

                <div className={`space-y-4 leading-relaxed transition-colors font-sans duration-300 text-justify ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  <p>{blog.description}</p>

                </div>
                <br />
                <hr className={` py-0 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
                <div className={`py-5 mb-6 transition-colors duration-300   ${isDarkMode ? 'bg-transparent' : 'bg-transparent'}`}>
                  <p className={`text-sm mb-2 transition-colors duration-300  ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{blog.name} BY STUDENT NAME</p>
                  <p className={`text-sm transition-colors  duration-300  ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Student details</p>
                </div>
              </div>
            </div>

            {/* right side blog posts , as tanishq bhaiya said in the meeting */}

            <div className='hidden sm:block'>
              <div className=''>
                {/* Related Article 1 */}
                <Link to="/openblog/2" state={{
                  blog: {
                    id: 2,
                    Date: "# DATE: 25/09/25",
                    subtitle: "M_002",
                    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc",
                    image: "https://plus.unsplash.com/premium_photo-1666174933349-9327dc92addf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kb29yJTIwZmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D"
                  }
                }}>
                  <div className={`flex relative cursor-pointer p-2 transition-colors duration-300 w-[30vw]  ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}`}>
                    <img
                      src="https://plus.unsplash.com/premium_photo-1666174933349-9327dc92addf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kb29yJTIwZmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D"
                      alt="Related article"
                      className='w-full h-48 object-cover '
                    />
                    <div className="absolute bottom-4 right-4 ">

                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-gray-100 hover:text-gray-900 cursor-pointer transition-colors duration-200"
                        size="lg" />

                    </div>
                  </div>

                </Link>

                {/* Related Article 2 */}
                <Link to="/openblog/3" state={{
                  blog: {
                    id: 3,
                    Date: "# DATE: 15/08/25",
                    subtitle: "M_003",
                    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc",
                    image: "https://images.unsplash.com/photo-1663814232828-f3392b8a0001?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGluZG9vciUyMGZsb3dlcnN8ZW58MHx8MHx8fDA%3D"
                  }
                }}>
                  <div className={`flex relative w-[30vw]  cursor-pointer p-2 transition-colors duration-300 ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}`}>
                    <img
                      src="https://images.unsplash.com/photo-1663814232828-f3392b8a0001?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGluZG9vciUyMGZsb3dlcnN8ZW58MHx8MHx8fDA%3D"
                      alt="Related article"
                      className='w-full h-48 object-cover '
                    />
                    <div className="absolute bottom-4 right-4">

                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-gray-100 hover:text-gray-900 cursor-pointer transition-colors duration-200"
                        size="lg" />

                    </div>
                  </div>
                </Link>

                {/* Related Article 3 */}
                <Link to="/openblog/4" state={{
                  blog: {
                    id: 4,
                    Date: "# DATE: 16/05/25",
                    subtitle: "M_004",
                    description: "g hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from rendomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc",
                    image: "https://images.unsplash.com/photo-1652550808231-aababe6cf419?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGluZG9vciUyMGZsb3dlcnN8ZW58MHx8MHx8fDA%3D"
                  }
                }}>
                  <div className={`flex relative w-[30vw] cursor-pointer p-2 transition-colors duration-300 ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}`}>
                    <img
                      src="https://images.unsplash.com/photo-1652550808231-aababe6cf419?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGluZG9vciUyMGZsb3dlcnN8ZW58MHx8MHx8fDA%3D"
                      alt="Related article"
                      className='w-full h-48 object-cover '
                    />
                    <div className="absolute bottom-4 right-4">

                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-gray-100 hover:text-gray-900 cursor-pointer transition-colors duration-200"
                        size="lg" />

                    </div>
                  </div>
                </Link>

                {/* Related Article 4 */}
                <Link to="/openblog/5" state={{
                  blog: {
                    id: 5,
                    Date: "# DATE: 20/08/25",
                    subtitle: "M_005",
                    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.There are many variations of g hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from re Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc",
                    image: "https://plus.unsplash.com/premium_photo-1674065309627-ac695abefb47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kb29yJTIwZmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D"
                  }
                }}>
                  <div className={`flex relative w-[30vw]  cursor-pointer p-2 transition-colors duration-300 ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}`}>
                    <img
                      src="https://plus.unsplash.com/premium_photo-1674065309627-ac695abefb47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kb29yJTIwZmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D"
                      alt="Related article"
                      className='w-full h-48 object-cover flex-shrink-0'
                    />
                    <div className="absolute bottom-4 right-4">

                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-gray-100 hover:text-gray-900 cursor-pointer transition-colors duration-200"
                        size="lg" />

                    </div>
                  </div>
                </Link>

                {/* Related Article 5 */}
                <Link to="/openblog/6" state={{
                  blog: {
                    id: 6,
                    Date: "# DATE: 11/07/25",
                    subtitle: "M_006",
                    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc",
                    image: "https://images.unsplash.com/photo-1716034353162-bbdf0bc75ef4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluZG9vciUyMGZsb3dlcnN8ZW58MHx8MHx8fDA%3D"
                  }
                }}>
                  <div className={`flex relative w-[30vw]  cursor-pointer p-2 transition-colors duration-300 ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}`}>
                    <img
                      src="https://images.unsplash.com/photo-1716034353162-bbdf0bc75ef4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluZG9vciUyMGZsb3dlcnN8ZW58MHx8MHx8fDA%3D"
                      alt="Related article"
                      className='w-full h-48 object-cover flex-shrink-0'
                    />
                    <div className="absolute bottom-4 right-4">

                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-gray-100 hover:text-gray-900 cursor-pointer transition-colors duration-200"
                        size="lg" />

                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OpenBlog