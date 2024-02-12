import Image from 'next/image';

function AvatarGrid() {
    // Define an array of avatar image paths and their rotation styles for easy management
    const avatars = [
        { src: '/avatars/1.svg', rotation: 'rotate-6' },
        { src: '/avatars/2.svg', rotation: '-rotate-12' },
        { src: '/avatars/3.svg', rotation: '-rotate-12' },
        { src: '/avatars/4.svg', rotation: 'rotate-12' },
    ];

    return (
        <div className="grid grid-cols-4 gap-2 mt-12 mb-12">
            {avatars.map((avatar, index) => (
                <div key={index}>
                    <div className={`lg:ring-white/10 lg:ring-1 lg:p-2 lg:rounded-3xl from-white/20 hover:rotate-3 duration-500 ${avatar.rotation}`}>
                        {/* Using Next.js Image component for optimized images. Adjust width and height as needed. */}
                        <Image
                            src={avatar.src}
                            alt={`Avatar ${index + 1}`}
                            width={500} // Adjust based on your actual image size
                            height={100} // Adjust based on your actual image size
                            className="block ring-1 ring-white/10 rounded-2xl shadow-massive"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AvatarGrid;
