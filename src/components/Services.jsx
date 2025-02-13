import React from "react";
import List from "../assets/Services";

const Services = () => {
    return (
        <section className="py-16 px-4 bg-gray-50">
            {/* Header Section */}
            <div className="max-w-3xl mx-auto text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    What I Can Do For You
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                    I offer a comprehensive range of development services to
                    bring your digital ideas to life. From crafting beautiful
                    front-end interfaces to building robust back-end solutions,
                    I'm here to help you create exceptional web experiences.
                </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-3 py-5 w-full gap-3.5">
                {List.map((service) => {
                    return (
                        <div
                            key={service.id}
                            className="flex flex-col border border-gray-200 shadow-lg p-6 gap-5 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white hover:bg-gray-50 items-center text-center"
                        >
                            <div className="p-4 rounded-full bg-blue-50 hover:bg-blue-100 transition-colors">
                                <service.icon className="text-4xl text-blue-600" />
                            </div>
                            <h2 className="text-xl font-bold text-gray-800">
                                {service.name}
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Services;
