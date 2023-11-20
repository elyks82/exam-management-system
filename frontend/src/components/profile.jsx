import Footer from "./layout/footer";
import Navbar from "./layout/navbar";

const Profile = () => {
    return (
        <div className="profile_page">
            <Navbar />
            <dir className="content">
                <div class="flex items-center justify-center p-12">
                    <div class="mx-auto w-full max-w-[550px] bg-white">
                        <form>
                            <div class="mb-5">
                                <label for="name" class="mb-3 block text-base font-medium text-[#07074D]">
                                    Full Name
                                </label>
                                <input type="text" name="name" id="name" placeholder="Full Name"
                                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                            <div class="mb-5">
                                <label for="phone" class="mb-3 block text-base font-medium text-[#07074D]">
                                    Phone Number
                                </label>
                                <input type="text" name="phone" id="phone" placeholder="Enter your phone number"
                                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                            <div class="mb-5">
                                <label for="email" class="mb-3 block text-base font-medium text-[#07074D]">
                                    Email Address
                                </label>
                                <input type="email" name="email" id="email" placeholder="Enter your email"
                                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                

                            <div class="mb-5 pt-3">
                                <label class="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                                    Address Details
                                </label>
                                <div class="-mx-3 flex flex-wrap">
                                    <div class="w-full px-3">
                                        <div class="mb-5">
                                            <input type="text" name="area" id="area" placeholder="Enter area"
                                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <button
                                    class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">
                                    Book Appointment
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </dir>
            <Footer />
        </div>
    );
}

export default Profile;