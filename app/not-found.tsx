import Image from "next/image"
import Link from "next/link"
const NotFound  = () =>{

    return(
        <section>
            <div className="flex flex-col justify-center items-center py-40 space-y-3">
                <Image src="/logo-color.svg" width={300} height={300} alt="logo"/>
                <p className="text-sm ">This page is missing and might soon be created.</p>
                <Link href="/" className="cursor pointer bg-[#f78b00] text-white hover:bg-[#f78b00]/90 rounded-md py-1 px-4">Back to Home</Link>
            </div>

        </section>
    )

}
export default  NotFound