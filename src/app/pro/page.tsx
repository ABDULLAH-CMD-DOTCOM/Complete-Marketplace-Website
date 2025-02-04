import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import React from 'react'
import Image from 'next/image'
import { Input } from 'postcss'
import Link from 'next/link'

const Page = () => {
  return (
    <div>
      <div className='bg-[#F6F7F9]'>
        <Navbar />
        <div className="container mx-auto p-4">
          <div className="flex flex-col lg:flex-row">
            {/* Sidebar */}
            <div className="w-full lg:w-1/4 p-4 bg-white text-black rounded-lg shadow-md mb-6 lg:mb-0">
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Type</h2>
                <ul>
                  <li className="mb-2">
                    <input checked type="checkbox" />
                    Sport (10)
                  </li>
                  <li className="mb-2">
                    <input checked type="checkbox" />
                    SUV (12)
                  </li>
                  <li className="mb-2">
                    <input type="checkbox" />
                    MPV (16)
                  </li>
                  <li className="mb-2">
                    <input type="checkbox" />
                    Sedan (20)
                  </li>
                  <li className="mb-2">
                    <input type="checkbox" />
                    Coupe (14)
                  </li>
                  <li className="mb-2">
                    <input type="checkbox" />
                    Hatchback (14)
                  </li>
                </ul>
              </div>
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2 text-black">Capacity</h2>
                <ul>
                  <li className="mb-2">
                    <input checked type="checkbox" />
                    2 Person (10)
                  </li>
                  <li className="mb-2">
                    <input type="checkbox" />
                    4 Person (14)
                  </li>
                  <li className="mb-2">
                    <input type="checkbox" />
                    6 Person (12)
                  </li>
                  <li className="mb-2">
                    <input type="checkbox" />
                    8 or More (16)
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2 text-black">Price</h2>
                <input className="w-full" max="100" min="0" type="range" value="50" />
                <div className="text-right">Max. $100.00</div>
              </div>
            </div>
            {/* Main Content */}
            <div className="w-full lg:w-3/4 p-4">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="flex flex-col lg:flex-row">
                  <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                    <div className="bg-blue-500 text-white p-4 rounded-lg mb-4">
                      <h2 className="text-2xl lg:text-3xl font-bold text-white">Sports car with the best <br/>design and acceleration</h2>
                      <p className='text-xs lg:text-sm'>Safety and comfort while driving a futuristic and elegant sports car</p>
                      <img alt="Sports car" className="w-full mt-4 rounded-lg" height="120" src="/image 8.png" width="380" />
                    </div>
                    <div className="flex space-x-2">
                      <img alt="Car thumbnail 1" className="w-1/4 rounded-lg border-2 border-blue-500" height="100" src="/view 2.png" width="100" />
                      <img alt="Car thumbnail 2" className="w-1/4 rounded-lg" height="100" src="/view 3.png" width="100" />
                      <img alt="Car thumbnail 3" className="w-1/4 rounded-lg bg-blue-500" height="124" src="car-1.png" width="140" />
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 lg:pl-4">
                    <h2 className="text-xl lg:text-2xl font-bold mb-2 text-black">Nissan GT – R</h2>
                    <div className="flex items-center mb-2">
                      <span className="text-yellow-500">
                        <i className="fas fa-star"></i>
                      </span>
                      <span className="text-yellow-500">
                        <i className="fas fa-star"></i>
                      </span>
                      <span className="text-yellow-500">
                        <i className="fas fa-star"></i>
                      </span>
                      <span className="text-yellow-500">
                        <i className="fas fa-star"></i>
                      </span>
                      <span className="text-gray-300">
                        <i className="fas fa-star"></i>
                      </span>
                      <span className="ml-2 text-gray-500">440+ Reviewer</span>
                    </div>
                    <p className="text-gray-600 mb-4">
                      NISMO has become the embodiment of Nissan`s outstanding performance, inspired by the most unforgiving proving ground, the `race track``.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <h3 className="text-gray-500 font-semibold">Type Car</h3>
                        <p className="font-semibold text-black">Sport</p>
                      </div>
                      <div>
                        <h3 className="text-gray-500 font-semibold">Capacity</h3>
                        <p className="font-semibold  text-black">2 Person</p>
                      </div>
                      <div>
                        <h3 className="text-gray-500 font-semibold">Steering</h3>
                        <p className="font-semibold  text-black">Manual</p>
                      </div>
                      <div>
                        <h3 className="text-gray-500 font-semibold">Gasoline</h3>
                        <p className="font-semibold  text-black">70L</p>
                      </div>
                    </div>
                    <div className="flex items-center mb-4">
                      <span className="text-2xl font-bold text-black">$80.00</span>
                      <span className="text-gray-500 line-through ml-2">$100.00</span>
                    </div>
                    <Link href="/admin">
                    <button className="w-full lg:w-auto bg-blue-500 text-white px-4 py-2 rounded-lg">Rent Now</button></Link>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <h2 className="text-xl font-semibold">Reviews</h2>
                  <span className="ml-2 bg-blue-500 text-white px-2 py-1 rounded-full">13</span>
                </div>
                <div className="mb-4">
                  {/* Review 1 */}
                  <div className="flex items-start mb-4">
                    <img alt="Reviewer 1" className="w-12 h-12 rounded-full mr-4" height="50" src="https://storage.googleapis.com/a1aa/image/EOPemfjQajkgqke2wtEMtkYIVHjfpQfL38YOGrbmdbUCgVGfE.jpg" width="50" />
                    <div>
                      <h3 className="font-semibold">Alex Stanton</h3>
                      <p className="text-gray-500">CEO at Bukalapak</p>
                      <p className="text-gray-600">
                        We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities.
                      </p>
                      <div className="flex items-center mt-2">
                        <span className="text-yellow-500">
                          <i className="fas fa-star"></i>
                        </span>
                        <span className="text-yellow-500">
                          <i className="fas fa-star"></i>
                        </span>
                        <span className="text-yellow-500">
                          <i className="fas fa-star"></i>
                        </span>
                        <span className="text-yellow-500">
                          <i className="fas fa-star"></i>
                        </span>
                        <span className="text-gray-300">
                          <i className="fas fa-star"></i>
                        </span>
                        <span className="ml-2 text-gray-500">21 July 2022</span>
                      </div>
                    </div>
                  </div>
                  {/* Review 2 */}
                  <div className="flex items-start">
                    <img alt="Reviewer 2" className="w-12 h-12 rounded-full mr-4" height="50" src="https://storage.googleapis.com/a1aa/image/aPdac2MRVg6cCJe6rfwuengI2kEEuzqDdznX6n4VXsC0XlxnA.jpg" width="50" />
                    <div>
                      <h3 className="font-semibold">Skylar Dias</h3>
                      <p className="text-gray-500">CEO at Amazon</p>
                      <p className="text-gray-600">
                        We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities.
                      </p>
                      <div className="flex items-center mt-2">
                        <span className="text-yellow-500">
                          <i className="fas fa-star"></i>
                        </span>
                        <span className="text-yellow-500">
                          <i className="fas fa-star"></i>
                        </span>
                        <span className="text-yellow-500">
                          <i className="fas fa-star"></i>
                        </span>
                        <span className="text-yellow-500">
                          <i className="fas fa-star"></i>
                        </span>
                        <span className="text-gray-300">
                          <i className="fas fa-star"></i>
                        </span>
                        <span className="ml-2 text-gray-500">20 July 2022</span>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="text-blue-500">Show All</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Page
