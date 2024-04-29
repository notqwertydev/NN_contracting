import { FiCheckCircle, FiAward, FiAlertTriangle, FiBox } from 'react-icons/fi'; // Import icons from react-icons

function AvatarGrid() {
    // Define an array of avatar image paths and their rotation styles for easy management
    const features = [
        {
            name: 'High End Service',
            description: 'Excellence in steel structural design execution',
            icon: FiCheckCircle // Icon component for the first feature
        },
        {
            name: 'Customer is King',
            description: 'Lifetime warranty and client support',
            icon: FiAward // Icon component for the second feature
        },
        {
            name: 'Against All Odds',
            description: 'Experts in executing the impossible',
            icon: FiAlertTriangle // Icon component for the third feature
        },
        {
            name: 'Innovative Solutions',
            description: 'Pioneering new methods in structural design',
            icon: FiBox // Icon component for the fourth feature
        }
    ];

    return (
        <div className="mx-auto max-w-7xl px-6 mb-12 lg:px-8">
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    {features.map((feature) => (
                        <div key={feature.name} className="flex items-center justify-start">
                            <div className="flex items-center justify-center h-16 w-16 bg-[#2b669c] rounded-lg text-white">
                                <feature.icon className="h-8 w-8" aria-hidden="true" />
                            </div>
                            <div className="ml-4">
                                <dt className="text-lg font-semibold text-[#2b669c]">{feature.name}</dt>
                                <dd className="mt-1 text-base text-white-600">{feature.description}</dd>
                            </div>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    );
}

export default AvatarGrid;
