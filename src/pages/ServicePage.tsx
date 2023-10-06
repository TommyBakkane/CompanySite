import { MyFooter } from "../components/MyFooter";
import { Navbar } from "../components/Navbar";

export const ServicePage = () => {
  return (
    <>
      <Navbar />
      <div className="py-14 my-20 flex justify-center items-center">
        <div className="mx-auto ">
          <h1 className="text-4xl font-bold text-center text-neutralDGrey mb-8">
            Our Services
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Service Box 1 */}
            <div className="bg-neutralSilver rounded-lg p-6 mx-4">
              <h2 className="text-xl font-semibold mb-2">Service 1</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vehicula ante et congue.
              </p>
            </div>

            {/* Service Box 2 */}
            <div className="bg-neutralSilver rounded-lg p-6 mx-4">
              <h2 className="text-xl font-semibold mb-2">Service 2</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vehicula ante et congue.
              </p>
            </div>

            {/* Service Box 3 */}
            <div className="bg-neutralSilver rounded-lg p-6 mx-4">
              <h2 className="text-xl font-semibold mb-2">Service 3</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vehicula ante et congue.
              </p>
            </div>

            {/* Service Box 4 */}
            <div className="bg-neutralSilver rounded-lg p-6 mx-4">
              <h2 className="text-xl font-semibold mb-2">Service 4</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vehicula ante et congue.
              </p>
            </div>
          </div>


        </div>
        
      </div>

          {/* flex box 1 */}
          <div className="w-screen flex flex-col md:flex-row bg-neutralSilver rounded-lg p-6 mt-6">
            <div className="md:w-1/2 mx-4">
              <img
                src={require("../assets/images/man-woman.png")}
                alt="placeholde 1"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0 mx-4 flex flex-col justify-center">
              <h2 className="text-xl font-semibold mb-2">Service 1</h2>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                corporis et est laudantium dolorem labore reprehenderit
                distinctio illo voluptates similique accusantium a, quis
                dolores. Exercitationem obcaecati maiores, laboriosam mollitia
                explicabo labore amet deserunt ducimus nostrum placeat molestiae
                numquam at quo.
              </p>
              <button className="btn-primary w-1/2 lg:w-1/3">Read More</button>
            </div>
          </div>


          {/* flex box 2 */}
          <div className="w-screen flex flex-col md:flex-row rounded-lg p-6 mt-6">
            <div className="md:w-1/2 mt-4 md:mt-0 mx-4 flex flex-col justify-center">
              <h2 className="text-xl font-semibold mb-2">Service 2</h2>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                corporis et est laudantium dolorem labore reprehenderit
                distinctio illo voluptates similique accusantium a, quis
                dolores. Exercitationem obcaecati maiores, laboriosam mollitia
                explicabo labore amet deserunt ducimus nostrum placeat molestiae
                numquam at quo.
              </p>
              <button className="btn-primary w-1/2 lg:w-1/3">Read More</button>
            </div>
            <div className="md:w-1/2 mx-4">
              <img
                src={require("../assets/images/one-man-one-child.png")}
                alt="placeholde 2"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* flex box 3 */}
          <div className="w-screen flex flex-col md:flex-row bg-neutralSilver rounded-lg p-6 mt-6">
            <div className="md:w-1/2 mx-4">
              <img
                src={require("../assets/images/two-men.png")}
                alt="placeholde 3"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0 mx-4 flex flex-col justify-center">
              <h2 className="text-xl font-semibold mb-2">Service 3</h2>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                corporis et est laudantium dolorem labore reprehenderit
                distinctio illo voluptates similique accusantium a, quis
                dolores. Exercitationem obcaecati maiores, laboriosam mollitia
                explicabo labore amet deserunt ducimus nostrum placeat molestiae
                numquam at quo.
              </p>
              <button className="btn-primary w-1/2 lg:w-1/3">Read More</button>
            </div>
          </div>

          {/* flex box 4 */}
          <div className="w-screen flex flex-col md:flex-row rounded-lg p-6 mt-6">
            <div className="md:w-1/2 mt-4 md:mt-0 mx-4 flex flex-col justify-center">
              <h2 className="text-xl font-semibold mb-2">Service 4</h2>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                corporis et est laudantium dolorem labore reprehenderit
                distinctio illo voluptates similique accusantium a, quis
                dolores. Exercitationem obcaecati maiores, laboriosam mollitia
                explicabo labore amet deserunt ducimus nostrum placeat molestiae
                numquam at quo.
              </p>
              <button className="btn-primary w-1/2 lg:w-1/3">Read More</button>
            </div>
            <div className="md:w-1/2 mx-4">
              <img
                src={require("../assets/images/two-old-men.png")}
                alt="placeholde 4"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          <MyFooter />
    </>
  );
};
