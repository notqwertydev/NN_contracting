import Image from "next/image"
export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="flex items-center justify-center w-full h-full">
        {/* image in the center flashging scale up and down bouncing */}
        <Image
          src="/images/logo.png"
          alt="NN Engineering"
          width={200}
          height={200}
          className="animate-bounce"
        />
        </div>
    )
  }