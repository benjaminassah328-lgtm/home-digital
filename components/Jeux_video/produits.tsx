import Image from "next/image";

export default function Produuits (){
    return(
        <section className="py-10 px-4 md:px-10 space-y-12">
          {/* Ligne 1 */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                      
                              <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
                                <Image
                                  src="/images/ps3.jpeg"
                                  alt="ps3"
                                  width={250}
                                  height={250}
                                  className="rounded-xl mx-auto"
                                />
                                <p className="font-lora text-center mt-2">280 000 F</p>
                              </div>
                      
                              <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
                                <Image
                                  src="/images/ps4.jpeg"
                                  alt="ps4"
                                  width={250}
                                  height={250}
                                  className="rounded-xl mx-auto"
                                />
                                <p className="font-lora text-center mt-2">250 000 F</p>
                              </div>
                      
                              <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
                                <Image
                                  src="/images/ps5.jpeg"
                                  alt="ps5"
                                  width={250}
                                  height={250}
                                  className="rounded-xl mx-auto"
                                />
                                <p className="font-lora text-center mt-2">190 000 F</p>
                              </div>
                      </div>
                      {/* Ligne 2 */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                  
                                          <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
                                            <Image
                                              src="/images/ma1.jpeg"
                                              alt="ma 1"
                                              width={250}
                                              height={250}
                                              className="rounded-xl mx-auto"
                                            />
                                            <p className="font-lora text-center mt-2">280 000 F</p>
                                          </div>
                                  
                                          <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
                                            <Image
                                              src="/images/ma2.jpeg"
                                              alt="ma 2"
                                              width={250}
                                              height={250}
                                              className="rounded-xl mx-auto"
                                            />
                                            <p className="font-lora text-center mt-2">250 000 F</p>
                                          </div>
                                  
                                          <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
                                            <Image
                                              src="/images/ma3.jpeg"
                                              alt="ma 3"
                                              width={250}
                                              height={250}
                                              className="rounded-xl mx-auto"
                                            />
                                            <p className="font-lora text-center mt-2">190 000 F</p>
                                          </div>
                                  </div>
        </section>
    )
}